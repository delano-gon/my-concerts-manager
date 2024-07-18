import { auth, db } from '../../firebase/firebase.js';
import { doc, updateDoc } from 'firebase/firestore';

export async function action({ request }) {
  const data = await request.formData();
  console.log(data);

  const userInfo = {
    username: data.get('username'),
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
  };

  console.log(userInfo);

  try {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      await updateDoc(doc(db, 'users', user.uid), {
        username: userInfo.username,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      });
      console.log(user)
    }
    console.log('User updated successfully');
  } catch (error) {
    console.log(error.message);
  }
}