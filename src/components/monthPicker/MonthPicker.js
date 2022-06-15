import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ruLocale from 'date-fns/locale/ru'
import { useState } from "react";


const MonthPicker = () => {
  const [value, setValue] = useState(new Date());

  console.log(value)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <DatePicker
        views={[ 'month', 'year']}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField sx={{ '& .MuiOutlinedInput-input': { padding: 1 } }} {...params} />}
      />
    </LocalizationProvider>
  )
}

export default MonthPicker;