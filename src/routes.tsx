import { Routes as RouterRoutes, Route } from "react-router-dom";

import {
	Home,
	SignIn,
	SignUp,
	NotFound,
	Profile,
	Recipes,
	Plan,
	InformationSetup,
	Templates,
	// Template,
	AddTemplate,
} from "pages";

import PrivateWrapper from "components/PrivateWrapper";

const Routes = () => (
	<RouterRoutes>
		{/* public routes */}
		<Route path="/" element={<Home />} />
		<Route path="signin" element={<SignIn />} />
		<Route path="signup" element={<SignUp />} />
		{/* <Route path="/restore-password" element={<RestorePassword />} /> */}
		{/* private routes */}
		<Route element={<PrivateWrapper />}>
			<Route path="setup-information" element={<InformationSetup />} />
			<Route path="profile" element={<Profile />} />
			<Route path="recipes" element={<Recipes />} />
			<Route path="plan" element={<Plan />} />
			<Route path="templates" element={<Templates />} />
			<Route path="templates/:id" element={<div />} /> {/* TODO: "AddTemplate */}
			<Route path="templates/create" element={<AddTemplate />} />
		</Route>

		{/* 404 */}
		<Route path="*" element={<NotFound />} />
	</RouterRoutes>
);

export default Routes;
