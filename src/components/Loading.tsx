import { Container } from "@mui/material";
import { StyledLottie, Delayed } from "components";
import carrot from "assets/animations/carrot.json";

const Loading = () => {
	return (
		<Container
			component="main"
			maxWidth="xs"
			sx={{
				width: "100vw",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Delayed>
				<StyledLottie animationData={carrot} />
			</Delayed>
		</Container>
	);
};

export default Loading;
