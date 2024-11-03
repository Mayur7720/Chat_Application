import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtechRoute from "./components/auth/ProtechRoute";
import { LayoutLoader } from "./components/layout/Loaders";

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chats = lazy(() => import("./Pages/Chats"));
const Groups = lazy(() => import("./Pages/Groups"));
const NotFound = lazy(() => import("./Pages/NotFound"));

let user = true;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtechRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chats/:chatId" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtechRoute user={!user} redirect="/">
                <Login />
              </ProtechRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
