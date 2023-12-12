import { useState } from 'react';
import { useLoaderData, useNavigate, Form, redirect } from 'react-router-dom';
import { loginUser } from '../api';
import './Login.scss';

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get('message');
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const data = await loginUser({ email, password });
  localStorage.setItem('loggedin', true);

  const response = redirect('/host');
  response.body = true;
  return response;
};

export default function Login() {
  const message = useLoaderData();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        navigate('/host', { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setStatus('idle'));
  };

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="Red">{message}</h3>}
      {<h3 className="Red">{error && error.message}</h3>}
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Loggin in ....' : 'Log in'}
        </button>
      </Form>
    </div>
  );
}
