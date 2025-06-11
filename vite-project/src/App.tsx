import "./App.css";
import { useState } from "react";
import { tutorialData } from "./data/tutorialData";
import { Card } from "./components/Card";

function App() {
	const [step, setStep] = useState(0);

	const setNextStep = () => {
		setStep((prev) => prev + 1);
	};

	const setPrevStep = () => {
		setStep((prev) => prev - 1);
	};

	const currentStepData = tutorialData[step];

	return (
		<>
			<Card
				key={currentStepData.id}
				title={currentStepData.title}
				img={currentStepData.image}
				nextStep={setNextStep}
				prevStep={setPrevStep}
			step = {step}
			
			>
				{currentStepData.description}
			</Card>
		</>
	);
}

export default App;
