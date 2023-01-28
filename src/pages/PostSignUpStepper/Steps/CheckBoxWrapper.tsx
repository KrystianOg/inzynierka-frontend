import { useState } from "react";
import { Button, Checkbox } from "@mui/material";

type CheckBoxProps = {
	label: string;
};

const CheckBoxWrapper = ({ label }: CheckBoxProps) => {
	const [checked, setChecked] = useState(false);

	const toggleChecked = () => {
		setChecked((prev: boolean) => !prev);
	};

	return (
		<Button variant="outlined" onClick={toggleChecked}>
			<Checkbox checked={checked} sx={{ borderRadius: "10px" }} />
			{label}
		</Button>
	);
};

export default CheckBoxWrapper;
