import { Button, Box, Typography, Grid, Stack } from "@mui/material";
import { DateRange, Analytics, AccountBalanceWallet } from '@mui/icons-material';

import BarChart from "../barChart/BarChart";
import ButtonStat from "../buttonStat/ButtonStat";
import { useState } from "react";

const QuartStat = (stat) => {
  const statData = [
    {
      month: "march",
      occupancy: 73,
      averege: 1325,
      income: 48250
    },
    {
      month: "february",
      occupancy: 83,
      averege: 1178,
      income: 45732
    },
    {
      month: "junuary",
      occupancy: 62,
      averege: 987,
      income: 36587
    }
  ]
  const [occupancy, setOccupancy] = useState(null)


 


  

function go (statData) {
  console.log(1)
  const data = statData.map((item) => ({
    month: `${item.month}`,
    occupancy:`${item.occupancy}`,
  }))
}
  

 

  return (
    <Grid container mt={6}>
      <Grid item md={6} sm={12}>

        <BarChart stat={stat} /> 
      </Grid>
      <Grid item md={6} sm={12}>
        <Stack alignItems="flex-start">
          
          <Button onClick={go}>push</Button>
          <ButtonStat onClick={go} color="error" name={'загрузка'}><DateRange sx={{ mr: 1 }} />Загрузка </ButtonStat>
          {/* <ButtonStat color="error" name={'загрузка'}><Analytics sx={{ mr: 1 }} />Средний тариф </ButtonStat>
          <ButtonStat color="error" name={'загрузка'}><AccountBalanceWallet sx={{ mr: 1 }} />Доход </ButtonStat> */}
        </Stack>

      </Grid>
    </Grid>
  )
}

export default QuartStat;