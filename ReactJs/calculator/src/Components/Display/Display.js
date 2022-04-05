import React from 'react';
import { Paper } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';


function Display(props) {
    return (
        <div className='containerDisplay'>
            <Paper  >
                {props.numero1} {props.operador} {props.numero2}
            </Paper>
            <Paper>
                <p className='resultado'>{props.resultado}</p>
            </Paper>
        </div>
    )
}

export default Display