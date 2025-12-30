// Typing.tsx
import { Box } from "@mui/material";
import { motion, easeInOut } from "framer-motion";

export default function Typing() {
  const dotTransition = {
    repeat: Infinity,
    repeatType: "mirror" as const,
    duration: 0.6,
    ease: easeInOut,
  };

  return (
    <Box display="flex" alignItems="flex-end" gap={0.5} px={1} py={0.5}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ ...dotTransition, delay: i * 1 }}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--primary-color)", // matches your theme
            marginBottom: 4,
          }}
        />
      ))}
      <h5 className="message">typing...</h5>
    </Box>
  );
}
