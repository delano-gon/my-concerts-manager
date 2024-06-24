import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addEvent } from '../components/fetchData/fetchData';
// import { auth } from '../firebase/firebase';
// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

import background from '../assets/ConcertCrowdBGImage.jpg';

import AddShowForm from '../components/AddShowForm';
import RenderShowList from '../components/RenderShowList';
// import Error from './Error';

export default function MyShows() {
  // const shows = [
  //   // {
  //   //   id: 1,
  //   //   headliner: 'The Slackers',
  //   //   date: '2024-12-31',
  //   //   time: '20:00',
  //   //   venue: 'The Roxy',
  //   // },
  //   // {
  //   //   id: 2,
  //   //   headliner: 'The Toasters',
  //   //   date: '2024-09-31',
  //   //   time: '19:00',
  //   //   venue: 'The Roxy',
  //   // },
  // ];

  const [showList, setShowList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const events = useLoaderData();
  console.log(events);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        if (isMounted && events.shows.length > 0) {
          
          setShowList(events.shows);
        } else if (isMounted && !events.shows.length) {
          return;
        }
      } catch (error) {
        if (isMounted) {
          console.log(error.message);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    }
  }, [events, showList]);

  
  // useEffect(() => {
  //   let isMounted = true;
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const user = await auth.currentUser;
  //       if (user && isMounted) {
  //         setShowList(events);
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         setShowList([]);
  //         setError(error.message);
  //       }
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [events]);

  async function handleSubmit(showInfo) {
    console.log(showInfo);
    const tempShowList = [...showList];
    console.log(tempShowList);
    tempShowList.push(showInfo);
    console.log(tempShowList);
    // setShowList(tempShowList);
    await addEvent(tempShowList);
    // console.log(showList);


    console.log(showList);
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
    <div
      className="overflow-hidden px-4 py-12 sm:py-32 md:py-24 lg:overflow-visible lg:px-0 bg-contain bg-fixed bg-black/10 bg-blend-overlay backdrop-grayscale"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="grid justify-center space-y-6">
        {/* {error && <Error message={error} />} */}
        <AddShowForm submitForm={handleSubmit} />
        <RenderShowList shows={showList}/>
      </div>
    </div>
  );
}
