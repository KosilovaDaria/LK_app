import { Box, Typography, Button, IconButton, ToggleButtonGroup, ToggleButton, TextField } from "@mui/material";
import { ArrowBack, CottageOutlined, QueryStats } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';

import { useUser } from '../userContext/UserContext';
import { useAparts } from "../apartsContext/ApartsContext";
import { getData } from "../services/services";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ruLocale from 'date-fns/locale/ru';

import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import MonthStat from "../monthStat/MonthStat";
import QuartYearStat from "../quartYearStat/QuartYearStat";

const SingleApartment = () => {
  // console.log('render SingleApartment')

  const { apartmentId } = useParams();
  const { userName, getUserName } = useUser();
  const { apartList, getApartList } = useAparts();

  //функция для получения предыдущего месяца для статистики за месяц
  const getMonthBefore = () => {
    let somedate = new Date();
    somedate.setMonth(somedate.getMonth() - 1);
    somedate.setDate(1);
    return somedate;
  }

  const [date, setDate] = useState(getMonthBefore());
  const [statMonth, setStatMonth] = useState('month');
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    getApartList();
    getUserName();
  }, []);

  useEffect(() => {
    if (statMonth == 'month') {
      onRequest(getCurrentDate(date))
    } else if (statMonth == 'quartal') {
      onRequest(getQuartal(date))
    } else if (statMonth == 'year') {
      onRequest(getFullYear(date))
    }
  }, [statMonth, date]);

  const onRequest = (date) => {
    getData('getApartStatistic', {
      apartment_id: apartmentId,
      date: date
    })
      .then(res => {
        setStatistics(res.response);
      })
  }

  // Функция получения выбранного месяца и года
  const getCurrentDate = (value) => {
    let currentDate = [value.getMonth() + 1 + '.' + value.getFullYear()];
    return currentDate;
  }

  const getPrevQuartal = (value) => {
    let currentMonth = value.getMonth() + 1;
    let selectMonth = currentMonth - 1;
    let rr = [selectMonth - selectMonth % 3, selectMonth - selectMonth % 3 - 1, selectMonth - selectMonth % 3 - 2];
    return rr;
  }
  // console.log(prevQuartal(7))

  const getCurrentQuartal = (value) => {
    let currentMonth = value.getMonth() + 1;
    let selectMonth = currentMonth - 1;
    let rr = [selectMonth - selectMonth % 3 + 1, selectMonth - selectMonth % 3 + 2, selectMonth - selectMonth % 3 + 3];
    return rr;
  }

  // Функция получения массива месяцев квартала
  const getQuartal = (value) => {
    let curentQuartal = getCurrentQuartal(value);
    let _prevQuartal = getPrevQuartal(value);
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    let maxMonthOfCurQuartal = Math.max(...curentQuartal);
    let isCurQuartalClosed = currentMonth > maxMonthOfCurQuartal;
    return (isCurQuartalClosed ? curentQuartal : _prevQuartal).map(item => (item > 0) ? item + '.' + currentYear : (item + 12) + '.' + (currentYear - 1));
    // let currentMonth = value.getMonth() + 1;
    // let currentYear = value.getFullYear();
    // const quartalArr = [currentMonth - currentMonth % 3 + 1 , currentMonth - currentMonth % 3 +2, currentMonth - currentMonth % 3 +3].map(item => (item > 0) ? item + '.' + currentYear : (item + 12) + '.' + (currentYear - 1));
    // return quartalArr
  }
  // Функция получения массива месяцев года
  const getFullYear = (value) => {
    let currentYear = value.getFullYear();
    const yearArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => item + '.' + currentYear);
    return yearArr;
  }

  const handleStatMonth = (event, newStatMonth) => {
    setStatMonth(newStatMonth);
  };


  function renderApartInfo(arr) {
    const info = arr.map(item => {
      if (item.id == apartmentId) {
        return (
          <Box key={item.id}>
            <TitleBar
              arrow={<IconButton component={Link} to='/apartments' ><ArrowBack /></IconButton>}
              icon={<CottageOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0' }} />}
              title={item.name}
            />
            <Subtitle
              title='Адрес:'
              text={item.address} />
            <Subtitle
              title='Договор:'
              text={'№ ' + item.contract_num} />
            <Subtitle
              title='Владелец: '
              text={userName + ', доля владения - ' + parseInt(item.interest) * 100 + '%'} />
          </Box>
        )
      }
    })
    return (
      <>{info}</>
    )
  }
  const content = apartList ? renderApartInfo(apartList) : null;

  const monthStat = (statMonth == 'month' && statistics) ? <MonthStat data={statistics} /> : null;
  const quartStat = (statMonth == 'quartal' && statistics) ? <QuartYearStat data={statistics} /> : null;
  const yearStat = (statMonth == 'year' && statistics) ? <QuartYearStat data={statistics} /> : null


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
      {content}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', p: '10px 0px', mt: 2 }} >
        <Box width="60px"></Box>
        <QueryStats color="primary" fontSize="large" sx={{ mr: 2 }} />
        <Typography variant="h1" >Статистика по загрузке, среднему тарифу и доходам за период</Typography>
      </Box>

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
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField sx={{ '& .MuiOutlinedInput-input ': { padding: 1, border: 'none' }, '& .MuiPaper-root css-etx8xs': { backgroundColor: '#096DD9' } }} {...params} />}
          />
        </LocalizationProvider>
      </Box>
      {monthStat}
      {quartStat}
      {yearStat}
      <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', l: 'flex-end' }, mt: 4 }}>
        <Button
          sx={{ padding: '8px 96px' }}
          variant="contained"
          component={Link}
          to={`/apartments/${apartmentId}/reports`}
        // to='/apartments/reports'
        >
          Отчеты
        </Button>
      </Box>

    </>
  )
}

export default SingleApartment;