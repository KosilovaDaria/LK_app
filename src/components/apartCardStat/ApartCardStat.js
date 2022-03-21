import { Box, Typography, Divider, Card, CardContent, ButtonGroup, Button, TextField, Container } from "@mui/material";
import { CottageOutlined } from '@mui/icons-material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import ruLocale from 'date-fns/locale/ru'
import { useState, useEffect } from "react";
import MonthStat from "../monthStat/MonthStat";
import QuartStat from "../quarterStat/QuartStat";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import MonthPicker from "../monthPicker/MonthPicker";

const ApartCardStat = () => {
 let params = useParams();
 const [apartmentId, setApartmentId] = useState(null);
  useEffect(() => {
    setApartmentId(params.apartmentId);
  }, [params.apartmentId]);

  
 console.log(params)
  return (
    <Card sx={{ height: '550px' }}>
      <CardContent sx={{ p: '50px' }}>
        <Typography gutterBottom variant="h6">Статистика по загрузке, среднему тарифу и доходам за период</Typography>
        <Box maxWidth='550px' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button variant="contained">Месяц</Button>
            <Button >Квартал</Button>
            <Button>Год</Button>
          </ButtonGroup>
          <MonthPicker />
        </Box>
     
        <MonthStat />
        {/* <QuartStat /> */}
        <Link to='/reports'><Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}><Button variant="contained">Отчеты агента</Button></Box></Link>
      </CardContent>
      <Outlet />
    </Card>
  )
}
export default ApartCardStat;