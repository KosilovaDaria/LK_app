import { Box, Typography, Container, Button } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { ArrowBack, CottageOutlined, Download, ContentCopy} from '@mui/icons-material';
import TitleBar from "../titleBar/TitleBar";
import { Link } from "react-router-dom";

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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
      <Container maxWidth='lg'>
        <TitleBar
          arrow={<Link to='/apartments'><ArrowBack sx={{ mr: 2 }} /></Link>}
          icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
          title='Отчеты' />
        <Box>
          <Typography>Адрес: С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12 </Typography>
          <Typography>Лицевой счет: № 223654</Typography>
          <Typography>Принципал: Смирнов И.Е.</Typography>
          <Typography>Агент: ООО "Вист"</Typography>
          <Typography>Адрес: С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12 </Typography>
          <Typography>Генеральный директор: Игнатьев А.Л.</Typography>
        </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:2, marginTop:2}}>
      <Typography component="h2" variant="h5">Отчет агента № 3/22 за февраль</Typography>
      <Box>
      <Button sx={{textTransform:'none', marginRight:'20px'}} variant='outlined'><Download/>Скачать</Button>
      <Button sx={{textTransform:'none'}} variant='outlined'><ContentCopy/>Печать</Button>
      </Box>
     
      </Box>
       <ReportTable/>
       <Box sx={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
       <Button variant='contained' sx={{textTransform:'none'}}>Принять</Button>

       </Box>
       
      </Container>
    </>
  )
}

export default SingleReport;