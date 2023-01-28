import {
	Card as MUICard,
	Checkbox,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Box,
} from "@mui/material";
import { useGetProfileQuery, useUpdateProfileMutation } from "app/supabase/user";
import useAuth from "hooks/useAuth";
import { RecipeSearchItem } from "app/spoonacular/types";
import { useSnackbar } from "notistack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";

const RecipeCard = ({ recipe }: { recipe: RecipeSearchItem }) => {
	const { user } = useAuth();
	const [updateProfile] = useUpdateProfileMutation();
	const { data: profile } = useGetProfileQuery(user?.id!);
	const { enqueueSnackbar } = useSnackbar();
	const theme = useTheme();

	const handleAddToFavorites = async () => {
		if (!profile?.recipes?.includes(recipe?.id)) {
			await updateProfile({ id: user?.id!, recipes: [...(profile?.recipes ?? []), recipe.id] });
		} else {
			await updateProfile({
				id: user?.id!,
				recipes: profile?.recipes?.filter(r => r !== recipe?.id),
			});
		}
	};

	const handleShare = () => {
		navigator.clipboard.writeText(`Search ${recipe.id}`);
		enqueueSnackbar("Copied to clipboard", { variant: "success" });
	};

	return (
		<MUICard
			sx={{
				transition: "all .2s ease-in-out",
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow: 3,
					cursor: "pointer",
				},
			}}
		>
			<CardHeader title={recipe.title} />
			<Box sx={{ display: "flex", flexGrow: 1 }} />
			<CardMedia component="img" height="194" image={recipe.image} alt="recipe image" />
			<CardContent />
			<CardActions disableSpacing>
				<Checkbox
					aria-label="add to favorites"
					onClick={handleAddToFavorites}
					icon={
						<FontAwesomeIcon
							icon={faHeart}
							size="lg"
							style={{
								color: "darkgray",
							}}
						/>
					}
					checkedIcon={
						<FontAwesomeIcon
							icon={faHeart}
							size="lg"
							style={{
								color: theme.palette.primary.main,
							}}
						/>
					}
					checked={profile?.recipes?.includes(recipe?.id)}
				/>
				<IconButton aria-label="share" onClick={handleShare}>
					<FontAwesomeIcon icon={faShare} />
				</IconButton>
			</CardActions>
		</MUICard>
	);
};

export default RecipeCard;
