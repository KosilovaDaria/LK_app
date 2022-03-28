import { AppBar, Container, Typography, Badge, IconButton, Toolbar, Box, Avatar, Tabs, Tab } from "@mui/material";
import { CottageOutlined, NotificationsNoneOutlined, ExitToAppOutlined } from '@mui/icons-material';
import { blue } from "@mui/material/colors";
import { Link, NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AppHeader = () => {


  return (
    <AppBar position="static" color="transparent" elevation={3}>
      <Container maxWidth='lg'>
        <Toolbar >
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Avatar sx={{ bgcolor: blue[700] }}>A</Avatar>
            <Typography sx={{ color: blue[700] }} ml={2} component="h2" variant="h4">Apparts ЛК</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavLink to='/apartments'
              style={({ isActive }) => {
                return {
                  padding: '18px 10px 18px',
                  textDecoration: "none",
                  color: "#000",
                  borderBottom: isActive ? '3px solid #096DD9' : "none"
                }
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Апартаменты</Typography>
                <CottageOutlined sx={{ ml: 1 }} color="primary" />
              </Box>
            </NavLink>
            <NavLink to='/notifications'
              style={({ isActive }) => {
                return {
                  padding: '18px 20px 18px',
                  textDecoration: "none",
                  color: "#000",
                  borderBottom: isActive ? '3px solid #096DD9' : "none"
                }
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Уведомления от УК </Typography>
                <Badge badgeContent={3} color="primary">
                  <NotificationsNoneOutlined color="primary" sx={{ ml: 1 }} />
                </Badge>
              </Box>
            </NavLink>
            <Link to='/signin'><IconButton ><ExitToAppOutlined color="primary" /></IconButton></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader;