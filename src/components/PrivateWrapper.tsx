import { Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

const PrivateWrapper = () => {
	const { isSession } = useAuth();
	return isSession ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateWrapper;
