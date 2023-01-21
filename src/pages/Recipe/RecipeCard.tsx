import { Card as MUICard, Checkbox, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";
import { useGetProfileQuery, useUpdateProfileMutation } from "app/supabase/user";
import useAuth from "hooks/useAuth";
import { RecipeSearchItem } from "app/spoonacular/types";
import { useSnackbar } from "notistack";

interface RecipeCardProps {
	recipe: RecipeSearchItem;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
	const { user } = useAuth();
	const [updateProfile] = useUpdateProfileMutation();
	const { data: profile } = useGetProfileQuery(user?.id!);
	const { enqueueSnackbar } = useSnackbar();

	const handleAddToFavorites = async () => {
		await updateProfile({ id: user?.id!, recipes: [...(profile?.recipes ?? []), recipe.id] });
	};

	const handleShare = () => {
		navigator.clipboard.writeText(`Search ${recipe.id}`);
		enqueueSnackbar("Copied to clipboard", { variant: "success" });
	};

	return (
		<MUICard>
			<CardHeader title={recipe.title} />
			<CardMedia component="img" height="194" image={recipe.image} alt="recipe image" />
			<CardContent />
			<CardActions disableSpacing>
				<Checkbox
					aria-label="add to favorites"
					onClick={handleAddToFavorites}
					icon={<Favorite />}
					checkedIcon={<Favorite color="primary" />}
				/>
				<IconButton aria-label="share" onClick={handleShare}>
					<Share />
				</IconButton>
			</CardActions>
		</MUICard>
	);
};

export default RecipeCard;
