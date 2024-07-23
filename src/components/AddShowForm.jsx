import { Form } from 'react-router-dom';

import ArtistInput from './Inputs/ArtistInput.jsx';
import DateTimeInput from './Inputs/DateTimeInput.jsx';
import VenueLocationInput from './Inputs/VenueLocationInput.jsx';
import Card from '../UI/Card.jsx';

// eslint-disable-next-line react/prop-types
export default function AddShowForm() {

  return (
    <Card className="border-gray-500 border-2 min-[320px]:h-[38rem] md:h-[29rem] lg:h-[22rem] min-[320px]:w-[22rem] md:w-[44rem] lg:w-[66rem]">
      <Form method="post" className="grid h-full">
        <div className="flex justify-items-center mx-6 mt-6 min-[320px]:flex-wrap">
          <ArtistInput />
          <DateTimeInput />
          <VenueLocationInput />
        </div>
        <div className="self-end m-9">
          <button
            className="font-medium cursor-pointer bg-transparent hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-white hover:border-transparent"
            type="submit"
          >
            Add Show
          </button>
        </div>
      </Form>
    </Card>
  );
}
