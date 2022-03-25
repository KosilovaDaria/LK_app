import { Grid, } from "@mui/material";
import { CottageOutlined } from '@mui/icons-material';
import ApartCard from "../apartCard/ApartCard";
import TitleBar from "../titleBar/TitleBar";

const Apartments = ({ aparts }) => {

  return (
    <>
      <TitleBar
        icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
        title='Смирнов Иван Евгеньевич' />
      <Grid container spacing={2}>
        <ApartCard aparts={aparts}/>
      </Grid>
    </>
  )
}

export default Apartments;