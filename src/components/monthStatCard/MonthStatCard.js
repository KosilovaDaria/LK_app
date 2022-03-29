import { Box, Typography } from "@mui/material";

const MonthStatCard = (props) => {
  return (
    <>
      <Box sx={{ width: '350px', display: 'flex', justifyContent: 'center' }}>
        <>{props.icon}</>
        <Typography variant="h2">{props.title}</Typography>
      </Box>
      {props.children}
      <Typography variant="caption" >{props.subtitle}</Typography>
    </>
  )

}

export default MonthStatCard;