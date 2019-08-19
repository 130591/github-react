import React, { Component } from "react";

// COMPONENTS
import { Header } from "../../components/UI/header";
import { Container, Layout } from "./style";
import Profile from "../../components/containers/profile";
import { UnderlineNav } from "../../components/containers/main";

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Layout>
            <Profile />
            <UnderlineNav />
          </Layout>
        </Container>
      </>
    );
  }
}

export default ProfilePage;
