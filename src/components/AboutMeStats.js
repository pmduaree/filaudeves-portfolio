import React from "react"
import {STATS} from "../data/stats";
import ReactApexChart from 'react-apexcharts'

const AboutMeStats = () => {
  const options = {
    labels: STATS.captions,
    colors: ['#5368E0'],
    chart: {
      toolbar: {
        show: false
      }
    },
    grid: {
      position: 'back'
    },
    yaxis: {
      max: 100,
      tickAmount: 5
    },
    dataLabels: {
      textAnchor: 'end',
      offsetY: 100,
      offsetX: 100,
      style: {
        fontSize: 12,
        fontFamily: 'Muli',
        colors: ['#21232E']
      }
    }
  };

  const series = [{
    name: 'My Experience',
    data: STATS.data
  }];

  return (
    <ReactApexChart
      series={series}
      options={options}
      type={"radar"}
      height={520}
    />
  )
};

export default AboutMeStats;
