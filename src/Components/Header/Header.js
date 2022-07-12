import React from "react";
import logo from "../../img/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className={"header"}>
      <div>
        <img src={logo} alt="Cat" width="38.11" height="26" />
        <p>TESTTASK</p>
      </div>
      <div>
        <button>Users</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Header;
