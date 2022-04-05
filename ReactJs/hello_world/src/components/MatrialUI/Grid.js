import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

function GridComponent() {
  return (
    <div className="container"
        style={{
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            marginTop: "150px"
        }}
    >
      <h1 className="my-5">Grid</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default GridComponent;
