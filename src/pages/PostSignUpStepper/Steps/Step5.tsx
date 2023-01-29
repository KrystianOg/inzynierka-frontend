import { Button, Typography } from "@mui/material";

const buttons = ["Two", "Three", "Four", "Five"];

const Step5 = () => {
	return (
		<>
			<Typography variant="h6">How many meals do you usually eat?</Typography>

			{buttons.map((button, index) => (
				<Button key={index} variant="outlined">
					{button}
				</Button>
			))}
		</>
	);
};

export default Step5;
