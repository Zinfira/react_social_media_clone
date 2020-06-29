import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Search from "./Search";

function NavBar(){
  return (
    <React.Fragment>
      <Home />
      <Notifications />
      <Messages />
      <Search />
    </React.Fragment>
  );
}

export default NavBar;