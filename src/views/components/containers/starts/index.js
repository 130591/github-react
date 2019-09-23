import React, { useEffect, useState } from "react";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// COMPONENTS
import { YoursRepos, InfoRepors } from "../repositories/style";
import { Input, WrapperInput } from "../../UI/form/input";
import { TitleCard } from "../../UI/tabs/style";
import { Loading } from '../../UI/loading';

const Start = (props) => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const starred = props.data.viewer ? props.data.viewer.starredRepositories.nodes : ''

  useEffect(() => {
    if (props.data && props.data.viewer) {
      setRepos(starred)
    }

  }, [repos])

  const searchRepos = (e) => {
    const repositories = repos.filter(repo => {
      if (repo.name.indexOf(e.target.value) > -1) {
        return repo
      } else {
        return null
      }
    })

    setFilteredRepos(repositories)
    setFiltered(true)
  }

  const visibleRepos = filtered ? filteredRepos : repos
  return (
    <>
      <WrapperInput>
        <Input
          placeholder="Search starts projects..."
          onChange={e => searchRepos(e)}
        />
      </WrapperInput>
      {!starred && <Loading />}
      {visibleRepos &&
        visibleRepos.map(star =>
          <YoursRepos>
            <TitleCard>{star.name}</TitleCard>
            <ul>
              <li>{star.description}</li>
            </ul>
            <InfoRepors>
              <div className="yellowcircule" />
              <span>
                {star.languages.edges[0] && star.languages.edges[0].node && star.languages.edges[0].node.name ? star.languages.edges[0].name : null}
                <i className="fa fa-star" />1<i className="fa fa-code-fork" />0
                <i />
              </span>
              <div className="currentime"> 7 hours ago</div>
            </InfoRepors>
          </YoursRepos>
        )}
    </>
  )
}

export default graphql(gql`
{
  viewer {
    starredRepositories(first: 100) {
      totalCount
      nodes {
        name
        nameWithOwner
        description
        forkCount
        updatedAt
        languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            node {
              name
            }
          }
        }  
        owner {
          login
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
`)(Start)