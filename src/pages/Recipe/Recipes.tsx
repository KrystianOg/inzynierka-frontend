import { TextField, Grid, Pagination, Skeleton } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { BottomNav, Center } from "components";
import { useSearchRecipesQuery, usePrefetch } from "app/spoonacular/recipesApi";
import { useCallback, useRef, useState } from "react";
import { useGetProfileQuery } from "app/supabase/user";
import useAuth from "hooks/useAuth";
import { Paginate, RecipeSearchParams } from "app/spoonacular/types";
import removeEmpty from "utils/removeEmpty";

//TODO remove static
// import search_recipes from "static/search_recipes.json";
import RecipeCard from "./RecipeCard";
import Layout from "components/Layout";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Recipes = () => {
	const queryRef = useRef<HTMLInputElement>(null);
	const { user } = useAuth();
	const { data: profile } = useGetProfileQuery(user?.id!);
	const prefetchRecipes = usePrefetch("searchRecipes");
	const OFFSET = 36;
	const [page, setPage] = useState(1);

	//TODO handle fetching & loading states
	const getRecipeQuery = (params?: Partial<RecipeSearchParams & Paginate>): RecipeSearchParams & Paginate => {
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
	// const recipes = search_recipes as RecipeSearchItem[];

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
		<Layout>
			<Helmet title="Recipes | Diet Genius" />

			<TextField
				onKeyDown={e => handleKeyDown(e.key)}
				label="Search Recipes"
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
		</Layout>
	);
};

export default Recipes;
