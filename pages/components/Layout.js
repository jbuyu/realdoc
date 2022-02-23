import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Header />
        <NavBar />
        {children}
        <Footer />
      </div>
    );
  }
}
export default Layout;
