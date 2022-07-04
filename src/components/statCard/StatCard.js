import { Box, ToggleButtonGroup, ToggleButton, } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { getData } from "../services/services";
import MonthPicker from "../monthPicker/MonthPicker";
import MonthStat from "../monthStat/MonthStat";
import QuarterStat from "../quarterStat/QuarterStat";
import YearStat from "../yearStat/YearStat";

import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ruLocale from 'date-fns/locale/ru'


//НЕ ИСПОЛЬЗУЕТСЯ
const StatCard = (props) => {
  console.log('render statcard')
  const [value, setValue] = useState(new Date());
  const { apartId } = props;

  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCurrentDate = (value) => {
    // let currentMonth = value.getMonth();
    // let currentYear = value.getYear();
    let currentDate = [ value.getMonth() + 1 + '.' + value.getFullYear()];
    return currentDate;
  }
  const getQuartal = (value) => {
    let currentMonth = value.getMonth();
    let currentYear = value.getFullYear();
    const quartalArr = [currentMonth - currentMonth%3, currentMonth - currentMonth%3 + 1, currentMonth - currentMonth%3 + 2].map(item => item + '.' + currentYear);
    return quartalArr
  }
 
//придумать фукнцию которая будет преобразововать вэлью в массив строк
  useEffect(() => {
    const apartments = JSON.parse(localStorage.getItem('apartments'));
    getData('getApartStatistic', {
      // apartment_id: apartments[0].id,
      apartment_id: 15,

      contract_id: "123",
      date: getCurrentDate(value)
    })
      .then(res => {
        // console.log('юзэффект в стат кард')
        setStatistics(res.response);
        setLoading(false)
      })
  }, [value]);

  const [statMonth, setStatMonth] = useState('month');

  const handleStatMonth = (event, newStatMonth) => {
    setStatMonth(newStatMonth);
  };
  function renderStatComponent(val) {
    switch (val) {
      case 'month':
        //здесь функция которая создаст массив с датой
        //отправится запрос на сервер
        //получатся данные и пропом передатуся в рендерящийся компонент
        return (<MonthStat 
          date = {getCurrentDate(value)} value={value}/>);
      case 'quartal':
        return (<QuarterStat date = {getQuartal(value)} />);
      case 'year':
        return (<YearStat />);
      default:
        return (<MonthStat date = {getCurrentDate(value)}/>);
    }
  }

  const statComponent = renderStatComponent(statMonth);

  const CustomToggleBtn = styled(ToggleButton)({
    width: 85,
    height: 36,
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 400,
    '&:hover': {
      backgroundColor: 'rgba(9, 109, 217, 1)',
      color: "white"
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: 'rgba(9, 109, 217, 1)',
    }
  })

  return (
    <>
      <Box maxWidth='550px' sx={{ display: 'flex', flexDirection: { xs: 'column', s: 'row' }, justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <ToggleButtonGroup
          color="primary"
          value={statMonth}
          exclusive
          onChange={handleStatMonth}
        >
          <CustomToggleBtn value="month" >
            Месяц
          </CustomToggleBtn>
          <CustomToggleBtn value="quartal">
            Квартал
          </CustomToggleBtn>
          <CustomToggleBtn value="year">
            Год
          </CustomToggleBtn>
        </ToggleButtonGroup>

        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
          <DesktopDatePicker
            views={['month', 'year']}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField sx={{ '& .MuiOutlinedInput-input ': { padding: 1, border: 'none' }, '& .MuiPaper-root css-etx8xs': { backgroundColor: '#096DD9' } }} {...params} />}
          />
        </LocalizationProvider>

        {/* <MonthPicker /> */}
      </Box>
      {statComponent}

      <Outlet />
    </>
  )
}
export default StatCard;