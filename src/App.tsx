import { useState } from "react";
import "./App.css";
import StepIndicator from "./components/StepIndicator";
import SkipSelect from "./components/SkipSelect";

function App() {
  const [step, setStep] = useState(3);
  return (
    <main className="text-5xl  bg-[#121212] text-white w-full min-h-screen ">
      <StepIndicator currentStep={step} />
      {step === 3 && <SkipSelect />}
    </main>
  );
}

export default App;
