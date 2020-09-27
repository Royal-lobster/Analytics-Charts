import React, { useState } from "react";
import Chart from "./Chart.jsx";
import { Route, Switch } from "react-router";
import Selector from "./Selector.jsx";
import ChartScreen from "./ChartScreen.jsx";

function App() {
  const barData = {
    labels: ["week 1", "week 2", "week 3", "week 4", "week 5"],
    datasets: [
      {
        stack: "stack",
        label: "photos",
        backgroundColor: "#caf270",
        data: [1200, 4000, 3000, 5000, 1000],
      },
      {
        stack: "stack",
        label: "link",
        backgroundColor: "#45c490",
        data: [0, 9, 0, 800, 100],
      },
      {
        stack: "stack",
        label: "video",
        backgroundColor: "#008d93",
        data: [2000, 9, 100, 700, 0],
      },
    ],
  };
  const pieData = {
    labels: [
      "page_profile",
      "page_invite_pending_invite_screen_accept_invite",
      "page_timeline",
      "feed_story",
      "mobile_app",
      "search",
      "page_browser_invite",
      "api",
      "vertical_list_pyml",
    ],
    datasets: [
      {
        label: "page_profile",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        data: [452, 30, 30, 20, 19, 5, 2, 1, 1],
      },
    ],
  };
  return (
    <Switch>
      <Route exact path="/" component={Selector} />
      <Route
        exact
        path="/week-wise-performance"
        render={() => (
          <ChartScreen
            title="Week wise performance"
            data={barData}
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
            data={barData}
            type="line"
          />
        )}
      />
      <Route
        exact
        path="/logged-in-tab-views"
        render={() => (
          <ChartScreen title="Logged-in Tab Views" data={barData} type="pie" />
        )}
      />
      <Route
        exact
        path="/daily-like-source"
        render={() => (
          <ChartScreen title="Daily Like Source" data={pieData} type="pie" />
        )}
      />
      <Route
        exact
        path="/likes-vs-unlikes"
        render={() => (
          <ChartScreen title="Likes vs Unlikes" data={barData} type="pie" />
        )}
      />
      <Route
        exact
        path="/audience-demographic"
        render={() => (
          <ChartScreen title="Audience Demographic" data={barData} type="pie" />
        )}
      />
      <Route
        exact
        path="/demographic-insight"
        render={() => (
          <ChartScreen title="Demographic Insight" data={barData} type="pie" />
        )}
      />
    </Switch>
  );
}

export default App;
