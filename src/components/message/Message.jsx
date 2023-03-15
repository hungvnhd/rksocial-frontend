import { useEffect, useState } from "react";
import MessageRoomsContainer from "./MessageRoomContainer";
import MessageRoomDetail from "./MessageRoomDetail";
import Cookies from "js-cookie";

function Message() {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://4farmers.vercel.app/api/v1/messages/${Cookies.get("userID")}`
      );
      const data = await res.json();
      setRooms(data);
    };
    getData();
  }, []);
  console.log(rooms);
  if (!rooms) {
    return <div>LOADING...</div>;
  }
  return (
    <>
      <div className='message-container'>
        <MessageRoomsContainer rooms={rooms.data} />
        {/* <MessageRoomDetail /> */}
      </div>
    </>
  );
}

export default Message;
