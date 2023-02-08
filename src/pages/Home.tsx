import { Box, Typography } from "@mui/material";

const Home = () => (
	<Box
		sx={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			height: "90vh",
			textAlign: "center",
			padding: {
				xs: "1rem",
				sm: "2rem",
			},
		}}
	>
		<Typography variant="h4" component="h2" mb="3rem" color="secondary">
			This is early application build, only invited users are authorized.
		</Typography>
		<Typography variant="h5" component="h3" color="primary">
			{"Wi'll allow everyone to join soon!"}
		</Typography>
	</Box>
);

export default Home;
