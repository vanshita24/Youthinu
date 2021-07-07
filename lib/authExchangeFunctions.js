import { isValidToken } from '../lib/helpers';
import { makeOperation } from '@urql/core';
import firebase from 'firebase/app';

const isServerSide = typeof window === 'undefined';

const authFunctions = () => {
  return {
    addAuthToOperation: ({ authState, operation }) => {
      // the token isn't in the auth state, return the operation without changes
      if (!authState || !authState.token) {
        return operation;
      }

      // fetchOptions can be a function (See Client API) but you can simplify this based on usage
      const fetchOptions =
        typeof operation.context.fetchOptions === 'function'
          ? operation.context.fetchOptions()
          : operation.context.fetchOptions || {};
      return makeOperation(operation.kind, operation, {
        ...operation.context,
        fetchOptions: {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            authorization: `Bearer ${authState.token}`,
          },
        },
      });
    },
    willAuthError: ({ authState }) => {
      // e.g. check for expiration, existence of auth etc
      return !isValidToken(authState?.token);
    },
    didAuthError: ({ error }) => {
      // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
      return error.graphQLErrors.some(
        (e) => e.extensions?.code === 'FORBIDDEN'
      );
    },
    getAuth: async ({ authState, mutate }) => {
      // for initial launch, fetch the auth state from storage (local storage, async storage etc)
      if (!isServerSide) {
        if (!authState) {
          return getAuthClient();
        }
        const token = await firebase.auth().currentUser.getIdToken();
        window.localStorage.setItem('token', token);
        return { token: token };
      }
      return null;
    },
  };
};

const getAuthClient = () => {
  const token = window.localStorage.getItem('token');
  if (token) {
    return { token: token };
  } else {
    return null;
  }
};

export default authFunctions;
