import type { InboxCardProps } from "../types";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { loadChat } from "../../store/slices/chatSlice";

/* ================= MAIN ================= */
export default function InboxCard(data: InboxCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    avatarUrl,
    name,
    lastMessage,
    timestamp,
    unreadCount = 0,
    isOnline = false,
    id,
  } = data;
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
          <p className="message">{lastMessage}</p>
        </div>

        <div className="rightColumn">
          <span className="timeStamp">{timestamp}</span>
          {unreadCount > 0 && (
            <span className="unreadCount">{unreadCount}</span>
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
