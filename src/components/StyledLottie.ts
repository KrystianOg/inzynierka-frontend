import { styled } from '@mui/material';
import Lottie from 'lottie-react'

export default styled(Lottie)(({ theme }) => ({
	width: "100%",
	aspectRatio: "1/1",
	options: {
		loop: true,
		autoplay: true,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	},
	backgroundColor: theme.palette.background.default,
}));
