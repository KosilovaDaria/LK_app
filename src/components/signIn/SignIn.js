import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Box, Typography, Container, Stack } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { getAuth } from '../services/services';
import { useUser } from '../userContext/UserContext';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import bgImage from '../../assets/backGround.png';

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

  const { getCurrentUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  if (localStorage.getItem('user')) {
    return <Navigate to="/apartments" replace={true} />
  }

  const fromPage = location.state?.from?.pathname || '/apartments'

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    getAuth(JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
      rememberMe: data.get('rememberMe')
    }))
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.user));
        if (res.success === true) {
          getCurrentUser();
          navigate(fromPage, { replace: true });
        } else {
          console.log('no user')
        }
      })
  };

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
