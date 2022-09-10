import React from "react";
import Footer from "./footer/Footer";
import NavBar from "./navbar/Navbar";

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <div style={{ marginTop: "11rem" }}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
