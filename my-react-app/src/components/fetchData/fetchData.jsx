import { auth, db } from '../../firebase/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export async function loader() {
  const user = auth.currentUser;
  console.log(user);

  if (user) {
    console.log(user);
    const showRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(showRef);
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    console.log('User is signed out');
    return null;
  }
}

export async function addEvent(showInfo) {
  const user = auth.currentUser;
  console.log(showInfo);
  if (user && showInfo.length < 1) {
    const showRef = await setDoc(doc(db, 'users', user.uid), {
      shows: showInfo,
    });
    console.log(showRef);
    console.log('Show added');
    return showRef;
  } else if (user && showInfo) {
    await updateDoc(doc(db, 'users', user.uid), {
      shows: showInfo,
    });
    console.log('Show added to existing shows');
    return;
  } else {
    console.log('User is signed out');
    return null;
  }
}
