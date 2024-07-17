import { defer } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';


async function eventsLoader() {
  console.log(auth.currentUser)
  const user = auth.currentUser;
  console.log(user);

  if (user) {
    console.log(user);
    const showRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(showRef);
    console.log(docSnap);
    return docSnap;
  } else {
    console.log('User is signed out');
    return null;
  }
}

export function loader() {
  return defer({
    events: eventsLoader()
  });
}
