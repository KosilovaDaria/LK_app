import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import PieChart from "../pieChart/PieChart";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const ApartCard = ({ aparts }) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(aparts)
  }, []);

  return (
    <>
      {data.map((item) => (
        <Grid item md={6} key={item.id}>
          <Card sx={{ display: 'flex', width: '540 px', height: '300px', mt: 2 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {item.adress}
              </Typography>
              <Typography>
                Договор управления: № {item.contract}
              </Typography>
              <Typography sx={{ mb: 6 }}>
                Процент валдения: {item.ownership} %
              </Typography>
              <CardActions>
                <Link to={`/apartment/${item.param}`}><Button size="small" variant="contained">Подробнее</Button></Link>
              </CardActions>
            </CardContent>
            <Box sx={{ mt: 5 }}>
              <PieChart />
            </Box>
          </Card>
        </Grid>
      ))}
      <Outlet />
    </>
  )
}

export default ApartCard;