import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { loginUser } from '../api';
import './Login.scss';

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get('message');
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('loggedin', true);
    const response = redirect('/host');
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
};

export default function Login() {
  const message = useLoaderData();
  const credentialsError = useActionData();

  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="Red">{message}</h3>}
      {credentialsError && <h3 className="Red">{credentialsError}</h3>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === 'submitting'}>
          {navigation.state === 'submitting' ? 'Loggin in ....' : 'Log in'}
        </button>
      </Form>
    </div>
  );
}
