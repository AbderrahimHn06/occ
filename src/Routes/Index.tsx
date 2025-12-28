import SideBar from "../Components/Layouts/SideBar";
import Home from "../Components/Layouts/Home";
import Chat from "../Components/Layouts/Chat";
export default function Index() {
  return (
    <div className="indexContainer">
      <SideBar />
      <Home />
      <Chat />
    </div>
  );
}
