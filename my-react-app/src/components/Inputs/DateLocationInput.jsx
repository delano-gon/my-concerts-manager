import Input from './Input.jsx';

export default function DateLocationInput() {
  

  return (
    <div className='flex-col w-80'>
      <Input label="Date" type="date" id="date" required />
      <Input label="Doors Open" type="time" id="time" />
      <Input label="Venue Location" type="text" id="venue" />
    </div>
  );
}
