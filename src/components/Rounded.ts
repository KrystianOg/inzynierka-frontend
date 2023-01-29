import { TextField as MTextField, styled, Button as MButton } from '@mui/material'

export const TextField = styled(MTextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "50px",
		borderWidth: 2,
	},
})

export const Button = styled(MButton)({
	borderRadius: "50px",
})