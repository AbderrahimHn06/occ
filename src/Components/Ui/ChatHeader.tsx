import { users } from "../data";

type ChatHeaderProps = {
  userId: number;
};

export default function ChatHeader({ userId }: ChatHeaderProps) {
  const user = users.find((user) => user.id === userId);

  if (!user) return null;

  const { name, isOnline } = user;

  return (
    <div className="chatHeader">
      <div className="chatUser">
        <div className="avatarImage">{name[0].toUpperCase()}</div>
        <div className="chatUserInfo">
          <p className="chatUserName">{name}</p>
          <span className="chatUserStatus">
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
}
