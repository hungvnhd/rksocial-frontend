import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Addfr from "./Addfr";

const Manage = ({ friendadd, btnAccept, btnremove }) => {
  return (
    <List
      className='t-listcontainer'
      sx={{ width: "100%", maxWidth: 783, bgcolor: "background.paper" }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          component='div'
          id='nested-list-subheader'
          className='t-managetop'
        >
          <h2 className='t-managemynetwork'>
            {friendadd.filter((users) => users.added === "false").length
              ? "Invitations"
              : "No pending invitations"}
          </h2>
          <div className='t-right'>
            <p>Manage</p>
          </div>
        </ListSubheader>
      }
    >
      {friendadd
        .filter((users) => users.added === "false")
        .map((friendaddd) => (
          <Addfr
            btnAccept={btnAccept}
            btnremove={btnremove}
            key={friendaddd.id}
            friendaddd={friendaddd}
          />
        ))}
    </List>
  );
};

export default Manage;
