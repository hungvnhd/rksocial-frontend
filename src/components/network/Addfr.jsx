import React from "react";
import Button from "@mui/material/Button";
import img1 from "../../img/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png";
import Avatar1 from "@mui/material/Avatar";

const Addfr = ({ friendaddd, btnAccept, btnremove }) => {
  {
    console.log(friendaddd);
  }

  return (
    <div className='t-fradd'>
      <div className='t-aboutfradd'>
        <div>
          <Avatar1
            style={{ marginTop: 0, width: "65px", height: "65px" }}
            alt='avt'
            src={img1}
          />
        </div>
        <div style={{ marginLeft: 10 }}>
          <b>{friendaddd.name}</b>
          <p style={{ fontSize: 15, color: "#5A6066", marginTop: "4px" }}>
            {friendaddd.job} {friendaddd.company}
          </p>
        </div>
      </div>
      <div>
        <Button
          onClick={btnremove}
          value={friendaddd.requestID}
          id='btn-ignore'
          size='big'
        >
          Ignore
        </Button>{" "}
        <Button
          onClick={btnAccept}
          value={friendaddd.requestID}
          id='btn-accept'
          size='big'
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default Addfr;
