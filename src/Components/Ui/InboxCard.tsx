export type InboxCardProps = {
  avatarUrl?: string; // optional
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isOnline?: boolean;
};

export default function InboxCard({
  avatarUrl,
  name,
  lastMessage,
  timestamp,
  unreadCount = 0,
  isOnline = false,
}: InboxCardProps) {
  const initials = name.charAt(0).toUpperCase();

  return (
    <div className="inboxCard">
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
