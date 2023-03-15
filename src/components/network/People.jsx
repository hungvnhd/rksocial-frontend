import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img1 from "../../img/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png";
import Avatar from "@mui/material/Avatar";

const People = ({ user, btnAdding }) => {
  return (
    <>
      <div>
        <div className='t-cardcontainer'>
          <Card sx={{ maxWidth: 244, marginTop: 2 }}>
            <CardActionArea>
              <div className='imgcontainer'>
                <CardMedia component='img' image={img1} alt='green iguana' />
              </div>
              <CardContent>
                <Avatar
                  style={{ width: 120, height: 120 }}
                  alt='Remy Sharp'
                  src={img1}
                />
                <Typography gutterBottom variant='h5' component='div'>
                  {user.fullName}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                value={user.id}
                onClick={btnAdding}
                size='small'
                color='primary'
              >
                Follow
              </Button>
            </CardActions>
          </Card>{" "}
        </div>
      </div>
    </>
  );
};

export default People;
