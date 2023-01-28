// import { TabContext, TabList, TabPanel } from "@mui/lab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import Layout from "components/Layout";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Fab } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useGetTemplatesQuery } from "app/supabase/templates";
import TemplateCard from "./TemplateCard";

const Template = () => {
	const [tab, setTab] = useState<"week" | "day">("week");
	const navigate = useNavigate();
	const { data: templates } = useGetTemplatesQuery();

	const handleChange = (_: any, newValue: "week" | "day") => {
		setTab(newValue);
	};

	const handleAddTemplate = () => {
		navigate(`/templates/create?type=${tab}`);
	};

	return (
		<Layout>
			<Helmet title="Template | Diet Genius" />
			<TabContext value={tab}>
				<TabList onChange={handleChange} variant="fullWidth" sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tab label="week" value="week" />
					<Tab label="day" value="day" />
				</TabList>
				<TabPanel value="week">
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
							gap: "1rem",
						}}
					>
						{templates?.map((template, index) => (
							<TemplateCard template={template} key={index} />
						))}
					</Box>
				</TabPanel>
				<TabPanel value="day">Day</TabPanel>
			</TabContext>
			<Fab sx={{ bottom: 72, top: "auto", ariaLabel: "Generate Day Plan" }} onClick={handleAddTemplate}>
				<FontAwesomeIcon
					icon={faPlus}
					style={{
						width: "32px",
						height: "32px",
					}}
				/>
			</Fab>
		</Layout>
	);
};

export default Template;
