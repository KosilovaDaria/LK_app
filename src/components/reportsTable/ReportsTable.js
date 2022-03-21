import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useEffect, useState } from 'react';
const ReportsTable = () => {
  const data = [

    { year: 2022, month: 'Февраль', status: 'Просмотрено', accept: true },
    { year: 2022, month: 'Январь', status: 'Не просмотрено', accept: false },
    { year: 2021, month: 'Март', status: 'Просмотрено', accept: true },
    { year: 2021, month: 'Февраль', status: 'Просмотрено', accept: false },
    { year: 2021, month: 'Январь', status: 'Просмотрено', accept: true },
  ]
  function renderRow(data, year) {
    const rows = data.map((row) => {
      if (row.year === year) {
        return (
          <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{row.month}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">{row.accept ? <Button>Принято</Button> : <Button>Не принято</Button>}</TableCell>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2022}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>2021</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2021}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default ReportsTable;