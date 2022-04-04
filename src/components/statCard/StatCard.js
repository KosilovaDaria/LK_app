import { Box, Typography, Card, CardContent, Button, ToggleButtonGroup, ToggleButton, } from "@mui/material";
import { useState, useEffect } from "react";
import MonthStat from "../monthStat/MonthStat";
import QuarterStat from "../quarterStat/QuarterStat";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import MonthPicker from "../monthPicker/MonthPicker";
import {  styled } from '@mui/material/styles';


const StatCard = () => {
  let params = useParams();
  const [apartmentId, setApartmentId] = useState(null);

  useEffect(() => {
    setApartmentId(params.apartmentId);
  }, [params.apartmentId]);

  const [statistic, setStatistic] = useState('month');

  const handleStatistic = (event, newStatistic) => {
    setStatistic(newStatistic);
  };
  function renderStatComponent(val) {
    switch (val) {
      case 'month':
        return (<MonthStat />);
      case 'quartal':
        return (<QuarterStat />);
      case 'year':
        return (<QuarterStat />);
      default:
        return (<MonthStat />);
    }
  }

  const statComponent = renderStatComponent(statistic);

  const CustomToggleBtn = styled(ToggleButton) ({
    width: 85,
    height:40,
    textTransform: 'none',
    fontSize: 16,
    '&:hover':{
      backgroundColor:'rgba(9, 109, 217, 1)',
      color:'rgb(255, 255, 255)'
    },
  })

  return (
    <>
        <Box maxWidth='550px' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ToggleButtonGroup
            color="primary"
            value={statistic}
            exclusive
            onChange={handleStatistic}
          >
            <CustomToggleBtn value="month" >
              Месяц
            </CustomToggleBtn>
            <CustomToggleBtn value="quartal">
              Квартал
            </CustomToggleBtn>
            <CustomToggleBtn value="year">
              Год
            </CustomToggleBtn>
          </ToggleButtonGroup>
          {/* <MonthPicker /> */}
        </Box>
        {statComponent}
     
      <Outlet />
    </>
  )
}
export default StatCard;