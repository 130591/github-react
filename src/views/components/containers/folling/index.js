import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Container, Avatar, Info, Holder, Description, Location } from '../follow/style';
import { Loading } from '../../UI/loading';

const Following = ({ data: { viewer } }) => {
  return (
    <>
      {viewer && viewer.following ? viewer.following.edges.map(follower =>
        <Container>
          <Avatar src={follower.node.avatarUrl} />
          <Info>
            <Holder>{follower.node.name} <span>{follower.node.login}</span></Holder>
            <Description >
              {follower.node.bio}
            </Description>
            {
              follower.node.location && (
                <Location>
                  {follower.node.location}
                </Location>
              )
            }
          </Info>
        </Container>
      ) : <Loading />}
    </>
  )
}

export default graphql(gql`
query {
  viewer {
    following(first:100) {
      totalCount
      edges {
        node {
          avatarUrl
          name
          login
          location
          bio
          
        }
      }
    }
  }
}
`)(Following)