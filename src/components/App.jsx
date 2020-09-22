import React, { useState } from "react";
import Chart from "./Chart.jsx";
import { Route, Switch } from "react-router";
import Selector from "./Selector.jsx";
import ChartScreen from "./ChartScreen.jsx";

function App() {
  const [sampleData, setSampleData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  return (
    <Switch>
      <Route exact path="/" component={Selector} />
      <Route
        exact
        path="/week-wise-performance"
        render={() => (
          <ChartScreen
            title="Week wise performance"
            data={sampleData}
            type="bar"
          />
        )}
      />
      <Route
        exact
        path="/daily-total-frequency-distribution"
        render={() => (
          <ChartScreen
            title="Daily Total frequency distribution"
            data={sampleData}
            type="line"
          />
        )}
      />
      <Route
        exact
        path="/logged-in-tab-views"
        render={() => (
          <ChartScreen
            title="Logged-in Tab Views"
            data={sampleData}
            type="pie"
          />
        )}
      />
      <Route
        exact
        path="/daily-like-source"
        render={() => (
          <ChartScreen title="Daily Like Source" data={sampleData} type="pie" />
        )}
      />
      <Route
        exact
        path="/likes-vs-unlikes"
        render={() => (
          <ChartScreen title="Likes vs Unlikes" data={sampleData} type="pie" />
        )}
      />
      <Route
        exact
        path="/audience-demographic"
        render={() => (
          <ChartScreen
            title="Audience Demographic"
            data={sampleData}
            type="pie"
          />
        )}
      />
      <Route
        exact
        path="/demographic-insight"
        render={() => (
          <ChartScreen
            title="Demographic Insight"
            data={sampleData}
            type="pie"
          />
        )}
      />
    </Switch>
  );
}

export default App;
