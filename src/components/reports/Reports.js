import { Box, Paper, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import { ArrowBack, InsertChartOutlined, ArrowDropDownCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import { getData } from "../../services/services";
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import Spinner from '../spinner/Spinner';

const Reports = () => {

  const [reportList, setReportList] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getData('getReports', {
      apartment_id: 111,
      contract_id: "123",
    })
    .then(res=>{ 
      setReportList(res.response);
      setLoading(false)
    })  
  }, [])


  // const reports= [
  //   {id: 12, date: '2022-04'},
  //   {id: 12, date: '2022-03'},
  //   {id: 12, date: '2022-02'},
  //   {id: 12, date: '2022-01'},
  //   {id: 12, date: '2021-12'},
  //   {id: 12, date: '2021-11'},
  //   {id: 12, date: '2021-10'},
  //   {id: 12, date: '2021-09'},
  //   {id: 12, date: '2021-08'},
  //   {id: 12, date: '2021-07'}
  // ];
  // const [reportList, setReportsList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setReportsList(reports);
  //   setLoading(false);
  // }, [])
  //   console.log(reportsList)

  const NewReport = styled(Box)({
    width: 8,
    height: 8,
    borderRadius: '50%',
    margin: 'auto'
  })

  //преобразование даты в название месяца
  const getMonthName = (monthNum) => {
    const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return monthArr[monthNum.getMonth()]
  }
  //получение значения года из массива списка отчетов
  const getYear = (year) => {
    const rowYear = new Date(year).getFullYear();
    return rowYear
  }

  function renderRow(data, year) {
    const rows = data.map((row) => {
      if (getYear(`${row.date}`) == year) {
        return (
          <TableRow key={row.id} sx={{height:'40px', '&:last-child td': { border: 0 }, '&:nth-of-type(even)': { background: '#F8F8F8' } }}>
            <TableCell width='5px'>{row.new ? <NewReport sx={{ bgcolor: 'orange.main' }} /> : <NewReport sx={{ bgcolor: 'none' }} />}</TableCell>
            <TableCell align="left" sx={{height:'40px'}} >
              <Link
                to={`/apartments/reports/${row.date}`}
                // to={`/apartments/${apartmentId}/reports/${row.urlparam}`}
                style={{ color: '#000' }}
              // onClick={() => props.changeReportStatusUnread(row.reportId)}
              >
                {getMonthName(new Date(`${row.date}`))}
              </Link>
            </TableCell>
            <TableCell sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(105, 161, 172, 1)', height:'40px' }}>{row.accept ? <><ArrowDropDownCircle fontSize="small" /><Typography ml={0.5}> Принято</Typography></> : '-'}</TableCell>
          </TableRow>
        )
      }
    })
    return rows;
  }

  return ( 
    <>
    
       {loading ? <Spinner /> :
        <>
          <TitleBar
            arrow={<IconButton component={Link} to='/apartments' ><ArrowBack /></IconButton>}
            // arrow={<IconButton component={Link} to={`/apartments/${apartmentId}`} ><ArrowBack /></IconButton>}
            icon={<InsertChartOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0' }} />}
            title='Отчеты' />
          <Subtitle
            title='Адрес:'
            text='С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12' />
          <Subtitle
            title='Лицевой счет:'
            text='№ 223654' />
          <Typography variant="h1" component='h2'>Отчеты</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>2022</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderRow(reportList, 2022)}</TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>2021</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderRow(reportList, 2021)}</TableBody>
            </Table>
            <Outlet />
          </TableContainer>
        </>
      } 
    </>
  )
}
export default Reports;