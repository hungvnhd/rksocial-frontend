import React, { Component } from "react";
import Avatar from "./Avatar";
import Peopletcn from "./Peopletcn";
import Grid from "@mui/material/Unstable_Grid2";
import "./tcn.css";
function Tcncontainer() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={1.5}></Grid>
        <Grid xs={6}>
          <Avatar />
        </Grid>
        <Grid xs={2.5}>
          {" "}
          <Peopletcn />
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </>
  );
}

export default Tcncontainer;
