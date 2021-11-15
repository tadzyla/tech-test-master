import React from 'react';
import './App.css';
import { UserView } from './UserView'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import { CreateUser } from './CreateUser';


const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <UserView />
        <CreateUser />
      </div>
    </ApolloProvider>
  );
}

export default App;
