import { Grid, Box, Paper, Typography } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import Spinner from '../spinner/Spinner';
// import MonthStatCard from "../monthStatCard/MonthStatCard";

const MonthStat = (props) => {
  // console.log('render monthStat')

  const { data } = props;
  const [statDat, setStatDat] = useState([]);

  useEffect(() => {
    setStatDat(data[0]);
  }, [data]);

  const CustomBox = styled(Paper)({
    maxWidth: '350px',
    minWidth: '250px',
    minHeight: '250px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '35px 60px',
    margin: '0 auto'
  })

  return (
    <>
      {!statDat ? <Spinner /> :
        <>
          <Grid container spacing={'18px'} mt={4} mb={4} justifyContent="space-between">
            <Grid item xl={4} lg={4} l={4} md={6} s={12} sm={12} xs={12}>
              <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(77, 153, 168, 0.54) , rgba(105, 161, 172, 0.1) 100%)' }}>
                <Box sx={{ maxWidth: '350px', maxHeight: '238px', display: 'flex', justifyContent: 'center', mb: '10px' }} elevation={3}>
                  <DateRange color='emerald' sx={{ mr: 1 }} />
                  <Typography variant="h2">Загрузка</Typography>
                </Box>
                <Typography sx={{ fontSize: '72px', fontWeight: 700 }} color='emerald.main'>
                  {Math.round(statDat.occupancy)}
                  <Typography component={'span'} variant="h3"> %</Typography>
                </Typography>
                <Typography variant="caption" >Апартаменты были несвободны</Typography>

                {/* <MonthStatCard
              icon={<DateRange color='emerald' sx={{ mr: 1 }} />}
              title={'Загрузка'}
              subtitle={'Апартаменты были несвободны'}
            >
              <Typography sx={{fontSize: '72px', fontWeight:700}} color='emerald.main'>
                {Math.round(statDat.occupancy)}
                <Typography component={'span'} variant="h3"> %</Typography>
              </Typography>
            </MonthStatCard> */}

              </CustomBox>
            </Grid>
            <Grid item xl={4} lg={4} l={4} md={6} s={12} sm={12} xs={12}>
              <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(103, 110, 188, 0.58), rgba(103, 110, 188, 0.1) 100%)' }}>
                <Box sx={{ maxWidth: '350px', maxHeight: '238px', display: 'flex', justifyContent: 'center', mb: '10px' }} elevation={3}>
                  <Analytics color='purple' sx={{ mr: 1 }} />
                  <Typography variant="h2">Средний тариф</Typography>
                </Box>
                <Typography sx={{ fontSize: '48px', fontWeight: 700 }} color='purple.main'>
                  {Math.round(statDat.averege)}
                  <Typography component={'span'} variant="h1"> руб</Typography>
                </Typography>
                <Typography variant="caption" >Cтоимость 1 суток аренды</Typography>

                {/* <MonthStatCard
              icon={<Analytics color='purple' sx={{ mr: 1 }} />}
              title={'Средний тариф'}
              subtitle={'Cтоимость 1 суток аренды'}
            >
              <Typography sx={{fontSize: '48px',fontWeight:700}} color='purple.main'>
                {Math.round(statDat.averege)} 
                <Typography component={'span'} variant="h1"> руб</Typography>
              </Typography>
            </MonthStatCard> */}

              </CustomBox>
            </Grid>
            <Grid item xl={4} lg={4} l={4} md={6} s={12} sm={12} xs={12}>
              <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(229, 139, 30, 0.58), rgba(229, 139, 30, 0.11) 100%)' }}>

                <Box sx={{ maxWidth: '350px', maxHeight: '238px', display: 'flex', justifyContent: 'center', mb: '10px' }} elevation={3}>
                  <AccountBalanceWallet color='orange' sx={{ mr: 1 }} />
                  <Typography variant="h2">Доход</Typography>
                </Box>
                <Typography sx={{ fontSize: '48px', fontWeight: 700 }} color='orange.main'>
                  {Math.round(statDat.income)}
                  <Typography component={'span'} variant="h1"> руб</Typography>
                </Typography>
                <Typography variant="caption" >Совокупный доход</Typography>

                {/* <MonthStatCard
              icon={<AccountBalanceWallet color='orange' sx={{ mr: 1 }} />}
              title={'Доход'}
              subtitle={'Совокупный доход'}
            >
              <Typography sx={{fontSize: '48px',fontWeight:700}} color='orange.main'>
                {Math.round(statDat.income)}
                <Typography component={'span'} variant="h1"> руб</Typography>
              </Typography>
            </MonthStatCard> */}

              </CustomBox>
            </Grid>
          </Grid>
        </>
      }
    </>
  )
}

export default MonthStat;