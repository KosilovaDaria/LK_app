import { Chart, BarSeries, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui'
import { Animation, Tooltip } from '@devexpress/dx-react-chart'
import { useState, useEffect } from "react";


const BarChart = (stat) => {
  const [statData, setStatData] = useState([]);
  useEffect(() => {
    setStatData(stat.stat);
  })
  // console.log(statData)


  const getPath = (x, width, y, y1) =>
     `M ${x} ${y1}
      H ${width + x}
      V ${y}
      H ${x} 
      Z`;

  const labelStyle = { fill: 'rgb(105, 161, 172)', fontSize: '30px' };
  
  const BarWithLabel = ({ arg, barWidth, maxBarWidth, val, startVal, color, value, style, }) => {
    const width = maxBarWidth * barWidth;
    return (
      <>
        <linearGradient id="linear-gradient" x2='0%' y2='100%'>
          <stop offset="0%"  stopColor='rgb(105, 161, 172)' />
          <stop offset="100%"  stopColor='rgb(245, 245, 245)' />
        </linearGradient>
        <path d={getPath(arg - width / 2, width, val, startVal)} fill="url(#linear-gradient)" style={style} />
        <Chart.Label
          x={arg}
          y={(val - 4)}
          width={100}
          textAnchor="middle"
          style={labelStyle}>
          {value}
        </Chart.Label>
      </>
    )
  }

  return (
    <Chart data={statData}
      width={600}
      height={300}>
      <ArgumentAxis />
      <ValueAxis max={100}  />
      <BarSeries
        valueField='value'
        argumentField='month'
        pointComponent={BarWithLabel}
        color='rgb(105, 161, 172)'
      />
      <Tooltip />
      <Animation />
    </Chart>
  )
}

export default BarChart;
