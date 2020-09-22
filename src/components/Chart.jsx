import React from "react";
import { Bar, Line, Pie, Area } from "react-chartjs-2";
import "./Chart.css";

function Chart({ data, type, h, w }) {
  if (type === "bar") {
    return (
      <div className="chart">
        <Bar
          data={data}
          options={{}}
          width={w}
          height={h}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  } else if (type === "line") {
    return (
      <div className="chart">
        <Line
          data={data}
          options={{}}
          width={w}
          height={h}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  } else if (type === "pie") {
    return (
      <div className="chart__container">
        <div className="chart">
          <Pie
            data={data}
            options={{}}
            width={w}
            height={h}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    );
  } else if (type === "area") {
    return (
      <div className="chart">
        <Area
          data={data}
          options={{}}
          width={w}
          height={h}
          options={{
            maintainAspectRatio: false,
            plugins: {
              filler: {
                propagate: true,
              },
            },
          }}
        />
      </div>
    );
  } else {
    return <h1>Please specify correct type</h1>;
  }
}

export default Chart;
