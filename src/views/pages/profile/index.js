import React, { Component } from "react";

// COMPONENTS
import { Header } from "../components/UI/header";
import Profile from "../components/containers/profile";

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Profile />
      </>
    );
  }
}

export default ProfilePage;
