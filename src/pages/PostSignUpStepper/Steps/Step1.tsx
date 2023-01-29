import { Button, Typography } from "@mui/material";
import { Gender } from "types/enum";

const Step1 = () => {
	const genderMap = Object.values(Gender) as Array<keyof typeof Gender>;
	return (
		<>
			<Typography variant="h6">Select your gender</Typography>

			{genderMap.map((gender, index) => (
				<Button key={index} variant="outlined">
					{gender}
				</Button>
			))}
		</>
	);
};

export default Step1;
