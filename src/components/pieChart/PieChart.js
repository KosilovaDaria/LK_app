import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui'
import { Animation, Legend } from '@devexpress/dx-react-chart'


const PieChart = (props) => {
// console.log(props.data);
// const data = props.data;
// console.log(data);

  const chartData = [
    { sector: 'first', area: 73, occupancy: 'Загрузка 73%' },
    { sector: 'second', area: 27, occupancy: 'Загрузка 23%' },
  ]
  return (
    <Chart data={chartData}
      width={200}
      height={200}>
      <PieSeries
        valueField='area'
        argumentField='area'
        outerRadius={1.2}
        innerRadius={0.7}
      />
      <Title text={chartData[0].occupancy}></Title>
      <Animation />
    </Chart>
  )
}

export default PieChart;


