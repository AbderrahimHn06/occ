import { RiChatNewLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import Inbox from "../Sections/Inbox";
import Contacts from "../Sections/Contacts";
import Profile from "../Sections/Profile";
import { useState } from "react";
import CustomModal, { type modalType } from "../Ui/MyCustomModal";
import { useMediaQuery } from "@mui/material";

// Redux toolkit
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [modal, setModal] = useState<{ open: boolean; current: modalType }>({
    open: false,
    current: undefined,
  });

  const handleChatModalOpen = () =>
    setModal({ open: true, current: "newChat" });

  const handleContactsModalOpen = () =>
    setModal({ open: true, current: "newContact" });

  const handleClose = () => setModal({ open: false, current: undefined });

  const currentPage = useSelector((state: RootState) => state.page);
  let currentPageIcon;
  if (currentPage === "inbox") {
    currentPageIcon = (
      <RiChatNewLine className="homeHeaderIcon" onClick={handleChatModalOpen} />
    );
  } else if (currentPage === "contacts") {
    currentPageIcon = (
      <IoAddOutline
        className="homeHeaderIcon"
        onClick={handleContactsModalOpen}
      />
    );
  }

  const headerData = {
    text: currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
    icon: currentPageIcon,
  };
  return (
    <div className="homeContainer" style={{ width: isMobile ? "100%" : 360 }}>
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
      {/* New Chat Modal */}
      <CustomModal
        open={modal.open && modal.current === "newChat"}
        handleClose={handleClose}
        type={modal.current === "newChat" ? "newChat" : "newContact"}
      />
      <CustomModal
        open={modal.open && modal.current === "newContact"}
        handleClose={handleClose}
        type={modal.current}
      />
    </div>
  );
}
