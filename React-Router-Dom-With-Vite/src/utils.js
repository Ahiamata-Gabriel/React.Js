import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const loggedInStatus = localStorage.getItem('loggedin');

  const isLoggedIn = loggedInStatus;

  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=You Have to Log in First.&redirectTo=${pathname}`
    );
    response.body = true;
    throw response;
  }
  return null;
}
