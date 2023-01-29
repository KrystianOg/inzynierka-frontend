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
import { useTranslation } from "react-i18next";

const DesktopNav = () => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const { isSession } = useAuth();
	const [signOut] = useLazySignOutQuery();
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
									<NavLink href="/plan">{t("navigation.plan")}</NavLink>
									<NavLink href="/templates">{t("navigation.templates")}</NavLink>
									<NavLink href="/recipes">{t("navigation.recipes")}</NavLink>
									<NavLink href="/profile">{t("navigation.profile")}</NavLink>
									<NavLink href="/" onClick={handleSignOut}>
										{t("navigation.signout")}
									</NavLink>
								</>
							) : (
								<>
									<NavLink href="/signin">{t("navigation.signin")}</NavLink>
									<NavLink href="/signup">{t("navigation.signup")}</NavLink>
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
