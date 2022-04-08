import {  styled, } from "@mui/material";
import { CottageOutlined } from '@mui/icons-material';
import { Grid, Card, Typography, Button, Box } from "@mui/material";
import PieChart from "../pieChart/PieChart";
import { Link, Outlet } from "react-router-dom";
import ApartCard from "../apartCard/ApartCard";
import TitleBar from "../titleBar/TitleBar";
import useService from '../../services/services';
import { useEffect, useState } from 'react';

const Apartments = ({ aparts }, props) => {
  
  const[apartmentList, setapartmentList] = useState([]);

  const {getAllApartments} = useService();

  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = () => {
    getAllApartments()
        .then(onApartmentListLoaded)
}
  const onApartmentListLoaded = (newApartmentList) => {
    setapartmentList(newApartmentList);
  }
  console.log(apartmentList)


  const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: '540px',
    minWidth: '320px',
    minHeight: '300px',
    boxShadow: '0px -3px 15px rgba(54, 60, 69, 0.2)',
    margin:'0 auto',
    [theme.breakpoints.up('xs')]: {
      width: '100%',    },
    [theme.breakpoints.between('sm', 's')]: {
      width: '320px',
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: '100%',
    }
  }))

  const CustomContent = styled(Box)(({ theme }) => ({
    padding: '16px',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    [theme.breakpoints.up('s')]: {
      display: 'flex',
    },
  }))

  const TextContent = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '350px',
    minWidth: '200px',
    maxHeight: '150px',
  })

  const ChartBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.up('xs')]: {
      left: '15%'
    },
    [theme.breakpoints.between('s', 'xl')]: {
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      left: 0,
    }
  }))

  const ChartText = styled(Box)(({ theme }) => ({
    position: 'absolute',
    zIndex: 'tooltip',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      top: '40%',
      left: '20%',
    },
    [theme.breakpoints.between('s', 'xl')]: {
      top: '40%',
      left: '30%',
    },
    [theme.breakpoints.up('xl')]: {
      left: '30%'
    }
  }))

  const CardButtons = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'space-around',
      padding: '0 16px 16px 16px'
    },
    [theme.breakpoints.between('s', 'lg')]: {
      width: '50%',
      justifyContent: 'flex-start',
      padding: '0 16px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      justifyContent: 'flex-start',
      // padding: '0 16px'
    }
  }))

  function renderItems(arr) {
    const items = arr.map((item) => {
      return (
        <Grid item  md={12} lg={6} key={item.id} >
        {/* <Grid item key={item.id} > */}
          <CustomCard >
            <CustomContent>
              <TextContent>
                <Typography variant="h2" mb={2}>
                  {item.name}
                </Typography>
                <Typography mb={2}>
                  {item.adress}
                </Typography>
                <Typography >
                  Договор управления: № {item.contract}
                </Typography>
                <Typography>
                  Процент валдения: {item.ownership} %
                </Typography>
              </TextContent>
              <ChartBox>
                <ChartText>
                  <Typography variant="h2">Загрузка</Typography>
                  {/* <Typography variant="h1">{item.statistic[0].occupancy}%</Typography> */}
                  <Typography variant="h1">{item.occupancy}%</Typography>
                </ChartText>
                {/* <PieChart data={item.stat} sx={{ margin: "auto" }} /> */}
              </ChartBox>
            </CustomContent>
            <CardButtons>
              <Button
                sx={{ mr: 2 }}
                variant="contained"
                component={Link}
                to={`/apartments/reports`}>
                Отчеты
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to={`/apartments/${item.urlparam}`}
                onClick={()=> {props.onApartLoad(item.id)}}
                >
                Статистика
              </Button>
            </CardButtons>
          </CustomCard>
        </Grid>
      )
    })
    return (
      <>
      {items}
      </>
    ) ;
  }

  const items = renderItems(apartmentList);


  return (
    <>
      <TitleBar
        icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
        title='Смирнов Иван Евгеньевич' />
      <Grid container spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center">
        {items}
        {/* <ApartCard aparts={apartmentList}/> */}
      </Grid>
    </>
  )
}

export default Apartments;