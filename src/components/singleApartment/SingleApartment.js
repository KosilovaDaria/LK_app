import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBack, CottageOutlined, QueryStats } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import StatCard from "../statCard/StatCard";
import Spinner from '../spinner/Spinner';
// import ErrorMessage from "../errorMessage/ErrorMessage";
import { useUser } from '../userContext/UserContext';

const SingleApartment = (props) => {
  console.log('render SingleApartment')
  let { apartmentId } = useParams();
  // console.log(apartmentId)

  const [apartment, setApartment] = useState([]);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserName();
  }, [])

  const getUserName = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user.lastname + ' ' + user.firstname + ' ' + user.surname + ', доля владения - ';
    setUserName(userName);
  }

  useEffect(() => {
    getApartment(apartmentId)
  }, [])

  const getApartment = (id) => {
    const apartments = JSON.parse(localStorage.getItem('apartments'));
    const apart = apartments?.find(item => item.id == id);
    onApartLoaded(apart);
    // console.log(apart)
  }
  // const updateApart = () => {
  //   getApartment(apartmentId)
  //     .then(onApartLoaded)
  //     .catch(onError);
  // }
  const onApartLoaded = (newApartment) => {
    setApartment(newApartment);
    setLoading(false);
  }

  const onError = () => {
    setLoading(false);
    setError(true);
  }

  // const errorMessage = error ? <ErrorMessage/> : null ;
  // const spinner = loading ? <Spinner/> : null;
  // const content = !(loading || error) ? <View/> :null;

  return (
    <>
      {loading ? <Spinner /> :
        <Box key={apartment.id}>
          <TitleBar
            arrow={<IconButton component={Link} to='/apartments' ><ArrowBack /></IconButton>}
            icon={<CottageOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0' }} />}
            title={apartment.name}
          />
          <Subtitle
            title='Адрес:'
            text={apartment.address} />
          <Subtitle
            title='Договор:'
            text={apartment.contract_num} />
          <Subtitle
            title='Владелец: '
            text={userName + parseInt(apartment.interest) * 100 +'%'} />

          <Box sx={{ display: 'flex', alignItems: 'flex-end', p: '10px 0px', mt: 2 }} >
            <Box width="60px"></Box>
            <QueryStats color="primary" fontSize="large" sx={{ mr: 2 }} />
            <Typography variant="h1" >Статистика по загрузке, среднему тарифу и доходам за период</Typography>
          </Box>

          <StatCard apartId={apartmentId} />
          <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', l: 'flex-end' }, mt: 4 }}>
            <Button
              sx={{ padding: '8px 96px' }}
              variant="contained"
              component={Link}
              // to={`/apartments/${apartmentId}/reports`}
              to='/apartments/reports'
              onClick={() => { props.onApartmentSelected(apartment.id) }}
            >
              Отчеты
            </Button>
          </Box>
        </Box>}
    </>
  )
}

export default SingleApartment;