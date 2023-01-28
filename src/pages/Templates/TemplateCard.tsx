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
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const TemplateCard = ({ template }: { template: Template }) => {
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(`Search ${template.id}`);
		enqueueSnackbar("Copied to clipboard", { variant: "success" });
	};

	const handleExpandClick = () => {
		setExpanded(prev => !prev);
	};

	return (
		<Card>
			<CardHeader
				title={template.name === "" ? "Untitled" : template.name}
				// subheader={template.name && template.id}
			/>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						padding: "0 1.5rem",
					}}
				>
					<Typography paragraph>{template.public ? "public" : "private"}</Typography>
					<Typography paragraph>workout: {template.workout}</Typography>
					<Typography paragraph>max ready time: {template.max_ready_time}</Typography>

					<Typography paragraph>
						Min calories: <span>{template?.min_calories}</span>
					</Typography>
					<Typography paragraph>
						Max calories: <span>{template?.max_calories}</span>
					</Typography>
					<Typography paragraph>
						Min protein: <span>{template?.min_protein}</span>
					</Typography>
					<Typography paragraph>
						Max protein: <span>{template?.max_protein}</span>
					</Typography>
					<Typography paragraph>
						Min carbs: <span>{template?.min_carbs}</span>
					</Typography>
					<Typography paragraph>
						Max carbs: <span>{template?.max_carbs}</span>
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
					onClick={handleExpandClick}
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
