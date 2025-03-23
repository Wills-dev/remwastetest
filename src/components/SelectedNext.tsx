const SelectedNext = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] py-4 animate-slide z-50">
      <div className="padding-ctn">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-base"></h3>
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#0037C1]">£</span>
              <span className="text-sm text-gray-400 ml-2">7 days</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-secondary w-full text-base">Back</button>
            <button className="btn-primary w-full text-base">Continue</button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <p className="text-sm text-gray-400">4</p>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#0037C1]">£</span>
              <span className="text-sm text-gray-400 ml-2">7 day hire</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-secondary text-base">Back</button>
            <button className="btn-primary flex items-center gap-2 text-base">
              Continue
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedNext;
