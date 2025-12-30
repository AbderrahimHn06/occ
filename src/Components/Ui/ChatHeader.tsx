import { contacts } from "../data";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeChat } from "../../store/slices/inboxStatusSlice";
import { deleteChat } from "../../store/slices/chatSlice";

type ChatHeaderProps = {
  userId: number;
  isMobile: boolean;
};

export default function ChatHeader({ userId, isMobile }: ChatHeaderProps) {
  const dispatch = useDispatch();
  const user = contacts.find((user) => user.id === userId);

  if (!user) return null;

  const { name, isOnline } = user;

  return (
    <div className="chatHeader">
      {isMobile && (
        <button
          className="chatBackButton"
          onClick={() => {
            dispatch(closeChat());
            dispatch(deleteChat());
          }}
        >
          <IoArrowBack />
        </button>
      )}

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
