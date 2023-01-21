import { StickBottomNavigation, StyledBottomNA } from "./NavComponents";
import { Event, MenuBook, Person, Egg } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// const MCarrot = styled(Carrot)(({ theme }) => ({
// 	fill: theme.palette.primary.main,
// 	transform: "rotate(45deg)",
// }));

const BottomNav = () => {
	const navigate = useNavigate();
	return (
		<StickBottomNavigation sx={{ backdropFilter: "blur(8px)", backgroundColor: "transparent" }}>
			<StyledBottomNA aria-label="Planner" icon={<Egg />} onClick={() => navigate("/planner")} />
			<StyledBottomNA label="Calendar" value="calendar" icon={<Event />} onClick={() => navigate("/calendar")} />
			<StyledBottomNA label="Recipes" value="recipes" icon={<MenuBook />} onClick={() => navigate("/recipes")} />
			{/* TODO: on login set avatar */}
			<StyledBottomNA label="Profile" value="profile" icon={<Person />} onClick={() => navigate("/profile")} />
		</StickBottomNavigation>
	);
};

export default BottomNav;
