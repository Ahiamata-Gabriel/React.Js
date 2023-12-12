import { redirect } from 'react-router-dom';

export async function requireAuth() {
  const loggedInStatus = localStorage.getItem('loggedin');

  const isLoggedIn = loggedInStatus;

  if (!isLoggedIn) {
    const response = redirect('/login?message=You Have to Log in First');
    response.body = true;
    throw response;
  }
  return null;
}
