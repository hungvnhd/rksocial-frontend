import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import img1 from "../../img/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png";

function Managenetwork() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        className='t-listcontainer'
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            <h2 className='t-managemynetwork'>Manage my network</h2>
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <i className='fa-solid fa-user-group'></i>
          </ListItemIcon>
          <ListItemText primary='Conection' />
        </ListItemButton>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <i class='fa-solid fa-book-open-reader'></i>
              </ListItemIcon>
              <ListItemText primary='Contacts' />
            </ListItemButton>{" "}
            <ListItemButton>
              <ListItemIcon>
                <i class='fa-solid fa-user-group'></i>
              </ListItemIcon>
              <ListItemText primary='Following % followers' />
            </ListItemButton>{" "}
            <ListItemButton>
              <ListItemIcon>
                <i class='fa-sharp fa-solid fa-users'></i>
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>{" "}
            <ListItemButton>
              <ListItemIcon>
                <i class='fa-sharp fa-solid fa-calendar-days'></i>
              </ListItemIcon>
              <ListItemText primary='Events' />
            </ListItemButton>{" "}
            <ListItemButton>
              <ListItemIcon>
                <i class='fa-solid fa-file'></i>
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>{" "}
            <ListItemButton>
              <ListItemIcon>
                <i class='fa-solid fa-pager'></i>
              </ListItemIcon>
              <ListItemText primary='Newsletters' />
            </ListItemButton>{" "}
            <ListItemButton>
              <ListItemIcon>
                <i class='fa-solid fa-hashtag'></i>
              </ListItemIcon>
              <ListItemText primary='Hashtags' />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton className='t-show' onClick={handleClick}>
          {open ? (
            <ListItemText className='t-showless' primary='Show less' />
          ) : (
            <ListItemText className='t-showmore' primary='Show more' />
          )}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <div className='t-img1'>
          <img style={{ width: "100%" }} src={img1} alt='anh-2girl' />
        </div>
        <Divider />
        <div className='t-growcontainer'>
          <a href='#' className='t-grownetwork'>
            Grow your network
          </a>
        </div>
        <Divider />
        <div>
          <div className='t-about'>
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                About
              </a>
            </span>{" "}
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                Accessibility
              </a>
            </span>{" "}
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                Help Center
              </a>
            </span>{" "}
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                Privacy & Terms
              </a>
            </span>{" "}
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                Ad Choices
              </a>
            </span>{" "}
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                Advertising
              </a>
            </span>{" "}
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                Business Services
              </a>
            </span>{" "}
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                Get the LinkedIn app
              </a>
            </span>
            <span className='t-spancontainer'>
              <a className='t-all' href='#'>
                More
              </a>
            </span>
          </div>
        </div>
      </List>
    </>
  );
}

export default Managenetwork;
