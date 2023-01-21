import { TextField, Grid, Pagination } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { BottomNav, Center } from "components";
import { useSearchRecipesQuery } from "app/spoonacular/recipesApi";
import { useRef, useState } from "react";
import { useGetProfileQuery } from "app/supabase/user";
import useAuth from "hooks/useAuth";
import { RecipeSearchParams } from "app/spoonacular/types";
import removeEmpty from "utils/removeEmpty";

//TODO remove static
// import search_recipes from "static/search_recipes.json";
import RecipeCard from "./RecipeCard";
import Layout from "components/Layout";

const Recipes = () => {
	const queryRef = useRef<HTMLInputElement>(null);
	const { user } = useAuth();
	const { data: profile } = useGetProfileQuery(user?.id!);
	const OFFSET = 36;
	const [page, setPage] = useState(1);
	const [masonryColumns, setMasonryColumns] = useState(2);
	//TODO handle fetching & loading states

	const {
		data: recipes,
		refetch,
		isFetching,
		isLoading,
	} = useSearchRecipesQuery({
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
	});
	// const recipes = search_recipes as RecipeSearchItem[];

	const handleKeyDown = (key: string) => {
		if (key === "Enter" && !!queryRef?.current?.value) {
			refetch();
		}
	};

	const handlePageChange = (p: number) => {
		setPage(p);
	};

	return (
		<Layout>
			<TextField
				onKeyDown={e => handleKeyDown(e.key)}
				label="Search Recipes"
				inputRef={queryRef}
				fullWidth
				sx={{ mb: 2 }}
			/>
			{recipes && (
				<>
					<Masonry columns={2} spacing={2}>
						{recipes?.results.map((recipe, index) => (
							<Grid item xs={6} sm={4} md={3} key={index}>
								<RecipeCard recipe={recipe} />
							</Grid>
						))}
					</Masonry>
					<Center>
						<Pagination
							count={Math.ceil(recipes?.totalResults / OFFSET)}
							color="primary"
							page={page}
							onChange={(_, p) => handlePageChange(p)}
						/>
					</Center>
				</>
			)}

			<BottomNav />
		</Layout>
	);
};

export default Recipes;
