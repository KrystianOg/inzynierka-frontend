import { Button, Typography } from "@mui/material";

const buttons = ["Less than 30 minutes", "30-60 minutes", "More than 1 hour"];

const Step6 = () => {
	return (
		<>
			<Typography variant="h6">How much time would you like to spend preparing a meal?</Typography>
			{buttons.map((button, index) => (
				<Button key={index} variant="outlined">
					{button}
				</Button>
			))}
		</>
	);
};

export default Step6;
