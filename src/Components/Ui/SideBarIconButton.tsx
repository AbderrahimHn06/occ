import type { IconType } from "../Layouts/SideBar";
// Redux

import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/slices/pageSlice";
import type { AppDispatch } from "../../store/store";

type SideBarIconButtonProps = {
  icon: IconType;
  icons: IconType[];
  setIcons: React.Dispatch<React.SetStateAction<IconType[]>>;
};

export default function SideBarIconButton({
  icon,
  icons,
  setIcons,
}: SideBarIconButtonProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(setCurrentPage(icon.page));

    const updatedIcons = icons.map((ic) =>
      ic.id === icon.id ? { ...ic, isActive: true } : { ...ic, isActive: false }
    );
    setIcons(updatedIcons);
  };

  return (
    <div
      className={`sideBarIcon ${icon.isActive ? "activeIcon" : ""}`}
      onClick={handleClick}
    >
      {icon.icon}
    </div>
  );
}
