import { Chart, BarSeries, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui'
import { Animation, Tooltip } from '@devexpress/dx-react-chart'
import { useState, useEffect } from "react";

const BarChart = (stat) => {
  // console.log('render BarChart')
  const [statData, setStatData] = useState([]);
  useEffect(() => {
    setStatData(stat.stat);
  })

  const getPath = (x, width, y, y1) =>
    `M ${x} ${y1}
      H ${width + x}
      V ${y}
      H ${x} 
      Z`;


  const BarWithLabel = ({ arg, barWidth, maxBarWidth, val, startVal, color, value, style, }) => {
    const width = maxBarWidth * barWidth;
    return (
      <>
        <linearGradient id="linear-gradient" x2='0%' y2='100%'>
          <stop offset="0%" stopColor={statData[0].color} />
          <stop offset="100%" stopColor='rgb(245, 245, 245)' />
        </linearGradient>
        <path d={getPath(arg - width / 2, width, val, startVal)} fill="url(#linear-gradient)" style={style} />
        <Chart.Label
          x={arg}
          y={(val - 4)}
          width={100}
          textAnchor="middle"
          fontSize='12px'
          color={statData[0].color}
        >
          {value}
        </Chart.Label>
      </>
    )
  }

  return (
    <Chart data={statData}
      height={300}
    >
      <ArgumentAxis />
      <ValueAxis max={100} />
      <BarSeries
        valueField='value'
        argumentField='date'
        pointComponent={BarWithLabel}
        color='color'
      />
      <Tooltip />
      <Animation />
    </Chart>
  )
}

export default BarChart;
