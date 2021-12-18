import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHCMS_API = "https://api-ap-northeast-1.graphcms.com/v2/ckxb738v32z5z01xi335whypx/master";

const client = new ApolloClient({
  uri: GRAPHCMS_API,
  cache: new InMemoryCache() as any,
})

export default client;