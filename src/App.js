import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Room from "./pages/room";
import Main from "./pages/main";
import Edit_room from "./pages/edit_room";
import Add_room from "./pages/add_room";

// import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/edit_room/:id" element={<Edit_room />} />
        <Route path="/add_room" element={<Add_room />} />
      </Routes>
    </Router>
  );
}
