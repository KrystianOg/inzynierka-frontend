import { Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";
import DesktopNav from "./Nav/DesktopNav";
import { Container } from "@mui/material";
import BottomNav from "./Nav/BottomNav";

const PrivateWrapper = () => {
	const { isSession } = useAuth();
	return isSession ? (
		<>
			<DesktopNav />
			<Container component="main" maxWidth="lg" sx={{ mt: "56px", mb: { xs: "64px", sm: "0" }, padding: "1rem" }}>
				<Outlet />
			</Container>
			{/* <Footer /> */}
			<BottomNav />
		</>
	) : (
		<Navigate to="/signin" />
	);
};

export default PrivateWrapper;
