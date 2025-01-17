import { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { UserAuth } from '../contexts/authContext/index.jsx';
// import { auth } from '../firebase/firebase';
// import { onAuthStateChanged } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userLoggedIn } = UserAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (!userLoggedIn) {
      await doSignInWithEmailAndPassword(email, password)
    } else {
      console.log('User is signed out');
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/myshows" />}
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-2.5"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-300"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-purple-400 hover:text-white"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password || ''}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-2.5"
                />
              </div>
            </div>

            <div>
              <button
                onClick={(e) => {
                  onSubmit(e);
                }}
                className="flex w-full justify-center bg-purple-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-300">
            Not a member?{' '}
            <NavLink
              to="/createaccount"
              className="font-semibold leading-6 text-purple-400 hover:text-white"
            >
              Create a free account
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
