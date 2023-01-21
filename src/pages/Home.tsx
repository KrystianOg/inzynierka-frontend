import Layout from "components/Layout";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Layout>Something here</Layout>
			<Link href="/setup-information">{t("button")}</Link>
		</>
	);
};

export default Home;
