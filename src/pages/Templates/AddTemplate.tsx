import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, CircularProgress, Skeleton, TextField } from "@mui/material";
import TextFieldInherit from "./TextFieldInherit";
import SelectFieldInherit from "./SelectFieldInherit";
import { Center } from "components";
import { useGetProfileQuery } from "app/supabase/user";
import useAuth from "hooks/useAuth";
import { Workout } from "types/enum";
import type { AddTemplate as AddTemplateT } from "types/templates";
import { useCreateTemplateMutation } from "app/supabase/templates";
import { useTranslation } from "react-i18next";

const AddTemplate = () => {
	const { t } = useTranslation();
	const { type } = useParams<{ type: string }>();
	const navigate = useNavigate();
	const { user } = useAuth();
	const { data: profile, isLoading } = useGetProfileQuery(user?.id!);
	const [createTemplate, { isLoading: isCreating }] = useCreateTemplateMutation();

	const { register, handleSubmit, setError } = useForm<AddTemplateT>();

	const onSubmit: SubmitHandler<AddTemplateT> = async newTemplate => {
		if (!user) return;

		console.log(newTemplate);

		const res = await createTemplate({
			...newTemplate,
			user_id: user?.id,
		});

		if ("error" in res) {
			setError("name", {
				type: "manual",
				message: t("error.something_went_wrong").toString(),
			});
		}

		if ("data" in res) {
			navigate("/templates");
		}
	};

	return (
		<>
			<Helmet title={`${t("templates.add_title")} ${type ?? ""}| Diet Genius`} />

			{/* todo: changeable meal count */}
			<Center flexDirection="column" gap="1rem">
				<Box
					component="form"
					sx={{
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "1fr 1fr",
						},
						gap: "1rem",
						width: "100%",
					}}
					onSubmit={handleSubmit(onSubmit)}
					maxWidth="sm"
				>
					<TextField
						sx={{
							gridColumn: "1 / -1",
							marginTop: {
								xs: "1rem",
								sm: "2rem",
							},
							marginBottom: "1rem",
						}}
						label={t("templates.your_name")}
						autoFocus
						{...register("name", {
							required: false,
						})}
					/>
					{!isLoading ? (
						<>
							<TextFieldInherit
								label={t("profile.preferences.max_ready_time")}
								type="number"
								defaultValue={profile?.max_ready_time}
								fullWidth
								register={register}
								name="max_ready_time"
							/>
							<SelectFieldInherit
								label={t("profile.preferences.workout")}
								defaultValue={profile?.workout}
								options={Object.keys(Workout)}
								{...register("workout", {
									required: false,
								})}
							/>
							<SelectFieldInherit
								label={t("profile.preferences.daily_meal_count")}
								defaultValue={profile?.daily_meal_count}
								options={[1, 2, 3, 4, 5]}
								{...register("meal_count", {
									required: false,
								})}
							/>
							<div />
							<TextFieldInherit
								label={t("profile.min_max.min_calories")}
								type="number"
								defaultValue={profile?.min_calories}
								inputProps={{
									min: 0,
									max: 3000,
									step: 25,
								}}
								register={register}
								name="min_calories"
							/>
							<TextFieldInherit
								label={t("profile.min_max.max_calories")}
								type="number"
								defaultValue={profile?.max_calories}
								inputProps={{
									min: 0,
									max: 3000,
									step: 25,
								}}
								register={register}
								name="max_calories"
							/>
							<TextFieldInherit
								label={t("profile.min_max.min_protein")}
								type="number"
								defaultValue={profile?.min_protein}
								register={register}
								name="min_protein"
							/>
							<TextFieldInherit
								label={t("profile.min_max.max_protein")}
								type="number"
								defaultValue={profile?.max_protein}
								register={register}
								name="max_protein"
							/>
							<TextFieldInherit
								label={t("profile.min_max.min_carbs")}
								type="number"
								defaultValue={profile?.min_carbs}
								register={register}
								name="min_carbs"
							/>
							<TextFieldInherit
								label={t("profile.min_max.max_carbs")}
								type="number"
								defaultValue={profile?.max_carbs}
								register={register}
								name="max_carbs"
							/>
						</>
					) : (
						<>
							<Skeleton
								animation="wave"
								sx={{
									width: "100%",
									height: "56px",
								}}
							/>
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<div />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
							<Skeleton animation="wave" sx={{ height: "56px" }} />
						</>
					)}
					<Button
						variant="contained"
						type="submit"
						sx={{
							gridColumn: "1 / -1",
							marginTop: "1rem",
						}}
					>
						{isCreating ? <CircularProgress size={24} /> : t("templates.create")}
					</Button>
				</Box>
			</Center>
		</>
	);
};

export default AddTemplate;
