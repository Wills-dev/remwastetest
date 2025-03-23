import { steps } from "@/constants";
import { motion } from "framer-motion";

interface StepperProps {
  currentStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepIndicator = ({ currentStep, setStep }: StepperProps) => {
  return (
    <div className=" py-8 padding-ctn">
      <div className="w-full overflow-x-auto">
        <div className="flex items-center justify-between w-max space-x-4 mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index + 1 <= currentStep;
            const isCompleted = index + 1 <= currentStep;
            const isCurrent = index + 1 === currentStep;

            return (
              <div key={step.id} className="flex items-center space-x-5">
                {/* Horizontal Line */}
                {index > 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isCompleted ? "60px" : "60px" }}
                    transition={{ duration: 0.3 }}
                    className={`h-[1px] rounded-md ${
                      isCompleted ? "bg-[#0037c1]" : "bg-[#39393a]"
                    }`}
                  />
                )}
                <button
                  className={`flex items-center gap-2 ${
                    isCurrent || isCompleted
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                  }`}
                  onClick={() => setStep(step?.id)}
                  type="button"
                  disabled={!isCurrent && !isCompleted}
                >
                  <motion.span
                    initial={{ scale: 0.9 }}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={` ${
                      isActive ? "text-[#0037c1]" : "text-[#909192]"
                    }`}
                  >
                    {Icon}
                  </motion.span>
                  <span
                    className={`text-base ${
                      isActive ? "text-white" : "text-[#909192]"
                    } ${
                      isCurrent || isCompleted
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
