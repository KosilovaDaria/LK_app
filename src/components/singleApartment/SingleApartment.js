import { Box, Typography, Button } from "@mui/material";
import { ArrowBack, CottageOutlined, QueryStats } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StatCard from "../statCard/StatCard";
import TitleBar from "../titleBar/TitleBar";

const SingleApartment = ({ aparts }) => {
  let params = useParams();

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
            <Box key={item.id}>
              <TitleBar
                arrow={<Link to='/apartments'><ArrowBack sx={{ mr: 2 }} /></Link>}
                icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
                title={item.name}
              />

              <Box>
                <Typography variant="h2" mb={2}>Адрес:  {item.adress}</Typography>
                <Typography variant="h2" mb={2}>Договор: № {item.contract}</Typography>
                <Typography variant="h2" mb={4}>Владелец: {item.owner}, доля владения - {item.ownership}%</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end', p: '20px 0  40px 40px ' }} >
                <QueryStats color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h1" component='h2'>Статистика по загрузке, среднему тарифу и доходам за период</Typography>
              </Box>

              <StatCard />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to='/apartments/reports' style={{textDecoration:'none'}}>              
                  <Button sx={{padding:'8px 96px'}} variant="contained">
                    Отчеты 
                  </Button>               
              </Link>
              </Box>
            </Box>
          )
        }
      })}
    
    </>
  )

}

export default SingleApartment;