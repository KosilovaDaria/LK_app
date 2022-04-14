import { Box, Paper, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import { ArrowBack, InsertChartOutlined } from '@mui/icons-material';
import ReportsList from "../reportsList/ReportsList";
import TitleBar from "../titleBar/TitleBar";
import { ArrowDropDownCircle } from '@mui/icons-material';
import { Link, Outlet } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Subtitle from "../subtitle/Subtitle";
import { useEffect, useState } from 'react';
import useService from '../../services/services';



const Reports = (props) => {

  const { reportsList } = props;
  // const { apartId } = props;

  // const [reportsList, setReportsList] = useState([]);

  // const { getReportsList } = useService();

  // useEffect(() => {
  //   onRequest();
  // }, [apartId])


  // const onRequest = () => {
  //   getReportsList(apartId)
  //     .then(onReportsListLoaded)
  // }
  // const onReportsListLoaded = (newReportsList) => {
  //   setReportsList(newReportsList);
  // }

  const NewReport = styled(Box)({
    width: 8,
    height: 8,
    borderRadius: '50%',
    margin: 'auto'
  })

  //преобразование даты в название месяца, пригодится  при получении списка отчетов
  const getMonthName = (monthNum) => {
    const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return monthArr[monthNum.getMonth()]
  }
  //получение года из массива списка отчетов
  const getYear = (year) => {
    const rowYear = new Date(year).getFullYear();
    return rowYear
  }

  // const changeReportStatus = (id) => { 
  //   reportsList.map(item => (item.reportId === id && (item.unread = true)) ? item.unread = !item.unread : item.unread);
  //  }
  //  console.log(reportsList)

  function renderRow(data, year) {
    const rows = data.map((row) => {
      if (getYear(`${row.month}`) == year) {
        return (
          <TableRow key={row.reportId} sx={{ '&:last-child td': { border: 0 }, '&:nth-of-type(even)':{background:'#F8F8F8'} }}>
            <TableCell width='5px'>{row.unread ? <NewReport sx={{ bgcolor: 'orange.main' }} /> : <NewReport sx={{ bgcolor: 'none' }} />}</TableCell>
            <TableCell align="left" >
              <Link 
              to={`/apartments/reports/${row.urlparam}`} 
              style={{ color: '#000' }}
              onClick={() => props.changeReportStatusUnread(row.reportId)}
              // onClick={() => console.log('click')}
              >
                {getMonthName(new Date(`${row.month}`))}
                </Link>
                </TableCell>
            <TableCell sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(105, 161, 172, 1)' }}>{row.accept ? <><ArrowDropDownCircle fontSize="small" /><Typography ml={0.5}> Принято</Typography></> : '-'}</TableCell>
          </TableRow>
        )
      }
    })
    return rows;
  }

  const rows2022 = renderRow(reportsList, 2022);
  const rows2021 = renderRow(reportsList, 2021);

  return (
    <>
      <TitleBar
        arrow={<IconButton component={Link} to='/apartments' ><ArrowBack /></IconButton>}
        icon={<InsertChartOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0' }} />}
        title='Отчеты' />
      <Subtitle
        title='Адрес:'
        text='С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12' />
      <Subtitle
        title='Лицевой счет:'
        text='№ 223654' />
      <Typography variant="h1" component='h2'>Отчеты</Typography>
      {/* <ReportsList /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>2022</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2022}
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell>2021</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2021}
          </TableBody>
        </Table>
        <Outlet />
      </TableContainer>
    </>
  )
}

export default Reports;