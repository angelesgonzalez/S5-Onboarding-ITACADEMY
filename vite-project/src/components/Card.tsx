import { Button } from "./Button/Button";

type Props = {
	title: string;
	img: string;
	children: React.ReactNode;
	step: number;
	totalSteps: number;
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
	totalSteps,
}: Props) => {
	const handleNextStep = () => {
		nextStep();
	};

	const handlePrevStep = () => {
		prevStep();
	};

	return (
		<article>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<p>{children}</p>
			<div>
				{step > 0 && <Button handleClick={handlePrevStep} variant="left" />}
				{step < totalSteps - 1 && (
					<Button handleClick={handleNextStep} variant="right" />
				)}
			</div>
		</article>
	);
};

/*


*/
