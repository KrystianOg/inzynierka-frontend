import { InputAdornment, TextField } from "@mui/material";

const Step2 = () => {
	return (
		<>
			<TextField
				label="Height (cm)"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">cm</InputAdornment>,
					inputProps: { min: 140, max: 220 },
				}}
				autoComplete="off"
				variant="outlined"
			/>
			<TextField
				label="Age (years)"
				type="number"
				InputProps={{
					inputProps: { min: 18, max: 60 },
				}}
				autoComplete="off"
				variant="outlined"
			/>
			<TextField
				label="Weight (kg)"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					inputProps: { min: 40, max: 145 },
				}}
				variant="outlined"
				autoComplete="off"
			/>
		</>
	);
};

export default Step2;
