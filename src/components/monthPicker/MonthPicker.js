import { TextField,  } from "@mui/material";
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import ruLocale from 'date-fns/locale/ru'
import { useState } from "react";


const MonthPicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={ruLocale}>
      <DatePicker
        views={['year', 'month']}
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