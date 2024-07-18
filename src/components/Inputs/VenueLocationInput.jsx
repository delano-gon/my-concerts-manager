import Input from './Input.jsx';

export default function VenueLocationInput() {
  

  return (
    <div className='flex-col w-80'>
      <Input label="Venue Location" type="text" id="venue" name="venue" />
    </div>
  );
}