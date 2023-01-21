import { Stack, Button, Link } from "@mui/material";
import avocadoLight404 from "assets/animations/404-avocado.json";
import { StyledLottie } from "components/index";
import { useLocation } from "react-router-dom";

const NotFound = () => {
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	return (
		<Stack
			component="main"
			maxWidth="xs"
			sx={{ height: "100vh", width: "100vw" }}
			alignItems="center"
			justifyContent="center"
		>
			<StyledLottie animationData={avocadoLight404} />

			<Link href={from}>
				<Button variant="contained" sx={{ borderRadius: "50px" }}>
					GO BACK
				</Button>
			</Link>
		</Stack>
	);
};

export default NotFound;
