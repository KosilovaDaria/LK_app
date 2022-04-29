import { Box, Typography, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { ArrowBack, InsertChartOutlined, Download, ContentCopy, CheckCircle, Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import useService from '../../services/services';
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import Spinner from '../spinner/Spinner';

const SingleReport = (props) => {

  // const {apartId} = props;
  let { apartmentId } = useParams();
  let { reportId } = useParams();

  const [report, setReport] = useState([]);
  const [reportContent, setReportContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getReport } = useService();

  useEffect(() => {
    onRequest();
  }, [])
  const onRequest = () => {
    getReport(apartmentId, reportId)
      .then(onReportLoaded)
  }
  const onReportLoaded = (newReport) => {
    setReport(newReport);
    setReportContent(newReport.content)
    setLoading(false)
  }

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <> {loading ? <Spinner /> :
      <>
        <TitleBar
          arrow={<IconButton component={Link} to={`/apartments/${apartmentId}/reports`} ><ArrowBack /></IconButton>}
          icon={<InsertChartOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0' }} />}
          title='Отчеты' />
        <Subtitle
          title='Адрес:'
          text='С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12' />
        <Subtitle
          title='Лицевой счет:'
          text='№ 223654' />
        <Subtitle
          title='Принципал: '
          text={report.principal} />
        <Subtitle
          title='Агент: '
          text={report.agent} />
        <Subtitle
          title='Генеральный директор: '
          text={report.director} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ flexGrow: 1 }} variant="h1" component='h2'>{report.title}</Typography>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant='contained'
              onClick={() => {
                // props.changeReportStatusAccept(report.reportId);
                handleClick()
              }}
            >Принять</Button>

            {show ? (
              <Button
                sx={{ position: 'absolute', top: '30%', left: '40%', width: '250px', mr: 1, mb: 5, textTransform: 'none', bgcolor: 'rgba(226, 236, 245, 1)' }}
                startIcon={<CheckCircle />}
                endIcon={<Close />}
                onClick={handleClick}
              >
                <Typography >Отчет принят</Typography>
              </Button>
            ) : null}

            <Button variant='outlined' sx={{ mr: 1, ml: 1 }}><Download />Скачать</Button>
            <Button variant='outlined'><ContentCopy />Печать</Button>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell>№</TableCell>
                <TableCell align="left">Показатель</TableCell>
                <TableCell align="right">Сумма, руб.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportContent.map((row) => (
                <TableRow
                  key={row.num}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-child(12) td': { fontWeight: 500 }, '&:nth-of-type(even)': { background: '#F8F8F8' } }}
                >
                  <TableCell component="th" scope="row">
                    {row.num}
                  </TableCell>
                  <TableCell align="left">{row.text}</TableCell>
                  <TableCell align="right">{row.sum}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>}
    </>
  )
}

export default SingleReport;