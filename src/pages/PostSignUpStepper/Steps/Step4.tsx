import { Button, InputAdornment, TextField, Typography } from "@mui/material";

const buttons = [
	"Little or none",
	"Light exercise/sports 1-3 days/week",
	"Moderate exercise/sports 3-5 days/week",
	"Exercise/sports 6-7 days a week",
	"Hard exercise/sports 6-7 days a week",
];

const Step4 = () => {
	return (
		<>
			<Typography variant="h6">How often do you workout?</Typography>

			{buttons.map((button, index) => (
				<Button key={index} variant="outlined">
					{button}
				</Button>
			))}
		</>
	);
};

export default Step4;
