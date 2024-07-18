/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { auth } from '../firebase/firebase.js';
import Card from '../UI/Card.jsx';

// eslint-disable-next-line react/prop-types
export default function RenderShowList({ eventsPromise }) {
  console.log(eventsPromise);
  const user = auth.currentUser;
  console.log(user);

  function sortShows(shows) {
    shows.sort((a, b) => {
      let aDate = a.date.split('/');
      let bDate = b.date.split('/');
      return (
        parseInt(aDate[2]) - parseInt(bDate[2]) ||
        parseInt(aDate[0]) - parseFloat(bDate[0]) ||
        parseInt(aDate[1]) - parseInt(bDate[1])
      );
    });
  }

  function renderShowElements(usersEvents) {
    try {
      const userShows = usersEvents.data().shows;
      sortShows(userShows);
      const hostShowsEls = userShows.map((show) => (
        <Card key={show.id} className="w-full">
          <h2 className="text-white text-2xl font-bold m-4 mt-6">
            {show.headliner}
          </h2>
          {show.coHeadliner && <h3 className="text-white text-xl font-bold m-4">w/ {show.coHeadliner}</h3>}
          <p className="text-white text-lg ml-4 mb-2">{show.date}</p>
          <p className="text-white text-md ml-4 mb-2">{`Doors: ${show.time}`}</p>
          <p className="text-white text-md ml-4 mb-7">{`Venue: ${show.venue}`}</p>
        </Card>
      ));
      return hostShowsEls;
    } catch (error) {
      console.log(error.message);
    }
  }

  const accountRequired = (
    <Card className="w-full h-60 border-gray-500 border-2 grid grid-cols-1 justify-items-center place-content-center">
      <h2 className="text-white text-5xl font-bold mb-3">+</h2>
      <p className="text-white text-xl">*Must be signed in</p>
      <p className="text-white text-xl mb-6">To add events</p>
    </Card>
  );

  const noShowsAdded = (
    <Card className="w-full h-60 border-gray-500 border-2 grid grid-cols-1 justify-items-center place-content-center">
      <h2 className="text-white text-5xl font-bold mb-3">+</h2>
      <p className="text-white text-xl">Add your</p>
      <p className="text-white text-xl mb-6">first show!</p>
    </Card>
  );

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={eventsPromise}>
        {(resolvedEvents) => <div className="grid grid-cols-4 gap-6 pb-20">
          {(!user) && accountRequired}
          {(user && resolvedEvents.data().shows) && noShowsAdded}
          {user && renderShowElements(resolvedEvents)}
        </div>}
      </Await>
    </Suspense>
  );
}
