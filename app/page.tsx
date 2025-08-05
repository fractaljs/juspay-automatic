"use client";
import React, { useState } from "react";
import UIState from "./UIState";

const page = () => {
  const [currentState, setCurrentState] = useState<number>(0);

  const handleNext = () => {
    setCurrentState((prev) => Math.min(prev + 1, 7)); // Max state index is 7
  };

  const handlePrevious = () => {
    setCurrentState((prev) => Math.max(prev - 1, 0)); // Min state index is 0
  };

  return (
    <main className="w-full h-screen flex">
      <div className="w-1/3 h-full p-8 flex flex-col gap-4">
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm"
        >
          Next
        </button>
        <button
          onClick={handlePrevious}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium shadow-sm"
        >
          Previous
        </button>
      </div>
      <div className="w-2/3 flex-1 h-full p-8">
        <UIState state={currentState} />
      </div>
    </main>
  );
};

export default page;
