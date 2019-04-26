import React from "react"
import {STATS} from "../data/stats";
import RadarChart from "./RadarChart/RadarChart";

const AboutMeStats = () => {
  return (
    <RadarChart
      data={STATS.data}
      labels={STATS.labels}
    />
  )
};

export default AboutMeStats;
