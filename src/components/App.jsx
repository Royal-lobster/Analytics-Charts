import React from "react";
import { Route, Switch } from "react-router";
import Selector from "./Selector.jsx";
import ChartScreen from "./ChartScreen.jsx";
import {
  weekWisePerformance,
  dailyLikeSource,
  dailyTotalFrequencyDistribution,
} from "../data";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Selector} />
      <Route
        exact
        path="/week-wise-performance"
        render={() => (
          <ChartScreen
            title="Week wise performance"
            data={weekWisePerformance}
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
            data={dailyTotalFrequencyDistribution}
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
            data={weekWisePerformance}
            type="pie"
          />
        )}
      />
      <Route
        exact
        path="/daily-like-source"
        render={() => (
          <ChartScreen
            title="Daily Like Source"
            data={dailyLikeSource}
            type="pie"
          />
        )}
      />
      <Route
        exact
        path="/likes-vs-unlikes"
        render={() => (
          <ChartScreen
            title="Likes vs Unlikes"
            data={weekWisePerformance}
            type="pie"
          />
        )}
      />
      <Route
        exact
        path="/audience-demographic"
        render={() => (
          <ChartScreen
            title="Audience Demographic"
            data={weekWisePerformance}
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
            data={weekWisePerformance}
            type="pie"
          />
        )}
      />
    </Switch>
  );
}

export default App;
