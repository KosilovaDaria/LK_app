import { Box, Typography, Container, Button } from "@mui/material";
import { ArrowBack, CottageOutlined } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import StatCard from "../statCard/StatCard";
import TitleBar from "../titleBar/TitleBar";

const SingleApartment = ({aparts}) => {
  let params = useParams();

  const [data, setData] = useState([]);
  const [apartmentId, setApartmentId] = useState(null);
  useEffect(() => {
    setData(aparts);
    setApartmentId(params.apartmentId);
  }, [params.apartmentId]);
  console.log(params);
  return (
    <>
      {data.map((item) => {
        if (item.param == apartmentId) {
          return (
            <Box  key={item.id}>
              <TitleBar
                arrow={<Link to='/apartments'><ArrowBack sx={{ mr: 2 }} /></Link>}
                icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
                title={item.name}
              />
              <Box>
                <Typography>Адрес:  {item.adress}</Typography>
                <Typography>Договор: № {item.contract}</Typography>
                <Typography>Владелец: {item.owner}, доля владения - {item.ownership}%</Typography>
              </Box>        
              <Typography gutterBottom variant="h6">Статистика по загрузке, среднему тарифу и доходам за период</Typography>

              <StatCard />
              <Link to='/apartments/reports'>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Button sx={{ textTransform: 'none' }} variant="contained">
                    Отчеты агента
                  </Button>
                </Box>
              </Link>
            </Box>
          )
        }
      })}
    
    </>
  )

}

export default SingleApartment;