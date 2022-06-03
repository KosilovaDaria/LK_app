import { Box, Typography, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { ArrowBack, InsertChartOutlined, Download, ContentCopy, CheckCircle, Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import useService from '../../services/services';
import TitleBar from "../titleBar/TitleBar";
import Subtitle from "../subtitle/Subtitle";
import Spinner from '../spinner/Spinner';

const SingleReport = (props) => {

  const { apartId } = props;
  // let { apartmentId } = useParams();
  let { reportId } = useParams();
  console.log(apartId + reportId)

  const [report, setReport] = useState(null);
  const [reportContent, setReportContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getReport } = useService();

  const viewReport = async (action, body) => {
    const res = await fetch('http://lk.local/app/data', {
      method: 'POST',
      body: JSON.stringify({ action, ...body }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json()
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    viewReport('viewReport', {
      user_id: parseInt(user.id),
      apartment_id: 111,
      report_id: 11,
    })
      .then(res => {
        console.log(res);
        return res;
      })
      .then(res => {
        // localStorage.setItem('apartments', JSON.stringify(res))
        console.log(res);
        setReport(res);
        setLoading(false)
      })
  }, [])

  function createMarkupHeader() {
    const htmlHeader = report.html_header
    return { __html: htmlHeader };
  }
  function createMarkupBody() {
    const htmlBody = report.html
    return { __html: htmlBody };
  }


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
  //   setLoading(false)
  // }

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {loading ? <Spinner /> :
        <>
          <TitleBar
            arrow={
              <IconButton
                component={Link}
                // to={`/apartments/${apartmentId}/reports`} 
                to={`/apartments/reports`}
              >
                <ArrowBack />
              </IconButton>}
            icon={
              <InsertChartOutlined
                color="primary"
                fontSize="large"
                sx={{ m: '0 10px 0' }} />}
            title='Отчеты' />

          <div dangerouslySetInnerHTML={createMarkupHeader()} />

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ flexGrow: 1 }} variant="h1" component='h2'>
              {/* {report.title} */}
            </Typography>
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

          <div dangerouslySetInnerHTML={createMarkupBody()} />
        </>
      }
    </>
  )
}

export default SingleReport;


{/* <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end', mb:1}}>
<Typography sx= {{width:'120px',color:'rgb(139, 144, 151)' }} variant="body1"   >Adress</Typography>
<Typography variant="body1">text</Typography>
</Box>

  <Subtitle
    title='Адрес:'
    // text= {report} 
    />
  <Subtitle
    title='Лицевой счет:'
    text='№ 223654' />
  <Subtitle
    title='Принципал: '
    // text={report.principal} 
    />
  <Subtitle
    title='Агент: '
    // text={report.agent} 
    />
  <Subtitle
    title='Генеральный директор: '
    // text={report.director} 
    />

  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography sx={{ flexGrow: 1 }} variant="h1" component='h2'>
      {/* {report.title} */}
//       </Typography>
//     <Box sx={{ display: 'flex' }}>
//       <Button
//         variant='contained'
//         onClick={() => {
//           // props.changeReportStatusAccept(report.reportId);
//           handleClick()
//         }}
//       >Принять</Button>

//       {show ? (
//         <Button
//           sx={{ position: 'absolute', top: '30%', left: '40%', width: '250px', mr: 1, mb: 5, textTransform: 'none', bgcolor: 'rgba(226, 236, 245, 1)' }}
//           startIcon={<CheckCircle />}
//           endIcon={<Close />}
//           onClick={handleClick}
//         >
//           <Typography >Отчет принят</Typography>
//         </Button>
//       ) : null}

//       <Button variant='outlined' sx={{ mr: 1, ml: 1 }}><Download />Скачать</Button>
//       <Button variant='outlined'><ContentCopy />Печать</Button>
//     </Box>
//   </Box>
//   <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
//       <TableHead>
//         <TableRow >
//           <TableCell>№</TableCell>
//           <TableCell align="left">Показатель</TableCell>
//           <TableCell align="right">Сумма, руб.</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//       {/* {newRep.map((row) => ( */}
//           <TableRow
//             //  key={row.num}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-child(12) td': { fontWeight: 500 }, '&:nth-of-type(even)': { background: '#F8F8F8' } }}
//           >
//             <TableCell component="th" scope="row">
//               {/* {row.num} */}
//             </TableCell>
//             <TableCell align="left">
//               {/* {row.text} */}
//               </TableCell>
//             <TableCell align="right">
//               {/* {row.sum} */}
//               </TableCell>
//           </TableRow>
        
//       </TableBody>
//     </Table>
//   </TableContainer> 
// </> 