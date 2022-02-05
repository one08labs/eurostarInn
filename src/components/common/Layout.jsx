import React from "react";
import TopWidget from "../ui/topWidget";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <TopWidget />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
