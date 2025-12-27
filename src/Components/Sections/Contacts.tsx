import MyInput from "../Ui/MyInput";
import type { MyInputProps } from "../Ui/MyInput";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import ContactCard, { type ContactCardProps } from "../Ui/ContactCard";

// MUI
import { Stack } from "@mui/material";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

export default function Contacts() {
  const [searchValue, setSearchValue] = useState("");

  const searchInputProps: MyInputProps = {
    placeholder: "Search contacts...",
    icon: <IoSearch />,
    value: searchValue,
    dispatch: setSearchValue,
  };

  const contacts: ContactCardProps[] = [
    {
      name: "أمي",
      phone: "+213 555 12 34 56",
      isOnline: true,
    },
    {
      name: "أم عبد الله",
      phone: "+213 777 88 99 00",
    },
    {
      name: "هديل",
      phone: "+213 666 45 78 90",
      isOnline: true,
    },
    {
      name: "Ahmed",
      phone: "+213 541 23 67 89",
    },
  ];

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phone.includes(searchValue)
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
                key={contact.phone}
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
            <ContactCard key={contact.phone} {...contact} />
          ))
        )}
      </Stack>
    </div>
  );
}
