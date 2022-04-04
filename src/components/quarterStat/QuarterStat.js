import { Button, ToggleButtonGroup, ToggleButton, Box, Typography, Grid, Stack, MenuItem } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet, ArrowBackIos } from '@mui/icons-material';
import BarChart from "../barChart/BarChart";
import { useState } from "react";
import { styled } from '@mui/material/styles';

const QuarterStat = (stat) => {
  const statData = [
    {
      month: "Март",
      occupancy: 73,
      averege: 1325,
      income: 48250
    },
    {
      month: "Февраль",
      occupancy: 83,
      averege: 1178,
      income: 45732
    },
    {
      month: "Январь",
      occupancy: 62,
      averege: 987,
      income: 36587
    }
  ]

  const [barIndicator, setBarIndicator] = useState('occupancy');

  const handlebarIndicator = (event, newBarIndicator) => {
    setBarIndicator(newBarIndicator);
  };
  //создание массива данных для построения графика загрузки/ср тарифа/доходов
  const mapStatData = (keys) => statData.map(data => keys.reduce((keyValue, key) => {
    keyValue[key] = data[key];
    return keyValue;
  }, {}));

  let newStatData;
  //написать функцию по замене названия ключа индикатора на value
  switch (barIndicator) {
    case 'occupancy':
      newStatData = mapStatData(["month", "occupancy"]);
      newStatData.map(({ occupancy, ...num }) => (num.value = num.occupancy, num));
      newStatData.forEach(num => (num.value = num.occupancy, delete num.occupancy));
      break;
    case 'averege':
      newStatData = mapStatData(["month", "averege"]);
      newStatData.map(({ averege, ...num }) => (num.value = num.averege, num));
      newStatData.forEach(num => (num.value = num.averege, delete num.averege));
      break;
    case 'income':
      newStatData = mapStatData(["month", "income"]);
      newStatData.map(({ income, ...num }) => (num.value = num.income, num));
      newStatData.forEach(num => (num.value = num.income, delete num.income));
      break;
    default:
      newStatData = mapStatData(["month", "occupancy"]);

      newStatData.map(({ occupancy, ...num }) => (num.value = num.occupancy, num));
      newStatData.forEach(num => (num.value = num.occupancy, delete num.occupancy));

      break;
  }

  const CustomToggleBtn = styled(ToggleButton)(({ selectedcolor }) => ({
    width: 258,
    height: 35,
    textTransform: 'none',
    fontSize: 20,
    fontWeight:400,
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
    <Grid container mt={6}  >
      <Grid item lg={6} l={7} md={8} s={10} sm={12} >
        <BarChart stat={newStatData} />
      </Grid>
      <Grid item lg={6} l={5} md={5} sm={5} xs={5} textAlign='right'>
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
          <CustomToggleBtn value="averege" selectedcolor='#676EBC'
          >
            <Analytics sx={{ mr: 1 }} /> 
            <Typography variant="body1">Средний тариф</Typography>
          </CustomToggleBtn>
          <CustomToggleBtn value="income" selectedcolor='#E58B1E'
          >
            <AccountBalanceWallet sx={{ mr: 1 }} /> 
            <Typography variant="body1">Доход</Typography>
          </CustomToggleBtn>
        </ToggleButtonGroup>


        {/* <CustomToggleBtn 
          value='occupancy'
          onChange={()=> setBarIndicator('occupancy')} 
          customColor='#69A1AC'
          selected= {true }>
            <DateRange sx={{mr:1}}/> Загрузка
          </CustomToggleBtn>
          <CustomToggleBtn 
          value='averege'
          onChange={()=> setBarIndicator('averege')} 
          customColor='#676EBC'
          >
            <Analytics sx={{mr:1}}/> Средний тариф
          </CustomToggleBtn>
          <CustomToggleBtn 
          value='income'
          onChange={()=> setBarIndicator('income')} 
          customColor='#E58B1E'
          >
            <AccountBalanceWallet sx={{ mr: 1 }} />Доход
          </CustomToggleBtn> */}
      </Grid>
    </Grid>
  )
}

export default QuarterStat;