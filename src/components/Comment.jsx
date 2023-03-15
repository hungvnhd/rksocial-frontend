import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LikeComment from "./LikeComment";
import Reply from "./Reply";
// import { Reply } from "@mui/icons-material";

function Comment(props) {
  const { comments } = props;

  console.log(comments);
  const [displayRep, setDisplayRep] = useState("none");
  const handleReply = (e) => {
    if (displayRep === "none") {
      setDisplayRep("block");
    } else {
      setDisplayRep("none");
    }
  };
  const [postReply, setPostReply] = useState();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginTop: "10px",
      }}
    >
      {comments.map((e) => (
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <img
              alt='Remy Sharp'
              src={
                e.userAva
                  ? e.userAva
                  : "https://thoaihoacotsong.vn/wp-content/uploads/hinh-anh-cay-bo-cong-anh.jpg"
              }
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={e.userName}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                  paddingLeft='5px'
                >
                  {e.content}
                </Typography>
                <LikeComment comments={e} />
                <div onClick={handleReply}>See reply</div>
                <div style={{ display: displayRep }}>
                  {e.reply ? e.reply.map((e, i) => <Reply reply={e} />) : ""}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
      <Divider variant='inset' component='li' />
    </List>
  );
}
export default Comment;
