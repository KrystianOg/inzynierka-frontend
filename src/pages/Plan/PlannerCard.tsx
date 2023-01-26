import Card from "@mui/material/Card";
import type { Meal } from "../../types/planning";

type Props = {
	meal: Meal;
};

const PlannerCard: React.FC<Props> = ({ meal }) => {
	return (
		<Card>
			{meal.readyInMinutes}
			{meal.servings}
			{meal.sourceUrl}
		</Card>
	);
};

export default PlannerCard;
