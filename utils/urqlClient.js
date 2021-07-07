import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';
import { authExchange } from '@urql/exchange-auth';
import authFunctions from '../lib/authExchangeFunctions';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssrCache,
    authExchange(authFunctions()),
    fetchExchange,
  ],
});

export { client, ssrCache };
