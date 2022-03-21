import { Box, Typography, Container } from "@mui/material";
import { ArrowBack, CottageOutlined } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import ApartCardStat from "../apartCardStat/ApartCardStat";
import TitleBar from "../titleBar/TitleBar";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ApartmentPage = ({ aparts }) => {
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
            <Container maxWidth='lg' key={item.id}>
              <TitleBar
                arrow={<ArrowBack sx={{ mr: 2 }} />}
                icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
                title={item.name}
              />
              <Box>
                <Typography>Адрес:  {item.adress}</Typography>
                <Typography>Договор: № {item.contract}</Typography>
                <Typography>Владелец: {item.owner}, доля владения - {item.ownership}%</Typography>
              </Box>
              <ApartCardStat />
            </Container>
          )
        }
      })}
    </>
  )
}
export default ApartmentPage;