import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Form() {
  //state
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="mx-auto flex max-w-7xl flex-col">
      <div className=" h-80 items-center rounded-b-3xl bg-indigo-600 text-xl text-white">
        <div className="relative">
          <div className="flex h-80 w-3/5 flex-col items-start justify-center p-8">
            <div className="ont-semibold text-3xl">
              Get expert medical Help!
            </div>
            <div className="pt-4">
              Our team of Medical Doctors offer expert advice and consultations.
              Fill in the form and we'll reach out immediately.
            </div>
          </div>
          <form className="absolute top-0 right-0 mt-2 mr-12 flex w-1/3 flex-col justify-center rounded-xl bg-white p-8">
            <div className="">
              <input
                placeholder="First name"
                aria-label="enter email adress"
                role="input"
                type="text"
                className=" font-sm w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Last name"
                aria-label="enter email adress"
                role="input"
                type="text"
                className=" font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Phone"
                aria-label="enter email address"
                role="input"
                type="number"
                className=" font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="email"
                aria-label="enter email address"
                role="input"
                type="email"
                className="font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <span className="font-md text-sm leading-none text-gray-600">
                Gender
              </span>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio cursor-pointer"
                    name="gender"
                    value="male"
                  />
                  <span className=" ml-2 text-sm text-gray-500">Male</span>
                </label>
                <label className="ml-6 inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio cursor-pointer"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2 text-sm text-gray-500">Female</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <span className="font-md text-sm leading-none text-gray-600">
                Date of Birth
              </span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="bg-gray-200 text-sm text-black outline-none font-sm p-2 rounded-md"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <span className="font-md py-2 text-sm leading-none text-gray-600">
                Symptoms
              </span>
              <textarea
                rows="4"
                className="font-sm resize rounded-md bg-gray-200 p-2 text-sm text-black outline-none "
              ></textarea>
            </div>
            <div className="mt-4">
              <span className="font-md text-sm leading-none text-gray-600">
                Preferred Consultation
              </span>
              <div className="mt-2 flex flex-col">
                <label className="ml-2 flex items-center space-x-2">
                  <input
                    type="radio"
                    className="form-radio cursor-pointer"
                    name="method"
                    value="videochat"
                  />
                  <span className="text-sm text-gray-500">
                    Telemedicine (video/call/chat) - 500/-
                  </span>
                </label>
                <label className="ml-2 flex items-center space-x-2">
                  <input
                    type="radio"
                    className="form-radio cursor-pointer"
                    name="method"
                    value="home"
                  />
                  <span className=" text-sm text-gray-500">
                    Home Doctor - 1200/-
                  </span>
                </label>
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="w-full rounded border bg-indigo-700 py-4 text-sm font-semibold leading-none text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
