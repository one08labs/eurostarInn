import React from "react";
import TopWidget from "../ui/topWidget";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
        <TopWidget />
        <Header />
      {props.children}
    </div>
  );
};

export default Layout;
