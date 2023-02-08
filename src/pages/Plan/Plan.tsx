import { useState } from "react";
import { BottomNav, Fab } from "components";
import { Tab, Box, Button, Tooltip } from "@mui/material";
import { type Week, type Weekday, weekday } from "types/planning";
import dayjs from "dayjs";
import weekPlan from "static/week-plan.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MealsStepper from "./MealsStepper";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

const week = weekPlan["week"] as unknown as Week;

const Planner = () => {
	const { t } = useTranslation();
	const today = weekday[dayjs().day() > 0 ? dayjs().day() - 1 : 6];
	const [tab, setTab] = useState<Weekday>(today ?? "monday");
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const handleChange = (newValue: Weekday) => {
		setTab(newValue);
	};

	const generateDayPlan = (type: "week" | "day", weekday?: Weekday) => () => {
		if (type === "day" && !weekday) {
			throw new Error(t("planner.error.no_weekday").toString());
		}
		enqueueSnackbar(t("planner.generate_new_question"), {
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
						{t("planner.yes")}
					</Button>
					<Button variant="contained" onClick={() => closeSnackbar(id)}>
						{t("planner.dismiss")}
					</Button>
				</Box>
			),
		});
	};

	return (
		<>
			<Helmet title={`${t("planner.title")} | Diet Genius`} />

			<TabContext value={tab}>
				<TabList
					onChange={(_, newValue) => handleChange(newValue)}
					variant="scrollable"
					allowScrollButtonsMobile
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
								textTransform: "capitalize",
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

			<Tooltip title={t("planner.generate_tooltip")}>
				<Fab sx={{ bottom: 72, top: "auto", ariaLabel: "Generate Day Plan" }} onClick={generateDayPlan("week")}>
					<FontAwesomeIcon
						icon={faRotateRight}
						style={{
							width: "32px",
							height: "32px",
						}}
					/>
				</Fab>
			</Tooltip>

			<BottomNav />
		</>
	);
};

export default Planner;
