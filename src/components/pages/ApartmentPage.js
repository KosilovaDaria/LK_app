import { Box, Typography, Divider, Card, CardContent, ButtonGroup, Button } from "@mui/material";
import { CottageOutlined } from '@mui/icons-material';
import { AdapterDateFns, LocalizationProvider, DatePicker } from '@mui/lab';
import { useState } from "react";
import MonthStat from "../monthStat/MonthStat";


const ApartmentPage = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 2, paddingTop: 2 }}>
        <CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />
        <Typography variant="h6"> АК "Волна" № 345 Студио</Typography>
      </Box>
      <Divider />
      <Box>
        <Typography>Адрес:  С-Пб., ул. Новая, д. 110а, корп 2, подъезд 1, этаж 12</Typography>
        <Typography>Договор: №12234556</Typography>
        <Typography>Владелец: Смирнов Иван Евгеньевич, доля владения - 100%</Typography>
      </Box>
      <Card sx={{ height: '550px' }}>
        <CardContent sx={{ p: '50px' }}>
          <Typography gutterBottom variant="h6">Статистика по загрузке, среднему тарифу и доходам за период</Typography>
          <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button variant="contained">Месяц</Button>
            <Button>Квартал</Button>
            <Button>Год</Button>
          </ButtonGroup>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
          <MonthStat />
         <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}><Button variant="contained">Отчеты агента</Button></Box> 
        </CardContent>
      </Card>
    </>
  )
}

export default ApartmentPage;