import { Box, Typography, Button, IconButton, Popper, Fade } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ArrowBack, InsertChartOutlined, Download, ContentCopy } from '@mui/icons-material';
import TitleBar from "../titleBar/TitleBar";
import { Link } from "react-router-dom";
import Subtitle from "../subtitle/Subtitle";
// import PopperPopup from "../popperPopup/PopperPopup";
import { useEffect, useState } from 'react';
import useService from '../../services/services';
import { useParams } from "react-router-dom";
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import { CheckCircle, Close } from '@mui/icons-material';



const SingleReport = (props) => {

  const { report, reportContent } = props;
  // const {apartId} = props;
  // let {reportId} = useParams();

  // const [report, setReport] = useState([]);
  // const [reportContent, setReportContent] = useState([]);

  // const { getReport } = useService();

  // useEffect(() => {
  //   onRequest();
  // }, [])

  // const onRequest = () => {
  //   getReport(apartId, reportId)
  //     .then(onReportLoaded)
  // }
  // const onReportLoaded = (newReport) => {
  //   setReport(newReport);
  //   setReportContent(newReport.content)
  // }

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <TitleBar
        arrow={<IconButton component={Link} to='/apartments/reports' ><ArrowBack /></IconButton>}
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
          {/* <PopperPopup /> */}
          <Button
          variant='contained'
            onClick={() => {
              props.changeReportStatusAccept(report.reportId);
              handleClick()}}
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

          {/* <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
              <div>
                <Button variant="contained" {...bindToggle(popupState)}
                  onClick={() => props.changeReportStatusAccept(report.reportId)}

                >
                  Принять
                </Button>
                <Popper {...bindPopper(popupState)}
                  placement="left-end"
                  transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Button {...bindToggle(popupState)}
                        sx={{ width: '250px', mr: 1, mb: 5, textTransform: 'none', bgcolor: 'rgba(226, 236, 245, 1)' }}
                        startIcon={<CheckCircle />}
                        endIcon={<Close />}>
                        <Typography >Отчет принят</Typography>
                      </Button>
                    </Fade>
                  )}
                </Popper>
              </div>
            )}
          </PopupState> */}

          <Button variant='outlined' sx={{ mr: 1, ml: 1 }}><Download />Скачать</Button>
          <Button variant='outlined'><ContentCopy />Печать</Button>
        </Box>
      </Box>
      {/* <ReportTable /> */}

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




    </>
  )
}

export default SingleReport;