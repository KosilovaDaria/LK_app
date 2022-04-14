import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBack, CottageOutlined, } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StatCard from "../statCard/StatCard";
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import useService from '../../services/services';
import Spinner from '../spinner/Spinner';
import ErrorMessage from "../errorMessage/ErrorMessage";


const SingleApartment = (props) => {
  let {apartmentId} = useParams();

  // const { apartId } = props;

  const [apartment, setApartment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { getApartment } = useService();

  useEffect(() => {
    updateApart();
  }, [])

  const updateApart = () => {
    //  if(!apartId) {
    //    return;
    //  }
    getApartment(apartmentId)
      .then(onApartLoaded)
      .catch(onError);
  }
  const onApartLoaded = (newApartment) => {
    setApartment(newApartment);
    setLoading(false)
  }
   
  const onError = () => {
    setLoading(false);
    setError(true);
  }
  // console.log(apartment)

  // const errorMessage = error ? <ErrorMessage/> : null ;
  // const spinner = loading ? <Spinner/> : null;
  // const content = !(loading || error) ? <View/> :null;

  return (
    <>
    {loading ? <Spinner/> : 
      <Box key={apartment.id}>
        <TitleBar
          arrow={<IconButton component={Link} to='/apartments' ><ArrowBack /></IconButton>}
          icon={<CottageOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0' }} />}
          title={apartment.name}
        />
        <Subtitle
          title='Адрес:'
          text={apartment.adress} />
        <Subtitle
          title='Договор:'
          text={apartment.contract} />
        <Subtitle
          title='Владелец: '
          text='Смирнов И.Е.'/>
        <Typography variant="h1" component='h2'>Статистика по загрузке, среднему тарифу и доходам за период</Typography>

        {/* <Box sx={{ display: 'flex', alignItems: 'flex-end'}} >
                <QueryStats color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h1" component='h2'>Статистика по загрузке, среднему тарифу и доходам за период</Typography>
              </Box> */}

        <StatCard apartId={apartmentId}/>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', l: 'flex-end' }, mt: 4 }}>
          <Button
            sx={{ padding: '8px 96px' }}
            variant="contained"
            component={Link}
            to='/apartments/reports'
            onClick={()=> {props.onApartmentSelected(apartment.id)}}
            >
            Отчеты
          </Button>
        </Box>
      </Box>}

    </>
  )

}

export default SingleApartment;