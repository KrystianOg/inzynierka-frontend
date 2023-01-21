import { Suspense } from "react";
import Loading from "components/Loading";
import { CssBaseline } from "@mui/material";
import Routes from "./routes";

function App() {
	return (
		<>
			<CssBaseline />
			<Suspense fallback={<Loading />}>
				<Routes />
			</Suspense>
		</>
	);
}

export default App;
