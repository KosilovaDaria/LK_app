import { Box, Typography, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { ArrowBack, InsertChartOutlined, Download, ContentCopy, CheckCircle, Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getData } from "../services/services";
import TitleBar from "../titleBar/TitleBar";
import Spinner from '../spinner/Spinner';
import "./singleReport.css";

const SingleReport = () => {
  // console.log('render SingleReport');

  const { apartmentId } = useParams();
  let { reportId } = useParams();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    getData('viewReport', {
      user_id: parseInt(user.id),
      apartment_id: apartmentId,
      report_id: reportId,
    })
      .then(res => {
        setReport(res);
        setLoading(false)
      })

  }, [])

  useEffect(() => {
    getData('readReport', {
      report_id: parseInt(reportId),
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

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    getData('doAccepted', {
      report_id: parseInt(reportId),
    })
    console.log('handleClick')
  };

  return (
    <>
      {loading ? <Spinner /> :
        <>
          <TitleBar
            arrow={
              <IconButton
                component={Link}
                to={`/apartments/${apartmentId}/reports`}
              // to={`/apartments/reports`}
              >
                <ArrowBack />
              </IconButton>}
            icon={
              <InsertChartOutlined
                color="primary"
                fontSize="large"
                sx={{ m: '0 10px 0' }} />}
            title='Отчеты' />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, mb: '20px', flexDirection: { xs: 'column', md: 'row' } }}>

            <div dangerouslySetInnerHTML={createMarkupHeader()} />

            <Box sx={{ display: 'flex' }}>
              <Button
                variant='contained'
                onClick={() => {
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


