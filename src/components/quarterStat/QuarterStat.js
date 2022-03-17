import { Button, Box,Typography, Grid } from "@mui/material";
import {DateRange, Analytics, AccountBalanceWallet} from '@mui/icons-material';

import BarChart from "../barChart/BarChart";


const QuartStat = () => {
  return (
    <Grid container mt={6}>
      <Grid item md={6} sm={12}>
        <BarChart />
      </Grid>
      <Grid item md={6} sm={12}>
        <Box>
          <Button variant='text'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DateRange sx={{ mr: 1 }} />
              <Typography variant="h6"> Загрузка</Typography></Box>
          </Button>
        </Box>
        <Box>
          <Button variant='text'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Analytics sx={{ mr: 1 }} />
              <Typography variant="h6"> Средний тариф</Typography></Box>
          </Button>
        </Box>
        <Box>
          <Button variant='text'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountBalanceWallet sx={{ mr: 1 }} />
              <Typography variant="h6"> Доход</Typography></Box>
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default QuartStat;