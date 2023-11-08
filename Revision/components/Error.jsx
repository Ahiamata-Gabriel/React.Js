import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return <h1>{error.message}</h1>;
};

export default Error;
