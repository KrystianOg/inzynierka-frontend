import { faBars, faCarrot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Box, Container, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { AuthError } from "@supabase/supabase-js";
import { useLazySignOutQuery } from "app/supabase/auth";
import useAuth from "hooks/useAuth";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DrawerNav from "./DrawerNav";
import { NavLink } from "./NavComponents";
import { useDarkMode } from "usehooks-ts";

const DesktopNav = () => {
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const { isSession } = useAuth();
	const [signOut, { isFetching }] = useLazySignOutQuery();
	const { enqueueSnackbar } = useSnackbar();
	const { isDarkMode } = useDarkMode();

	const handleSignOut = async () => {
		const { error, isSuccess } = await signOut();
		if (error instanceof AuthError)
			enqueueSnackbar(error.message, {
				variant: "error",
			});
		if (isSuccess) setOpen(false);
	};

	return (
		<>
			<DrawerNav open={open} setOpen={setOpen} />
			<AppBar
				sx={{
					backdropFilter: "blur(8px)",
					backgroundColor: isDarkMode ? "hsl(154, 96%, 3%, 0.85)" : "hsl(25, 100%, 83%, 0.3)",
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<IconButton size="medium" component="a" onClick={() => navigate("/")}>
							<FontAwesomeIcon
								icon={faCarrot}
								size="xl"
								style={{
									color: theme.palette.primary.main,
								}}
							/>
						</IconButton>

						<Typography
							variant="h6"
							noWrap
							component="h3"
							color="primary"
							sx={{
								display: { xs: "none", sm: "flex" },
								textTransform: "capitalize",
								ml: "1rem",
								cursor: "default",
							}}
						>
							{location.pathname.replace("/", "")}
						</Typography>

						<Box sx={{ flexGrow: 1 }} />
						<Box
							sx={{
								display: { xs: "none", sm: "flex" },
								mr: "20px",
								gap: {
									sm: "1rem",
									md: "2rem",
								},
							}}
						>
							{isSession ? (
								<>
									<NavLink href="/plan">plan</NavLink>
									<NavLink href="/templates">templates</NavLink>
									<NavLink href="/recipes">recipes</NavLink>
									<NavLink href="/profile">profile</NavLink>
									<NavLink href="/" onClick={handleSignOut}>
										sign out
									</NavLink>
								</>
							) : (
								<>
									<NavLink href="/signin">sign in</NavLink>
									<NavLink href="/signup">sign up</NavLink>
								</>
							)}
						</Box>

						<IconButton
							size="medium"
							component="a"
							onClick={() => setOpen(true)}
							sx={{
								flexGrow: 0,
								display: { xs: "flex", md: "none" },
							}}
						>
							<FontAwesomeIcon
								icon={faBars}
								size="lg"
								style={{
									color: theme.palette.primary.main,
								}}
							/>
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default DesktopNav;
