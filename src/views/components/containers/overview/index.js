import React from "react";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Card } from "../../UI/card";
import { LinkTitle } from "../../UI/tabs/style";
import { CardNavBody } from "../../UI/card/style";
import { TitleSection, Grid } from "../../UI/tabs/style";

const SectionOverview = (props) => {
  const { viewer } = props.data

  return (
    <>
      <TitleSection> Popular repositories </TitleSection>
      <Grid>
        {viewer && viewer.repositories.edges.map(
          repo =>
            viewer.repositories && (
              <OverView
                id={repo.node.id}
                name={repo.node.name}
                language={
                  repo.node.languages.edges && repo.node.languages.edges[0] && repo.node.languages.edges[0].node.name && repo.node.languages.edges[0].node.name
                }
                description={repo.node.description}
              />
            )
        )}
      </Grid>
    </>
  );
};

export default graphql(gql`
query {
  viewer {
    login
    repositories(first:6, orderBy: {field: STARGAZERS, direction: DESC}) {
      totalCount
      edges {
        node {
          name
          description 
          languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
            edges {
              node {
                name
              }
            }
          }  
          forkCount
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`)(SectionOverview)

export const OverView = ({ id, name, description, language }) => {
  return (
    <>
      <Card Key={id}>
        <LinkTitle href="#">{name}</LinkTitle>
        <CardNavBody>
          <p>{description}</p>
          <ul>
            <li>{language ? language : 'not identify'}</li>
            <li>987</li>
            <li>170</li>
          </ul>
        </CardNavBody>
      </Card>
    </>
  );
};
