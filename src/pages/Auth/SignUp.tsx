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

const SignUp = () => {
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

		signUp({ email, password }).then(() => {
			if (error)
				enqueueSnackbar("Some error occurred", {
					variant: "error",
				});
			else navigate(from, { replace: true });
		});
	};

	return (
		<Container component="main" maxWidth="xs">
			<Helmet>
				<title>Sign Up</title>
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
					Sign Up
				</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						autoComplete="email"
						autoFocus
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

								message: "Invalid email",
							},
						})}
						helperText={errors.email && String(errors.email.message)}
						error={!!errors.email}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
								message:
									"Password must contain at least one uppercase letter, one lowercase letter, and one number",
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
							required: "You have to confirm password",
							validate: (value: string) => value === watch("password") || "Passwords do not match",
						})}
						helperText={errors.password2 && String(errors.password2.message)}
						error={!!errors.password2}
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						{isFetching ? <CircularProgress /> : "Sign up"}
					</Button>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", margin: "0.5rem" }}>
					<Link href="/signin">Already a member? Sign in</Link>
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
