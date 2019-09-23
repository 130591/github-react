import React, { useEffect } from "react";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import GlobalStyles from "./config/globalStyles";
import { Routes } from "./routes";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = localStorage.getItem('github_token')
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    }
  }
})

function App() {

  useEffect(() => {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

    if (code) {
      fetch(`${'https://github-react-io.herokuapp.com/authenticate/'}${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          localStorage.setItem('github_token', token)
        })
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </>
  );
}

export default App;
