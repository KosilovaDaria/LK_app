import { Box, Divider, Grid, Typography } from "@mui/material";
import { CottageOutlined } from '@mui/icons-material';
import ApartCard from "../apartCard/ApartCard";

const MainPage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 2, paddingTop: 2 }}>
        <CottageOutlined color="primary" fontSize="large" />
        <Typography variant="h6">Смирнов Иван Евгеньевич</Typography>
      </Box>
      <Divider />
      <Grid container spacing={2}>
        <ApartCard />
        <ApartCard />
      </Grid>
    </>
  )
}

export default MainPage;