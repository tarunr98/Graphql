import logo from './logo.svg';
import {ApolloCache, InMemoryCache, ApolloProvider, HttpLink, from, ApolloClient} from '@apollo/client';
import {ErrorLink, onError} from '@apollo/client/link/error'
import './App.css';
import GetCharity from './Components/GetCharity';
import Form from './Components/Form';
import Header from './Components/Header';

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path})=> {
      alert(`Graphql error ${message}`)
    });
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:6969/graphql"})
])
const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link, 
})

function App() {
  return <ApolloProvider client={client}>
    <Header/>
    <GetCharity/>
    <Form/>
  </ApolloProvider>
}

export default App;
