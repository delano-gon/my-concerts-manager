// import { Suspense } from 'react';
import { useLoaderData, defer } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

import background from '../assets/ConcertCrowdBGImage.jpg';

import AddShowForm from '../components/AddShowForm.jsx';
import RenderShowList from '../components/RenderShowList.jsx';


async function eventsLoader() {
  try {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user) => { 
        if (user) {
          console.log(user);
          const showRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(showRef);
          console.log(docSnap);
          resolve(docSnap);
        } else {
          console.log('User is signed out');
          resolve(null);
        }
      });
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function loader() {
  return defer({
    events: eventsLoader()
  });
}

export default function MyShows() {
  const eventsPromise = useLoaderData();
  console.log(eventsPromise);
  console.log(eventsPromise.events);

  return (
    <div
      className="overflow-hidden px-4 py-12 sm:py-32 md:py-24 lg:overflow-visible lg:px-0 bg-contain bg-fixed bg-black/10 bg-blend-overlay backdrop-grayscale"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="grid justify-center space-y-6 lg:mx-4">
        <AddShowForm />
        <RenderShowList eventsPromise={eventsPromise.events} />
      </div>
    </div>
  );
}

  
