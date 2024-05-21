import { useRef } from 'react';

import ArtistInput from './Inputs/ArtistInput';
import DateLocationInput from './Inputs/DateLocationInput';
import Card from '../UI/Card';

import MiscInput from './Inputs/MiscInput';

// eslint-disable-next-line react/prop-types
export default function AddShowForm({ submitForm }) {

  const formRef = useRef();

  const showInfo = {
    id: null,
    headliner: '',
    date: '',
    time: '',
    venue: '',
  };

  const addShowHandler = (event) => {
    event.preventDefault();

    let hours = event.target[4].value.split(':')[0];
    const AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    const minutes = event.target[4].value.split(':')[1];
    const finalTime = hours + ":" + minutes + " " + AmOrPm;

    // Changes date format to MM/DD/YYYY
    const date = event.target[3].value.split('-');
    if (date[1][0] === '0') {
      date[1] = date[1][1];
    }
    const finalDate = date[1] + "/" + date[2] + "/" + date[0];

    showInfo.id = Math.floor(Math.random() * 10000);
    showInfo.headliner = event.target[0].value;
    showInfo.date = finalDate;
    showInfo.time = finalTime;
    showInfo.venue = event.target[5].value;
    submitForm(showInfo);
    formRef.current.reset();
    console.log(showInfo);
  };

  return (
    <Card className="border-gray-500 border-2">
      <form className="grid" onSubmit={addShowHandler} ref={formRef}>
        <div className="flex justify-items-center m-6">
          <ArtistInput />
          <DateLocationInput />
          <MiscInput />
        </div>
        <div className="self-end m-8">
          <button
            className="font-medium cursor-pointer bg-transparent hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-white hover:border-transparent"
            type="submit"
          >
            Add Show
          </button>
        </div>
      </form>
    </Card>
  );
}

