import { Box, Button, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import FinishAnim from "./FinishAnim";
import type { Day } from "types/planning";
import Card from "./PlannerCard";
import { useStep } from "usehooks-ts";

interface MealStepperProps {
	day: Day;
	name: string;
}

///build on top of MUI Box
const MealsStepper = ({ day, name }: MealStepperProps) => {
	const [currentStep, helpers] = useStep(day.meals.length);

	const { canGoToNextStep, canGoToPrevStep, goToNextStep, goToPrevStep, reset, setStep } = helpers;

	return (
		<Box sx={{ maxWidth: 400 }} alignItems="center">
			<Stepper activeStep={currentStep} orientation="vertical">
				{day.meals.map((step, index) => (
					<Step key={step.id}>
						<StepLabel
							optional={
								currentStep === day.meals.length - 1 && index === day.meals.length - 1 ? (
									<Typography variant="caption">Last step</Typography>
								) : null
							}
						>
							{step.title}
						</StepLabel>
						<StepContent>
							<Typography>{step.sourceUrl}</Typography>
							<Box sx={{ mb: 2 }}>
								<Card meal={step} />

								<div>
									<Button
										variant="contained"
										onClick={goToNextStep}
										sx={{ mt: 1, mr: 1, borderRadius: "50px" }}
									>
										{currentStep === day.meals.length - 1 ? "Finish" : "Next"}
									</Button>
									<Button
										disabled={!canGoToPrevStep}
										onClick={goToPrevStep}
										sx={{ mt: 1, mr: 1, borderRadius: "50px" }}
									>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{currentStep === day.meals.length && <FinishAnim />}
		</Box>
	);
};

export default MealsStepper;
