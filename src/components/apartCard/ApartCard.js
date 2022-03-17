import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import PieChart from "../pieChart/PieChart";
import { Link,Outlet } from "react-router-dom";
const ApartCard = () => {
  return (
    <Grid item md={6}>
      <Card sx={{ display: 'flex', width: '540 px', height: '300px', mt: 2 }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
            АК "Волна" № 345 Студио
          </Typography>
          <Typography variant="subtitle1" paragraph>
            С-Пб., ул. Новая, д. 110а, корп 2, подъезд 1, этаж 12
          </Typography>
          <Typography>
            Договор управления: №12234556
          </Typography>
          <Typography sx={{ mb: 6 }}>
            Процент валдения: 100%
          </Typography>
          <CardActions>
            <Link to='/apartment'><Button size="small" variant="contained">Подробнее</Button></Link>
          </CardActions>
        </CardContent>
        <Box sx={{ mt: 5 }}>
          <PieChart />
        </Box>
      </Card>
      <Outlet />
    </Grid>


  )
}

export default ApartCard;