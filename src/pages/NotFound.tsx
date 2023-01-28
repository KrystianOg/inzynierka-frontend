import { Stack, Button, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import avocadoLight404 from "assets/animations/404-avocado.json";
import { StyledLottie } from "components/index";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const NotFound = () => {
	const { t } = useTranslation();
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
			<Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
				{t("404.description")}
			</Typography>
			<StyledLottie animationData={avocadoLight404} />

			<Link href={from}>
				<Button variant="contained" sx={{ borderRadius: "50px" }}>
					{t("404.go_back")}
				</Button>
			</Link>
		</Stack>
	);
};

export default NotFound;
