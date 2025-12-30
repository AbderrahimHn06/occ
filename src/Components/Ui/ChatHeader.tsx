import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeChat } from "../../store/slices/inboxStatusSlice";
import { deleteChat } from "../../store/slices/chatSlice";

import type { RootState, AppDispatch } from "../../store/store";

type ChatHeaderProps = {
  userId: number;
  isMobile: boolean;
};

export default function ChatHeader({ userId, isMobile }: ChatHeaderProps) {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch<AppDispatch>();

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
