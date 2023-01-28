import { Box, Button, Slide, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import FinishAnim from "./FinishAnim";
import type { Day } from "types/planning";
import PlannerCard from "./PlannerCard";
import { useStep } from "usehooks-ts";
import { useTranslation } from "react-i18next";

interface MealStepperProps {
	day: Day;
	disabled?: boolean;
}

///build on top of MUI Box
const MealsStepper = ({ day, disabled }: MealStepperProps) => {
	const { t } = useTranslation();
	const meals = [
		t("planner.meal_stepper.breakfast"),
		t("planner.meal_stepper.lunch"),
		t("planner.meal_stepper.dinner"),
	]; // TODO: change that obviously

	const [currentStep, { canGoToNextStep, canGoToPrevStep, goToNextStep, goToPrevStep, reset, setStep }] = useStep(
		day.meals.length + 1
	);

	return (
		<Box
			sx={{
				pointerEvents: disabled ? "none" : "auto",
				opacity: disabled ? 0.6 : 1,
				maxWidth: 600,
			}}
		>
			<Stepper activeStep={currentStep - 1} orientation="vertical">
				{day.meals.map((step, index) => (
					<Step key={step.id}>
						<StepLabel
							sx={{ textTransform: "capitalize" }}
							optional={
								currentStep === day.meals.length && index === day.meals.length ? (
									<Typography variant="caption">{t("planner.meal_stepper.last_step")}</Typography>
								) : null
							}
						>
							{meals[index]}
						</StepLabel>
						<StepContent>
							<PlannerCard meal={step} />
							<div>
								<Button
									variant="contained"
									onClick={goToNextStep}
									disabled={!canGoToNextStep}
									sx={{ mt: 1, mr: 1, borderRadius: "50px" }}
								>
									{currentStep === day.meals.length
										? t("planner.meal_stepper.finish")
										: t("planner.meal_stepper.next")}
								</Button>
								<Button
									disabled={!canGoToPrevStep}
									onClick={goToPrevStep}
									sx={{ mt: 1, mr: 1, borderRadius: "50px" }}
								>
									{t("planner.meal_stepper.back")}
								</Button>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{currentStep === day.meals.length + 1 && <FinishAnim />}
		</Box>
	);
};

export default MealsStepper;
