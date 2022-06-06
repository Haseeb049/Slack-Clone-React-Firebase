import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "../../../firebase";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`room/${id}`);
    } else {
      navigate(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className='sidebarOption'
      onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <React.Fragment>
          <div className='sidebarOption__hash'> # </div>
          <h3>{title}</h3>
        </React.Fragment>
      )}
    </div>
  );
}

export default SidebarOption;
