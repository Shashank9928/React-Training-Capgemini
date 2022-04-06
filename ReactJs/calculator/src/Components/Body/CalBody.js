import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Backspace } from "@material-ui/icons";


function CalculatorBody(props) {
    
    return (
        <div>
            <Grid container spacing={5} >
                <Grid item xs={3}>
                    <Button variant="contained" color="error" fullWidth value={'backspace'} onClick={(e) => props.calcula(e.currentTarget.value)} className = 'operador'>
                        <Backspace />
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="secondary" fullWidth value={'C'} onClick={(e) => props.calcula(e.currentTarget.value)}> C </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'%'} onClick={(e) => props.calcula(e.currentTarget.value)}> % </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'/'} onClick={(e) => props.calcula(e.currentTarget.value)}> ÷ </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'7'} onClick={(e) => props.calcula(e.currentTarget.value)}> 7 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'8'} onClick={(e) => props.calcula(e.currentTarget.value)}> 8 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'9'} onClick={(e) => props.calcula(e.currentTarget.value)}> 9 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'*'} onClick={(e) => props.calcula(e.currentTarget.value)}> x </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'4'} onClick={(e) => props.calcula(e.currentTarget.value)}> 4 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'5'} onClick={(e) => props.calcula(e.currentTarget.value)}> 5 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'6'} onClick={(e) => props.calcula(e.currentTarget.value)}> 6 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'-'} onClick={(e) => props.calcula(e.currentTarget.value)}> - </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'1'} onClick={(e) => props.calcula(e.currentTarget.value)}> 1 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'2'} onClick={(e) => props.calcula(e.currentTarget.value)}> 2 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'3'} onClick={(e) => props.calcula(e.currentTarget.value)}> 3 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'+'} onClick={(e) => props.calcula(e.currentTarget.value)}> + </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'0'} onClick={(e) => props.calcula(e.currentTarget.value)}> 0 </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth value={'.'} onClick={(e) => props.calcula(e.currentTarget.value)}> . </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="success" fullWidth  value={'='} onClick={(e) => props.calcula(e.currentTarget.value)}> = </Button>
                </Grid>
            </Grid>

        </div>
    );

}


export default CalculatorBody;