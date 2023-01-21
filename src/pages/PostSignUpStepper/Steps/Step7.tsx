import { Button, Typography } from "@mui/material";
import { CheckBoxWrapper } from ".";

const appliances = ["Blender", "Oven", "Microwave", "Stovetop", "Instant Pot"];

const Step7 = () => {
	return (
		<>
			<Typography variant="h6">Now select your kitchen appliances:</Typography>
			{appliances.map((appliance, index) => (
				<CheckBoxWrapper label={appliance} key={index} />
			))}
			<Button variant="contained">Continue</Button>
		</>
	);
};

export default Step7;
