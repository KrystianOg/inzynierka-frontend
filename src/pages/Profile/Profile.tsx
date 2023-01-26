import { useState, useEffect } from "react";
import {
	IconButton,
	Badge,
	Typography,
	Backdrop,
	FormControl,
	OutlinedInput,
	InputAdornment,
	FormHelperText,
	TextField,
	MenuItem,
	Divider,
	FormControlLabel,
	Switch,
	Tab,
	Box,
} from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import BottomNav from "components/Nav/BottomNav";
import QRCode from "./QRCode";
import { useSnackbar } from "notistack";
import { useGetProfileQuery, useUpdateProfileMutation } from "app/supabase/user";
import useAuth from "hooks/useAuth";
import { UpdateProfile } from "types/user";
import { useDarkMode } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import { Center } from "components";
import { Helmet } from "react-helmet-async";
import Layout from "components/Layout";
import { Workout } from "types/enum";
import { SmallAvatar, StyledAvatar, ProfileTabPanel as TabPanel } from "./ProfileComponents";

enum TabName {
	Measurements = "measurements",
	Preferences = "preferences",
	Nutrition = "nutrition",
	Spoonacular = "spoonacular",
	Notifications = "notifications",
	Settings = "settings",
}

const ProfilePage = () => {
	const { t } = useTranslation();
	const { enqueueSnackbar } = useSnackbar();
	const { isDarkMode, toggle } = useDarkMode();
	const [openQR, setOpenQR] = useState<boolean>(false);
	const handleClose = () => setOpenQR(false);
	const handleToggle = () => setOpenQR(prev => !prev);
	const { user } = useAuth();
	const { data: profile } = useGetProfileQuery(user?.id!);
	const [updateQuery, setUpdateQuery] = useState<Partial<UpdateProfile>>();
	const [updateProfile, { isError, isSuccess }] = useUpdateProfileMutation();
	const [tab, setTab] = useState<TabName>(TabName.Measurements);

	const handleTabChange = (_: any, newValue: TabName) => {
		setTab(newValue);
	};

	useEffect(() => {
		const update = async () => {
			await updateProfile({ id: user?.id!, ...updateQuery });

			if (isError) {
				enqueueSnackbar(t("error.an_error_occurred"), {
					variant: "error",
				});
			}

			if (isSuccess) {
				setUpdateQuery(undefined);
			}
		};

		if (updateQuery) update();
	}, [updateQuery]);

	const copyUsername = () => {
		try {
			navigator.clipboard.writeText(user?.email!);

			enqueueSnackbar(t("profile.email.copied"), {
				variant: "success",
			});
		} catch (err) {
			enqueueSnackbar(t("profile.email.copy_fail"), {
				variant: "warning",
			});
		}
	};

	return (
		<Layout>
			<Helmet title="Profile | Diet Genius" />

			<Center>
				<Badge
					overlap="circular"
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					badgeContent={<SmallAvatar>+</SmallAvatar>}
				>
					<StyledAvatar />
				</Badge>
			</Center>
			<Center>
				<Typography component="h1" variant="body2" onClick={copyUsername}>
					@{user?.email}
				</Typography>
				<IconButton aria-label="qr-code" sx={{ width: 20, height: 20 }} onClick={handleToggle}>
					<FontAwesomeIcon icon={faQrcode} size="xs" />
				</IconButton>
				<Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={openQR} onClick={handleClose}>
					<QRCode url="http://something.here/user?" />
				</Backdrop>
			</Center>
			<Divider
				sx={{
					marginTop: {
						xs: "1rem",
						sm: "1.5rem",
					},
				}}
			/>

			<TabContext value={tab}>
				<TabList
					onChange={handleTabChange}
					variant="scrollable"
					sx={{
						margin: "auto",
						maxWidth: "650px",
					}}
				>
					{Object.values(TabName).map(tab => (
						<Tab
							sx={{
								textTransform: "capitalize",
							}}
							label={tab}
							value={tab}
						/>
					))}
				</TabList>
				<Divider />

				<TabPanel value="measurements">
					{/* some user settings */}
					<TextField
						select
						label="Select Gender"
						helperText="Gender"
						value={profile?.gender ? "Male" : "Female"}
						onChange={e =>
							setUpdateQuery({
								...updateQuery,
								gender: Boolean(e.target.value === "Male"),
							})
						}
						fullWidth
					>
						{["Male", "Female"].map(option => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
					<FormControl variant="outlined">
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">cm</InputAdornment>}
							aria-describedby="outlined-height-helper-text"
							inputProps={{
								"aria-label": "height",
								min: 50,
								max: 250,
							}}
							value={profile?.height}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									height: Number(e.target.value),
								})
							}
						/>
						<FormHelperText id="outlined-height-helper-text">
							{t("profile.your_info.height")}
						</FormHelperText>
					</FormControl>
					<FormControl variant="outlined">
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">kg</InputAdornment>}
							aria-describedby="outlined-weight-helper-text"
							inputProps={{
								"aria-label": "weight",
								min: 50,
								max: 150,
							}}
							value={profile?.weight}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									weight: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.your_info.weight")}</FormHelperText>
					</FormControl>
				</TabPanel>
				<TabPanel value="preferences">
					<TextField
						select
						label="Select"
						defaultValue={3}
						helperText="Daily meal count"
						value={profile?.daily_meal_count}
						onChange={e =>
							setUpdateQuery({
								...updateQuery,
								daily_meal_count: Number(e.target.value),
							})
						}
					>
						{[1, 2, 3, 4, 5].map(option => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
					<TextField
						select
						label="Select Workout"
						helperText="Workout"
						value={profile?.workout}
						onChange={e =>
							setUpdateQuery({
								...updateQuery,
								workout: e.target.value as Workout,
							})
						}
					>
						{Object.keys(Workout).map(option => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">litres</InputAdornment>}
							aria-describedby="outlined-water-consumption-helper-text"
							inputProps={{
								"aria-label": "water-consumption",
								maxLength: 3,
								step: 0.2,
								min: 0,
								max: 5,
							}}
							value={profile?.water_consumption}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									water_consumption: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.your_info.water_consumption")}</FormHelperText>
					</FormControl>
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
							aria-describedby="outlined-time-to-prepare-helper-text"
							inputProps={{
								"aria-label": "time-to-prepare-a-meal",
								min: 5,
								max: 300,
								maxLength: 3,
								step: 5,
							}}
							value={profile?.max_ready_time}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									max_ready_time: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.your_info.max_ready_time")}</FormHelperText>
					</FormControl>
				</TabPanel>
				<TabPanel value="nutrition">
					{/* min max */}
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							aria-describedby="outlined-min-calories-helper-text"
							inputProps={{
								"aria-label": "min-calories",
								min: 0,
								max: 3000,
								step: 25,
							}}
							value={profile?.min_calories}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									min_calories: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.min_max.min_calories")}</FormHelperText>
					</FormControl>
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							aria-describedby="outlined-max-calories-helper-text"
							inputProps={{
								"aria-label": "max-calories",
								min: 0,
								max: 3000,
								step: 25,
							}}
							value={profile?.max_calories}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									max_calories: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.min_max.max_calories")}</FormHelperText>
					</FormControl>
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							aria-describedby="outlined-min-protein-helper-text"
							inputProps={{
								"aria-label": "min-protein",
								min: 0,
								max: 100,
							}}
							value={profile?.min_protein}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									min_protein: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.min_max.min_protein")}</FormHelperText>
					</FormControl>
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							aria-describedby="outlined-max-protein-helper-text"
							inputProps={{
								"aria-label": "max-protein",
								min: 0,
								max: 100,
							}}
							value={profile?.max_protein}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									max_protein: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.min_max.max_protein")}</FormHelperText>
					</FormControl>
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							aria-describedby="outlined-min-carbs-helper-text"
							inputProps={{
								"aria-label": "min-carbs",
								min: 0,
								max: 100,
							}}
							value={profile?.min_carbs}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									min_carbs: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.min_max.min_carbs")}</FormHelperText>
					</FormControl>
					<FormControl>
						<OutlinedInput
							type="number"
							endAdornment={<InputAdornment position="end">g</InputAdornment>}
							aria-describedby="outlined-max-carbs-helper-text"
							inputProps={{
								"aria-label": "max-carbs",
								min: 0,
								max: 100,
							}}
							value={profile?.max_carbs}
							onChange={e =>
								setUpdateQuery({
									...updateQuery,
									max_carbs: Number(e.target.value),
								})
							}
						/>
						<FormHelperText>{t("profile.min_max.max_carbs")}</FormHelperText>
					</FormControl>
				</TabPanel>
				<TabPanel
					value="spoonacular"
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					{/* spoonacular */}
					<TextField label={t("profile.spoonacular.username")} disabled>
						{profile?.spoonacular_username}
					</TextField>
					<TextField label={t("profile.spoonacular.password")} disabled>
						{profile?.spoonacular_password}
					</TextField>
				</TabPanel>
				<TabPanel value="notifications">
					{/* notifications */}
					<FormControlLabel
						control={
							<Switch
								name="notify_monthly_summary"
								checked={profile?.notify_monthly_summary ?? true}
								onChange={e => {
									setUpdateQuery({
										...updateQuery,
										notify_monthly_summary: e.target.checked,
									});
								}}
							/>
						}
						label={t("profile.notifications.monthly_summary")}
					/>
					<FormControlLabel
						control={
							<Switch
								name="notify_weekly_summary"
								checked={profile?.notify_weekly_summary ?? true}
								onChange={e => {
									setUpdateQuery({
										...updateQuery,
										notify_weekly_summary: e.target.checked,
									});
								}}
							/>
						}
						label={t("profile.notifications.weekly_summary")}
					/>
					<FormControlLabel
						control={
							<Switch
								name="notify_daily_reminder"
								checked={profile?.notify_daily_reminder ?? true}
								onChange={e => {
									setUpdateQuery({
										...updateQuery,
										notify_daily_reminder: e.target.checked,
									});
								}}
							/>
						}
						label={t("profile.notifications.daily_reminder")}
					/>
				</TabPanel>
				<TabPanel value="settings">
					{/* preferences */}
					<FormControlLabel
						control={
							<Switch
								name="prefer_dark_mode"
								checked={profile?.prefer_dark_mode ?? isDarkMode ?? true}
								defaultChecked={profile?.prefer_dark_mode ?? isDarkMode ?? true}
								onChange={e => {
									setUpdateQuery({
										...updateQuery,
										prefer_dark_mode: e.target.checked,
									});

									toggle();
								}}
							/>
						}
						label={t("profile.settings.dark_mode")}
					/>
				</TabPanel>
			</TabContext>
			<BottomNav />
		</Layout>
	);
};

export default ProfilePage;
