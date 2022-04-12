import { TextField, InputAdornment, Typography } from "@mui/material";
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import ruLocale from 'date-fns/locale/ru'
import { useState } from "react";
// import { CalendarMonth } from '@mui/icons-material';
import {CalendarToday} from '@mui/icons-material';
import { Box } from "@mui/system";
const MonthPicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
    <Box sx={{width:'200px', height:'40px',display:'flex', justifyContent:'space-between', alignItems:'center', color:'rgba(0, 0, 0, 0.54)', borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}}> 
      <Typography> Апрель 2022г.</Typography>
      <CalendarToday />
    </Box>
    
      {/* <TextField
      sx={{width:'200px', height:'20px', p:0}}
       InputProps={{
         padding:0,
        startAdornment: (
          <InputAdornment position="start">
            Апрель 2022г.
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <CalendarToday />
          </InputAdornment>
        ),
      }}/> */}
    </>
    
   



    // <LocalizationProvider dateAdapter={DateAdapter} locale={ruLocale}>
    //   <DatePicker
    //     views={['year', 'month']}
    //     value={value}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField sx={{ '& .MuiOutlinedInput-input': { padding: 1 } }} {...params} />}
    //   />
    // </LocalizationProvider>
  )
}

export default MonthPicker;