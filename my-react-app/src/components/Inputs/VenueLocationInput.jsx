// import Input from './Input';

// export default function MiscInput() {
//   return (
//     <div className='flex-col w-80'>
//       <Input type="text" label="Name" id="name" placeholder="Enter your name" name="name"/>
//       <Input type="email" label="Email" id="email" placeholder="Enter your email" name="email" />
//       {/* Add more Input components for additional form fields */}
//     </div>
//   );
// }

import Input from './Input.jsx';

export default function VenueLocationInput() {
  

  return (
    <div className='flex-col w-80'>
      <Input label="Venue Location" type="text" id="venue" name="venue" />
    </div>
  );
}