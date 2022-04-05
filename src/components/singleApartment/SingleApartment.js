import { Box, Typography, Button,IconButton, Link as MuiLink } from "@mui/material";
import { ArrowBack, CottageOutlined, QueryStats } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StatCard from "../statCard/StatCard";
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";

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
                arrow={<IconButton component={Link} to='/apartments' ><ArrowBack/></IconButton>}
                icon={<CottageOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0'}} />}
                title={item.name}
              />
              <Subtitle
                title='Адрес:'
                text={item.adress} />
              <Subtitle
                title='Договор:'
                text={item.contract }/>
              <Subtitle
                title='Владелец: '
                text={item.owner} />
              <Typography variant="h1" component='h2'>Статистика по загрузке, среднему тарифу и доходам за период</Typography>

              {/* <Box sx={{ display: 'flex', alignItems: 'flex-end'}} >
                <QueryStats color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h1" component='h2'>Статистика по загрузке, среднему тарифу и доходам за период</Typography>
              </Box> */}

              <StatCard />
              <Box sx={{ display: 'flex', justifyContent:{xs:'space-around',l:'flex-end'}, mt:4 }}>
                <Button
                  sx={{ padding: '8px 96px' }}
                  variant="contained"
                  component={Link}
                  to='/apartments/reports'>
                  Отчеты
                </Button>
              </Box>
            </Box>
          )
        }
      })}

    </>
  )

}

export default SingleApartment;