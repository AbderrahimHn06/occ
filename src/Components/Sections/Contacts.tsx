import MyInput from "../Ui/MyInput";
import type { MyInputProps } from "../Ui/MyInput";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import ContactCard from "../Ui/ContactCard";

// MUI
import { Stack } from "@mui/material";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Redux

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function Contacts() {
  const [searchValue, setSearchValue] = useState("");
  const contacts = useSelector((state: RootState) => state.contacts);

  const searchInputProps: MyInputProps = {
    placeholder: "Search contacts...",
    icon: <IoSearch />,
    value: searchValue,
    dispatch: setSearchValue,
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phoneNumber.includes(searchValue)
  );

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  };

  return (
    <div className="contactsContainer">
      <div className="searchContainer">
        <MyInput {...searchInputProps} />
      </div>

      <Stack direction="column" spacing={1} style={{ padding: 12 }}>
        {searchValue === "" ? (
          <AnimatePresence>
            {filteredContacts.map((contact, index) => (
              <motion.div
                key={contact.phoneNumber}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ContactCard {...contact} />
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          filteredContacts.map((contact) => (
            <ContactCard key={contact.phoneNumber} {...contact} />
          ))
        )}
      </Stack>
    </div>
  );
}
