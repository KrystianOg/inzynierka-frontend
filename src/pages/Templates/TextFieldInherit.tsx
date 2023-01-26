import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faLock, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";
import { UseFormRegister } from "react-hook-form";
import { AddTemplate } from "types/templates";

const TextFieldInherit = ({
	register,
	...props
}: TextFieldProps & { register?: UseFormRegister<AddTemplate>; name: keyof AddTemplate }) => {
	const theme = useTheme();
	const [disabled, setDisabled] = useState(true);

	return (
		<TextField
			variant="outlined"
			disabled={disabled}
			{...props}
			InputProps={{
				endAdornment: (
					<InputAdornment
						position="end"
						style={{
							display: "flex",
							flexDirection: "row",
							gap: "1rem",
						}}
					>
						<FontAwesomeIcon
							icon={disabled ? faPenToSquare : faLock}
							size="lg"
							style={{
								color: theme.palette.primary.main,
								cursor: "pointer",
							}}
							onClick={() => setDisabled(prev => !prev)}
						/>
					</InputAdornment>
				),
			}}
			inputProps={{
				min: 0,
				...props.inputProps,
			}}
			{...register!(props.name, {
				required: props.required,
			})}
		/>
	);
};

export default TextFieldInherit;
