import React from "react";

interface BarChartProps {
  title: string;
  heroNumber: string;
  heroPercentage: string;
  data: number[]; // Array of numbers representing bar heights
}

const BarChart: React.FC<BarChartProps> = ({
  title,
  heroNumber,
  heroPercentage,
  data,
}) => {
  return (
    <div className="bg-black text-gray-300 p-6 rounded-lg font-mono w-full">
      {/* Header Section */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-2">{title}</div>
        <div className="flex items-center gap-2">
          <div className="text-green-400 text-2xl">↗</div>
          <div className="text-green-400 text-3xl font-bold">
            {heroPercentage}
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-1 h-48 w-full overflow-clip">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col-reverse w-full">
            {Array.from({ length: value }, (_, blockIndex) => (
              <div
                key={blockIndex}
                className="w-3 h-3 bg-gray-700 border border-gray-600"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
