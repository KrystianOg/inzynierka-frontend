import { useEffect, useState, ReactNode } from "react";

type Props = {
	children: ReactNode;
	wait?: number;
};

const Delayed = ({ children, wait = 300 }: Props) => {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsShown(true);
		}, wait);
		return () => clearTimeout(timer);
	}, [wait]);

	return isShown ? <>{children}</> : null;
};

export default Delayed;
