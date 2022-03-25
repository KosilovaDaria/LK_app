import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowDropDownCircle, Cancel} from '@mui/icons-material';
import {  styled } from '@mui/material/styles';


const CustomButton = styled(Button) ({
  width: 135,
  height: 22,
  textTransform: 'none',
  fontSize: 16,
  borderRadius:'6px',
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})
const AcceptButton = styled(CustomButton)({
  backgroundColor: 'rgba(103, 166, 235, 0.2)',
  border: '1px solid rgba(9, 109, 217, 2)',
  color: 'rgba(9, 109, 217, 1)',
'&:hover':{
  color: 'rgba(9, 109, 217, 1)',
},
});
const DeclineButton = styled(CustomButton)({
  backgroundColor: 'rgba(251, 158, 163, 0.2)',
  border: '1px solid rgba(242, 94, 102, 1)',
  color: 'rgba(242, 94, 102, 1)',
'&:hover':{
  color: 'rgba(242, 94, 102, 1)',
},
});


const ReportsList = () => {
  const data = [

    { id: 0, year: 2022, month: 'Февраль', status: 'Просмотрено', accept: true },
    { id: 1, year: 2022, month: 'Январь', status: 'Не просмотрено', accept: false },
    { id: 2, year: 2021, month: 'Март', status: 'Просмотрено', accept: true },
    { id: 3, year: 2021, month: 'Февраль', status: 'Просмотрено', accept: false },
    { id: 4, year: 2021, month: 'Январь', status: 'Просмотрено', accept: true },
  ]
  function renderRow(data, year) {
    const rows = data.map((row) => {
      if (row.year === year) {
        return (
          <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row"><Link to={`/report`}>{row.month}</Link></TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">{row.accept ? <AcceptButton startIcon={<ArrowDropDownCircle/>}> Принято</AcceptButton> : <DeclineButton  startIcon={<Cancel/>}>Не принято</DeclineButton>}</TableCell>
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