import { AppBar, Container, Typography, Button, IconButton, Toolbar, Box, Avatar } from "@mui/material";
import { CottageOutlined, NotificationsNoneOutlined, ExitToAppOutlined } from '@mui/icons-material';
import { blue } from "@mui/material/colors";
import { Link, NavLink } from "react-router-dom";
import {  styled } from '@mui/material/styles';

const AppHeader = () => {

  const MenuButton = styled(Button) ({
    width: 200,
    height: 88,
    textTransform: 'none',
    fontSize: 16,
    color:'rgba(54, 60, 69, 1)',
    textDecoration:'none',
    '&:hover':{
      borderBottom: '2px solid rgba(9, 109, 217, 1)',
      backgroundColor:'rgb(255, 255, 255)',
      color:'rgba(9, 109, 217, 1)'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  })

  return (
    <AppBar position="static" color="transparent" elevation={3}>
      <Container maxWidth='lg'>
        <Toolbar >
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Avatar sx={{ bgcolor: blue[700] }}>A</Avatar>
            <Typography sx={{ color: blue[700] }} ml={2} component="h2" variant="h4">Apparts ЛК</Typography>
          </Box>
          <Box>
            <Link to='/apartments' style={{ textDecoration: "none" }}>
              <MenuButton
                endIcon={<CottageOutlined />}>Апартаменты</MenuButton>
            </Link>
            <Link to="/notifications" style={{ textDecoration: "none" }}>
              <MenuButton endIcon={<NotificationsNoneOutlined />} >Уведомления от УК</MenuButton>
            </Link>

            <Link to='/signin'><IconButton ><ExitToAppOutlined /></IconButton></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader;