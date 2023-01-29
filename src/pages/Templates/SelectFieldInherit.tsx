import { InputAdornment, MenuItem, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";

const TextFieldInherit = ({ options, ...props }: TextFieldProps & { options?: string[] | number[] }) => {
	const theme = useTheme();
	const [disabled, setDisabled] = useState(true);

	return (
		<TextField
			select
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
							marginRight: "1.5rem",
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
		>
			{options?.map(option => (
				<MenuItem key={option} value={option}>
					{option}
				</MenuItem>
			))}
		</TextField>
	);
};

export default TextFieldInherit;
