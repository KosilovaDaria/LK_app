import { Box, Typography, Divider, Card, CardContent, ButtonGroup, Button, TextField, Container } from "@mui/material";
import { CottageOutlined } from '@mui/icons-material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import ruLocale from 'date-fns/locale/ru'
import { useState, useEffect } from "react";
import MonthStat from "../monthStat/MonthStat";
import QuartStat from "../quarterStat/QuartStat";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const ReportsPage = () => {
  return (
    <> 
    <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 2, paddingTop: 2 }} >
    <CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />
    <Typography variant="h6"> Отчеты</Typography>
  </Box>
    </>
  )
}

export default ReportsPage;