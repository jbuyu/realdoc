import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Wave from "./Wave";
class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="h-full">
        <Header />
        <NavBar />
        {children}
        <Wave />
        <Footer />
      </div>
    );
  }
}
export default Layout;
