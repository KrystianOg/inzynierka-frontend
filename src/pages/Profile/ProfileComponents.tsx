import { TabPanel, TabPanelProps } from "@mui/lab";
import { Typography, styled, Avatar, TypographyProps, Box } from "@mui/material";

export const ProfileSectionTitle = ({ text, sx }: { text: string } & TypographyProps) => (
	<Typography
		component="h2"
		variant="h6"
		sx={{
			textAlign: "center",
			marginTop: "auto",
			marginBottom: 0,
			gridColumn: "1 / -1",
		}}
	>
		{text}
	</Typography>
);

export const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 24,
	height: 24,
	border: `2px solid ${theme.palette.background.default}`,
	backgroundColor: theme.palette.primary.dark,
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width: 76,
	height: 76,
	backgroundColor: theme.palette.secondary.dark,
}));

export const ProfileTabPanel = ({ children, value, sx }: { children: React.ReactNode } & TabPanelProps) => (
	<TabPanel value={value}>
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: {
					xs: "repeat(1, 1fr)",
					sm: "repeat(2, 1fr)",
					md: "repeat(3, 1fr)",
				},
				gridAutoFlow: "row",
				gap: "1rem",
				width: "100%",
				margin: "0 auto",
				...sx,
			}}
			maxWidth="sm"
		>
			{children}
		</Box>
	</TabPanel>
);
