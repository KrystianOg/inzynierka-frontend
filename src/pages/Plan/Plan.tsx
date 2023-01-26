import { useState } from "react";
import { BottomNav, Fab } from "components";
import { Container, Tabs, Tab } from "@mui/material";
import MealsStepper from "./MealsStepper";
import dayjs, { Dayjs } from "dayjs";
import Card from "./PlannerCard";
import weekPlan from "static/week-plan.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import Layout from "components/Layout";

const Planner = () => {
	const today = dayjs().day() - 1;
	const [tab, setTab] = useState<number>(today >= 0 ? today : 6);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

	const generateDayPlan = () => {
		console.log("generate day plan");
	};

	return (
		<Layout>
			<Helmet title="Planner | Diet Genius" />
			<Tabs
				value={tab}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				aria-label="disabled tabs example"
				variant="scrollable"
				scrollButtons="auto"
			>
				{/* {days.map((day, index) => (
					<Tab label={day} value={index} key={index} />
				))} */}
			</Tabs>
			{/* <MealsStepper day={weekPlan.week[days[tab]]} name={days[tab]} /> */}
			<Fab sx={{ bottom: 72, top: "auto", ariaLabel: "Generate Day Plan" }} onClick={generateDayPlan}>
				<FontAwesomeIcon
					icon={faRotateRight}
					style={{
						width: "32px",
						height: "32px",
					}}
				/>
			</Fab>
			<BottomNav />
		</Layout>
	);
};

export default Planner;
