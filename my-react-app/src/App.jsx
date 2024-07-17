import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as eventsLoader } from './pages/MyShows.jsx';
import { action as addShowAction } from './components/db/postShowFormData.jsx';
import { action as createUserAction } from './components/db/postUserFormData.jsx';
// import { action as updateUserAction } from './components/db/updateUserFormData.jsx';
import { UserAuth } from './contexts/authContext/index.jsx';

import RootLayout from './pages/Root.jsx';
import HomePage from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import MyShowsPage from './pages/MyShows.jsx';
import MyAccountPage from './pages/MyAccount.jsx';
import CreateAccount from './pages/CreateUser.jsx';

import ErrorPage from './pages/Error.jsx';

export default function App() {
  const { userInfo } = UserAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/login', element: <LoginPage /> },
        {
          path: '/myshows',
          element: <MyShowsPage />,
          loader: eventsLoader,
          action: addShowAction,
        },
        {
          path: `/myaccount/${userInfo.userName}`,
          element: <MyAccountPage />,
          // action: updateUserAction,
        },
        {
          path: '/createaccount',
          element: <CreateAccount />,
          action: createUserAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
