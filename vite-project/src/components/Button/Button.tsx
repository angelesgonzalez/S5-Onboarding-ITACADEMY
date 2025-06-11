import "./Button.css";
import { LeftArrowIcon } from "./LeftArrow";
import { RightArrowIcon } from "./RightArrow";
type Props = {
	handleClick: () => void;
	variant: string;
};

export const Button = ({ handleClick, variant }: Props) => {
	const icon = variant === "left" ? <LeftArrowIcon /> : <RightArrowIcon />;
	return <button onClick={handleClick}>{icon}</button>;
};
