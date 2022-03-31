import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import PieChart from "../pieChart/PieChart";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const ApartCard = ({ aparts }, ...props) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(aparts)
  }, []);

  return (
    <>
      {data.map((item) => (
        <Grid item md={6} key={item.id}>
          <Card sx={{ width: '540 px', minHeight: '300px', mt: 1,  boxShadow: 6 }} >
            <Typography variant="h2" sx={{ p: 2 }}>
              {item.name}
            </Typography>

            <CardContent sx={{ display: { xs: 'block', sm: 'flex',}, pt: 0 }}>
              <Box >
                <Typography paragraph sx={{ height: '60px' }} >
                  {item.adress}
                </Typography>
                <Typography >
                  Договор управления: № {item.contract}
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  Процент валдения: {item.ownership} %
                </Typography>
              </Box>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: '40%', left: '30%', zIndex: 'tooltip', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                  <Typography variant="h2">Загрузка</Typography>
                  <Typography variant="h1">{item.stat[0].occupancy}%</Typography>
                </Box>
                <PieChart data={item.stat} />
              </Box>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                component={Link}
                to={`/apartments/reports`}>
                Отчеты
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to={`/apartments/${item.param}`}>
                Статистика
              </Button>

            </CardActions>
          </Card>
        </Grid>
      ))}
      <Outlet />
    </>
  )
}

export default ApartCard;