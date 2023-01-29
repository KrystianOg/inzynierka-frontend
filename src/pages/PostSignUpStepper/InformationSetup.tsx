import { Container, MobileStepper, Button, Box, Typography } from "@mui/material";
import { Step1, Step2, Step3 } from "./Steps";
import { useStep } from "usehooks-ts";
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
	// const navigate = useNavigate();
	// const [updateProfile] = useUpdateProfileMutation();

	const [currentStep, helpers] = useStep(steps.length);

	const { goToNextStep, goToPrevStep } = helpers;

	// const updateUser = async (profile: Profile) => updateProfile(profile);

	return (
		<Container>
			<Box component="form" onSubmit={goToNextStep}>
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
