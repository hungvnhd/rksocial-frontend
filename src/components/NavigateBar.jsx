import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Avatar from "@mui/material/Avatar";

import { styled, alpha } from "@mui/material/styles";

import Menu from "@mui/material/Menu";

import Divider from "@mui/material/Divider";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Cookies from "js-cookie";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
function NavigateBar() {
  const [userData, setUserData] = useState([]);
  const [userDataAll, setUserDataAll] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignout = () => {
    Cookies.remove("userID");
    window.location.href = "https://rksocial-frontend.vercel.app/auth/login";
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://4farmers.vercel.app/api/v1/users/${Cookies.get("userID")}`
      );
      const json = await data.json();

      setUserData(json);
    };
    fetchData();
  }, []);
  console.log(userData);

  useEffect(() => {
    const fetchDataAll = async () => {
      const dataAll = await fetch(`https://4farmers.vercel.app/api/v1/users`);
      const json = await dataAll.json();

      setUserDataAll(json);
      console.log(json);
    };
    fetchDataAll();
  }, []);

  if (userData.length === 0) {
    return null;
  }

  return (
    <>
      <nav className='nav-container'>
        <Grid container spacing={1} className='nav-fixed'>
          <Grid xs={1.5}></Grid>
          <Grid xs={4}>
            <div className='container-nav-logo'>
              <Link to='/'>
                <img
                  className='logo-brand'
                  src={require("../images/rc.jpg")}
                  alt=''
                />
              </Link>
              <div>
                <div className='container-search'>
                  <SearchIcon
                    onClick={() => onSearch(value)}
                    sx={{ fontSize: "30px" }}
                  />
                  <input
                    type='text'
                    value={value}
                    onChange={onChange}
                    placeholder='Search'
                    className='search-input'
                  />
                </div>
                <div className='dropdown'>
                  {/* <Link to={`/feed/${userData.id}`}> */}
                  {userDataAll
                    .filter((item) => {
                      const searchTerm = value.toLowerCase();
                      const fullName = item.fullName.toLowerCase();

                      return searchTerm && fullName.startsWith(searchTerm);
                    })
                    .map((item) => (
                      <List
                        onClick={() => onSearch(item.fullName)}
                        className='dropdown-row'
                        key={item.fullName}
                      >
                        <Link to={`/user/${item.id}`}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <SearchIcon />
                              </ListItemIcon>
                              <ListItemText primary={item.fullName} />
                              <FiberManualRecordIcon
                                style={{ color: "#666666" }}
                                sx={{ fontSize: "5px" }}
                              />
                              <ListItemText
                                style={{ color: "#666666" }}
                                sx={{ fontSize: "5px" }}
                                primary={item.jobs}
                              />
                              <FiberManualRecordIcon
                                style={{ color: "#666666" }}
                                sx={{ fontSize: "5px" }}
                              />
                              <ListItemText
                                style={{
                                  color: "#666666",
                                  marginRight: "60px",
                                }}
                                sx={{ fontSize: "5px" }}
                                primary={item.company}
                              />
                              <ListItemText
                                primary={
                                  <Avatar
                                    style={{ marginRight: "5px" }}
                                    alt={item.fullName}
                                    sx={{ width: 30, height: 30 }}
                                    src={item.avatar}
                                  />
                                }
                              />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      </List>
                    ))}
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={0.5}></Grid>
          <Grid xs={4.5}>
            <div className='flex'>
              <NavLink to='/feed' className='btn-nav'>
                <div>
                  <HomeIcon />
                </div>
                <span className='btn-nav-name'>Home</span>
              </NavLink>
              <NavLink to='/mynetwork' className='btn-nav'>
                <div>
                  <GroupIcon />
                </div>
                <span className='btn-nav-name'>My Network</span>
              </NavLink>
              <NavLink to='/jobs' className='btn-nav'>
                <div>
                  <WorkIcon />
                </div>
                <span className='btn-nav-name'>Jobs</span>
              </NavLink>
              <NavLink to='/messaging' className='btn-nav'>
                <div>
                  <SmsIcon />
                </div>
                <span className='btn-nav-name'>Messaging</span>
              </NavLink>
              <NavLink to='/notifications' className='btn-nav'>
                <div>
                  <NotificationsIcon />
                </div>
                <span className='btn-nav-name'>Notifications</span>
              </NavLink>
              <div
                // id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                variant='contained'
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className='btn-nav'
              >
                <div>
                  <img
                    src={userData[0].avatar}
                    alt=''
                    className='avatar-user'
                  />
                </div>
                <span className='ava-seemore'>
                  Me
                  <ExpandMoreIcon />
                </span>
              </div>

              <StyledMenu
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                disableScrollLock={true}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {" "}
                <div className='style-menu'>
                  <div onClick={handleClose} disableRipple>
                    <div className='profile-user'>
                      <img
                        src={userData[0].avatar}
                        alt=''
                        className='profile-avatar'
                      />
                      <span>{userData[0].fullName}</span>
                    </div>

                    <Link to={`/user/${Cookies.get("userID")}`} className='btn-profile'>
                      <div  className='btn-profile-inner'>View Profile</div>
                    </Link>
                  </div>
                  <Divider sx={{ my: 0.5 }} />

                  <div
                    className='list-item-title'
                    onClick={handleClose}
                    disableRipple
                  >
                    Account
                  </div>
                  <div
                    className='list-item'
                    onClick={handleClose}
                    disableRipple
                  >
                    Settings & Privacy
                  </div>
                  <div
                    className='list-item'
                    onClick={handleClose}
                    disableRipple
                  >
                    Help
                  </div>
                  <div
                    className='list-item'
                    onClick={handleClose}
                    disableRipple
                  >
                    Language
                  </div>
                  <Divider sx={{ my: 0.5 }} />
                  <div
                    className='list-item-title'
                    onClick={handleClose}
                    disableRipple
                  >
                    Manage
                  </div>
                  <div
                    className='list-item'
                    onClick={handleClose}
                    disableRipple
                  >
                    Posts & Activity
                  </div>
                  <div
                    className='list-item'
                    onClick={handleClose}
                    disableRipple
                  >
                    Job Posting Account
                  </div>
                  <Divider sx={{ my: 0.5 }} />
                  <div
                    className='list-item'
                    onClick={handleSignout}
                    disableRipple
                  >
                    Sign out
                  </div>
                </div>
              </StyledMenu>
            </div>
          </Grid>
          {/* <Grid xs={1}></Grid> */}
        </Grid>
      </nav>
    </>
  );
}

export default NavigateBar;
