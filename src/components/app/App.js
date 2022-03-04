import SignIn from "../signIn/SignIn";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; import bgImage from '../../assets/backGround.png';
import {Container} from '@mui/material';
import SignInCss from "../signIn/SignInCss";
function App() {

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

  return (
    <>
    {/* <ThemeProvider  theme={theme}>
      <CustomContainer sx={{height: '100vh'}}> */}
        <SignIn/>
      {/* </CustomContainer>
    </ThemeProvider> */}
    {/* <SignInCss/> */}
    </>
  );
}

export default App;
