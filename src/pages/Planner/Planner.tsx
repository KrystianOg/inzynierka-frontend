import { useState } from "react";
import { BottomNav, Fab } from "components";
import { Container, Tabs, Tab } from "@mui/material";
import { ModelTraining } from "@mui/icons-material";
import MealsStepper from "./MealsStepper";
import dayjs, { Dayjs } from "dayjs";
import Card from "./PlannerCard";

import weekPlan from "static/week-plan.json";
import { type Weekday } from "../../types/planning";

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
		<Container sx={{ width: "100vw" }}>
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
				<ModelTraining sx={{ width: 36, height: 36 }} />
			</Fab>
			<BottomNav />
		</Container>
	);
};

export default Planner;
