import type { User } from "../types";

export default function ContactCard({
  avatarUrl,
  name,
  phoneNumber,
  isOnline = false,
}: User) {
  const initials = name.charAt(0).toUpperCase();

  return (
    <div className="contactCard">
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
          <p className="phone">{phoneNumber}</p>
        </div>

        {/* Right column kept for alignment / future actions */}
        <div className="rightColumn">
          {/* reserved (call icon / invite / menu later) */}
        </div>
      </div>
    </div>
  );
}
