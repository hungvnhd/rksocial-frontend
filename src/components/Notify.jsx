import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Notify() {
  return (
    <>
      <div style={{display:"flex",padding:"15px 20px"} } className="notifications-notify">
        <div style={{width:"60px",height:"60px"}} >
          <img src='https://img.thuthuatphanmem.vn/uploads/2018/10/26/anh-dep-dao-vinh-viet-nam_055419149.jpg' alt='' style={{width:"60px",height:"60px"}}/>
        </div>
        <div className="n-n-notitext">
          <span className="n-n-name">Name </span>
          <span>this is notification ok ok ok ok o ko ko ko ko ko ko ko ko ko ko ko ko ko kok o ko ko ko o ko ko ko ko k ok ok ok ok ok o</span>
        </div>
        <div className="n-n-dots"><MoreHorizIcon/></div>
        
      </div>
    </>
  );
}

export default Notify;
