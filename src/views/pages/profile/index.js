import React, { Component } from "react";

// COMPONENTS
import { Header } from "../../components/UI/header";
import { Container } from "./style";
import Profile from "../../components/containers/profile";

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Profile />
        </Container>
      </>
    );
  }
}

export default ProfilePage;
