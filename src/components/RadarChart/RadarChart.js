import React from 'react';
import PropTypes from 'prop-types'
import style from '../../styles/radarChart.module.css'

const RadarChart = ({data, labels}) => {

  const chartSize = 600;
  const numberOfScales = 5;
  const maxValue = 100;
  const sin30 = 0.5;
  const cos30 = 0.86602;
  const radius = 200;
  const points = [
    [0, 1],
    [cos30, sin30],
    [cos30, -sin30],
    [0, -1],
    [-cos30, -sin30],
    [-cos30, sin30]
  ];

  const labelModifier = [
    [1, 1.2, 'center'],
    [1.1 ,1.2, 'left'],
    [1.1 ,1.2, 'left'],
    [1,1.1, 'center'],
    [1.5,1.2, 'right'],
    [1.5,1.2, 'right']
  ];

  const scalePoints = (radius) => {
    return points.map(point => [point[0] * radius, point[1] * radius]);
  };

  const axisPoints = () => {
    const escalatedPoints = scalePoints(radius);
    return escalatedPoints.map(escalatedPoint => [[0,0], escalatedPoint]);
  };

  const shapePoints = () => {
    const normalizedData = data.map(d => radius * d/maxValue);
    return normalizedData.map((val, i) =>
      [val * points[i][0], val * -points[i][1]]
    );
  };

  const scale = value => {
    const points = scalePoints(value / numberOfScales * radius);
    return (
    <polygon
      key={`scale-${value}`}
      points={points}
      fill="rgba(0,0,0,0)"
      stroke="#CADAFF"
      strokeWidth="0.2"
    />
  )};

  const axis = () => (
    <polyline
      key={`axix`}
      points={axisPoints()}
      stroke="#21232E"
      strokeWidth=".7"
    />
  );

  const shape = () => (
    <polygon
      key={`shape`}
      points={shapePoints()}
      fill="#5368E0"
      stroke="#5368E0"
      strokeWidth="0.7"
    />
  );


  const dataLabelShape = (text, i) => {
    const twoLineText = text.split(' ');
    const x = points[i][0] * radius * labelModifier[i][0] + (i % 3 === 0 ? -40: 0);
    const y = -points[i][1] * radius * labelModifier[i][1];
    return (
      <text
        key={`caption-of-${i}`}
        x={x}
        y={y}
        dy={10 / 2}
        fill="#444"
        fontWeight="400"
        style={{'text-align': 'right'}}
      >
        {twoLineText.map((lineText, lineTextIndex) => (
          <tspan x={x} y={y + 30 * lineTextIndex}>{lineText}</tspan>
        ))}
      </text>
    )
  };

  const groups = [];
  const scales = [];
  for (let i = numberOfScales; i > 0; i--) {
    scales.push(scale(i));
  }

  groups.push(<g key={`shape`}>{shape()}</g>);
  groups.push(<g key={`scales`}>{scales}</g>);
  groups.push(<g key={`axis`}>{axis()}</g>);
  groups.push(<g key={`text`}>{labels.map((text, i) => dataLabelShape(text, i))}</g>);


  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={chartSize}
      height={chartSize}
      viewBox={`0 0 ${chartSize} ${chartSize}`}
      className={style.container}
    >
      <g transform={`translate(${radius+100},${radius+100})`}>{groups}</g>
    </svg>
  )
};

RadarChart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired
};

export default RadarChart;
