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
          <Card sx={{ width: '540 px', minHeight: '300px', mt: 1 }} elevation={5}>
            <Typography variant="h2" sx={{ p: 2 }}>
              {item.name}
            </Typography>
            <CardContent sx={{ display: 'flex', flex: 1, pt: 0 }}>
              <Box >
                <Typography variant="body1" paragraph>
                  {item.adress}
                </Typography>
                <Typography>
                  Договор управления: № {item.contract}
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  Процент валдения: {item.ownership} %
                </Typography>
                <CardActions>
                <Link to={`/apartments/${item.param}`} style={{ textDecoration: "none" }}>
                    <Button variant="contained"> Статистика </Button>
                  </Link>
                  <Link to={`/apartments/reports`} style={{ textDecoration: "none" }}>
                    <Button variant="outlined"> Отчеты</Button>
                  </Link>
                </CardActions>
              </Box>
              <Box>
                <PieChart data={item.stat} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Outlet />
    </>
  )
}

export default ApartCard;