import { AppBar, Container, Typography, Button, IconButton, Toolbar, Box, Avatar } from "@mui/material";
import { CottageOutlined, NotificationsNoneOutlined, ExitToAppOutlined } from '@mui/icons-material';
import { blue } from "@mui/material/colors";

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
            <Button
              endIcon={<CottageOutlined />}>Апартаменты</Button>
            <Button endIcon={<NotificationsNoneOutlined />} >Уведомления от УК</Button>
            <IconButton><ExitToAppOutlined /></IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader;