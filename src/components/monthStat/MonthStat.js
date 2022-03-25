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
  // const cellData = [
  //   {
  //     name: 'occupancy',
  //     color: 'rgb(105, 161, 172)',
  //     bgcolor: 'rgba(105, 161, 172, 0.2)',
  //     title: 'Загрузка',
  //     units: '%',
  //     text: 'Апартаменты были сданы'
  //   },
  //   {
  //     name: 'averege',
  //     color: 'rgb(103, 110, 188)',
  //     bgcolor: 'rgba(103, 110, 188, 0.2)',
  //     title: 'Средний тариф',
  //     units: 'руб',
  //     text: 'Стоимость суток аренды'
  //   },
  //   {
  //     name: 'income',
  //     color: 'rgb(229, 139, 30)',
  //     bgcolor: 'rgba(229, 139, 30, 0.2)',
  //     title: 'Доход',
  //     units: 'руб',
  //     text: 'Совокупный доход'
  //   },
  // ]



//   function renderStatCell() {
//     return (
//       <>
//         {cellData.map(cell => (
//           <Grid item  key={cell.name}>
//             <Box sx={{ width: '255px', height: '230px', bgcolor: `${cell.bgcolor}`, color: `${cell.color}`, borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
//               <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
//                 {/* <DateRange sx={{ mr: 1 }} /> */}
//                 {cell.icon}
//                 <Typography variant="h6"> {cell.title}</Typography></Box>
//               <Typography variant="h1">{statData.occupancy}<Typography variant="h3" component={'span'}>{cell.units}</Typography></Typography>
//               <Typography>{cell.text}</Typography>
//             </Box>
//           </Grid>
//         ))}
//       </>

//     )
//   }
// const statCell = renderStatCell(statData)
  return (
    <>
      <Grid container spacing={2} mt={4} mb={4} justifyContent="space-around">
        {/* {statCell} */}
        <Grid item>
          <Box sx={{ width: '255px', height: '230px', bgcolor: 'rgba(105, 161, 172, 0.2)', color: 'rgb(105, 161, 172)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
              <DateRange sx={{ mr: 1 }} />
              <Typography variant="h6">Загрузка</Typography>
            </Box>
            <Typography variant="h1">{statData.occupancy}
              <Typography variant="h3" component={'span'}>%</Typography>
            </Typography>
            <Typography>Апартаменты были сданы</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ width: '255px', height: '230px', bgcolor: 'rgba(103, 110, 188, 0.2)', color: 'rgb(103, 110, 188)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
              <Analytics sx={{ mr: 1 }} />
              <Typography variant="h6">Cредний тариф</Typography>
            </Box>
            <Typography variant="h2">{statData.averege}
              <Typography variant="h4" component={'span'}>руб</Typography>
            </Typography>
            <Typography>Стоимость суток аренды</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ width: '255px', height: '230px', bgcolor: 'rgba(229, 139, 30, 0.2)', color: 'rgb(229, 139, 30)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
              <AccountBalanceWallet sx={{ mr: 1 }} />
              <Typography variant="h6">Доход</Typography>
            </Box>
            <Typography variant="h2">{statData.income}
              <Typography variant="h4" component={'span'}>руб</Typography>
            </Typography>
            <Typography>Совокупный доход</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default MonthStat;