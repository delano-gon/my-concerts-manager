/* eslint-disable react/prop-types */
// import { useState } from 'react';
import Card from '../UI/Card';

// eslint-disable-next-line react/prop-types
export default function RenderShowList({ shows }) {

  console.log(shows);
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

    shows.sort((a, b) => {
      let aDate = a.date.split('/');
      let bDate = b.date.split('/');
      return (
        parseInt(aDate[2]) - parseInt(bDate[2]) ||
        parseInt(aDate[0]) - parseFloat(bDate[0]) ||
        parseInt(aDate[1]) - parseInt(bDate[1])
      );
    });

    const noShowsAdded = <Card className="w-full h-60 border-gray-500 border-2 grid grid-cols-1 justify-items-center place-content-center"><h2 className="text-white text-5xl font-bold mb-3">+</h2><p className="text-white text-xl">Add your</p><p className="text-white text-xl mb-6">first show!</p></Card>

  return (
    <div className="grid grid-cols-4 gap-6 pb-20">
      {!shows.length && noShowsAdded}
      {shows.map((show) => (
        <Card key={show.id} className="w-full">
          <h2 className="text-white text-2xl font-bold m-4 mt-6">{show.headliner}</h2>
          <p className="text-white text-lg ml-4 mb-2">{show.date}</p>
          <p className="text-white text-md ml-4 mb-2">{`Doors: ${show.time}`}</p>
          <p className="text-white text-md ml-4 mb-7">{`Venue: ${show.venue}`}</p>
        </Card>
      ))}
    </div>
  );
}
