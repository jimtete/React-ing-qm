import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

function Chart(args) {

  const dataPointValues = args.dataPoints.map((dp) => dp.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {args.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
