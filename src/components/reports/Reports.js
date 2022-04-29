import { Box, Paper, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import { ArrowBack, InsertChartOutlined, ArrowDropDownCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import useService from '../../services/services';
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import Spinner from '../spinner/Spinner';

const Reports = (props) => {

  let { apartmentId } = useParams();

  const [reportsList, setReportsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getReportsList } = useService();

  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = () => {
    getReportsList(apartmentId)
      .then(onReportsListLoaded)
  }
  const onReportsListLoaded = (newReportsList) => {
    setReportsList(newReportsList);
    setLoading(false)
  }
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

  function renderRow(data, year) {
    const rows = data.map((row) => {
      if (getYear(`${row.month}`) == year) {
        return (
          <TableRow key={row.reportId} sx={{ '&:last-child td': { border: 0 }, '&:nth-of-type(even)': { background: '#F8F8F8' } }}>
            <TableCell width='5px'>{row.unread ? <NewReport sx={{ bgcolor: 'orange.main' }} /> : <NewReport sx={{ bgcolor: 'none' }} />}</TableCell>
            <TableCell align="left" >
              <Link
                to={`/apartments/${apartmentId}/reports/${row.urlparam}`}
                style={{ color: '#000' }}
              // onClick={() => props.changeReportStatusUnread(row.reportId)}
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
              <TableBody>{rows2022} </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>2021</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rows2021}</TableBody>
            </Table>
            <Outlet />
          </TableContainer>
        </>
      }
    </>
  )
}
export default Reports;