import { AppBar, Container, Typography, Badge, IconButton, Toolbar, Box, Avatar, } from "@mui/material";
import { CottageOutlined, NotificationsNoneOutlined, ExitToAppOutlined } from '@mui/icons-material';
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useUser } from "../userContext/UserContext";
import { useNotice } from "../noticeContext/NoticeContext";

const AppLayout = () => {

  // console.log('render AppLayout')

  const { logOut } = useUser();
  const { newNotifCount, getCountNewNotice } = useNotice()

  useEffect(() => {
    getCountNewNotice();
    //   (function loops(){
    //     setTimeout(function(){
    //       getCountNewNotice()
    //         console.log('test');
    //         loops(); 
    //     }, 20000);
    //  })();

  });

  const handleLogout = () => {
    logOut();
  }
  return (
    <>
      <header>
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
                    <>{newNotifCount > 0 ? <Badge badgeContent={newNotifCount} color="primary">
                      <NotificationsNoneOutlined color="primary" />
                    </Badge> : null}</>
                  </Box>
                </NavLink>
                <IconButton
                  onClick={handleLogout}
                  margin={10}><ExitToAppOutlined color="secondary" /></IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main>
        <Container maxWidth='xl'>
          <Outlet />
        </Container>
      </main>
    </>
  )
}
export default AppLayout;