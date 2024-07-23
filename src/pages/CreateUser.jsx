import { Navigate, Form } from 'react-router-dom';
import Input from '../components/Inputs/Input.jsx';
import { UserAuth } from '../contexts/authContext/index.jsx';

export default function CreateUser() {
  const { userLoggedIn } = UserAuth();

  return (
    <>
      {userLoggedIn && <Navigate to="/myshows" />}
      <Form
        method="post"
        className="flex max-w-4xl flex-col justify-center md:ml-12 lg:ml-48 px-12 py-6 md:px-4 lg:px-8"
      >
        <div className="space-y-12">
          <div className="border-b border-gray-500 pb-12">
            <h1 className="text-base text-4xl font-bold leading-7 text-gray-200 mb-10 mt-6">
              Create a New Account
            </h1>
            <h2 className="text-base font-semibold leading-7 text-gray-300">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 min-[320px]:grid-cols-1 sm:grid-cols-2">
              <Input
                label="Username"
                type="text"
                id="username"
                name="username"
                className="block w-full bg-transparent border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />

              {/* <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-16 w-16 text-gray-300"
                  aria-hidden="true"
                />
                <input
                  type="file"
                  className="bg-transparent p-3.5 text-sm text-gray-300 file:mr-4 file:p-1.5 file:font-semibold file:text-purple-700 hover:file:text-gray-300 hover:file:bg-purple-700 file:border-0"
                />
              </div>
            </div> */}

              {/* <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center border border-dashed px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="p-2 relative cursor-pointer bg-white font-semibold text-purple-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-700 focus-within:ring-offset-2 hover:text-gray-300 hover:bg-purple-700"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-2 pt-2 text-gray-300">or drag and drop</p>
                  </div>
                  <p className="pt-2 text-xs leading-5 text-gray-300">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div> */}
            </div>
          </div>

          <div className="border-b border-gray-500 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-300">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              Private information that only you can see.
            </p>

            <div className="mt-10 grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-8 min-[320px]:grid-cols-1 sm:grid-cols-2">
              <Input
                label="First Name"
                type="text"
                id="firstName"
                name="firstName"
                className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
              <Input
                label="Last Name"
                type="text"
                id="lastName"
                name="lastName"
                className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
              <div className="sm:row-start-2">
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div className="sm:row-start-3">
                <Input
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="password"
                  className="block w-full bg-transparent border-0 p-1.5 pl-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-purple-700 px-3 py-2 text-sm text-white font-semibold shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </Form>
    </>
  );
}
