import { Box, Typography, Divider, Card, CardContent, ButtonGroup, Button, TextField, Container } from "@mui/material";
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

const NotificationsPage = ({ aparts }) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(aparts[0]);
  }, [aparts[0]]);

  return (
    <> 
      <Container maxWidth='lg' key={data.id}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 2, paddingTop: 2 }} >
          <NotificationsNoneOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h6">Уведомления от УК</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography>Адрес:  {data.adress}</Typography>
          <Typography>Договор: № {data.contract}</Typography>
          <Typography>Владелец: {data.owner}, доля владения - {data.ownership}%</Typography>
        </Box>
        <Typography component='h2' variant="h6">Уведомления</Typography>
      </Container>

</>
  )
}

export default NotificationsPage;