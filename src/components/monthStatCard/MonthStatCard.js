import { Box, Typography } from "@mui/material";

const MonthStatCard = (props) => {
  console.log('render monthStatCard')
  return (
    <>
      <Box sx={{ maxWidth: '350px', maxHeight:'238px', display: 'flex', justifyContent: 'center', mb:'10px' }}  elevation={3}>
        <>{props.icon}</>
        <Typography variant="h2">{props.title}</Typography>
      </Box>
      {props.children}
      <Typography variant="caption" >{props.subtitle}</Typography>
    </>
  )

}

export default MonthStatCard;