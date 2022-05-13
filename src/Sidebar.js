import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
      )
    );
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>GitStart</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title={"Threads"} />
      <SidebarOption Icon={InboxIcon} title={"Mentions & reactions"} />
      <SidebarOption Icon={DraftsIcon} title={"Saved items"} />
      <SidebarOption Icon={BookmarkBorderIcon} title={"Channel browser"} />
      <SidebarOption Icon={PeopleAltIcon} title={"People & user groups"} />
      <SidebarOption Icon={AppsIcon} title={"Apps"} />
      <SidebarOption Icon={FileCopyIcon} title={"File browser"} />
      <SidebarOption Icon={ExpandLessIcon} title={"Show less"} />

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title={"Channels"} />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title={"Add Channels"} />
      {/*Connect to DB and list all the channels */}
      {/* <SidebarOption .../> */}
      {channels.map((channel) => (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;