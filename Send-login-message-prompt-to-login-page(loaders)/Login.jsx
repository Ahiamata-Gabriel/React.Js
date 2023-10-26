import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get('message');
};

const Login = () => {
  const msg = useLoaderData();
  console.log(msg);
  return (
    <div>
      {msg && <h1>{msg}</h1>}
      <h1>Login Goes Here</h1>
    </div>
  );
};

export default Login;
