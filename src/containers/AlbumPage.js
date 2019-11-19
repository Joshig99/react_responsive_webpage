import React, { Component } from "react";
import Navbarr from "../components/Navbar";
import Album from "../components/Album";
import Footer from "../components/Footer";

class AlbumPage extends Component {
  render() {
    return (
      <div>
        <Navbarr />
        <Album />
        <Footer/>
      </div>
    );
  }
}
export default AlbumPage;
