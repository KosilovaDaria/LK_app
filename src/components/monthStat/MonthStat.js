import { Grid, Box,Paper, Typography } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MonthStatCard from "../monthStatCard/MonthStatCard";

const MonthStat = () => {


  const statData =
  {
    month: "march",
    occupancy: 73,
    averege: 1325,
    income: 48250,
  }

  const CustomBox = styled(Paper)({
    width: 350,
    height: 250, 
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:'20px 0'

  })


  return (
    <>
      <Grid container spacing={2} mt={4} mb={4} justifyContent="space-between">
        <Grid item>
          <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(77, 153, 168, 0.54) , rgba(105, 161, 172, 0.1) 100%)' }}>
            <MonthStatCard
              icon={<DateRange color='emerald' sx={{ mr: 1 }} />}
              title={'Загрузка'}
              subtitle={'Апартаменты были несвободны'}
            >
              <Typography variant="subtitle1" color='emerald.main'>
                {statData.occupancy}
                <Typography component={'span'} variant="h1"> %</Typography>
              </Typography>
            </MonthStatCard>
          </CustomBox>
        </Grid>
        <Grid item>
          <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(103, 110, 188, 0.58), rgba(103, 110, 188, 0.1) 100%)' }}>
            <MonthStatCard
              icon={<Analytics color='purple' sx={{ mr: 1 }} />}
              title={'Средний тариф'}
              subtitle={'Cтоимость 1 суток аренды'}
            >
              <Typography variant="subtitle2" color='purple.main'>
                {statData.averege} 
                <Typography component={'span'} variant="h2"> руб</Typography>
              </Typography>
            </MonthStatCard>
          </CustomBox>
        </Grid>
        <Grid item>
          <CustomBox elevation={6} sx={{ background: 'linear-gradient(320deg, rgba(229, 139, 30, 0.58), rgba(229, 139, 30, 0.11) 100%)' }}>
            <MonthStatCard
              icon={<AccountBalanceWallet color='orange' sx={{ mr: 1 }} />}
              title={'Доход'}
              subtitle={'Совокупный доход'}
            >
              <Typography variant="subtitle2" color='orange.main'>
                {statData.income}
                <Typography component={'span'} variant="h2"> руб</Typography>
              </Typography>
            </MonthStatCard>
          </CustomBox>
        </Grid>
      </Grid>
    </>
  )
}

export default MonthStat;