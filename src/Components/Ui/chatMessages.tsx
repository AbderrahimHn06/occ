import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type Message } from "../types";

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const endRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
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
              msg.senderId == 0 ? "chatBubbleMine" : "chatBubbleOther"
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

      {/* Scroll anchor */}
      <div ref={endRef} />
    </div>
  );
}
