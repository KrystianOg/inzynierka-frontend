import { TextField, Grid, Pagination, Skeleton } from "@mui/material";
import { BottomNav, Center } from "components";
import { useSearchRecipesQuery, usePrefetch } from "app/spoonacular/recipesApi";
import { useCallback, useRef, useState } from "react";
import { useGetProfileQuery } from "app/supabase/user";
import useAuth from "hooks/useAuth";
import { Paginate, RecipeSearchParams } from "app/spoonacular/types";
import removeEmpty from "utils/removeEmpty";
import RecipeCard from "./RecipeCard";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { skipToken } from "@reduxjs/toolkit/dist/query";

type GetRecipeQueryParams = RecipeSearchParams & Paginate;

const Recipes = () => {
	const { t } = useTranslation();
	const queryRef = useRef<HTMLInputElement>(null);
	const { user } = useAuth();
	const { data: profile } = useGetProfileQuery(user?.id ?? skipToken);
	const prefetchRecipes = usePrefetch("searchRecipes");
	const OFFSET = 36;
	const [page, setPage] = useState(1);

	const getRecipeQuery = (params?: Partial<GetRecipeQueryParams>): GetRecipeQueryParams => {
		return {
			...removeEmpty<RecipeSearchParams>({
				cuisine: profile?.cuisine,
				excludeCuisine: profile?.exclude_cuisine,
				diet: profile?.diet,
				maxReadyTime: profile?.max_ready_time,
				minCarbs: profile?.min_carbs,
				maxCarbs: profile?.max_carbs,
				minProtein: profile?.min_protein,
				maxProtein: profile?.max_protein,
				minCalories: profile?.min_calories,
				maxCalories: profile?.max_calories,
				minSugar: profile?.min_sugar,
				maxSugar: profile?.max_sugar,
			}),
			query: queryRef?.current?.value ?? "",
			offset: OFFSET * (page - 1),
			number: OFFSET,
			...params,
		};
	};

	const { data: recipes, refetch, isFetching, isLoading } = useSearchRecipesQuery(getRecipeQuery());

	const prefetchNextPage = useCallback(
		(page: number) => {
			prefetchRecipes(
				getRecipeQuery({
					offset: OFFSET * (page - 1),
				})
			);
		},
		[prefetchRecipes, page]
	);

	const handleKeyDown = (key: string) => {
		if (key === "Enter" && !!queryRef?.current?.value) {
			refetch();
		}
	};

	const handlePageChange = (p: number) => {
		setPage(p);
		window.scrollTo(0, 0);
	};

	return (
		<>
			<Helmet title="Recipes | Diet Genius" />

			<TextField
				onKeyDown={e => handleKeyDown(e.key)}
				label={t("recipes.search")}
				inputRef={queryRef}
				InputProps={{
					endAdornment: (
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							size="lg"
							color="primary"
							style={{
								cursor: "pointer",
							}}
							onClick={() => handleKeyDown("Enter")}
						/>
					),
				}}
				sx={{
					float: "right",
					mb: 2,
					width: {
						xs: "100%",
						sm: "66%",
						md: "50%",
					},
					textTransform: "capitalize",
				}}
			/>
			{recipes && (
				<>
					<Grid container spacing={2}>
						{recipes?.results.map((recipe, index) => (
							<Grid item xs={6} sm={4} md={3} key={index}>
								{isFetching || isLoading ? (
									<Skeleton variant="rounded" animation="wave" />
								) : (
									<RecipeCard recipe={recipe} />
								)}
							</Grid>
						))}
					</Grid>
					<Center>
						<Pagination
							count={Math.ceil(recipes?.totalResults / OFFSET)}
							sx={{ marginTop: "1rem" }}
							color="primary"
							page={page}
							onChange={(_, p) => handlePageChange(p)}
							onMouseOver={e => {
								const target = e.target as HTMLButtonElement;
								if (target?.innerText) {
									prefetchNextPage(+target.innerText);
								}
							}}
						/>
					</Center>
				</>
			)}

			<BottomNav />
		</>
	);
};

export default Recipes;
