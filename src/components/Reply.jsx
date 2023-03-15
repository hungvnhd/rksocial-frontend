import React, {useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
function Reply(props) {
  const { reply } = props;
  // console.log(reply);
  

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <img alt='Remy Sharp' src={reply.replyUserAva ? reply.replyUserAva : "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg" } style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
        </ListItemAvatar>
        <ListItemText
          primary={reply.replyUsername}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", paddingLeft: "4px" }}
                component='span'
                variant='body2'
                color='text.primary'
              >
               
              </Typography>
              {reply.content}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  );
}

export default Reply;
