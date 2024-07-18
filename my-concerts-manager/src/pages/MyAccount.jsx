import { useState } from 'react';
import { Form } from 'react-router-dom';
import Input from '../components/Inputs/Input.jsx';
import { UserAuth } from '../contexts/authContext/index.jsx';

export default function MyAccount() {
  const [ability, setAbility] = useState(true);
  const { userInfo } = UserAuth();
  

  function handleEditForm() {
    setAbility(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    setAbility(true);
  }

  return (
    <Form
      method="post"
      className="flex max-w-4xl flex-col justify-center ml-48 px-12 py-6 lg:px-8"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-500 pb-12">
          <h1 className="text-base text-xl font-bold leading-7 text-gray-200 mb-10 mt-6">
            My Account Details
          </h1>
          <h2 className="text-lg font-semibold leading-7 text-gray-300">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div className="col-start-1 row-start-1">
              <Input
                label="Username"
                type="text"
                id="username"
                name="username"
                disabled={ability}
                defaultValue={userInfo.userName}
                className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-500 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-300">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Private information that only you can see.
          </p>

          <div className="mt-10 grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-8 sm:grid-cols-2">
            <Input
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              disabled={ability}
              defaultValue={userInfo.firstName}
              className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
            <Input
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              disabled={ability}
              defaultValue={userInfo.lastName}
              className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
            <div className="row-start-2">
              <Input
                label="Email"
                type="email"
                id="email"
                name="email"
                disabled={ability}
                defaultValue={userInfo.email}
                className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="row-start-3">
              <Input
                label="Password"
                type="password"
                id="password"
                name="password"
                disabled={ability}
                autoComplete="password"
                className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleEditForm}
          className="bg-transparent border border-transparent px-3 py-2 text-sm text-white font-semibold shadow-sm hover:border hover:border-white disabled:border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={!ability}
        >
          Edit
        </button>
        <button
          type="submit"
          onClick={handleSaveForm}
          className="bg-purple-700 px-3 py-2 text-sm text-white font-semibold shadow-sm hover:bg-purple-900 disabled:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={ability}
        >
          Save
        </button>
      </div>
    </Form>
  );
}
