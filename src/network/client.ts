import {
  createClient,
  debugExchange,
  fetchExchange,
  subscriptionExchange,
} from '@urql/core';
import {cacheExchange} from '@urql/exchange-graphcache';
import {createClient as createWSClient} from 'graphql-ws';

const wsClient = createWSClient({
  url: 'ws://localhost:4000/graphql',
});

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [
    debugExchange,
    cacheExchange({}),
    fetchExchange,
  ],
});

export default client;
