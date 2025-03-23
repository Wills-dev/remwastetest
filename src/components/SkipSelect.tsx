import { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import SelectedNext from "./SelectedNext";
import CardImage from "../assets/images/card-image.jpeg";

import { fadeIn } from "@/anim/motion";
import { SkipDetailsType } from "@/types";
import { useGetSkipOptions } from "@/hooks/useGetSkipOptions";

interface SkipSelectProps {
  nextStep: () => void;
  prevStep: () => void;
}

const SkipSelect = ({ nextStep, prevStep }: SkipSelectProps) => {
  const {
    errMsg,
    loading,
    skipOptions,
    getSkipOptions,
    selectedCard,
    setSelectedCard,
  } = useGetSkipOptions();

  useEffect(() => {
    getSkipOptions();
  }, []);

  return (
    <div className="w-full pb-40 pt-2">
      <div className="w-full flex-col flex items-center justify-center space-y-3 padding-ctn">
        <h2 className="text-2xl font-bold text-center">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-base text-center mb-8">
          Select the skip size that best suits your needs
        </p>
      </div>
      {loading ? (
        <div className="w-full h-40 flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-6 py-6 padding-ctn">
          {errMsg ? (
            <p className="text-base col-span-6">
              Error fetching skip options. Try again.
            </p>
          ) : (
            <>
              <AnimatePresence>
                {skipOptions?.map((skipOption: SkipDetailsType, index) => (
                  <motion.div
                    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    className="lg:col-span-2 md:col-span-3 col-span-6 w-full group relative rounded-lg border-2 p-4 md:p-6 transition-all
            border-[#2A2A2A] hover:border-[#0037C1]/50
            bg-[#1C1C1C] text-white cursor-pointer"
                    onClick={() => setSelectedCard(skipOption)}
                  >
                    <div className="w-full h-auto relative">
                      <div
                        className={`absolute top-3 right-2 w-5 h-5 rounded  flex justify-center items-center md:top-4 md:right-4  ${
                          selectedCard?.id === skipOption?.id
                            ? "bg-[#0037C1]"
                            : "bg-white"
                        }`}
                      >
                        {selectedCard?.id === skipOption?.id && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        )}
                      </div>
                      <img
                        src={CardImage}
                        alt="card-image"
                        className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                      />
                      <span className="absolute top-3 left-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        {skipOption?.size} Yards
                      </span>
                    </div>
                    <div className="pt-2 flex-col flex w-full">
                      <div className="">
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          {skipOption?.size} Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          {skipOption?.hire_period_days} day hire period
                        </p>
                      </div>
                      <div className="">
                        <div className=" mb-4">
                          <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                            £{skipOption?.price_before_vat}{" "}
                            <span className="text-sm font-normal text-gray-400 ml-2">
                              per week
                            </span>
                          </span>
                        </div>
                        <button
                          type="button"
                          className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2  text-white hover:b [#3A3A3A] hover:border-[#0037C1] cursor-pointer ${
                            selectedCard?.id === skipOption?.id
                              ? "bg-[#0037C1]"
                              : "bg-[#2A2A2A]"
                          }`}
                        >
                          {selectedCard?.id === skipOption?.id ? (
                            <span className="text-base">Selected</span>
                          ) : (
                            <>
                              <span className="text-base">
                                Select This Skip
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </>
          )}
        </div>
      )}
      {selectedCard && (
        <SelectedNext
          nextStep={nextStep}
          prevStep={prevStep}
          selectedCard={selectedCard}
        />
      )}
    </div>
  );
};

export default SkipSelect;
