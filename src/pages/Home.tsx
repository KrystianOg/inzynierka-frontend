import Layout from "components/Layout";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<Layout>
			<Link href="/setup-information">{t("button")}</Link>
		</Layout>
	);
};

export default Home;
