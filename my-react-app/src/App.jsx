import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { useState } from 'react';

import RootLayout from './pages/Root.jsx';
import HomePage from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import MyShowsPage from './pages/MyShows.jsx';
import MyCalendarPage from './pages/Calendar.jsx';
import CreateAccount from './pages/CreateUser.jsx';

// import AddShowForm from './components/AddShowForm.jsx';
// import RenderShowList from './components/RenderShowList.jsx';
// import Introduction from './components/Introduction.jsx';
import ErrorPage from './pages/Error.jsx';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/myshows', element: <MyShowsPage /> },
        { path: '/mycalendar', element: <MyCalendarPage />},
        { path: '/createaccount', element: <CreateAccount /> }
      ],
    },
  ]);

  // const shows = [
  //   {
  //     id: 1,
  //     headliner: 'The Slackers',
  //     date: '2022-12-31',
  //     time: '20:00',
  //     venue: 'The Roxy',
  //   },
  //   {
  //     id: 2,
  //     headliner: 'The Toasters',
  //     date: '2022-12-31',
  //     time: '20:00',
  //     venue: 'The Roxy',
  //   },
  // ];

  // const [showList, setShowList] = useState(shows);

  // function handleSubmit(showInfo) {
  //   console.log(showInfo);
  //   const tempShowList = [...showList];
  //   tempShowList.push(showInfo);
  //   setShowList(tempShowList);
  //   console.log(showInfo);
  // }

  return (
    <RouterProvider router={router} />
    /* // <>
    // <NavBar />
    // <Introduction />
    // <div className="grid justify-center pt-12 space-y-8">
    //   <AddShowForm onSubmit={handleSubmit} />
    //   <RenderShowList shows={showList} />
    // </div>
    // </> */
  );
}
