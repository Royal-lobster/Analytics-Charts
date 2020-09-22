import React from "react";
import { Link } from "react-router-dom";
import "./Selector.css";
function Selector() {
  return (
    <div className="selector">
      <div className="selector__header">
        <h1>Company Facebook Analitics</h1>
      </div>
      <Link to="/week-wise-performance" className="selector__link">
        Week wise performance
      </Link>
      <Link to="/daily-total-frequency-distribution" className="selector__link">
        Daily Total frequency distribution
      </Link>
      <Link to="/logged-in-tab-views" className="selector__link">
        Logged-in Tab Views
      </Link>
      <Link to="/daily-like-source" className="selector__link">
        Daily Like Source
      </Link>
      <Link to="/likes-vs-unlikes" className="selector__link">
        Likes vs Unlikes
      </Link>
      <Link to="/audience-demographic" className="selector__link">
        Audience Demographic
      </Link>
      <Link to="/demographic-insight" className="selector__link">
        Demographic Insight
      </Link>
    </div>
  );
}

export default Selector;
