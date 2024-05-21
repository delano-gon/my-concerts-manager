import Input from './Input';

export default function MiscInput() {
  return (
    <div className='flex-col w-80'>
      <Input type="text" label="Name" placeholder="Enter your name" />
      <Input type="email" label="Email" placeholder="Enter your email" />
      {/* Add more Input components for additional form fields */}
    </div>
  );
}
