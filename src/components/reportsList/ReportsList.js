import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { ArrowDropDownCircle} from '@mui/icons-material';
import {  styled } from '@mui/material/styles';

const NewReport = styled(Box) ({
  width: 8, 
  height: 8, 
  borderRadius: '50%', 
  margin: 6
})

const ReportsList = () => {
  const data = [

    { id: 0, year: 2022, month: 'Март', new: true, accept: true },
    { id: 1, year: 2022, month: 'Февраль', new: true, accept: false },
    { id: 2, year: 2022, month: 'Январь', new: true, accept: true },
    { id: 3, year: 2021, month: 'Декабрь', new: true, accept: false },
    { id: 4, year: 2021, month: 'Ноябрь', new: false, accept: true },
    { id: 5, year: 2021, month: 'Октябрь', new: false, accept: false },
    { id: 6, year: 2021, month: 'сентрябрь', new: false, accept: true },
    { id: 7, year: 2021, month: 'Август', new: false, accept: true },
    { id: 8, year: 2021, month: 'Июлб', new: false, accept: false },
    { id: 9, year: 2021, month: 'Июнь', new: false, accept: true },
    { id: 10, year: 2021, month: 'Май', new: true, accept: true },
    { id: 11, year: 2021, month: 'Апрель', new: true, accept: false },
    { id: 12, year: 2021, month: 'Март', new: false, accept: true },
    { id: 13, year: 2021, month: 'Февраль', new: false, accept: false },
    { id: 14, year: 2021, month: 'Январь', new: false, accept: true },
  ]
  function renderRow(data, year) {
    const rows = data.map((row) => {
      if (row.year === year) {
        return (
          <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell width={2}>{row.new ? <NewReport sx={{ bgcolor: 'primary.main' }} /> : <NewReport sx={{ bgcolor: '#fff' }} />}</TableCell>
            <TableCell align="left" ><Link to='report' style={{ color:'#000' }}>{row.month}</Link></TableCell>
            <TableCell sx={{display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(105, 161, 172, 1)'}}>{row.accept ? <><ArrowDropDownCircle fontSize="small" /><Typography ml={0.5}> Принято</Typography></>: '-'}</TableCell>
          </TableRow>
        )
      }
    })
    return rows;
  }
  
  const rows2022 = renderRow(data, 2022);
  const rows2021 = renderRow(data, 2021);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
      <Outlet/>
    </TableContainer>
  )
}
export default ReportsList;