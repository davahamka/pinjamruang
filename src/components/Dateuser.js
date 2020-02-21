import React,{useState} from 'react';

import 'date-fns';
import Datepicker,{registerLocale, setDefaultLocale} from 'react-datepicker';
import id from 'date-fns/locale/id';
import "react-datepicker/dist/react-datepicker.css";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';

const Dateuser = () =>{
    
    const[date,setDate] = useState(new Date());

    function getDate(ambilDate){
        setDate(ambilDate)
    }
    return(
        <div style={{borderRadius:50}}>
            <div className="info-datepick">
                
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date"
          format="MM/dd/yyyy"
          value={date}
          onChange={getDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </MuiPickersUtilsProvider>
            </div>
        </div>
    );
}

export default Dateuser;