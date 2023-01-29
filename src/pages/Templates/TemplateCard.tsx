import {
	Card,
	CardActions,
	Collapse,
	CardHeader,
	IconButton,
	IconButtonProps,
	styled,
	Typography,
	Box,
} from "@mui/material";
import { Template } from "types/templates";
import { faAngleDown, faPenToSquare, faShare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled(({ ...other }: ExpandMoreProps) => {
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const TemplateCard = ({ template }: { template: Template }) => {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(false);

	return (
		<Card>
			<CardHeader
				sx={{ textTransform: "capitalize" }}
				title={template.name === "" ? t("templates.card.untitled") : template.name}
			/>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						padding: "0 1.5rem",
					}}
				>
					<Typography paragraph>
						{template.public ? t("templates.card.public") : t("templates.card.private")}
					</Typography>
					<Typography paragraph>
						{t("profile.preferences.workout")}: {template.workout}
					</Typography>
					<Typography paragraph>
						{t("profile.preferences.max_ready_time")} {template.max_ready_time}
					</Typography>

					<Typography paragraph>
						{t("profile.min_max.min_calories")}: <span>{template?.min_calories}</span>
					</Typography>
					<Typography paragraph>
						{t("profile.min_max.max_calories")}: <span>{template?.max_calories}</span>
					</Typography>
					<Typography paragraph>
						{t("profile.min_max.min_protein")}: <span>{template?.min_protein}</span>
					</Typography>
					<Typography paragraph>
						{t("profile.min_max.max_protein")}: <span>{template?.max_protein}</span>
					</Typography>
					<Typography paragraph>
						{t("profile.min_max.min_carbs")}: <span>{template?.min_carbs}</span>
					</Typography>
					<Typography paragraph>
						{t("profile.min_max.max_carbs")}: <span>{template?.max_carbs}</span>
					</Typography>
				</Box>
			</Collapse>
			<CardActions disableSpacing>
				<IconButton aria-label="share">
					<FontAwesomeIcon icon={faShare} size="sm" />
				</IconButton>
				<IconButton aria-label="edit">
					<FontAwesomeIcon icon={faPenToSquare} size="sm" />
				</IconButton>
				<IconButton aria-label="delete">
					<FontAwesomeIcon icon={faTrash} size="sm" />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={() => setExpanded(prev => !prev)}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<FontAwesomeIcon icon={faAngleDown} size="sm" />
				</ExpandMore>
			</CardActions>
		</Card>
	);
};

export default TemplateCard;
