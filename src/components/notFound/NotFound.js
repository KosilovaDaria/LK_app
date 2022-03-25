import { Typography, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <Typography variant="h5" component='h1' m={2}>Такой страницы не существует</Typography>
    <Link to='/apartments'><Button variant="contained">Вернуться на главную</Button></Link>
    </Box>
  )
}

export default NotFound;