import React, { useEffect, useState } from "react";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// COMPONENTS
import { YoursRepos, InfoRepors } from "./style";
import { Loading } from '../../UI/loading';
import { Input, WrapperInput } from "../../UI/form/input";
import { TitleCard } from "../../UI/tabs/style";

const Repositories = (props) => {
  const [repos, setRepos] = useState([]);
  const [login, setLogin] = useState(false);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const repositories = props.data.viewer ? props.data.viewer.repositories : ''

  useEffect(() => {
    if (props.data && props.data.viewer) {
      setRepos(props.data.viewer.repositories.edges)
      setLogin(props.data.viewer.login)
    }
  }, [repositories])

  const searchRepos = (e) => {
    const repositories = repos.filter(repo => {
      if (repo.node.name.indexOf(e.target.value) > -1) {
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
          placeholder="Search repositories..."
          onChange={e => searchRepos(e)}
        />
      </WrapperInput>
      {!repositories && <Loading />}
      {visibleRepos &&
        visibleRepos.map(repo => (
          <YoursRepos>
            <TitleCard>{repo.node.name}</TitleCard>
            <ul>
              <li>{repo.node.description}</li>
            </ul>
            <InfoRepors>
              <div className="yellowcircule" />
              <span>
                javascript
                <i className="fa fa-star" />1<i className="fa fa-code-fork" />0
                <i />
              </span>
              <div className="currentime"> 7 hours ago</div>
            </InfoRepors>
          </YoursRepos>
        ))}
    </>
  );
};


export default graphql(gql`
query {
  viewer {
    login
    repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
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
          updatedAt
          forkCount
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`)(Repositories)