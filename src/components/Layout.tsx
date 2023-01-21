import Container from "@mui/material/Container";
import BottomNav from "./Nav/BottomNav";
import DrawerNav from "./Nav/DrawerNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<DrawerNav />
			<Container component="main" maxWidth="lg" sx={{ mb: "64px", mt: "64px" }}>
				{children}
			</Container>
			<BottomNav />
		</>
	);
};

export default Layout;
