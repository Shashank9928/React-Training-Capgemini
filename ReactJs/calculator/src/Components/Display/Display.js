import React from 'react';
// import Box from "@material-ui/core/Box";


function Display(props) {
    return (
        
            <div className='containerDisplay'>
                <div className='numbers'  >
                    <p >
                    {props.number1} {props.operator} {props.number2}
                    </p>
                </div>
                <div className='result'>
                    <p >{props.result}</p>
                </div>
            </div >
    )
}

export default Display