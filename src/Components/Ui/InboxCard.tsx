import type { inbox } from "../types";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { loadChat } from "../../store/slices/chatSlice";
import { openChat } from "../../store/slices/inboxStatusSlice";
import Typing from "./Typing";

/* ================= MAIN ================= */
export default function InboxCard(data: inbox) {
  const { id, name, lastMessage, avatarUrl, isOnline, unreadMessages } = data;

  const dispatch = useDispatch<AppDispatch>();
  const initials = name.charAt(0).toUpperCase();

  const handleClick = () => {
    dispatch(loadChat(id)); // load messages
    dispatch(openChat()); // open chat UI
  };

  return (
    <div className="inboxCard" onClick={handleClick}>
      {/* Avatar */}
      <div className="avatarContainer">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`${name} profile`}
            className="avatarImage"
          />
        ) : (
          <div className="avatarImage">{initials}</div>
        )}
        <span className={`onlineBadge ${isOnline ? "online" : "offline"}`} />
      </div>

      {/* Content */}
      <div className="content">
        <div className="header">
          <h3 className="name">{name}</h3>
          {lastMessage.isTyping && <Typing />}
          {lastMessage.isImage && <p className="messsage">Photo📷</p>}
          {!lastMessage.isImage && !lastMessage.isTyping && (
            <p className="message">{lastMessage.text}</p>
          )}
        </div>

        <div className="rightColumn">
          <span className="timeStamp">{lastMessage.createdAt}</span>
          {unreadMessages > 0 && (
            <span className="unreadCount">{unreadMessages}</span>
          )}
        </div>
      </div>
    </div>
  );
}
