import { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

import background from '../assets/ConcertCrowdBGImage.jpg';

import AddShowForm from '../components/AddShowForm';
import RenderShowList from '../components/RenderShowList';

export default function MyShows() {
  const shows = [
    // {
    //   id: 1,
    //   headliner: 'The Slackers',
    //   date: '2024-12-31',
    //   time: '20:00',
    //   venue: 'The Roxy',
    // },
    // {
    //   id: 2,
    //   headliner: 'The Toasters',
    //   date: '2024-09-31',
    //   time: '19:00',
    //   venue: 'The Roxy',
    // },
  ];

  const [showList, setShowList] = useState(shows);
  
  const user = auth.currentUser;
  
  async function handleSubmit(showInfo) {
    console.log(showInfo);
    const tempShowList = [...showList];
    tempShowList.push(showInfo);
    setShowList(tempShowList);

    if (auth.currentUser) {
      const showRef = doc(db, 'users', user.uid);
      await updateDoc(showRef, {
        shows: arrayUnion(showInfo)
    })
    
    }
    console.log(showInfo);
    // showList.sort((a, b) => {
    //   let aDate = a.date.split('/');
    //   let bDate = b.date.split('/');
    //   return (
    //     parseInt(aDate[2]) - parseInt(bDate[2]) ||
    //     parseInt(aDate[0]) - parseFloat(bDate[0]) ||
    //     parseInt(aDate[1]) - parseInt(bDate[1])
    //   );
    // });
    console.log(showList);
  }

  return (
    <div className="overflow-hidden px-4 py-12 sm:py-32 md:py-24 lg:overflow-visible lg:px-0 bg-contain bg-fixed bg-black/10 bg-blend-overlay backdrop-grayscale" style={{ backgroundImage: `url(${background})` }}>
      <div className="grid justify-center space-y-6">
        <AddShowForm submitForm={handleSubmit} />
        <RenderShowList shows={showList} />
      </div>
    </div>
  );
}
