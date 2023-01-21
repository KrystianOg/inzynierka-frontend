import { useState } from "react";
import { Stack } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { NavLink, IconButton, Fib, Drawer } from "./NavComponents";
import { useWindowSize } from "usehooks-ts";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import { useLazySignOutQuery } from "app/supabase/auth";
import { AuthError } from "@supabase/supabase-js";
import useAuth from "hooks/useAuth";

const DrawerNav = () => {
	const [active, setActive] = useState(false);
	const { width } = useWindowSize();
	const { enqueueSnackbar } = useSnackbar();

	const [signOut, { isFetching }] = useLazySignOutQuery();

	const { isSession } = useAuth();

	const handleSignout = async () => {
		const { error, isSuccess } = await signOut();
		if (error instanceof AuthError)
			enqueueSnackbar(error.message, {
				variant: "error",
			});
		if (isSuccess) setActive(false);
	};

	if (width < 600)
		return (
			<>
				{/* TODO */}

				<Fib onClick={() => setActive(!active)}>
					<Menu sx={{ height: "42px", width: "42px" }} />
				</Fib>

				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					anchor="right"
					open={active}
					onClose={() => setActive(false)}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					<Stack height="100%" alignItems="stretch" justifyContent="center">
						{isSession ? (
							<>
								<NavLink to="/planner">plan</NavLink>
								<NavLink to="/calendar">calendar</NavLink>
								<NavLink to="/recipes">recipes</NavLink>
								<NavLink to="/profile">profile</NavLink>
								<NavLink to="/" onClick={handleSignout}>
									{isFetching ? <CircularProgress /> : "SIGN OUT"}
								</NavLink>
							</>
						) : (
							<>
								<NavLink to="/signin">sign in</NavLink>
								<NavLink to="/signup">sign up</NavLink>
							</>
						)}
						<IconButton onClick={() => setActive(false)}>
							<Close fontSize="inherit" />
						</IconButton>
					</Stack>
				</Drawer>
			</>
		);

	return null;
};

export default DrawerNav;
