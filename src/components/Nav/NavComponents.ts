import {
	styled,
	IconButton as MIconButton,
	Fab as MFab,
	Drawer as MDrawer,
	BottomNavigation,
	BottomNavigationAction,
	Link
} from "@mui/material";

export const DrawerNavLink = styled(Link)(({ theme }) => ({
	textAlign: "center",
	fontSize: "2rem",
	letterSpacing: "0.08rem",
	fontWeight: "500",
	textDecoration: "none",
	color: theme.palette.primary.main,
	height: "56px",
	textTransform: "uppercase",

	"&:hover": {
		color: theme.palette.secondary.dark,
		transition: "color 0.3s ease-in-out",
	},
}))

export const NavLink = styled(Link)(({ theme }) => ({
	textTransform: "capitalize",
	textDecoration: "none",

	"&:hover": {
		color: theme.palette.secondary.dark,
		transition: "color 0.3s ease-in-out",
	},
}))

export const IconButton = styled(MIconButton)(({ theme }) => ({
	color: theme.palette.primary.main,
	marginTop: "3rem",
	fontSize: "3rem",
	margin: "16px auto",
	"&:hover": {
		color: theme.palette.secondary.dark,
		transition: "color 0.3s ease-in-out",
	},
}))

export const Fab = styled(MFab)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	position: "fixed",
	top: 16,
	right: 16,
	color: "white",
	zIndex: 2,
	"&:hover": {
		transition: "all 0.3s ease-in-out",
		backgroundColor: theme.palette.secondary.dark,
	},
}))

export const Fib = styled(MIconButton)(({ theme }) => ({
	position: "fixed",
	top: 16,
	right: 16,
	zIndex: 2,
	color: theme.palette.primary.main,
}))

export const Drawer = styled(MDrawer)(() => ({
	"& .MuiDrawer-paper": {
		boxSizing: "border-box",
		width: "100vw",
		boxShadow: "none",
		backgroundImage: "none"
	},
}))

export const StickBottomNavigation = styled(BottomNavigation)`
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100vw;
    left: 0;
    right: 0;

    @media (min-width: 600px) {
        display: none;
    }
`

export const StyledBottomNA = styled(BottomNavigationAction)(({ theme }) => ({
	color: theme.palette.primary.main,
}))
