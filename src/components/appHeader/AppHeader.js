import { AppBar, Container, Typography, Button, IconButton, Toolbar, Box, Avatar } from "@mui/material";
import {CottageOutlined, NotificationsNoneOutlined, ExitToAppOutlined} from '@mui/icons-material';

const AppHeader = () => {

  return (
    <>
      <AppBar position="absolute" color="transparent" elevation={3}>
        <Container maxWidth='100%'>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display:'flex' }}>
              <Avatar>A</Avatar>
              <Typography ml={2}component="h2" variant="h4">Apparts ЛК</Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button sx={{
                textTransform:'none',
                
              }}
              endIcon={<CottageOutlined />}>Апартаменты</Button>
              <Button endIcon={<NotificationsNoneOutlined />}>Уведомления от УК</Button>
              <IconButton><ExitToAppOutlined /></IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default AppHeader;