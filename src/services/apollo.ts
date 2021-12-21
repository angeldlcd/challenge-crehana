import {ApolloClient, InMemoryCache} from '@apollo/client';

const countriesClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });

  
  export default countriesClient;