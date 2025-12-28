import {
  Box,
  Typography,
  Button,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogOut,
  Globe,
  Phone,
  Activity,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../Providers/ThemeProvider";
import ProfileCard from "../Ui/ProfileCard";

// Dummy current user data
const currentUser = {
  username: "Abderrahim",
  status: "online",
  phoneNumber: "+213 555 123 456",
  language: "en",
};

const languages = [
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
  { value: "ar", label: "العربية" },
];

export default function Profile() {
  const [language, setLanguage] = useState(currentUser.language);
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme(); // get current theme & toggle

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <Box className="profileRoot">
      {/* Header */}
      <motion.div className="profileHeader" />

      {/* Avatar & Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="profileAvatarSection"
      >
        <div className="profileAvatar">
          <span>{currentUser.username.charAt(0).toUpperCase()}</span>
        </div>
        <Typography variant="h6" className="profileName">
          {currentUser.username}
        </Typography>
        <div className="profileStatus">
          <span className="statusDot online" />
          <Typography variant="body2">{currentUser.status}</Typography>
        </div>
      </motion.div>

      {/* Cards */}
      <Box className="profileCards">
        {/* Phone */}
        <ProfileCard
          icon={
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Phone size={18} />
            </motion.div>
          }
          label="Phone"
          value={currentUser.phoneNumber}
          delay={0.1}
        />

        {/* Status */}
        <ProfileCard
          icon={
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Activity size={18} />
            </motion.div>
          }
          label="Status"
          value={currentUser.status}
          delay={0.15}
        />

        {/* Language Selector */}
        <motion.div
          className="languageCard"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClickCapture={(e) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".languageSelectWrapper")) {
              setOpen(false);
            }
          }}
        >
          <div className="cardIcon">
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Globe size={18} />
            </motion.div>
          </div>

          <div className="cardContent">
            <Typography className="cardLabel">Language</Typography>

            <div className="languageSelectWrapper">
              <button
                className="languageSelectButton"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown();
                }}
              >
                {languages.find((l) => l.value === language)?.label}
                <ChevronDown
                  size={18}
                  style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              <AnimatePresence>
                {open && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="dropdownList"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {languages.map((lang) => (
                      <li
                        key={lang.value}
                        onClick={() => {
                          setLanguage(lang.value);
                          setOpen(false);
                        }}
                      >
                        {lang.label}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Standalone Theme Switch */}
        <motion.div
          className="themeCard"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: "12px",
            cursor: "pointer",
            marginTop: "8px",
          }}
          whileHover={{
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            backgroundColor: "var(--card-bg)", // uses the same card-bg as ProfileCard
          }}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </motion.div>

          <Typography className="cardLabel" style={{ flexGrow: 1 }}>
            Theme
          </Typography>

          <FormControlLabel
            control={<Switch checked={theme === "dark"} onChange={toggleTheme} />}
            label={theme === "dark" ? "Dark" : "Light"}
          />
        </motion.div>
      </Box>

      {/* Logout */}
      <Divider />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="logoutContainer"
      >
        <Button
          fullWidth
          className="logoutButton"
          startIcon={
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <LogOut size={18} />
            </motion.div>
          }
        >
          Logout
        </Button>
      </motion.div>
    </Box>
  );
}
