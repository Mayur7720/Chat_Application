import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chats = lazy(() => import("./Pages/Chats"));
const Groups = lazy(() => import("./Pages/Groups"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats/:chatId" element={<Chats />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
