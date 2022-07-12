import { ToggleButtonGroup, ToggleButton, Typography, Grid } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet, } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Spinner from "../spinner/Spinner";
import BarChart from "../barChart/BarChart";

const QuartYearStat = (props) => {
  // console.log('render QuartStat')

  const { data } = props;
  const [statDat, setStatDat] = useState([]);

  const getMonthName = (monthNum) => {
    const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return monthArr[monthNum.getMonth()]
  }
  useEffect(() => {
    setStatDat(data);
  }, [data]);

  const [barIndicator, setBarIndicator] = useState('occupancy');

  const handlebarIndicator = (event, newBarIndicator) => {
    setBarIndicator(newBarIndicator);
  };
  //создание массива данных для построения графика загрузки/ср тарифа/доходов
  const mapStatData = (keys) => statDat.map(data => keys.reduce((keyValue, key) => {
    keyValue[key] = data[key];
    return keyValue;
  }, {}));

  const mapData = (arr, key) => {
    arr.map(({ key, ...num }) => (num.value = num.key, num));
    return arr;
  }

  let newStatData;
  switch (barIndicator) {
    case 'occupancy':
      newStatData = mapStatData(["date", "occupancy"]);
      // newStatData.map(({ occupancy, ...num }) => (num.value = num.occupancy, num));
      newStatData = mapData(newStatData, newStatData.occupancy);
      newStatData.length > 3 ? (newStatData.forEach(num => (num.value = Math.round(num.occupancy), num.date = num.date.split('.')[0], num.color = '#69A1AC', delete num.occupancy))) : (newStatData.forEach(num => (num.value = Math.round(num.occupancy), num.date = getMonthName(new Date(num.date.split('.')[0])), num.color = '#69A1AC', delete num.occupancy)));
      break;
    case 'averege':
      newStatData = mapStatData(["date", "averege"]);
      newStatData = mapData(newStatData, newStatData.averege);
      newStatData.length > 3 ? (newStatData.forEach(num => (num.value = Math.round(num.averege), num.date = num.date.split('.')[0], num.color = '#676EBC', delete num.averege))) : (newStatData.forEach(num => (num.value = Math.round(num.averege), num.date = getMonthName(new Date(num.date.split('.')[0])), num.color = '#676EBC', delete num.averege)));
      break;
    case 'income':
      newStatData = mapStatData(["date", "income"]);
      newStatData = mapData(newStatData, newStatData.income);
      newStatData.length > 3 ? (newStatData.forEach(num => (num.value = Math.round(num.income), num.date = num.date.split('.')[0], num.color = '#E58B1E', delete num.income))) : (newStatData.forEach(num => (num.value = Math.round(num.income), num.date = getMonthName(new Date(num.date.split('.')[0])), num.color = '#E58B1E', delete num.income)));
      break;
    default:
      newStatData = mapStatData(["date", "occupancy"]);
      newStatData = mapData(newStatData, newStatData.occupancy);
      newStatData.length > 3 ? (newStatData.forEach(num => (num.value = Math.round(num.occupancy), num.date = num.date.split('.')[0], num.color = '#69A1AC', delete num.occupancy))) : (newStatData.forEach(num => (num.value = Math.round(num.occupancy), num.date = getMonthName(new Date(num.date.split('.')[0])), num.color = '#69A1AC', delete num.occupancy)));
      break;
  }

  const CustomToggleBtn = styled(ToggleButton)(({ selectedcolor }) => ({
    width: 258,
    height: 35,
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 400,
    border: 'none',
    borderRadius: 5,
    color: selectedcolor,
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: selectedcolor,
      color: "white"
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: selectedcolor,
    }
  }))

  return (
    <>
      {!statDat ? <Spinner /> :
        <Grid container mt={6} justifyContent="center" >
          <Grid item lg={6} l={7} md={8} s={10} sm={12} xs={12}>
            <BarChart stat={newStatData} />
          </Grid>
          <Grid item lg={6} l={5} md={12} sm={12} xs={12} sx={{ textAlign: { xs: 'center', l: 'right' } }}>
            <ToggleButtonGroup
              orientation='vertical'
              value={barIndicator}
              exclusive
              onChange={handlebarIndicator}
            >
              <CustomToggleBtn value="occupancy" selectedcolor='#69A1AC'>
                <DateRange sx={{ mr: 1 }} />
                <Typography variant="body1">Загрузка</Typography>
              </CustomToggleBtn>
              <CustomToggleBtn value="averege" selectedcolor='#676EBC' >
                <Analytics sx={{ mr: 1 }} />
                <Typography variant="body1">Средний тариф</Typography>
              </CustomToggleBtn>
              <CustomToggleBtn value="income" selectedcolor='#E58B1E'>
                <AccountBalanceWallet sx={{ mr: 1 }} />
                <Typography variant="body1">Доход</Typography>
              </CustomToggleBtn>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      }
    </>
  )
}

export default QuartYearStat;