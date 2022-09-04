import React, { useState } from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((chart) => (
        <ChartBar
          key={chart.key}
          value={chart.value}
          maxValue={totalMaximum}
          label={chart.label}
        />
      ))}
    </div>
  );
};

export default Chart;
