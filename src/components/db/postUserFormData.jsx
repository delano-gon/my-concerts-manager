import { auth, db } from '../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';

export async function action({ request }) {
  const data = await request.formData();
  console.log(data);

  const userInfo = {
    username: data.get('username'),
    password: data.get('password'),
    email: data.get('email'),
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
  };

  try {
    await doCreateUserWithEmailAndPassword(userInfo.email, userInfo.password);
    const user = auth.currentUser;
    console.log('User created successfully');
    console.log(user);
    if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        username: userInfo.username,
        email: userInfo.email,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
