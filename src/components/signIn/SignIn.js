// import { ConstructionOutlined } from '@mui/icons-material';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Box, Typography, Container, Stack } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/backGround.png';
import {useUser} from '../userContext/UserContext';


const theme = createTheme({
  appBackGround: {
    color: 'grey.800',
    size: 'cover',
    repeat: 'no-repeat',
    position: 'center',
    image: `url(${bgImage})`
  }
});
const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundImage: theme.appBackGround.image,
  backgroundColor: theme.appBackGround.color,
  backgroundSize: theme.appBackGround.size,
  backgroundRepeat: theme.appBackGround.repeat,
  backgroundPosition: theme.appBackGround.position,
}))

export default function SignIn() {
  // Ваш пароль от ЛК: Rqbzk69R

  const { user, getCurrentUser } = useUser();

  const handleLogin = async (event) => {
    event.preventDefault();

//рабочий вариант с запросом
    const data = new FormData(event.currentTarget);

    let response = await fetch('http://lk.local/auth/login', {

      method: 'POST',
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
        rememberMe: data.get('rememberMe')
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let result = await response.json();
    console.log(result)
    localStorage.setItem('user', JSON.stringify(result.user))
    if (result.success === true) {
      getCurrentUser()
      
    } else {
      console.log('no user')
    }


    //эмуляция для проверки работы локалстореджа
//     let userr = {
//       email: "kosilova@edelink.ru",
//       ext_headoffice_id: "1",
//       ext_id: "827",
//       ext_sys_shortname: "ecvilocal",
//       firstname: "Дарья",
//       id: "1",
//       lastname: "Косилова",
//       status: "1",
//       surname: "Дмитриевна"
//     }
//     localStorage.setItem('user', JSON.stringify(userr));
//     getCurrentUser();
//     console.log('sign in')

  };
// console.log(user +' sign in')

  return (
    <ThemeProvider theme={theme}>
      <CustomContainer component="main" maxWidth='100%'
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CssBaseline />
        <Box
          borderRadius={3}
          sx={{
            p: 8,
            pt: 4,
            width: 440,
            height: 465,
            backgroundColor: '#fff',
          }}
        >
          <Typography component="h1" variant="h4" >
            Вход в ЛК
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Эл. почта"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked value="1" color="primary" name='rememberMe' />}
              label="Запомнить меня"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            > Войти
            </Button>
            <Stack spacing={2} sx={{ textAlign: 'center' }}>
              <Link to='/passrecovery'>
                Забыли пароль?
              </Link>
              <Link to='/passrecovery'>
                Как создать аккаунт?
              </Link>
            </Stack>
          </Box>
        </Box>
      </CustomContainer>
    </ThemeProvider>
  );
}
