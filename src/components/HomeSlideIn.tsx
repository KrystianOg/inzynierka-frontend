import { styled, Box } from "@mui/material";
import "./home-slide-in.css";

// const HomeSlideInContainer = styled(Box)(({ theme }) => ({
// 	overflow: "hidden",
// 	position: "absolute",
// 	bottom: 0,
// 	left: 0,
// 	right: 0,
// 	height: "150px",
// 	clipPath: "polygon(\
// 		50% 0,\
// 		100% 50%,\
// 		100% 100%,\
// 		0 100%,\
// 		0 50%\
// 	)",
// 	backgroundColor: theme.palette.background.default,
// }));

const HomeSlideIn = () => {
	return (
		<div className="home-slide-in-container">
			<div className="pentagon-middle" />
			<div className="pentagon-front" />
		</div>
	);
};

export default HomeSlideIn;
