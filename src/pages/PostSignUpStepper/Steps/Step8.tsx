import { Button, Typography } from "@mui/material";
import { CheckBoxWrapper } from ".";

const restrictions = ["Vegan", "Vegetarian", "Gluten Free", "Lactose intolerant"];

const Step8 = () => {
	return (
		<>
			<Typography variant="h6">Now check any dietary restrictions that you have</Typography>
			{restrictions.map((restriction, index) => (
				<CheckBoxWrapper label={restriction} key={index} />
			))}
			<Button variant="contained">Continue</Button>
		</>
	);
};

export default Step8;
