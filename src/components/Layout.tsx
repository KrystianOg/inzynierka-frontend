import Container from "@mui/material/Container";
import BottomNav from "./Nav/BottomNav";
import DesktopNav from "./Nav/DesktopNav";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<DesktopNav />
			<Container component="main" maxWidth="lg" sx={{ mt: "56px", mb: { xs: "64px", sm: "0" }, padding: "1rem" }}>
				{children}
			</Container>
			<Footer />

			<BottomNav />
		</>
	);
};

export default Layout;
