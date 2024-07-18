// eslint-disable-next-line react/prop-types
export default function Input({ label, id, ...props }) {
  return (
    <p className='m-3'>
      <label className='block font-medium leading-6 text-white mb-1' htmlFor={id}>{label}</label>
      <input className='block font-medium w-10/12 border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6' id={id} name={id} {...props} />
    </p>
  );
}
