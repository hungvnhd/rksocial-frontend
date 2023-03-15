import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../images/avatar.png";
import Avatar1 from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Cookies from "js-cookie";


export default function Avatar() {
  const [user, setUserData] = useState();
  const [request, setRequest] = useState();
  const [status, setStatus] = useState("Follow");
  const [displayFileType,setDisplayFileType]=useState("none")
  const { id } = useParams();
  console.log(request);
  const userID = Number(Cookies.get("userID"));
  console.log(userID);
  console.log(id);

  const bull = (
    <Box
      component='span'
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const fetchDataAll = async () => {
    const dataAll = await fetch(`https://4farmers.vercel.app/api/v1/users/${id}`);
    const json = await dataAll.json();
    setUserData(json[0]);
  };

  useEffect(() => {
    if (id) fetchDataAll();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://4farmers.vercel.app/api/v1/friends");
      const allRequest = await res.json();
      setRequest(allRequest);
      if (request) {
        request.forEach((e, i) => {
          console.log(e.added);
          if (userID === Number(e.friendID) && Number(id) === Number(e.id)) {
            if (e.added === "false") {
              setStatus("Accept");
            } else if (e.added === "true") {
              setStatus("Friend");
            }
          } else if (userID === Number(e.id) && Number(id) === Number(e.friendID)) {
            if (e.added === "false") {
              setStatus("Cancel");
            } else if (e.added === "true") {
              setStatus("Friend");
            }
          }
          console.log(e.friendID);
        });
      }
    };
    getData();
  }, []);
  const getData = async () => {
    let userID = Cookies.get("userID");
    let res = await fetch(`https://4farmers.vercel.app/api/v1/friends/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userID }),
    });
    let data = await res.json();
    setStatus(data.added);
  };

  useEffect(() => {
    getData();
  }, []);



  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Analytics
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-iconeye'>
            <VisibilityIcon style={{ fontSize: 20 }} />{" "}
            <p style={{ fontSize: 15, marginLeft: 5 }}>Private to you</p>
          </div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-people'>
            <PeopleAltIcon style={{ fontSize: 25 }} />{" "}
            <div style={{ marginLeft: 5 }}>
              <b>3 Profile views</b>
              <p style={{ fontSize: 15, marginLeft: 5 }}>
                Discover who's viewed your profile
              </p>
            </div>
          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Resources
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-iconeye'>
            <VisibilityIcon style={{ fontSize: 20 }} />{" "}
            <p style={{ fontSize: 15, marginLeft: 5 }}>Private to you</p>
          </div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-people'>
            <PeopleAltIcon style={{ fontSize: 25 }} />{" "}
            <div style={{ marginLeft: 7 }}>
              <b>Creator mode</b>
              <p style={{ fontSize: 15 }}>
                Get discoverred, showcase content on your profile, and access to
                creator tools
              </p>
            </div>
          </div>{" "}
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-people' style={{ marginTop: 8 }}>
            <SettingsInputAntennaIcon style={{ fontSize: 25 }} />{" "}
            <div style={{ marginLeft: 7 }}>
              <b>My network</b>
              <p style={{ fontSize: 15 }}>
                See and anage your connections and interests
              </p>
            </div>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Activity
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          <a className='t-linkfr' href='#'>
            5 followers
          </a>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div>
            <b>You haven't posted lately</b>
          </div>{" "}
          <div>
            <p style={{ fontSize: 15 }}>
              Recent posts you share or comment or will be displayed here
            </p>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>
      <CardActions className='t-btncreatepost'>
        <Button id='btn-addprf' size='big'>
          Start a post
        </Button>
      </CardActions>
    </React.Fragment>
  );

  const onAddFriend = async (friendId) => {
    const data = {
      userId: Cookies.get("userID"),
    };
    let dataAll = await fetch(
      `https://4farmers.vercel.app/user/friends/request/${friendId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let json = await dataAll.json();
    console.log(json);
  };
  const handleChangeImage = (e) =>{
    if (displayFileType==="none"){
      setDisplayFileType("block")
    } else {
      setDisplayFileType("none")
    }
  }

  return (
    <div>
      {user && (
        <div style={{ marginTop: "8px" }}>
          <Card sx={{ maxWidth: 782 }}>
            <div style={{ maxWidth: 782, height: 197 }}>
              <CardMedia
                style={{ width: "100%", height: "100%" }}
                component='img'
                alt='green iguana'
                image={user.coverPic}
              />
            </div>{" "}
            <div className='t-avtandpen'>
              <Avatar1
                alt='Remy Sharp'
                src={user.avatar}
                sx={{ width: 150, height: 150 }}
                style={{ marginTop: -100 }}
              />
              <div className='t-pen'>
                {Cookies.get("userID") == user.id ?(<i className='fa-solid fa-pen'></i>):(<div></div>)}
                
              </div>
              <div onClick={handleChangeImage}>Change photo</div>
              <input type="file" style={{displayFileType}}/>
            </div>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                <h1 className='name'>{user.fullName}</h1>
                <div className='companyjob'>
                  {user.jobs} at {user.company}
                </div>
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                {user.location} -
                <a href='#' className='infocontainer'>
                  &nbsp;Contact info
                </a>
              </Typography>
              <div>
                <a
                  href='#'
                  className='infocontainer'
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  5 connections
                </a>
              </div>
            </CardContent>
            <CardActions>
            {Cookies.get("userID") == user.id ? (
                <Button id='btn-open' size='small'>
                  Open to
                </Button>
              ) : (
                <Button
                  id='btn-open'
                  size='small'
                  // onClick={(e) => onAddFriend(user.id)}
                  value={id}
                  onClick={(e)=> onAddFriend(user.id)}
                >
                  {status}
                </Button>
              )}
              <Button id='btn-addprf' size='small'>
                {Cookies.get("userID") == user.id
                  ? "Add profile section"
                  : "Message"}
              </Button>
              <Button id='btn-more' size='small'>
                More
              </Button>
            </CardActions>
          </Card>
          <Box sx={{ maxWidth: 784, marginTop: 1 }}>
            <Card>{card}</Card>
          </Box>
          <Box sx={{ maxWidth: 784, marginTop: 1 }}>
            <Card>{card1}</Card>
          </Box>
          <Box sx={{ maxWidth: 784, marginTop: 1 }}>
            <Card>{card2}</Card>
          </Box>
        </div>
      )}
    </div>
  );
}
