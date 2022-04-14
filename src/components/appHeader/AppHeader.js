import { AppBar, Container, Typography, Badge, IconButton, Toolbar, Box, Avatar, Tabs, Tab } from "@mui/material";
import { CottageOutlined, NotificationsNoneOutlined, ExitToAppOutlined } from '@mui/icons-material';
import { Link, NavLink, Outlet } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useService from '../../services/services';

const AppHeader = (props) => {

  //(для демонстрации)
  const { newNotifCount } = props;

  //(для работы)
  // const { getNewNotifCount } = useService();
  // const [newNotifCount, setNewNotifCount] = useState(0)

  // useEffect(() => {
  //   onRequest();
  // }, [])

  // const onRequest = () => {
  //   getNewNotifCount()
  //     .then(onNewNotifCountLoaded)
  //     .catch(() => console.log('ooops'))
  // }

  // const onNewNotifCountLoaded = (newNotif) => {
  //   setNewNotifCount(newNotif.length);
  // }

  return (
    <>
      <AppBar position="static" color="header" elevation={3}>
        <Container maxWidth='xl'>
          <Toolbar p={0}>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <Avatar sx={{ bgcolor: 'primary.main', color: 'header', fontSize: '34px', fontWeight: 700 }}>A</Avatar>
              <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}
                color='primary' ml={2} variant="h3">Apparts ЛК</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NavLink to='/apartments'
                style={({ isActive }) => {
                  return {
                    padding: '18px 10px 18px',
                    textDecoration: "none",
                    color: "#000",
                    borderBottom: isActive ? '3px solid #096DD9' : "none",
                  }
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, mr: 1 }}>Апартаменты</Typography>
                  <CottageOutlined color="primary" />
                </Box>
              </NavLink>
              <NavLink to='/notifications'
                style={({ isActive }) => {
                  return {
                    padding: '18px 10px 18px',
                    marginRight: '20px',
                    textDecoration: "none",
                    color: "#000",
                    borderBottom: isActive ? '3px solid #096DD9' : "none"
                  }
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, mr: 1 }}>Уведомления от УК </Typography>
                  <Badge badgeContent={newNotifCount} color="primary">
                    <NotificationsNoneOutlined color="primary" />
                  </Badge>
                </Box>
              </NavLink>
              <Link to='/signin'><IconButton margin={10}><ExitToAppOutlined color="secondary" /></IconButton></Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />

    </>

  )
}

export default AppHeader;