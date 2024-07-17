import Input from './Input.jsx';

export default function DateTimeInput() {
  

  return (
    <div className='flex-col w-80'>
      <Input label="Date" type="date" id="date" name="date" required />
      <Input label="Doors Open" type="time" id="time" name="time" />
    </div>
  );
}
