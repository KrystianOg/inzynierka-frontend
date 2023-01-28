import { useState } from "react";
import { BottomNav, Fab } from "components";
import { Tabs, Tab, Box, Button } from "@mui/material";
// import MealsStepper from "./MealsStepper";
// import Card from "./PlannerCard";
import { type Week, type Weekday, weekday } from "types/planning";
import dayjs, { Dayjs } from "dayjs";
import weekPlan from "static/week-plan.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import Layout from "components/Layout";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MealsStepper from "./MealsStepper";
import { useSnackbar } from "notistack";

const week = weekPlan["week"] as unknown as Week;

const Planner = () => {
	const today = weekday[dayjs().day() - 1];
	const [tab, setTab] = useState<Weekday>(today ?? "monday");
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const handleChange = (event: React.SyntheticEvent, newValue: Weekday) => {
		setTab(newValue);
	};

	const generateDayPlan = (type: "week" | "day", weekday?: Weekday) => {
		if (type === "day" && !weekday) {
			throw new Error("Weekday is required for day plan");
		}
		enqueueSnackbar("Are you sure you want to generate new plan? This action will override your current plan?", {
			variant: "info",
			autoHideDuration: 6000,
			anchorOrigin: {
				vertical: "top",
				horizontal: "center",
			},
			action: id => (
				<Box
					sx={{
						display: "flex",
						gap: "1rem",
					}}
				>
					<Button variant="contained" onClick={() => closeSnackbar(id)}>
						YES!
					</Button>
					<Button variant="contained" onClick={() => closeSnackbar(id)}>
						Dismiss
					</Button>
				</Box>
			),
		});
	};

	return (
		<Layout>
			<Helmet title="Planner | Diet Genius" />

			<TabContext value={tab}>
				<TabList
					onChange={handleChange}
					variant="fullWidth"
					sx={{
						borderBottom: 1,
						borderColor: "divider",
					}}
				>
					{weekday.map((day, index) => (
						<Tab
							label={day}
							value={day}
							key={index}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						/>
					))}
				</TabList>
				{weekday.map((key, index) => {
					const day = week[key as Weekday];
					return (
						<TabPanel value={key} key={index}>
							<MealsStepper day={day} disabled={today !== key} />
						</TabPanel>
					);
				})}
			</TabContext>

			{/* <MealsStepper day={weekPlan.week[days[tab]]} name={days[tab]} /> */}
			<Fab
				sx={{ bottom: 72, top: "auto", ariaLabel: "Generate Day Plan" }}
				onClick={() => generateDayPlan("week")}
			>
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
