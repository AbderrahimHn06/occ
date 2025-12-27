import MyInput from "../Ui/MyInput";
import type { MyInputProps } from "../Ui/MyInput";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Inbox() {
  const [searchValue, setSearchValue] = useState("");
  const seachInputProps: MyInputProps = {
    placeholder: "Search chats...",
    icon: <IoSearch />,
    value: searchValue,
    dispatch: setSearchValue,
  };

  return (
    <div className="inboxContainer">
      <div className="searchContainer">
        <MyInput {...seachInputProps} />
      </div>
    </div>
  );
}
