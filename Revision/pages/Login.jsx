import React, { useState } from 'react';
import { useLoaderData, useNavigate, Form } from 'react-router-dom';
import { loginUser } from '../api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export const action = async ({ request }) => {
  const forrmData = await request.formData();
  const email = forrmData.get('email');
  const password = forrmData.get('password');
  const data = await loginUser({ email, password });

  console.log(data);
  return null;
};

export default function Login() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    loginUser(loginFormData)
      .then((data) => navigate('host', { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus('idle'));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}

      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  );
}
