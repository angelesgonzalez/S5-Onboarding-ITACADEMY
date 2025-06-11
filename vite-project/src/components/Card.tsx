import { tutorialData } from "../data/tutorialData";

type Props = {
	title: string;
	img: string;
	children: React.ReactNode;
	step: number;
	nextStep: () => void;
	prevStep: () => void;
};

export const Card = ({
	title,
	img,
	nextStep,
	prevStep,
	children,
	step,
}: Props) => {
	const handleNextStep = () => {
		nextStep();
	};

	const handlePrevStep = () => {
		prevStep();
	};

	const buttons = (
		<div>
			{step > 0 && <button onClick={handlePrevStep}>Prev</button>}
			{step < tutorialData.length - 1 && (
				<button onClick={handleNextStep}>Next</button>
			)}
		</div>
	);

	return (
		<article>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<p>{children}</p>
			{buttons}
		</article>
	);
};
