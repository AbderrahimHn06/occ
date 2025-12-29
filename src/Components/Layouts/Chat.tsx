import { useState, useRef } from "react";
import ChatHeader from "../Ui/ChatHeader";
import ChatMessages from "../Ui/chatMessages";
import ChatInput from "../Ui/chatInput";
import ImagePreview from "../Ui/ImagePreview";

// Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { addMessage } from "../../store/slices/chatSlice";

/* ================= TYPES ================= */
import type { Message } from "../types";
/* ================= MAIN ================= */

export default function Chat() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const chat = useSelector((state: RootState) => state.chat);
  console.log(chat);

  const dispatch = useDispatch<AppDispatch>();

  const handleSend = () => {
    if (!message.trim() && !image) return;

    const newMessage: Message = {
      id: Date.now(),
      text: message,
      image: image ?? undefined,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    dispatch(addMessage(newMessage));
    setMessage("");
    setImage(null);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImagePick = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatRoot">
      <ChatHeader userId={chat.id} />

      <ChatMessages messages={chat.messages} />

      <ChatInput
        message={message}
        setMessage={setMessage}
        onSend={handleSend}
        onPickImage={handleImagePick}
        fileInputRef={fileInputRef}
        onEnter={handleEnter}
      />

      <ImagePreview image={image} />
    </div>
  );
}
