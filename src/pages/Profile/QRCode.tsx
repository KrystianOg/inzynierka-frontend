import { styled } from "@mui/material";
import { QRCode } from "react-qrcode-logo";

interface QRCodeProps {
	url: string;
}

const StyledQRC = styled(QRCode)(({ theme }) => ({
	bgcolor: theme.palette.primary.main,
}));

const QRC = ({ url }: QRCodeProps) => {
	return <StyledQRC qrStyle="dots" eyeRadius={31} value={url} size={250} />;
};

export default QRC;
