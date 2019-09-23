import React from "react";

// COMPONENTS
import { Header } from "../../components/UI/header";
import { Container, Layout } from "./style";
import Profile from "../../components/containers/profile";
import TabContainer from "../../components/UI/tabs";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const ProfilePage = (props) => {

  const { viewer } = props.data

  const avatarUrl = viewer ? viewer.avatarUrl : ''
  const userFullName = viewer ? viewer.name : ''
  const username = viewer ? viewer.login : ''
  const location = viewer ? viewer.location : ''
  const company = viewer ? viewer.company : ''
  const bio = viewer ? viewer.bio : ''
  const organizations = viewer ? viewer.organizations : {}

  return (
    <>
      <Header />
      <Container>
        <Layout>
          <Profile
            avatarUrl={avatarUrl}
            userFullName={userFullName}
            username={username}
            location={location}
            company={company}
            bio={bio}
            organizations={organizations}
          />
          <TabContainer />
        </Layout>
      </Container>
    </>
  );
};

export default graphql(gql`
  query user {
    viewer {
      avatarUrl
      name
      login
      company
      location
      bio
      organizations(first:5) {
        edges {
          node {
            avatarUrl
          }
        }
      }
    }
  }
`)(ProfilePage)
