import { StickBottomNavigation, StyledBottomNA } from "./NavComponents";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot, faUser, faBookOpen, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useDarkMode } from "usehooks-ts";
import { useTranslation } from "react-i18next";

const FAIcon = ({ icon, color }: { icon: IconProp; color: string }) => {
	return (
		<FontAwesomeIcon
			icon={icon}
			size="xl"
			style={{
				color,
				width: "24px",
				height: "24px",
			}}
		/>
	);
};

const BottomNav = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const theme = useTheme();
	const { isDarkMode } = useDarkMode();
	return (
		<StickBottomNavigation
			sx={{
				backdropFilter: "blur(8px)",
				backgroundColor: isDarkMode ? "hsl(154, 96%, 3%, 0.5)" : "hsl(25, 100%, 83%, 0.1)",
			}}
		>
			<StyledBottomNA
				aria-label="Plan"
				icon={<FAIcon icon={faCarrot} color={theme.palette.primary.main} />}
				onClick={() => navigate("/plan")}
			/>
			<StyledBottomNA
				label={t("navigation.templates")}
				value="templates"
				icon={<FAIcon icon={faCalendar} color={theme.palette.primary.main} />}
				onClick={() => navigate("/templates")}
			/>
			<StyledBottomNA
				label={t("navigation.recipes")}
				value="recipes"
				icon={<FAIcon icon={faBookOpen} color={theme.palette.primary.main} />}
				onClick={() => navigate("/recipes")}
			/>
			{/* TODO: on login set avatar */}
			<StyledBottomNA
				label={t("navigation.profile")}
				value="profile"
				icon={<FAIcon icon={faUser} color={theme.palette.primary.main} />}
				onClick={() => navigate("/profile")}
			/>
		</StickBottomNavigation>
	);
};

export default BottomNav;
