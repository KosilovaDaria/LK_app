import { Grid, Card, Typography, Button, Box } from "@mui/material";
import { CottageOutlined } from '@mui/icons-material';
import { styled } from "@mui/material";
import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { getData } from "../services/services";
import { useUser } from '../userContext/UserContext';

import TitleBar from "../titleBar/TitleBar";
import Spinner from '../spinner/Spinner';
import { useAparts } from "../apartsContext/ApartsContext";

const Apartments = () => {

  const { user, userName, getCurrentUser } = useUser();

  const {apartList, getApartList } = useAparts();
  console.log(apartList)

  // const [apartmentList, setapartmentList] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser();
  }, [])

  useEffect(() => {
    const userId = user ? user.id : null
    getApartList(userId)
    // getData('getAparts', {
    //   user_id: parseInt(userId)
    // })
    //   .then(res => {
    //     localStorage.setItem('apartments', JSON.stringify(res.response))
    //     setapartmentList(res.response);
    //     setLoading(false);
    //   })
  }, [])

  const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: '540px',
    minWidth: '320px',
    minHeight: '300px',
    boxShadow: '0px -3px 15px rgba(54, 60, 69, 0.2)',
    margin: '0 auto',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.between('sm', 's')]: {
      width: '320px',
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: '100%',
    }
  }))

  const CustomContent = styled(Box)(({ theme }) => ({
    padding: '16px',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    [theme.breakpoints.up('s')]: {
      display: 'flex',
    },
  }))

  const TextContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '350px',
    minWidth: '200px',
    [theme.breakpoints.up('xs')]: {
      maxHeight: '200px',
    },
    [theme.breakpoints.up('s')]: {
      maxHeight: '150px',
    },

  }))

  const ChartBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.up('xs')]: {
      left: '15%'
    },
    [theme.breakpoints.between('s', 'xl')]: {
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      left: 0,
    }
  }))

  const ChartText = styled(Box)(({ theme }) => ({
    position: 'absolute',
    zIndex: 'tooltip',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      top: '40%',
      left: '20%',
    },
    [theme.breakpoints.between('s', 'xl')]: {
      top: '40%',
      left: '30%',
    },
    [theme.breakpoints.up('xl')]: {
      left: '30%'
    }
  }))

  const CardButtons = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'space-around',
      padding: '0 16px 16px 16px'
    },
    [theme.breakpoints.between('s', 'lg')]: {
      width: '50%',
      justifyContent: 'flex-start',
      padding: '0 16px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      justifyContent: 'flex-start',
      // padding: '0 16px'
    }
  }))

  function renderItems(arr) {
    const items = arr.map((item) => {
      return (
        <Grid item md={12} lg={6} key={item.id}>
          <CustomCard >
            <CustomContent>
              <TextContent>
                <Typography variant="h2" mb={2}>{item.name}</Typography>
                <Typography mb={2}>{item.address}</Typography>
                <Typography>Договор управления: № {item.contract_num}</Typography>
                <Typography>Процент владения: {parseInt(item.interest) * 100} %</Typography>
              </TextContent>
              <ChartBox>
                <ChartText>
                  <Typography variant="h2">Загрузка</Typography>
                  <Typography variant="h1">{item.loading}%</Typography>
                </ChartText>
                <Chart data={[
                  { value: item.loading },
                  { value: 100 - item.loading },
                ]}
                  width={200}
                  height={200}>
                  <PieSeries
                    valueField='value'
                    argumentField='value'
                    outerRadius={1}
                    innerRadius={0.65}
                  />
                  <Animation />
                </Chart>
              </ChartBox>
            </CustomContent>
            <CardButtons>
              <Button sx={{ mr: 2 }} variant="contained" component={Link}
                to={`/apartments/${item.id}/reports`}
              // to={`/apartments/${item.urlparam}/reports`}
              >Отчеты</Button>
              <Button variant="outlined" component={Link}
                to={`/apartments/${item.id}`}
              >Статистика</Button>
            </CardButtons>
          </CustomCard>
        </Grid>
      )
    })
    return (
      <> {items} </>
    );
  }

  const content = apartList  ? renderItems(apartList) : null;
  // const spinner = loading ? <Spinner /> : null

  return (
    <>
      <TitleBar
        icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
        title={userName}
      />
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        {/* {spinner} */}
        {content}
      </Grid>
    </>
  )
}

export default Apartments;



