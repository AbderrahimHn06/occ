// MUI
import { Modal, Backdrop, Box } from "@mui/material";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// React
import { useState } from "react";

// UI
import MyInput from "../Ui/MyInput";
import type { User } from "../types";
import { IoSearch } from "react-icons/io5";

// Redux

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { addInbox } from "../../store/slices/inboxSlice";
import { addContact } from "../../store/slices/contactsSlice";
import { loadChat } from "../../store/slices/chatSlice";

// types
import type { inbox } from "../types";
export type modalType = "newChat" | "newContact" | undefined;

type CustomModalProps = {
  open: boolean;
  handleClose: () => void;
  type: modalType;
};

export default function CustomModal({
  open,
  handleClose,
  type,
}: CustomModalProps) {
  const contacts = useSelector((state: RootState) => state.contacts);
  const inboxs = useSelector((state: RootState) => state.inboxs);
  const dispatch = useDispatch<AppDispatch>();

  // Event Handlers
  const handleAddInbox = (contact: User) => {
    const contactInbox = inboxs.find((inbox) => inbox.contactId == contact.id);
    if (contactInbox != undefined) {
      dispatch(loadChat(contactInbox.id));
    } else {
      const newInbox: inbox = {
        id: inboxs.length,
        name: contact.name,
        unreadMessages: 2,
        isOnline: true,
        contactId: contact.id,
        lastMessage: {
          createdAt: "1min Ago",
          text: "how are you",
        },
      };
      dispatch(addInbox(newInbox));
      dispatch(loadChat(contactInbox.id));
    }
  };

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
                    <div
                      key={contact.name}
                      className="modalContact"
                      onClick={() => handleAddInbox(contact)}
                    >
                      <div className="modalAvatar">
                        {contact.name.charAt(0)}
                      </div>

                      <div className="modalContactInfo">
                        <p className="modalContactName">{contact.name}</p>
                        <span className="modalContactPhone">
                          {contact.phoneNumber}
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
