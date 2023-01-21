import { Button, InputAdornment, TextField, Typography } from "@mui/material";

const Step3 = () => {
	return (
		<>
			<Typography variant="h6">What is your desired weight?</Typography>
			<TextField
				label="Weight (kg)"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>,
				}}
				variant="outlined"
			/>
			<Button variant="contained">Continue</Button>
		</>
	);
};

export default Step3;
