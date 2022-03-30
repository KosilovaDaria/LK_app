import { Box, Typography,  } from "@mui/material";

const Subtitle = (props) => {
  return (
    <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end', mb:1}}>
      <Typography width='150px' variant="body1" color='secondary.light'  >{props.title}</Typography>
      <Typography variant="body1">{props.text}</Typography>
    </Box>
    

  )
}

export default Subtitle