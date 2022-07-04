import { Box, Typography, Button, IconButton, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { ArrowBack, CottageOutlined, QueryStats } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import StatCard from "../statCard/StatCard";
import Spinner from '../spinner/Spinner';
// import ErrorMessage from "../errorMessage/ErrorMessage";
import { useUser } from '../userContext/UserContext';
import { useAparts } from "../apartsContext/ApartsContext";
import MonthPicker from "../monthPicker/MonthPicker";
import MonthStat from "../monthStat/MonthStat";
import QuarterStat from "../quarterStat/QuarterStat";
import YearStat from "../yearStat/YearStat";

import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ruLocale from 'date-fns/locale/ru'
import { styled } from '@mui/material/styles';


import { getData } from "../services/services";

const SingleApartment = () => {
  console.log('render SingleApartment')

  const { apartmentId } = useParams();
  const { user, userName } = useUser();
  const { apartList, getApartList } = useAparts();

  const [date, setDate] = useState(new Date());
  const [statMonth, setStatMonth] = useState('month');


  const [statistics, setStatistics] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const [apartment, setApartment] = useState([]);
  // const [userName, setUserName] = useState('');
  // const [loading, setLoading] = useState(true);
  // Дописать 
  // const [error, setError] = useState(false);

  useEffect(() => {
    const userId = user ? user.id : null;
    getApartList(userId);
    console.log('useeffect apartList')
    // const apart = apartList ? apartList.find(item => item.id == apartmentId) : null;
    // setApartment(apart);
    // console.log('useEffect getApartList')
  }, [])

  // useEffect(() => {
  //     const apart = apartList?.find(item => item.id == apartmentId)
  //     setApartment(apart);
  //     console.log('useEffect setApartment')
  //   // const apartments = JSON.parse(localStorage.getItem('apartments'));
  // }, [])
  // console.log(apartList)

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

  const onRequest = (date) => {
    getData('getApartStatistic', {
    apartment_id: apartmentId,
    // contract_id: apartList.contract_id,
    date: date
  })
    .then(res => {
      setStatistics(res.response);
      // setLoading(false)
    })
  }
  useEffect(() => {
    if(statMonth == 'month') {
      onRequest(getCurrentDate(date))
    } else if(statMonth == 'quartal') {
      onRequest(getQuartal(date))
    } else if (statMonth == 'year') {
      onRequest(getFullYear(date))
    }
    // console.log('useeffect stat')
  }, [statMonth, date]);

// console.log(statistics)

// Функция получения выбранного месяца и года

const getCurrentDate = (value) => {
    console.log('getCurrentDate')
    let currentDate = [ value.getMonth() + 1 + '.' + value.getFullYear()];
    return currentDate;
  }

// Функция получения массива месяцев квартала
  const getQuartal = (value) => {
    console.log('getQuartal')
    let currentMonth = value.getMonth() ;
    let currentYear = value.getFullYear();
    const quartalArr = [currentMonth - currentMonth%3 + 1 , currentMonth - currentMonth%3 + 2, currentMonth - currentMonth%3 + 3].map(item => item + '.' + currentYear);
    return quartalArr
  }

  const getFullYear= (value) => {
    console.log('getFullYear')
    // let currentMonth = value.getMonth() + 1;
    let currentYear = value.getFullYear();
    const quartalArr = [1,2,3,4,5,6,7,8,9,10,11,12].map(item => item + '.' + currentYear);
    return quartalArr
  }

//  useEffect(()=> {
//   setStatMonth('month');
//   console.log('useEffect for statMonth')
//  },[])

//функция обновления стейта по клику на кнопку месяц/квартал/год
  const handleStatMonth = (event, newStatMonth) => {
    setStatMonth(newStatMonth);
  };
  //создать универсальный запрос на сервер в котором будет 
  //меняться велью в зависимости от нажатой кнопки или события 
  //изменения на инпуте

  // function renderStatComponent(val) {
  //   switch (val) {
  //     case 'month':
  //       //здесь функция которая создаст массив с датой
  //       //отправится запрос на сервер
  //       //получатся данные и пропом передатуся в рендерящийся компонент
  //       return (<MonthStat 
  //         date = {getCurrentDate(value)}/>);
  //     case 'quartal':
  //       return (<QuarterStat date = {getQuartal(value)} />);
  //     case 'year':
  //       return (<YearStat />);
  //     default:
  //       return (<Spinner/>);
  //   }
  // }

  // const statComponent = statMonth ? renderStatComponent(statMonth) : <Spinner/>;

  // const monthStat = (statMonth == 'month') ? <MonthStat date = {getCurrentDate(date)}/> : null ;
  // const quartStat =(statMonth == 'quartal') ? <QuarterStat date = {getQuartal(date)}/> : null ;
  // const yearStat =(statMonth == 'year') ? <YearStat date = {getFullYear(date)}/> : null 
  const monthStat = (statMonth == 'month' && statistics) ? <MonthStat data = {statistics}/> : null ;
  const quartStat =(statMonth == 'quartal' && statistics) ? <QuarterStat data = {statistics}/> : null ;
  const yearStat =(statMonth == 'year' && statistics) ? <QuarterStat data = {statistics}/> : null 
  

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


  // const getApartment = (id) => {
  //   const apartments = JSON.parse(localStorage.getItem('apartments'));
  //   const apart = apartments?.find(item => item.id == id);
  //   onApartmentLoaded(apart);
  //   // console.log(apart)
  // }
  // const onApartmentLoaded = (newApartment) => {
  //   setApartment(newApartment);
  //   setLoading(false);
  // }

  return (
    <> {content}
      {/* {loading ? <Spinner /> : */}
      {/* <Box key={apartment.id}>
          <TitleBar
            arrow={<IconButton component={Link} to='/apartments' ><ArrowBack /></IconButton>}
            icon={<CottageOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0' }} />}
            title={apartment.name}
          />
          <Subtitle
            title='Адрес:'
            text={apartment.address} />
          <Subtitle
            title='Договор:'
            text={apartment.contract_num} />
          <Subtitle
            title='Владелец: '
            text={userName + ', доля владения - ' + parseInt(apartment.interest) * 100 +'%'} /> */}
          
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
        {/* {statComponent} */}
        {monthStat}
        {quartStat}
        {yearStat}
      {/* <StatCard apartId={apartmentId} /> */}
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
      {/* </Box> */}
      {/* } */}
      
    </>
  )
}

export default SingleApartment;