import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Audience from "./components/pages/audience";
import Conversation from "./components/pages/conversation";
import Info from "./components/pages/info";
import Profile from "./components/pages/profile";
import Search from "./components/pages/search";
import Settings from "./components/pages/settings";
import Ait from "./components/pages/ai";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
        <Route path="/" element={<Navigate to="/audience"/> } />
        <Route path="/ai" element={<Ait/>} />
        <Route path="/audience/*" element={<Audience/>} />
        <Route path="/conversation" element={<Conversation/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/settings" element={<Settings/>} />
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
