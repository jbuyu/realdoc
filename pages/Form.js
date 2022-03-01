import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Formik } from 'formik'

export default function Form() {
  //state
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="mx-auto flex h-screen md:h-140 max-w-9xl flex-col">
      <div className="h-80 items-center rounded-b-3xl text-xl  text-white md:bg-indigo-600 ">
        <div className="relative">
          <div className="hidden h-80 w-1/2 flex-col items-start justify-center p-8 md:flex">
            <div className="ont-semibold text-3xl">
              Get expert medical Help!
            </div>
            <div className="pt-4">
              Our team of Medical Doctors offer expert advice and consultations.
              Fill in the form and we'll reach out immediately.
            </div>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
              firstname: '',
              lastname: '',
            }}
            validate={(values) => {
              const errors = {}
              if (!values.firstname) {
                errors.firstname = 'Required'
              }
              if (!values.lastname) {
                errors.lastname = 'Required'
              }
              if (!values.email) {
                errors.email = 'Required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                console.log(values)
                setSubmitting(false)
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex w-full flex-col justify-center rounded-xl border-x-2 border-indigo-200 bg-white p-8 md:absolute md:top-0 md:right-0 md:mr-12 md:w-2/5"
              >
                <div className="">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstname"
                    value={values.firstname}
                    placeholder="First name"
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className=" font-sm w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                  />
                  <div className="text-sm text-red-600">
                    {errors.firstname && touched.firstname && errors.firstname}
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastname"
                    value={values.lastname}
                    placeholder="Last name"
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className=" font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                  />
                  <div className="text-sm text-red-600">
                    {errors.lastname && touched.lastname && errors.lastname}
                  </div>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    type="email"
                    placeholder="email"
                    aria-label="enter email address"
                    role="input"
                    className="font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                  />
                  <div className="text-sm text-red-600">
                    {errors.email && touched.email && errors.email}
                  </div>
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
                    className="font-sm rounded-md bg-gray-200 p-2 text-sm text-black outline-none"
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
                <div className="mt-8 flex justify-center ">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    disabled={isSubmitting}
                    role="button"
                    aria-label="create my account"
                    className={
                      isSubmitting
                        ? 'w-4/5 rounded border bg-indigo-400 py-4 text-sm font-semibold leading-none text-white opacity-50 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2'
                        : 'w-4/5 rounded border bg-indigo-700 py-4 text-sm font-semibold leading-none text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2'
                    }
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
