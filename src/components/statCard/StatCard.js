import { Box, ToggleButtonGroup, ToggleButton, } from "@mui/material";
import {  styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import useService from '../../services/services';
import MonthPicker from "../monthPicker/MonthPicker";
import MonthStat from "../monthStat/MonthStat";
import QuarterStat from "../quarterStat/QuarterStat";
import YearStat from "../yearStat/YearStat";

const StatCard = (props) => {

  const { apartId } = props;

  const [stat, setStat] = useState([]);
  
  const { getStatistic } = useService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getStatistic(apartId)
        .then(onStatisticLoaded)
        .catch(() => console.log('didnt work'))
}

  const onStatisticLoaded = (apartStat) => {
    setStat(apartStat)

  }
  // console.log(stat[0].averege)
  console.log(stat)

  const [statMonth, setStatMonth] = useState('month');
  const handleStatMonth= (event, newStatMonth) => {
    setStatMonth(newStatMonth);
  };
  function renderStatComponent(val) {
    switch (val) {
      case 'month':
        return (<MonthStat />);
      case 'quartal':
        return (<QuarterStat />);
      case 'year':
        return (<YearStat />);
      default:
        return (< MonthStat />);
    }
  }

  const statComponent = renderStatComponent(statMonth);

  const CustomToggleBtn = styled(ToggleButton) ({
    width: 85,
    height:40,
    textTransform: 'none',
    fontSize: 16,
    '&:hover': {
      backgroundColor: 'rgba(9, 109, 217, 1)',
      color: "white"
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: 'rgba(9, 109, 217, 1)',
    }
  })

  return (
    <>
        <Box maxWidth='550px' sx={{ display: 'flex', flexDirection:{xs:'column', s:'row'}, justifyContent: 'space-between', alignItems:'center', mt:2 }}>
          <ToggleButtonGroup
            color="primary"
            value={statMonth}
            exclusive
            onChange={handleStatMonth}
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
          <MonthPicker />
        </Box>
        {statComponent}
     
      <Outlet />
    </>
  )
}
export default StatCard;