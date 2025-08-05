import React from "react";
import BarChart from "./bar-chart";

const BarChartDemo = () => {
  // Sample data that matches the image description
  // Starting high (8 blocks), decreasing, with small peaks around middle and end
  const sampleData = [
    8, 7, 6, 5, 4, 3, 2, 2, 1, 3, 2, 1, 1, 1, 1, 3, 2, 1, 1, 1,
  ];

  return (
    <div className="p-8">
      <BarChart
        title="PREPAID SHARE TODAY"
        heroNumber="6%"
        heroPercentage="6%"
        data={sampleData}
      />
    </div>
  );
};

export default BarChartDemo;
