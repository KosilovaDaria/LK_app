import { Box, Typography} from "@mui/material";
const TitleBar = (props) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: 2, paddingTop: 2 }} >
        <>{props.arrow}{props.icon}</>  
        <Typography variant="h6"> {props.title}</Typography>
        
      </Box>
      <Box sx={{height:2, width:'100%', backgroundColor:'rgba(9, 109, 217, 2)', mb:2}}></Box>
    </>

  )
}

export default TitleBar;