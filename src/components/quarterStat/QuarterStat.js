import { Button, ToggleButtonGroup, ToggleButton, Box, Typography, Grid, Stack, MenuItem } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet, ArrowBackIos } from '@mui/icons-material';
import BarChart from "../barChart/BarChart";
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { getData } from "../services/services";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";

const QuarterStat = (props) => {
  // const { apartmentId } = useParams();

  // console.log('render QuartStat')
  const {data} = props;
  console.log(data);
  // const [loading, setLoading] = useState(true);
  const [statDat, setStatDat] = useState([]);

  const getMonthName = (monthNum) => {
    const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return monthArr[monthNum.getMonth()]
  }
  useEffect(() => {
    setStatDat(data);
    // const mapData = data.map(item=> getMonthName(new Date(item.date.split('.')[0])));
    // setStatDat(...data, mapData );
    console.log('useEffect')
    // newData(statDat);
  //   getData('getApartStatistic', {
  //     apartment_id: apartmentId,
  //     // contract_id: "123",
  //     date: date
  //   })
  //     .then(res => {
  //       setStatDat(res.response);
  //       setLoading(false)
  //     })
  }, [data]);
 console.log(statDat);

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
    arr.map(({key, ...num}) => (num.value = num.key, num));
    return arr;  
  }
  // const addColorToarr = (arr, key, clr) => {
  //   arr.forEach(num => (num.value =  Math.round(num.key), num.color = clr, delete num.key));
  //   return arr;
  // }
  

  let newStatData;
  //написать функцию по замене названия ключа индикатора на value
  switch (barIndicator) {
    case 'occupancy':
      newStatData = mapStatData(["date", "occupancy"]);
      // newStatData.map(({ occupancy, ...num }) => (num.value = num.occupancy, num));
      newStatData = mapData(newStatData, newStatData.occupancy);
      // newStatData = addColorToarr(newStatData, newStatData.occupancy, '#69A1AC' )
       newStatData.forEach(num => (num.value =  Math.round(num.occupancy), num.date = getMonthName( new Date(num.date.split('.')[0])),  num.color = '#69A1AC', delete num.occupancy));
      // newStatData.forEach(num => (num.value =  Math.round(num.occupancy),   num.color = '#69A1AC', delete num.occupancy));
      break;
    case 'averege':
      newStatData = mapStatData(["date", "averege"]);
      newStatData = mapData(newStatData, newStatData.averege);
      // newStatData.map(({ averege, ...num }) => (num.value = num.averege, num));
      newStatData.forEach(num => (num.value =  Math.round(num.averege), num.date = getMonthName( new Date(num.date.split('.')[0])), num.color = '#676EBC', delete num.averege));
      break;
    case 'income':
      newStatData = mapStatData(["date", "income"]);
      newStatData = mapData(newStatData, newStatData.income);
      // newStatData.map(({ income, ...num }) => (num.value = num.income, num));
      newStatData.forEach(num => (num.value =  Math.round(num.income), num.date = getMonthName( new Date(num.date.split('.')[0])), num.color = '#E58B1E', delete num.income));
      break;
    default:
      newStatData = mapStatData(["date", "occupancy"]);
      newStatData = mapData(newStatData, newStatData.occupancy);
      // newStatData.map(({ occupancy, ...num }) => (num.value = num.occupancy, num));
      newStatData.forEach(num => (num.value = Math.round(num.occupancy), num.date = getMonthName( new Date(num.date.split('.')[0])), num.color = '#69A1AC', delete num.occupancy));

      break;
  }
  // console.log(newStatData)

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
    <>
    {!statDat ? <Spinner/> : 
    <Grid container mt={6} justifyContent="center" >
      <Grid item lg={6} l={7} md={8} s={10} sm={12} xs={12}>
        <BarChart stat={newStatData}/>
      </Grid>
      <Grid item lg={6} l={5} md={12} sm={12} xs={12} sx={{textAlign:{xs:'center', l:'right'}}}>
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
  }
  </>
  )
}

export default QuarterStat;