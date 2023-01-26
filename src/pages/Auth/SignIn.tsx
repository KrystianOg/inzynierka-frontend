import { Box, Typography, Container, Avatar, IconButton, CircularProgress, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { TextField, Button } from "components/Rounded";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInCredentials } from "types/auth";
import { useSnackbar } from "notistack";
import { useLazySignInQuery, useLazySignInWithOAuthQuery } from "app/supabase/auth";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
	const { t } = useTranslation();

	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	const { enqueueSnackbar } = useSnackbar();

	const [signIn, result] = useLazySignInQuery();
	const [signInWithOAuth, { error: oAuthError }] = useLazySignInWithOAuthQuery();

	const {
		register,
		formState: { errors },
		handleSubmit,
		setError,
	} = useForm<SignInCredentials>();

	const handleSignIn: SubmitHandler<SignInCredentials> = async credentials => {
		const { error, isSuccess } = await signIn(credentials);

		console.log(result);
		if (error)
			enqueueSnackbar(t("error.something_went_wrong"), {
				variant: "error",
			});
		if (isSuccess) navigate(from, { replace: true });
	};

	const handleGoogleSignIn = async () => {
		const { error, isSuccess } = await signInWithOAuth({
			provider: "google",
		});

		if (error)
			enqueueSnackbar(t("error.something_went_wrong"), {
				variant: "error",
			});
		if (isSuccess) navigate(from, { replace: true });
	};

	return (
		<Container component="main" maxWidth="xs">
			<Helmet>
				<title>{t("signin.title")}</title>
			</Helmet>
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "transparent" }}>{/* <MCarrot /> */}</Avatar>
				<Typography component="h1" variant="h5">
					{t("signin.title")}
				</Typography>
				<Box component="form" onSubmit={handleSubmit(handleSignIn)} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label={t("signin.email_address")}
						autoComplete="email"
						autoFocus
						{...register("email", {
							required: t("signin.email_required").toString(),
						})}
						helperText={errors.email && String(errors.email.message)}
						error={!!errors.email}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label={t("signin.password")}
						type="password"
						id="password"
						autoComplete="current-password"
						{...register("password", {
							required: t("signin.password_required").toString(),
						})}
						helperText={errors.password && String(errors.password.message)}
						error={!!errors.password}
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						{t("signin.title")}
					</Button>
				</Box>
				<p>{t("signin.or")}</p>
				<Button variant="contained" fullWidth onClick={handleGoogleSignIn}>
					{t("signin.with_google")}
				</Button>
				<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", margin: "0.5rem" }}>
					<Link href="/restore-password">{t("signin.forgot_password")}</Link>
					<Link href="/signup">{t("signin.no_account")}</Link>
				</Box>
				<IconButton
					color="primary"
					aria-label="close"
					sx={{ marginTop: "3rem" }}
					onClick={() => navigate(from, { replace: true })}
				>
					{false ? <CircularProgress /> : <FontAwesomeIcon icon={faTimes} />}
				</IconButton>
			</Box>
		</Container>
	);
};

export default SignIn;
