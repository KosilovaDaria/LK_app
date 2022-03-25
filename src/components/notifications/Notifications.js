import { Box, Typography, Divider, Card, CardContent, ButtonGroup, Button, TextField, Container } from "@mui/material";
import { ArrowBack, NotificationsNoneOutlined } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import TitleBar from "../titleBar/TitleBar";

const Notifications = ({ aparts }) => {


  return (
    <>

        <TitleBar
          icon={<NotificationsNoneOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
          title='Уведомления от УК' />

    </>
  )
}

export default Notifications;