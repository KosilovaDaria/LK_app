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

const ApartmentPage = ({ aparts }) => {
  let params = useParams();

  const [value, setValue] = useState(new Date());
  const [data, setData] = useState([]);
  const [apartmentId, setApartmentId] = useState(null);
  useEffect(() => {
    setData(aparts);
    setApartmentId(params.apartmentId);
  }, [params.apartmentId]);

  return (
    <>
      {data.map((item) => {
        if (item.param == apartmentId) {
          return (
            <Container maxWidth='lg' key={item.id}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 2, paddingTop: 2 }} >
                <CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h6"> {item.name}</Typography>
              </Box>
              <Divider />
              <Box>
                <Typography>Адрес:  {item.adress}</Typography>
                <Typography>Договор: № {item.contract}</Typography>
                <Typography>Владелец: {item.owner}, доля владения - {item.ownership}%</Typography>
              </Box>
              <Card sx={{ height: '550px' }}>
                <CardContent sx={{ p: '50px' }}>
                  <Typography gutterBottom variant="h6">Статистика по загрузке, среднему тарифу и доходам за период</Typography>
                  <Box maxWidth='550px' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                      <Button variant="contained">Месяц</Button>
                      <Button  >Квартал</Button>
                      <Button>Год</Button>
                    </ButtonGroup>

                    <LocalizationProvider dateAdapter={DateAdapter} locale={ruLocale}>
                      <DatePicker
                        views={['year', 'month']}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField sx={{ '& .MuiOutlinedInput-input': { padding: 1 } }} {...params} />}
                      />
                    </LocalizationProvider>
                  </Box>
                  <MonthStat stat={item.stat[0]} />
                  {/* <QuartStat stat={item.stat} /> */}
                  <Link to='/reports'><Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}><Button variant="contained">Отчеты агента</Button></Box></Link>
                </CardContent>
                <Outlet/>
              </Card>
            </Container>
          )
        }
      })}
    </>
  )
}
export default ApartmentPage;