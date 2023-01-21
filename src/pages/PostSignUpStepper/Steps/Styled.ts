import { styled, Box } from '@mui/material'

export const BoxOutlined = styled(Box)(({ theme }) => ({
	border: `1px solid ${theme.palette.primary.main}88`,
	borderRadius: "16px",
	padding: "3px 15px",
	color: theme.palette.primary.main,

    "svg": {
        color: theme.palette.primary.dark,
    }
}));