import { AppBar, Container, Typography, Button, IconButton, Toolbar, Box, Avatar } from "@mui/material";
import { CottageOutlined, NotificationsNoneOutlined, ExitToAppOutlined } from '@mui/icons-material';
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
const AppHeader = () => {

  return (
    <AppBar position="static" color="transparent" elevation={3}>
      <Container maxWidth='lg'>
        <Toolbar >
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Avatar sx={{ bgcolor: blue[700] }}>A</Avatar>
            <Typography sx={{ color: blue[700] }} ml={2} component="h2" variant="h4">Apparts ЛК</Typography>
          </Box>
          <Box>
            <Link to='/apartments'>
              <Button
                endIcon={<CottageOutlined />}>Апартаменты</Button>
            </Link>
            <Link to="/notithications">
              <Button endIcon={<NotificationsNoneOutlined />} >Уведомления от УК</Button>
            </Link>

            <Link to='/signin'><IconButton ><ExitToAppOutlined /></IconButton></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader;