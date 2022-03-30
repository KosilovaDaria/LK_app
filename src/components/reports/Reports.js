import { Box, Typography, Container } from "@mui/material";
import { ArrowBack, CottageOutlined } from '@mui/icons-material';
import ReportsList from "../reportsList/ReportsList";
import TitleBar from "../titleBar/TitleBar";
import { Link } from "react-router-dom";
import Subtitle from "../subtitle/Subtitle";

const Reports = () => {
  return (
    <>
      <TitleBar
        arrow={<Link to='/apartments'><ArrowBack sx={{ mr: 2 }} /></Link>}
        icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
        title='Отчеты' />
        <Subtitle 
        title='Адрес:' 
        text='С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12'/>
         <Subtitle 
        title='Лицевой счет:' 
        text='№ 223654'/>
      <Typography variant="h1" component='h2'>Отчеты</Typography>
      <ReportsList />
    </>
  )
}

export default Reports;