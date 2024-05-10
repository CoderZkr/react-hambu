import React, { useState } from "react";

const Navbar = () => {
  // change burger classes
  const [burger_class, setBurger_class] = useState("burger-bar unclicked");
  const [menu_class, setMenu_class] = useState("menu hidden");
  const [isMenuClicked, setisMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurger_class("burger-bar clicked");
      setMenu_class("menu visible");
    } else {
      setBurger_class("burger-bar unclicked");
      setMenu_class("menu hidden");
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu">
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
        </div>
      </nav>

      <div className={menu_class}></div>
    </div>
  );
};

export default Navbar;
