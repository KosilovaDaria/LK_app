import { Grid, Box, Paper, Typography } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MonthStatCard from "../monthStatCard/MonthStatCard";
import { useState, useEffect } from "react";
import Spinner from '../spinner/Spinner';

const MonthStat = (props) => {

  // const {stat} = props;
  // console.log(stat);
  const [loading, setLoading] = useState(true);
  const [statDat, setStatDat] = useState([]);
  // useEffect(() => {
  //   setStatDat(stat)
  // }, [stat]);

  // console.log(statDat)


  // const statData =
  // {
  //   month: "march",
  //   occupancy: 73,
  //   averege: 1325,
  //   income: 48250,
  // }


  const getApartStatistic = async (action, body) => {
    const res = await fetch('http://lk.local/app/data', {
      method: 'POST',
      body: JSON.stringify({ action, ...body }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json()
  }

  useEffect(() => {
    getApartStatistic('getApartStatistic', {
      apartment_id: 111,
	    contract_id: "123",
	    date: "04.2022",
	    period: "month",
    })
    .then(res=>{ 
      console.log(res);
      console.log(res.response);
      return res.response;
      })
      .then(res => {
        console.log(res);
        setStatDat(res);
        setLoading(false)
      })
  }, [])



  const CustomBox = styled(Paper)({
    maxWidth: '350px',
    minWidth: '250px',
    minHeight: '250px',
    // width: 350,
    // height: 250, 
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:'20px 0',
    margin:'0 auto'
  })

  return (
    <>
    {loading ? <Spinner /> :
    <>
      <Grid container spacing={'18px'} mt={4} mb={4} justifyContent="space-between">
        <Grid item xl={4} lg={4} l={4} md={6} s={12} sm={12} xs={12}>
          <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(77, 153, 168, 0.54) , rgba(105, 161, 172, 0.1) 100%)' }}>
            <MonthStatCard
              icon={<DateRange color='emerald' sx={{ mr: 1 }} />}
              title={'Загрузка'}
              subtitle={'Апартаменты были несвободны'}
            >
              <Typography sx={{fontSize: '92px'}} color='emerald.main'>
                {statDat.loading}
                <Typography component={'span'} variant="h1"> %</Typography>
              </Typography>
            </MonthStatCard>
          </CustomBox>
        </Grid>
        <Grid item xl={4} lg={4} l={4} md={6} s={12} sm={12} xs={12}>
          <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(103, 110, 188, 0.58), rgba(103, 110, 188, 0.1) 100%)' }}>
            <MonthStatCard
              icon={<Analytics color='purple' sx={{ mr: 1 }} />}
              title={'Средний тариф'}
              subtitle={'Cтоимость 1 суток аренды'}
            >
              <Typography variant="subtitle2" color='purple.main'>
                {statDat.avg_amount} 
                <Typography component={'span'} variant="h2"> руб</Typography>
              </Typography>
            </MonthStatCard>
          </CustomBox>
        </Grid>
        <Grid item xl={4} lg={4} l={4} md={6} s={12} sm={12} xs={12}>
          <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(229, 139, 30, 0.58), rgba(229, 139, 30, 0.11) 100%)' }}>
            <MonthStatCard
              icon={<AccountBalanceWallet color='orange' sx={{ mr: 1 }} />}
              title={'Доход'}
              subtitle={'Совокупный доход'}
            >
              <Typography variant="subtitle2" color='orange.main'>
                {statDat.all_amount}
                <Typography component={'span'} variant="h2"> руб</Typography>
              </Typography>
            </MonthStatCard>
          </CustomBox>
        </Grid>
      </Grid>
    </>
  }
</>
  )
}

export default MonthStat;