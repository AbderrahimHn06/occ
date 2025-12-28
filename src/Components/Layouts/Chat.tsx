import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconButton, useMediaQuery } from "@mui/material";
import { IoSend, IoArrowBack, IoChatbubbleOutline } from "react-icons/io5";
import MyInput from "../Ui/MyInput";

type Message = {
  id: number;
  text: string;
  image?: string;
  time: string;
  isMine: boolean;
};

export default function Chat() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [chatOpen, setChatOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "The meeting went well!",
      time: "06:59 AM",
      isMine: false,
    },
  ]);

  const handleSend = () => {
    if (!message.trim() && !image) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        image: image ?? undefined,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMine: true,
      },
    ]);

    setMessage("");
    setImage(null);

    // Reset file input so same file can be picked again
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImagePick = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ================= EMPTY / MOBILE ================= */
  if (!chatOpen && isMobile) {
    return (
      <div className="chatEmpty">
        <IoChatbubbleOutline size={64} />
        <p>No conversation opened</p>
      </div>
    );
  }

  return (
    <div className="chatRoot">
      {/* ================= HEADER ================= */}
      <div className="chatHeader">
        <div className="chatUser">
          {isMobile && (
            <IconButton onClick={() => setChatOpen(false)}>
              <IoArrowBack />
            </IconButton>
          )}
          <div className="avatarImage">M</div>
          <div className="chatUserInfo">
            <p className="chatUserName">Michael Torres</p>
            <span className="chatUserStatus">Offline</span>
          </div>
        </div>
      </div>

      {/* ================= MESSAGES ================= */}
      <div className="chatMessages">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`chatBubble ${
                msg.isMine ? "chatBubbleMine" : "chatBubbleOther"
              }`}
            >
              {msg.image && (
                <motion.img
                  src={msg.image}
                  className="chatImage"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                />
              )}
              {msg.text && <p className="chatText">{msg.text}</p>}
              <span className="chatTime">{msg.time}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Dummy div to scroll into view */}
        <div ref={messagesEndRef} />
      </div>

      {/* ================= INPUT ================= */}
      <div className="chatInput">
        {/* File picker */}
        <label className="sendButton fileButton">
          📎
          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={(e) =>
              e.target.files && handleImagePick(e.target.files[0])
            }
          />
        </label>

        {/* MyInput stays unmodified */}
        <MyInput
          placeholder="Type a message..."
          value={message}
          dispatch={setMessage}
        />
        {/* Add invisible key listener for Enter */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ position: "absolute", opacity: 0, height: 0 }}
        />

        <button className="sendButton" onClick={handleSend}>
          <IoSend />
        </button>
      </div>

      {/* ================= IMAGE PREVIEW ================= */}
      <AnimatePresence>
        {image && (
          <motion.div
            className="imagePreview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <img src={image} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
