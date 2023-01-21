import { styled } from "@mui/material";
import Lottie from "lottie-react";
import finish from "assets/animations/finish.json";

const StyledLottie = styled(Lottie)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	maxWidth: "150px",
	aspectRatio: "1/1",
	options: {
		autoplay: true,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	},
	margin: "25px auto",
}));

const FinishAnim = () => {
	return <StyledLottie animationData={finish} loop={false} />;
};

export default FinishAnim;
