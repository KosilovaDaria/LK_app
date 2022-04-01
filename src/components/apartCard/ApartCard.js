import { Grid, Card, Typography, Button, Box } from "@mui/material";
import PieChart from "../pieChart/PieChart";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

const ApartCard = ({ aparts }, ...props) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(aparts)
  }, []);


  const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: '540px',
    minWidth: '320px',
    minHeight: '300px',
    boxShadow: '0px -3px 15px rgba(54, 60, 69, 0.2)',
    mt: 1,
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      display: 'block',
    },
    [theme.breakpoints.between('sm', 's')]: {
      width: '320px',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      minWidth: '70%',
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
    [theme.breakpoints.between('s', 'xl')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'flex',
    },
  }))

  const TextContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '350px',
    minWidth: '200px',
    maxHeight: '150px',
  }))

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
      padding: '0 16px'
    }
  }))
  return (
    <>
      {data.map((item) => (
        <Grid item xs={12} sm={12} md={12} lg={6} key={item.id}  >
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
                  <Typography variant="h1">{item.stat[0].occupancy}%</Typography>
                </ChartText>
                <PieChart data={item.stat} sx={{ margin: "auto" }} />
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
                to={`/apartments/${item.param}`}>
                Статистика
              </Button>
            </CardButtons>
          </CustomCard>
        </Grid>
      ))}
      <Outlet />
    </>
  )
}

export default ApartCard;