import { redirect } from 'react-router-dom';

export const requireAuth = async () => {
  const isloggedIn = false;

  if (!isloggedIn) {
    throw redirect('/login');
  }
};
