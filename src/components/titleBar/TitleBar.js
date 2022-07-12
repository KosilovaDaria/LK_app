import { Box, Typography} from "@mui/material";
const TitleBar = (props) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', p: '10px 0px', mt: 2}} >
        <>{props.arrow}{props.icon}</>  
        <Typography variant="h1"> {props.title}</Typography>
      </Box>
      <Box sx={{height:2, width:'100%', backgroundColor:'primary.main', mb:2}}></Box>
    </>
  )
}

export default TitleBar;