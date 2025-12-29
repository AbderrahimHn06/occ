// MUI
import { Modal, Backdrop, Box } from "@mui/material";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// React
import { useState } from "react";

// UI
import MyInput from "../Ui/MyInput";
import type { ContactCardProps } from "../Ui/ContactCard";
import { IoSearch } from "react-icons/io5";

// Redux

// import { UseDispatch } from "react-redux";
// import { AppDispatch } from "../../store/store";
// import { addInbox } from "../../store/slices/inboxSlice";

export type modalType = "newChat" | "newContact" | undefined;

type CustomModalProps = {
  open: boolean;
  handleClose: () => void;
  type: modalType;
};

const contacts: ContactCardProps[] = [
  { name: "Sarah Chen", phone: "+1 555-0123", isOnline: true },
  { name: "Michael Torres", phone: "+1 555-0456" },
  { name: "Emily Watson", phone: "+1 555-0789" },
  { name: "David Kim", phone: "+1 555-0999" },
];

export default function CustomModal({
  open,
  handleClose,
  type,
}: CustomModalProps) {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            className="modalWrapper"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            {/* ================= NEW CHAT ================= */}
            {type === "newChat" && (
              <Box className="modalContainer">
                <div className="modalHeader">
                  <h3>Add Chat</h3>
                  <button className="modalClose" onClick={handleClose}>
                    ✕
                  </button>
                </div>

                <div className="modalSearch">
                  <MyInput
                    value={search}
                    dispatch={setSearch}
                    placeholder="Search contacts..."
                    icon={<IoSearch />}
                  />
                </div>

                <div className="modalList">
                  {contacts.map((contact) => (
                    <div key={contact.name} className="modalContact">
                      <div className="modalAvatar">
                        {contact.name.charAt(0)}
                      </div>

                      <div className="modalContactInfo">
                        <p className="modalContactName">{contact.name}</p>
                        <span className="modalContactPhone">
                          {contact.phone}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Box>
            )}

            {/* ================= NEW CONTACT ================= */}
            {type === "newContact" && (
              <Box className="modalContainer">
                <div className="modalHeader">
                  <h3>Add Contact</h3>
                  <button className="modalClose" onClick={handleClose}>
                    ✕
                  </button>
                </div>

                <div className="modalForm">
                  <label>Name</label>
                  <MyInput
                    value={name}
                    dispatch={setName}
                    placeholder="Enter name"
                  />

                  <label>Phone Number</label>
                  <MyInput
                    value={phone}
                    dispatch={setPhone}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="modalActions">
                  <button className="modalCancel" onClick={handleClose}>
                    Cancel
                  </button>
                  <button className="modalConfirm">Add Contact</button>
                </div>
              </Box>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
