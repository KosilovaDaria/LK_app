import { Button, Box, Typography, Grid } from "@mui/material";

const ButtonStat = (props) => {
  return (
    <Button variant='text' sx={{}}>
      <Typography color={props.color} variant="h6">{props.children}</Typography>
    </Button>

  )
}

export default ButtonStat;