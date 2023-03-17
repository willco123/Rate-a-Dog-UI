import React, { useState } from "react";
import { Outlet, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.js";
import Navbar from "./components/navbar/Navbar.js";
import LoginModal from "./pages/login/LoginModal.js";
import Register from "./pages/register/Register.js";
import Favourites from "./pages/favourites/Favourites.js";
import RatedDogs from "./pages/rated-dogs/RatedDogs.js";
import Logout from "./pages/logout/Logout";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route
          path="/"
          element={
            <LayoutsWithNavbar
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/dogs" element={<RatedDogs />} />
          <Route
            path="/logout"
            element={<Logout setIsLoggedIn={setIsLoggedIn} />}
          />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/login"
            element={<LoginModal setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      )}
    </>
  );
}

function LayoutsWithNavbar({
  isLoggedIn,
  setIsLoggedIn,
}: {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="main-wrapper">
        <Outlet />
      </div>
    </>
  );
}

//for testing may have to split app and routes to allow for router to be rendered/redclared
