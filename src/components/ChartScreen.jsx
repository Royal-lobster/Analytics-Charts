import React from "react";
import Chart from "./Chart.jsx";
import "./ChartScreen.css";
import HeatMap from "./HeatMap.jsx";
function ChartScreen({ title, data, type }) {
  if (title === "Week wise performance") {
    return (
      <div className="chartScreen">
        <h1 className="chartScreen__title">Facebook - {title}</h1>
        <div className="chartScreen__moreCharts">
          <Chart data={data} type={type} h={500} w={500} />
          <Chart data={data} type={type} h={500} w={500} />
        </div>
      </div>
    );
  } else if (title === "Demographic Insight") {
    return (
      <div className="chartScreen">
        <h1 className="chartScreen__title">Facebook - {title}</h1>
        <HeatMap />
      </div>
    );
  } else {
    return (
      <div className="chartScreen">
        <h1 className="chartScreen__title">Facebook - {title}</h1>
        <Chart data={data} type={type} h={400} w={600} />
      </div>
    );
  }
}

export default ChartScreen;
