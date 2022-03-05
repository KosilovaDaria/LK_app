import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Box, Typography, Container, Stack } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import bgImage from '../../assets/backGround.png';

const theme = createTheme({
  appBackGround: {
    solor: 'grey.800',
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

export default function PassRecovery() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            Восстановление пароля
          </Typography>
          <Typography component="p" variant="subtitle1"  sx={{ mt: 3, mb: 2 }}>
          Введите Ваш  адрес электронной почты, используемый для входа.Мы вышлем письмо с инструкцией
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            > Отправить
            </Button>
          </Box>
        </Box>
      </CustomContainer>
    </ThemeProvider>
  );
}
