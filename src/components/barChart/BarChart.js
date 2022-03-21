import { Chart, BarSeries, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui'
import { Animation, Tooltip } from '@devexpress/dx-react-chart'
import { useState, useEffect } from "react";


const BarChart = (stat) => {
  console.log(stat.stat.stat)
  const [statData, setStatData] = useState([]);
  useEffect(() => {
    setStatData(stat.stat.stat);
  })
  // console.log(statData)


  const chartData = [
    { month: 'апрель', value: 62, units: '%' },
    { month: 'май', value: 91, units: '%' },
    { month: 'июнь', value: 83, units: '%' },
  ]
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
        <path d={getPath(arg - width / 2, width, val, startVal)} fill={color} style={style} />
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
    <Chart data={chartData}
      width={500}
      height={300}>
      <ArgumentAxis />
      <ValueAxis max={100} showGrid={false} />
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
