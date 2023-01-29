import { Button, CardContent, CardHeader, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useTranslation } from "react-i18next";
import type { Meal } from "../../types/planning";

interface PlannerCardProps {
	meal: Meal;
}

const PlannerCard = ({ meal }: PlannerCardProps) => {
	const { t } = useTranslation();
	const navigateToRecipe = () => {
		window.open(meal.sourceUrl, "_blank");
	};
	return (
		<Card>
			<CardHeader
				title={
					<Typography component="h4" variant="h6" sx={{ fontWeight: "bold" }}>
						{meal.title}
					</Typography>
				}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
				}}
			>
				<Typography>
					{t("planner.card.max_ready_time", {
						time: meal.readyInMinutes,
					})}
				</Typography>
				<Typography>
					{t("planner.card.servings")} <span>{meal.servings}</span>
				</Typography>
				<Button variant="outlined" color="secondary" onClick={navigateToRecipe} fullWidth>
					{t("planner.card.navigate_to_recipe")}
				</Button>
			</CardContent>
		</Card>
	);
};

export default PlannerCard;
