import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../images/avatar.png";
import Avatar1 from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Peopletcn() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const bull = (
    <Box
      component='span'
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  
  const img = (
    <React.Fragment>
      <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <img style={{ width: "100%" }} src={img1} alt='' />
      </CardContent>
    </React.Fragment>
  );

  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h6' component='div'>
          People also viewed
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-frconnect'>
            <div className='t-people'>
              <Avatar1
                style={{ marginTop: 0, width: "50px", height: "50px" }}
                alt='avt'
                src={img1}
              />
              <div style={{ marginLeft: 10 }}>
                <b>Đức Thịnh</b>
                <p style={{ fontSize: 12 }}>Đại học đời</p>
              </div>
            </div>
            <Button id='btn-connectfr' size='big'>
              Connect +
            </Button>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h6' component='div'>
          People you may know
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-frconnect'>
            <div className='t-people'>
              <Avatar1
                style={{ marginTop: 0, width: "50px", height: "50px" }}
                alt='avt'
                src={img1}
              />
              <div style={{ marginLeft: 10 }}>
                <b>Đức Thịnh</b>
                <p style={{ fontSize: 12 }}>Đại học đời</p>
              </div>
            </div>
            <Button id='btn-connectfr' size='big'>
              Connect +
            </Button>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-frconnect'>
            <div className='t-people'>
              <Avatar1
                style={{ marginTop: 0, width: "50px", height: "50px" }}
                alt='avt'
                src={img1}
              />
              <div style={{ marginLeft: 10 }}>
                <b>Đức Thịnh</b>
                <p style={{ fontSize: 12 }}>Đại học đời</p>
              </div>
            </div>
            <Button id='btn-connectfr' size='big'>
              Connect +
            </Button>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>{" "}
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-frconnect'>
            <div className='t-people'>
              <Avatar1
                style={{ marginTop: 0, width: "50px", height: "50px" }}
                alt='avt'
                src={img1}
              />
              <div style={{ marginLeft: 10 }}>
                <b>Đức Thịnh</b>
                <p style={{ fontSize: 12 }}>Đại học đời</p>
              </div>
            </div>
            <Button id='btn-connectfr' size='big'>
              Connect +
            </Button>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>{" "}
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-frconnect'>
            <div className='t-people'>
              <Avatar1
                style={{ marginTop: 0, width: "50px", height: "50px" }}
                alt='avt'
                src={img1}
              />
              <div style={{ marginLeft: 10 }}>
                <b>Đức Thịnh</b>
                <p style={{ fontSize: 12 }}>Đại học đời</p>
              </div>
            </div>
            <Button id='btn-connectfr' size='big'>
              Connect +
            </Button>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>{" "}
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-frconnect'>
            <div className='t-people'>
              <Avatar1
                style={{ marginTop: 0, width: "50px", height: "50px" }}
                alt='avt'
                src={img1}
              />
              <div style={{ marginLeft: 10 }}>
                <b>Đức Thịnh</b>
                <p style={{ fontSize: 12 }}>Đại học đời</p>
              </div>
            </div>
            <Button id='btn-connectfr' size='big'>
              Connect +
            </Button>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>{" "}
      <Collapse in={open} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            <div className='t-frconnect'>
              <div className='t-people'>
                <Avatar1
                  style={{ marginTop: 0, width: "50px", height: "50px" }}
                  alt='avt'
                  src={img1}
                />
                <div style={{ marginLeft: 10 }}>
                  <b>Đức Thịnh</b>
                  <p style={{ fontSize: 12 }}>Đại học đời</p>
                </div>
              </div>
              <Button id='btn-connectfr' size='big'>
                Connect +
              </Button>
            </div>
          </Typography>
          <Divider style={{ maxWidth: 800, fontSize: 20 }} />
        </CardContent>
      </Collapse>
      <ListItemButton className='t-show' onClick={handleClick}>
        {open ? (
          <ListItemText className='t-showless' primary='Show less' />
        ) : (
          <ListItemText className='t-showmore' primary='Show more' />
        )}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </React.Fragment>
  );

  return (
    <div style={{ marginLeft: "15px" }}>
      
      
      <Box sx={{ maxWidth: 324, marginTop: 1 }}>
        <Card>{card1}</Card>
      </Box>
      <Box sx={{ maxWidth: 324, marginTop: 1 }}>
        <Card>{card2}</Card>
      </Box>
      <Box sx={{ maxWidth: 324, marginTop: 1 }}>
        <Card>{img}</Card>
      </Box>
    </div>
  );
}
