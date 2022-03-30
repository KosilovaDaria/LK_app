import { Button, ToggleButtonGroup, ToggleButton, Box, Typography, Grid, Stack, MenuItem } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet, ArrowBackIos } from '@mui/icons-material';
import BarChart from "../barChart/BarChart";
import { useState } from "react";
import {  styled } from '@mui/material/styles';
import './style.css';

const QuarterStat = (stat) => {
  const statData = [
    {
      month: "march",
      occupancy: 73,
      averege: 1325,
      income: 48250
    },
    {
      month: "february",
      occupancy: 83,
      averege: 1178,
      income: 45732
    },
    {
      month: "junuary",
      occupancy: 62,
      averege: 987,
      income: 36587
    }
  ]

  const [barIndicator, setBarIndicator] = useState('occupancy');

  const handlebarIndicator = ( event, newBarIndicator ) => {
    setBarIndicator(newBarIndicator);
  };
console.log(barIndicator)
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
      newStatData.map(({occupancy, ...num}) => (num.value = num.occupancy, num));
      newStatData.forEach(num => (num.value = num.occupancy, delete num.occupancy));
      break;
    case 'averege':
      newStatData = mapStatData(["month", "averege"]);
      newStatData.map(({averege, ...num}) => (num.value = num.averege, num));
      newStatData.forEach(num => (num.value = num.averege, delete num.averege));
      break;
    case 'income':
      newStatData = mapStatData(["month", "income"]);
      newStatData.map(({income, ...num}) => (num.value = num.income, num));
      newStatData.forEach(num => (num.value = num.income, delete num.income));
      break;
    default:
      newStatData = mapStatData(["month", "occupancy"]);

      newStatData.map(({occupancy, ...num}) => (num.value = num.occupancy, num));
      newStatData.forEach(num => (num.value = num.occupancy, delete num.occupancy));

      break;
  } 

  const CustomToggleBtn = styled(ToggleButton) (({ customColor }) => ({
    width: 258,
    height:35,
    textTransform: 'none',
    fontSize: 16,
    border:'none',
    borderRadius: 5,
    color: customColor,
    justifyContent:'flex-start',
    '&:hover':{
      backgroundColor: customColor,
      color:"white"
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: customColor
    }
  

  }))

  return (
    <Grid container mt={6}>
      <Grid item md={8} sm={12}>

        <BarChart stat={newStatData} />
      </Grid>
      <Grid item md={4} sm={12}>
      {/* <ToggleButtonGroup
          orientation="vertical"
          exclusive
          
        > */}
          <CustomToggleBtn 
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
          </CustomToggleBtn>
        {/* </ToggleButtonGroup>  */}



         {/* <ToggleButtonGroup
          orientation="vertical"
          value={barIndicator}
          exclusive
          onChange={handlebarIndicator}
        >
          <CustomToggleBtn value="occupancy" customColor='#69A1AC'>
            <DateRange sx={{mr:1}}/> Загрузка
          </CustomToggleBtn>
          <CustomToggleBtn value="averege" customColor='#676EBC'
          >
            <Analytics sx={{mr:1}}/> Средний тариф
          </CustomToggleBtn>
          <CustomToggleBtn value="income" customColor='#E58B1E'
          >
            <AccountBalanceWallet sx={{ mr: 1 }} />Доход
          </CustomToggleBtn>
        </ToggleButtonGroup>  */}


        {/* <Stack alignItems="flex-start">
        
          <Button onClick={(e) => handlebarIndicator("occupancy", e) }
           sx={{textTransform:'none', color:'rgb(105, 161, 172)',
            '&:hover':
            { backgroundColor:'rgb(105, 161, 172)', color:'rgb(255, 255, 255)'},
            '&:selected':
            { backgroundColor:'rgb(105, 161, 172)', color:'rgb(255, 255, 255)'},
             }}>
            <DateRange sx={{mr:1}}/>Загрузка
            </Button>
          <Button onClick={(e) => handlebarIndicator("averege", e)}
           sx={{textTransform:'none', color:'rgb(103, 110, 188)', '&:hover':{ backgroundColor:'rgb(103, 110, 188)', color:'rgb(255, 255, 255)'}}}>
            <Analytics sx={{mr:1}}/>Средний тариф
            </Button>
          <Button onClick={(e) => handlebarIndicator("income", e)}
          sx={{textTransform:'none', color:'rgb(229, 139, 30)', '&:hover':{ backgroundColor:'rgb(229, 139, 30)', color:'rgb(255, 255, 255)'}}}>
            <AccountBalanceWallet sx={{ mr: 1 }} />Доход
            </Button>
        </Stack> */}

      </Grid>
    </Grid>
  )
}

export default QuarterStat;