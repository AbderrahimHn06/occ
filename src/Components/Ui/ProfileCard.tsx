import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Typography } from "@mui/material";
import React from "react";

type ProfileCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  clickable?: boolean;
  delay?: number;
};

export default function ProfileCard({
  icon,
  label,
  value,
  clickable = false,
}: ProfileCardProps) {
  return (
    <motion.div
      /* Entry animation */
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      /* Hover animation */
      whileHover={{
        borderColor: "var(--card-hover-border)",
        boxShadow:
          "0 0 0 1px rgba(43, 212, 189, 0.6), 0 8px 24px rgba(43, 212, 189, 0.15)",
      }}
      className={`profileCard ${clickable ? "clickable" : ""}`}
    >
      {/* Icon with its own hover animation */}
      <div className="cardIcon">{icon}</div>

      <div className="cardContent">
        <Typography className="cardLabel">{label}</Typography>
        <Typography className="cardValue">{value}</Typography>
      </div>

      {clickable && <ChevronRight size={18} className="chevron" />}
    </motion.div>
  );
}
