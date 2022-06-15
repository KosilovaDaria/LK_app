import { Grid, Box, Paper, Typography } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MonthStatCard from "../monthStatCard/MonthStatCard";
import { useState, useEffect } from "react";
import Spinner from '../spinner/Spinner';
import { getData } from "../../services/services";

const MonthStat = (props) => {
console.log('render monthStat')
  const {date, value} = props;
  // console.log(date);
  const [loading, setLoading] = useState(true);
  const [statDat, setStatDat] = useState([]);

  useEffect(() => {
    getData('getApartStatistic', {
      apartment_id: 111,
      contract_id: "123",
      date: date
    })
      .then(res => {
        // console.log('юзэффект в монф стат')
        setStatDat(res.response[0]);
        setLoading(false)
      })
  }, []);

  const CustomBox = styled(Paper)({
    maxWidth: '350px',
    minWidth: '250px',
    minHeight: '250px',
    // width: 350,
    // height: 250, 
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding:'35px 60px',
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
              <Typography sx={{fontSize: '72px', fontWeight:700}} color='emerald.main'>
                {statDat.occupancy}
                <Typography component={'span'} variant="h3"> %</Typography>
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
              <Typography sx={{fontSize: '48px',fontWeight:700}} color='purple.main'>
                {statDat.averege} 
                <Typography component={'span'} variant="h1"> руб</Typography>
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
              <Typography sx={{fontSize: '48px',fontWeight:700}} color='orange.main'>
                {statDat.income}
                <Typography component={'span'} variant="h1"> руб</Typography>
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