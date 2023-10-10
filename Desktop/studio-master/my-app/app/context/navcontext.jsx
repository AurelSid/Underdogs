"use client";
import { createContext, useState } from "react";

const NavContext = createContext();

export function NavProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  

  return (
    <NavContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavContext.Provider>
  );
}

export default NavContext;
