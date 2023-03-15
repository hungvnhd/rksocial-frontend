import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Footer from "./Footer";
import Notify from "./Notify";
function Notifications() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={1.5}></Grid>
        <Grid xs={2}>
          <div className='block-notifications'>
            <div className="noti-title">Manage your </div>
            <div className="noti-title">Notifications</div>
            <div className="community-panel">View Settings</div>
          </div>
        </Grid>
        <Grid xs={4}><div className="block"><Notify/><Notify/><Notify/></div></Grid>
        <Grid xs={2.5}>
        <Footer/>
        </Grid>
        <Grid xs={2}>  
        </Grid>
      </Grid>
    </>
  );
}

export default Notifications;
