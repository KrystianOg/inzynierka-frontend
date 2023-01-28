import { Container, MobileStepper, Button, Box, Typography } from "@mui/material";
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from "./Steps";
import { useNavigate } from "react-router-dom";
import { useStep } from "usehooks-ts";
import { useEffect } from "react";
import { Profile } from "types/user";
import { useSnackbar } from "notistack";
import { useUpdateProfileMutation } from "app/supabase/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface Step {
	title: string;
	content: JSX.Element;
	multiple?: boolean;
	skippable?: boolean;
}

const steps: Step[] = [
	{
		title: "Select your gender",
		content: Step1(),
	},
	{
		title: "Please tell us about your body measurements",
		content: Step2(),
	},
	{
		title: "What is your desired weight?",
		content: Step3(),
	},
];

const InformationSetup = () => {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const [updateProfile, { isLoading: isUpdating, error }] = useUpdateProfileMutation();

	const [currentStep, helpers] = useStep(steps.length);

	const { canGoToNextStep, canGoToPrevStep, goToNextStep, goToPrevStep, reset, setStep } = helpers;

	const updateUser = async (profile: Profile) => updateProfile(profile);

	const handleNext = () => {
		if (steps[currentStep].multiple) {
		}
	};

	return (
		<Container>
			<Box component="form" onSubmit={handleNext}>
				<Typography component="h2" variant="h5">
					{steps[currentStep].title}
				</Typography>

				{steps[currentStep].content}

				{!steps[currentStep].multiple && (
					<Button variant="contained" type="submit" fullWidth>
						Continue
					</Button>
				)}
			</Box>

			<MobileStepper
				variant="progress"
				steps={steps.length}
				activeStep={currentStep - 1}
				nextButton={
					<Button size="small" onClick={goToNextStep}>
						Skip
						<FontAwesomeIcon icon={faAngleRight} size="lg" />
					</Button>
				}
				backButton={
					<Button size="small" onClick={goToPrevStep}>
						<FontAwesomeIcon icon={faAngleLeft} size="lg" />
						Back
					</Button>
				}
			/>
		</Container>
	);
};

export default InformationSetup;
