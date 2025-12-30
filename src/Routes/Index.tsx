import SideBar from "../Components/Layouts/SideBar";
import Home from "../Components/Layouts/Home";
import Chat from "../Components/Layouts/Chat";

// Redux
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

import { useMediaQuery } from "@mui/material";

export default function Index() {
  const isChatOpen = useSelector(
    (state: RootState) => state.inboxStatus.isChatOpen
  );

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="indexContainer">
      {/* Sidebar + Home visible if desktop OR mobile & chat closed */}
      {(!isMobile || (isMobile && !isChatOpen)) && (
        <SideBar isMobile={isMobile} />
      )}
      {(!isMobile || (isMobile && !isChatOpen)) && <Home isMobile={isMobile} />}

      {/* Chat visible if desktop OR mobile & chat open */}
      {(!isMobile || (isMobile && isChatOpen)) && <Chat isMobile={isMobile} />}
    </div>
  );
}
