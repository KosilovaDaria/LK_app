import { Box, Typography, Button, IconButton } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ArrowBack, InsertChartOutlined, Download, ContentCopy } from '@mui/icons-material';
import TitleBar from "../titleBar/TitleBar";
import { Link } from "react-router-dom";
import Subtitle from "../subtitle/Subtitle";
import PopperPopup from "../popperPopup/PopperPopup";
function createData(num, param, sum) {
  return { num, param, sum };
}

const rows = [
  createData(1, 'Доходы, в т.ч.', 50079.63),
  createData(2, 'Расходы, в т.ч.', 8461.63),
  createData(2.1, 'Агентское вознаграждение', 7511.94),
  createData('2.1.1', 'Агентское вознаграждение долгосрочное', '-'),
  createData('2.1.2', 'Агентское вознаграждение краткосрочное', '-'),
  createData(2.2, 'Платежи за генеральную уборку и химчистку мебели', '-'),
  createData(2.3, 'Взносы (ЖКУ)', 50079.63),
  createData(2.4, 'Возмещение расходов по оплате Банковских комиссий', '-'),
  createData(2.5, 'Платежи за укомплектование Объекта и ремонт', '-'),
  createData(2.6, 'Платежи за услуги связи/Интернет', 950.00),
  createData(2.7, 'Платежи за услуги системы онлайн бронирования и/или службы бронирования...', '-'),
  createData(3.0, 'Сумма дохода к выплате', 49179.15),
  createData('Справочно'),
  createData('', 'Задолженность на начало периода', 30340.84),
  createData('', 'Выплачено доходов в отчетном периоде', 22779.38),
];

function ReportTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="left">Показатель</TableCell>
            <TableCell align="right">Сумма, руб.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.num}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.num}
              </TableCell>
              <TableCell align="left">{row.param}</TableCell>
              <TableCell align="right">{row.sum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const SingleReport = () => {
  return (
    <>
      <TitleBar
        arrow={<IconButton component={Link} to='/apartments/reports' ><ArrowBack/></IconButton>}
        icon={<InsertChartOutlined color="primary" fontSize="large" sx={{ m: '0 10px 0'}} />}
        title='Отчеты' />
        <Subtitle 
        title='Адрес:' 
        text='С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12'/>
         <Subtitle 
        title='Лицевой счет:' 
        text='№ 223654'/>
         <Subtitle 
        title='Принципал: ' 
        text='Смирнов И.Е.'/>
         <Subtitle 
        title='Агент: ' 
        text='ООО "Вист"'/>
         <Subtitle 
        title='Адрес: ' 
        text='С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12'/>
         <Subtitle 
        title='Генеральный директор: ' 
        text=' Игнатьев А.Л.'/>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
        <Typography sx={{flexGrow: 1}} variant="h1" component='h2'>Отчет агента № 3/22 за февраль</Typography>
         
          {/* <Button variant='contained' sx={{mr:1}}>Принять</Button> */}
          <PopperPopup />
          <Button variant='outlined'sx={{mr:1, ml:1}}><Download />Скачать</Button>
          <Button variant='outlined'><ContentCopy />Печать</Button>
      </Box>
      <ReportTable />


      

    </>
  )
}

export default SingleReport;