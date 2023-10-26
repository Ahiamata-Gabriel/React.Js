import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Login = () => {
  const [sprams, setSprams] = useSearchParams();
  let msg = sprams.get('message');
  return (
    <div>
      <h1>{msg}</h1>
      <h1>Login Goes Here</h1>
    </div>
  );
};

export default Login;
