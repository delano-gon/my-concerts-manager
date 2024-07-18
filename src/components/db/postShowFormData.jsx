import { auth, db } from '../../firebase/firebase.js';
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from 'firebase/firestore';

export async function action({ request }) {
  const data = await request.formData();
  console.log(data);

  const date = data.get('date').split('-');
  if (date[1][0] === '0') {
    date[1] = date[1][1];
  }
  const finalDate = date[1] + '/' + date[2] + '/' + date[0];

  let hours = data.get('time').split(':')[0];
  const AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutes = data.get('time').split(':')[1];
  const finalTime = hours + ':' + minutes + ' ' + AmOrPm;

  const showInfo = {
    id: Math.floor(Math.random() * 10000),
    headliner: data.get('headliner'),
    coHeadliner: data.get('coHeadliner'),
    date: finalDate,
    time: finalTime,
    venue: data.get('venue'),
  };
  const user = auth.currentUser;

  console.log(showInfo);

  const userDBEvents = onSnapshot(doc(db, 'users', user.uid), (doc) => {
    console.log('Current data: ', doc.data());
    return doc.data();
  });
  console.log(userDBEvents);

  if (user && !userDBEvents) {
    console.log(userDBEvents);
    const userShowList = [];
    userShowList.push(showInfo);
    await setDoc(doc(db, 'users', user.uid), {
      shows: userShowList,
    });
    console.log('List created and show added to list');

    return null;
  } else if (user && userDBEvents) {
    await updateDoc(doc(db, 'users', user.uid), {
      shows: arrayUnion(showInfo),
    });
    console.log('Show added to existing shows');
    return null;
  } else {
    console.log('User is signed out');
    return null;
  }
}
