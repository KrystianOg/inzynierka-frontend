import { Box, Typography, Container, Grid, Avatar, IconButton, CircularProgress, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { TextField, Button } from "components/Rounded";
import { SignUpCredentials } from "types/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useLazySignUpQuery } from "app/supabase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const SignUp = () => {
	const { t } = useTranslation();
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	// const [fetching, setFetching] = useState<boolean>(false);
	const { enqueueSnackbar } = useSnackbar();
	const {
		register,
		formState: { errors },
		watch,
		handleSubmit,
		setError,
	} = useForm<SignUpCredentials>();

	const [signUp, { isFetching, error }] = useLazySignUpQuery();

	const onSubmit: SubmitHandler<SignUpCredentials> = async ({ email, password }) => {
		if (Object.keys(errors).length > 0) return;

		signUp({ email, password })
			.then(() => {
				if (error)
					enqueueSnackbar(t("error.something_went_wrong"), {
						variant: "error",
					});
				else navigate("/signin", { replace: true });
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<Container component="main" maxWidth="xs">
			<Helmet>
				<title>{t("signup.title")}</title>
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
				<Typography
					component="h1"
					variant="h5"
					sx={{
						textTransform: "capitalize",
					}}
				>
					{t("signup.title")}
				</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label={t("signup.email_address")}
						autoComplete="email"
						autoFocus
						{...register("email", {
							required: t("signup.error.email_required").toString(),
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

								message: t("signup.error.invalid_email").toString(),
							},
						})}
						helperText={errors.email && String(errors.email.message)}
						error={!!errors.email}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label={t("signup.password")}
						type="password"
						id="password"
						autoComplete="current-password"
						{...register("password", {
							required: t("signup.error.password_required").toString(),
							minLength: {
								value: 8,
								message: t("signup.error.password_min_length").toString(),
							},
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
								message: t("signup.error.password_pattern").toString(),
							},
						})}
						helperText={errors.password && String(errors.password.message)}
						error={!!errors.password}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Repeat password"
						type="password"
						id="repeat-password"
						autoComplete="new-password"
						{...register("password2", {
							required: t("signup.error.password_confirm").toString(),
							validate: (value: string) =>
								value === watch("password") || t("signup.error.password_do_not_match").toString(),
						})}
						helperText={errors.password2 && String(errors.password2.message)}
						error={!!errors.password2}
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						{isFetching ? <CircularProgress /> : t("signup.title")}
					</Button>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", margin: "0.5rem" }}>
					<Link href="/signin">{t("signup.already_a_member")}</Link>
				</Box>
				<IconButton
					className="mobile-visible"
					color="primary"
					aria-label="close"
					sx={{ margin: "3rem", padding: "10px" }}
					onClick={() => navigate(from, { replace: true })}
				>
					<FontAwesomeIcon icon={faTimes} />
				</IconButton>
			</Box>
		</Container>
	);
};

export default SignUp;
