import MyInput from "../Ui/MyInput";
import type { MyInputProps } from "../Ui/MyInput";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import InboxCard from "../Ui/InboxCard";

// Material UI
import { Stack } from "@mui/material";

// Framer Motion imports
import { motion, AnimatePresence } from "framer-motion";

// Redux

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

// Consts

export default function Inbox() {
  const [searchValue, setSearchValue] = useState("");

  const seachInputProps: MyInputProps = {
    placeholder: "Search chats...",
    icon: <IoSearch />,
    value: searchValue,
    dispatch: setSearchValue,
  };

  const inboxList = useSelector((state: RootState) => state.inboxs);

  const filteredCards = inboxList.filter((card) =>
    card.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="inboxContainer">
      <div className="searchContainer">
        <MyInput {...seachInputProps} />
      </div>

      <Stack
        className="inboxStack"
        direction="column"
        spacing={1}
        style={{ padding: 12 }}
      >
        {searchValue === "" ? (
          // ✅ Animate normally only when search is empty
          <AnimatePresence>
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <InboxCard {...card} />
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          // ✅ Render normally without motion when searching
          filteredCards.map((card) => <InboxCard key={card.name} {...card} />)
        )}
      </Stack>
    </div>
  );
}
