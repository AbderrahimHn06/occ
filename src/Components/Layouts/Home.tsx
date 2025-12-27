import { RiChatNewLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import Inbox from "../Sections/Inbox";
import Contacts from "../Sections/Contacts";
import Profile from "../Sections/Profile";

// Redux toolkit
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function Home() {
  const currentPage = useSelector((state: RootState) => state.page);
  let currentPageIcon;
  if (currentPage === "inbox") {
    currentPageIcon = <RiChatNewLine className="homeHeaderIcon" />;
  } else if (currentPage === "contacts") {
    currentPageIcon = <IoAddOutline className="homeHeaderIcon" />;
  }

  const headerData = {
    text: currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
    icon: currentPageIcon,
  };
  return (
    <div className="homeContainer">
      {/* === Header === */}
      {currentPage != "profile" && (
        <div className="homeHeader">
          <h2>{headerData.text}</h2>
          <IconButton>{headerData.icon}</IconButton>
        </div>
      )}
      {currentPage != "profile" && <hr className="homeHeaderDivider" />}
      {/* === inbox === */}
      {currentPage === "inbox" && <Inbox />}
      {/* Contacts */}
      {currentPage === "contacts" && <Contacts />}
      {/* Profile */}
      {currentPage === "profile" && <Profile />}
    </div>
  );
}
