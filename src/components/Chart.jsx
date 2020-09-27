import React from "react";
import { Bar, Line, Pie, Area } from "react-chartjs-2";
import "./Chart.css";

function Chart({ data, type, h, w }) {
  if (type === "bar") {
    return (
      <div className="chart">
        <Bar
          data={data}
          options={{
            tooltips: {
              displayColors: true,
              callbacks: {
                mode: "x",
              },
            },
            scales: {
              xAxes: [
                {
                  stacked: true,
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  stacked: true,
                  ticks: {
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: { position: "bottom" },
          }}
          width={w}
          height={h}
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
            width={w}
            height={h}
            options={{
              maintainAspectRatio: false,
              legend: {
                position: "left",
              },
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
