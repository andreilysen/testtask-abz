import React from "react";
import logo from "../../img/logo.svg";

import "./Menu.scss";

const Menu = () => {
  return (
    <div className={"menu"}>
      <div className={"login"}>
        <img src={logo} alt="Cat" width="38.11" height="26" />
        <p>TESTTASK</p>
      </div>
      <div>
        <button>Users</button>
        <button className={"button"}>Sign up</button>
      </div>
    </div>
  );
};

export default Menu;
