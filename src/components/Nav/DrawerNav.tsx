import { Stack } from "@mui/material";
import { DrawerNavLink, IconButton, Drawer } from "./NavComponents";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import { useLazySignOutQuery } from "app/supabase/auth";
import { AuthError } from "@supabase/supabase-js";
import useAuth from "hooks/useAuth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface DrawerNavProps {
	open: boolean;
	setOpen: (value: boolean) => void;
}

const DrawerNav = ({ open, setOpen }: DrawerNavProps) => {
	const { enqueueSnackbar } = useSnackbar();

	const [signOut, { isFetching }] = useLazySignOutQuery();

	const { isSession } = useAuth();

	const handleSignout = async () => {
		const { error, isSuccess } = await signOut();
		if (error instanceof AuthError)
			enqueueSnackbar(error.message, {
				variant: "error",
			});
		if (isSuccess) setOpen(false);
	};

	return (
		<Drawer
			variant="temporary"
			anchor="right"
			open={open}
			onClose={() => setOpen(false)}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
		>
			<Stack height="100%" alignItems="stretch" justifyContent="center">
				{isSession ? (
					<>
						<DrawerNavLink href="/plan">plan</DrawerNavLink>
						<DrawerNavLink href="/templates">templates</DrawerNavLink>
						<DrawerNavLink href="/recipes">recipes</DrawerNavLink>
						<DrawerNavLink href="/profile">profile</DrawerNavLink>
						<DrawerNavLink href="/" onClick={handleSignout}>
							{isFetching ? <CircularProgress /> : "SIGN OUT"}
						</DrawerNavLink>
					</>
				) : (
					<>
						<DrawerNavLink href="/signin">sign in</DrawerNavLink>
						<DrawerNavLink href="/signup">sign up</DrawerNavLink>
					</>
				)}
				<IconButton onClick={() => setOpen(false)}>
					<FontAwesomeIcon icon={faXmark} />
				</IconButton>
			</Stack>
		</Drawer>
	);
};

export default DrawerNav;
