import { Grid, Box, Typography } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet } from '@mui/icons-material';

const MonthStat = () => {
  const statData =
  {
    month: "march",
    occupancy: 73,
    averege: 1325,
    income: 48250,
  }
  const cellData = [
    {
      occupancy: {
        color: 'rgb(105, 161, 172)',
        bgcolor: 'rgba(105, 161, 172, 0.2)',
        title: 'Загрузка',
        units: '%',
        text: 'Апартаменты были сданы'
    },
    averege: {
      color: 'rgb(105, 161, 172)',
      bgcolor: 'rgba(105, 161, 172, 0.2)',
      title: 'Загрузка',
      units: '%',
      text: 'Апартаменты были сданы'
      },
    }
  ]



  function renderStatCell(statData, cellData) {
    return (
      <Grid item  >
        <Box sx={{ width: '255px', height: '230px', bgcolor: 'rgba(105, 161, 172, 0.2)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', color: 'rgb(105, 161, 172)' }}>
          <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
            <DateRange sx={{ mr: 1 }} />
            <Typography variant="h6"> Загрузка</Typography></Box>
          <Typography variant="h1">{statData.occupancy}<Typography variant="h3" component={'span'}>%</Typography></Typography>
          <Typography>Апартаменты были сданы</Typography>
        </Box>
      </Grid>
    )
  }
const statCell = renderStatCell(statData)
  return (
    <>
      <Grid container spacing={2} mt={4} mb={4} justifyContent="space-around">
        {statCell}
        <Grid item >
          <Box sx={{ width: '255px', height: '230px', bgcolor: 'rgba(103, 110, 188, 0.2)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', color: 'rgb(103, 110, 188)' }}>
            <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
              <Analytics sx={{ mr: 1 }} />
              <Typography variant="h6"> Средний тариф</Typography></Box>
            <Typography variant="h2">{statData.averege}<Typography variant="h4" component={'span'}>руб</Typography></Typography>
            <Typography>Стоимость 1 суток аренды</Typography>
          </Box>
        </Grid>
        <Grid item >
          <Box sx={{ width: '255px', height: '230px', bgcolor: 'rgba(229, 139, 30, 0.2)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', color: 'rgb(229, 139, 30)'}}>
            <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
              <AccountBalanceWallet sx={{ mr: 1 }} />
              <Typography variant="h6"> Доход</Typography></Box>
            <Typography variant="h2">{statData.income}<Typography variant="h4" component={'span'}>руб</Typography></Typography>
            <Typography>Совокупный доход</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default MonthStat;