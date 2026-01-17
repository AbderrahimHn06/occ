import { Routes, Route } from "react-router-dom";
import Index from "./Routes/Index";
import Login from "./Routes/Login";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
