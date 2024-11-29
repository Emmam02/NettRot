import React, { createContext, useState, useContext, useEffect } from "react";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const login = (UserID) => {
    setIsLoggedIn(true);
    setCurrentUserId(UserID);
    localStorage.setItem("UserID", UserID);
  };

  const logout = () => {
    console.log("Logging out...");
    setIsLoggedIn(false);
    setCurrentUserId(null);
    localStorage.removeItem("UserID");
  };

  return (
    <LoggedInContext.Provider
      value={{ isLoggedIn, currentUserId, login, logout }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedIn = () => useContext(LoggedInContext);
