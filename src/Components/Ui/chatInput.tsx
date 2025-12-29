import React from "react";
import { IoSend } from "react-icons/io5";
import MyInput from "./MyInput";

export default function ChatInput({
  message,
  setMessage,
  onSend,
  onPickImage,
  fileInputRef,
  onEnter,
}: {
  message: string;
  setMessage: (v: string) => void;
  onSend: () => void;
  onPickImage: (file: File) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="chatInput">
      {/* File picker */}
      <label className="sendButton fileButton">
        📎
        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept="image/*"
          onChange={(e) => e.target.files && onPickImage(e.target.files[0])}
        />
      </label>

      <MyInput
        placeholder="Type a message..."
        value={message}
        dispatch={setMessage}
      />

      {/* Hidden Enter listener */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onEnter}
        style={{ position: "absolute", opacity: 0, height: 0 }}
      />

      <button className="sendButton" onClick={onSend}>
        <IoSend />
      </button>
    </div>
  );
}
