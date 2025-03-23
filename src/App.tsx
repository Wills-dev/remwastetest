import { useState } from "react";

import "./App.css";

import SkipSelect from "./components/SkipSelect";
import StepIndicator from "./components/StepIndicator";

function App() {
  const [step, setStep] = useState(3);

  const nextStep = () => {
    if (step === 5) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step <= 1) {
      return;
    }
    setStep((prev) => prev - 1);
  };

  return (
    <main className="text-5xl  bg-[#121212] text-white w-full min-h-screen ">
      <StepIndicator currentStep={step} setStep={setStep} />
      {step === 3 && <SkipSelect prevStep={prevStep} nextStep={nextStep} />}
    </main>
  );
}

export default App;
