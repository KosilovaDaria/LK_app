import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui'
import { Animation, Legend } from '@devexpress/dx-react-chart'


const PieChart = ({data}) => {

// console.log(data);
// const newdata = data.find(item => item.month == 'march' );

// //  const mapStatData = (keys) => data.find(item => keys.reduce((keyValue, key) => {
// //   keyValue[key] = data[key];
// //     return keyValue;
// //   }, {}));
//   //  console.log(mapStatData(["month", "occupancy"]));
// console.log(newdata)
const per = 80;
  const chartData = [
    { sector: 'first', area: `${per}`, occupancy: 'Загрузка 73%' },
    { sector: 'second', area: 20, occupancy: 'Загрузка 23%' },
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


