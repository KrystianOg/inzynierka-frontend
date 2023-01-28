import Container from "@mui/material/Container";
import { useWindowSize } from "usehooks-ts";

const Footer = () => {
	const { height } = useWindowSize();

	return null;
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				padding: "1rem",
				backgroundColor: "background.paper",
			}}
		>
			Footer
		</Container>
	);
};

export default Footer;
