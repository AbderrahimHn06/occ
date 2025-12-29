import type { inbox } from "../types";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { loadChat } from "../../store/slices/chatSlice";

/* ================= MAIN ================= */
export default function InboxCard(data: inbox) {
  const { id, name, lastMessage, avatarUrl, isOnline, unreadMessages } = data;

  const dispatch = useDispatch<AppDispatch>();
  const initials = name.charAt(0).toUpperCase();

  return (
    <div className="inboxCard" onClick={() => dispatch(loadChat(id))}>
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
        <span
          className={`onlineBadge ${isOnline ? "online" : "offline"}`}
        ></span>
      </div>

      {/* Content */}
      <div className="content">
        <div className="header">
          <h3 className="name">{name}</h3>
          <p className="message">{lastMessage.text}</p>
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

// Todos
// 1. Changing the type of the last message to be a react node element to be able to pass as a prop the followings:
//    - text with highlighted words for Unread messages
//    - ...Typing indicator
//    - Photo
// 2. On Enter/Close animation For the the Hole Inbox Component
