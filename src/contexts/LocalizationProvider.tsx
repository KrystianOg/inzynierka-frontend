import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

const LocalizationProvider = ({ children }: Props) => {
	return (
		<MuiLocalizationProvider dateAdapter={AdapterDayjs}>
			{children}
		</MuiLocalizationProvider>
	);
};

export default LocalizationProvider;
