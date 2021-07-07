import { useEffect } from 'react';
import { useAuth } from './use-auth.jsx';
import { useRouter } from 'next/router';

export function useRequireAuth(redirectUrl = '/signup') {
  const auth = useAuth();
  const router = useRouter();
  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth) {
      const { user } = auth;

      if (user === false) {
        router.replace(redirectUrl);
      }
    }
  }, [auth, router]);

  if (auth === null || auth.user === null) {
    return null;
  } else if (auth.user) {
    return true;
  }
  return false;
}
