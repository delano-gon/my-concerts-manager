/* eslint-disable react/prop-types */
import { Suspense } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { auth } from '../firebase/firebase';
// import { doc, getDoc } from 'firebase/firestore';

import Card from '../UI/Card';
import { Await } from 'react-router-dom';
// import { set } from 'firebase/database';

// eslint-disable-next-line react/prop-types
export default function RenderShowList({ eventsPromise }) {
  // const [userShows, setUserShows] = useState(shows);
  console.log(eventsPromise);
  const user = auth.currentUser;
  console.log(user);
  // const eventList = Object.keys(events).length || 0;
  // console.log(shows);
  // const [showList, setShowList] = useState(shows);

  // shows.sort((a, b) => {
  //   return (a.date) - (b.date);
  // }
  // );

  // Changes time format to 12-hr + AM/PM
  // let hours = show.time.split(':')[0];
  // const AmOrPm = hours >= 12 ? 'PM' : 'AM';
  // hours = (hours % 12) || 12;
  // const minutes = show.time.split(':')[1];
  // const finalTime = hours + ":" + minutes + " " + AmOrPm;
  // show.time = finalTime;
  // console.log(show.time);

  // // Changes date format to MM/DD/YYYY
  // const date = show.date.split('-');
  // console.log(date);
  // // if (date[1][0] === '0') {
  // //   date[1] = date[1].shift();
  // // }
  // const finalDate = date[1] + "/" + date[2] + "/" + date[0];
  // show.date = finalDate;
  // console.log(show.date);
  // console.log(show);

  // const user = auth.currentUser;

  // async function checkForUser() {
  //   if (user) {
  //     const showRef = doc(db, 'users', user.uid);
  //     getDoc(showRef)
  //       .then((snapshot) => {
  //         console.log(snapshot.data());

  //         // snapshot.data().entries((doc) => {
  //         //   userShows.push({ ...doc.data(), id: doc.id });
  //         // });
  //         snapshot.data().shows.forEach((doc) => {
  //           userShows.push({ ...doc, id: doc.id });
  //         });
  //         console.log(userShows);

  //         console.log('User is signed in');
  //         return userShows;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     console.log('User is signed out');
  //     return;
  //   }
  // }

  // async function fetchData() {
  //   checkForUser(user).then((docSnap) => {
  //     try {
  //       console.log('Document data:', docSnap.data());
  //       let userShows = [];
  //       docSnap.data().forEach((doc) => {
  //         userShows.push({ ...doc.data(), id: doc.id });
  //       });
  //       console.log(userShows);
  //       return userShows;
  //     } catch {
  //       console.log('No such document!');
  //       return;
  //     }
  //   });
  // }

  // const fetchedShows = await checkForUser();
  // setUserShows(fetchedShows);
  // console.log(userShows);

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

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log('User is signed in');
  //     setIsLoggedIn(true);
  //   } else {
  //     console.log('User is signed out');
  //     setIsLoggedIn(false);
  //   }
  // });
  // try {
  //   if (!eventsPromise.events) {
  //     eventList = 0;
  //   } else if (eventsPromise.events) {
  //     eventList = Object.keys(eventsPromise.events).length;
  //     sortShows(eventsPromise.events);
  //   }
  // } catch (error) {
  //   console.log(error.message);
  // }

  // useEffect(() => {
  //   let isMounted = true;
  //   const fetchData = () => {
  //     try {
  //       if (isMounted && eventList > 0) {
  //         console.log(eventsPromise.shows);

  //         sortShows(eventsPromise.events);
  //       } else if (isMounted && eventList) {
  //         console.log('No shows added');
  //         return;
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         console.log(error.message);
  //       }
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [eventsPromise, eventList, user]);

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

  // useEffect(() => {
  //   let isMounted = true;
  //   async function renderData() {
  //     try {
  //       if (isMounted) {
  //         await sortShows(userShows);
  //         await setUserShows(shows);
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         console.log(error.message);
  //       }
  //     }
  //   }
  //   renderData();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [shows, userShows]);

  // userShows.sort((a, b) => {
  //   let aÍDate = a.date.split('/');
  //   let bDate = b.date.split('/');
  //   return (
  //     parseInt(aDate[2]) - parseInt(bDate[2]) ||
  //     parseInt(aDate[0]) - parseFloat(bDate[0]) ||
  //     parseInt(aDate[1]) - parseInt(bDate[1])
  //   );
  // });

  // if (isLoading) {
  //   return (
  //     <Card className="w-full h-60 border-gray-500 border-2 grid grid-cols-1 justify-items-center place-content-center">
  //       <h2 className="text-white text-5xl font-bold mb-3">Loading...</h2>
  //     </Card>
  //   );
  // }

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
