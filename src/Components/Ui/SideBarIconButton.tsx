import type { IconType } from "../Layouts/SideBar";

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
  const handleClick = () => {
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
