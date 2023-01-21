import { Routes, Route } from "react-router-dom";

import { Home, SignIn, SignUp, NotFound, Profile, Recipes, Calendar, Planner, InformationSetup } from "pages";
import PrivateWrapper from "components/PrivateWrapper";

export default () => {
	return (
		<Routes>
			{/* public routes */}
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			{/* <Route path="/restore-password" element={<RestorePassword />} /> */}
			{/* private routes */}
			<Route element={<PrivateWrapper />}>
				<Route path="/setup-information" element={<InformationSetup />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/planner" element={<Planner />} />
			</Route>

			{/* 404 */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
