import { RiChatNewLine } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Inbox from "../Sections/Inbox";

export default function Home() {
  const headerData = {
    text: "Chats",
    icon: <RiChatNewLine className="homeHeaderIcon" />,
  };
  return (
    <div className="homeContainer">
      {/* === Header === */}
      <div className="homeHeader">
        <h2>{headerData.text}</h2>
        <IconButton>{headerData.icon}</IconButton>
      </div>
      <hr className="homeHeaderDivider" />
      {/* === Chat === */}
      <Inbox />
    </div>
  );
}
