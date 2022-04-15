import axios from 'axios'
import { Field, Formik } from 'formik'
import Image from 'next/image'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast, { Toaster } from 'react-hot-toast'

export default function Form() {
  //spinner css
  // const override = css`
  //   display: block;
  //   margin: 0 auto;
  //   border-color: red;
  // `
  //state
  const [startDate, setStartDate] = useState(new Date())
  const [gender, setGender] = useState('')
  const [error, setError] = useState('')
  let [loading, setLoading] = useState(false)
  let [color, setColor] = useState('#ffffff')

  //fns
  const handleInput = (e) => {
    const inputName = e.currentTarget.name
    const value = e.currentTarget.value
    setGender((prev) => ({
      ...prev,
      [inputName]: value,
    }))
  }
  const API_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api/consultations'
      : 'https://realdoc-server.herokuapp.com/api/consultations'

  return (
    <>
      <div className="mx-auto flex h-screen max-w-9xl flex-col md:h-140">
        <div className="h-80 items-center rounded-b-3xl text-xl  text-white md:bg-indigo-600 ">
          <div className="relative">
            <div className="hidden h-80 w-1/2 flex-col items-start justify-center p-8 md:flex">
              <div className="ont-semibold text-3xl">
                Get expert medical Help!
              </div>
              <div className="pt-4">
                Our team of Medical Doctors offer expert advice and
                consultations. Fill in the form and we'll reach out immediately.
              </div>
            </div>

            <Formik
              initialValues={{
                email: '',
                location: '',
                firstName: '',
                lastName: '',
                phoneNo: '',
                gender: '',
                dateOfBirth: startDate,
                symptoms: '',
                consultationType: '',
              }}
              validate={(values) => {
                const errors = {}
                if (!values.firstName) {
                  errors.firstName = 'Required'
                }
                if (!values.lastName) {
                  errors.lastName = 'Required'
                }
                if (!values.location) {
                  errors.location = 'Required'
                }
                if (!values.symptoms) {
                  errors.symptoms = 'Required'
                }
                if (!values.gender) {
                  errors.gender = 'Required'
                }
                if (!values.consultationType) {
                  errors.consultationType = 'Required'
                }

                if (!values.phoneNo) {
                  errors.phoneNo = 'Required'
                } 
                // else if (
                //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                //   errors.email = 'Invalid email address'
                // }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setLoading(true)
                axios.post(`${API_URL}`, values).then(
                  (response) => {
                    setLoading(false)
                    toast.success('Consultation created!!', {
                      style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#fff',
                        backgroundColor: '#4F46E5',
                      },
                      iconTheme: {
                        primary: '#fff',
                        secondary: '#FFFAEE',
                      },
                    })
                  },
                  (error) => {
                    setError(error.response.data.message)
                    console.log(error.response.data.message)
                  }
                )
                setSubmitting(false)
                // console.log('values', values)
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
                      name="firstName"
                      value={values.firstName}
                      placeholder="First name"
                      aria-label="enter email adress"
                      role="input"
                      type="text"
                      className=" font-sm w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                    />
                    <div className="text-sm text-red-600">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      name="lastName"
                      placeholder="Last name"
                      aria-label="enter email adress"
                      role="input"
                      type="text"
                      className=" font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                    />
                    <div className="text-sm text-red-600">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNo}
                      name="phoneNo"
                      placeholder="Phone"
                      aria-label="enter email address"
                      role="input"
                      type="tel"
                      className=" font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                    />
                    <div className="text-sm text-red-600">
                      {errors.phoneNo && touched.phoneNo && errors.phoneNo}
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      name="email"
                      value={values.email}
                      type="email"
                      placeholder="email"
                      aria-label="enter email address"
                      role="input"
                      className="font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                    />
                    {/* <div className="text-sm text-red-600">
                      {errors.email && touched.email && errors.email}
                    </div> */}
                  </div>
                  <div className="mt-4">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="location"
                      value={values.location}
                      type="text"
                      placeholder="location"
                      aria-label="add location"
                      role="input"
                      className="font-sm mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-sm leading-none text-gray-800 focus:outline-none"
                    />
                    <div className="text-sm text-red-600">
                      {errors.location && touched.location && errors.location}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="font-md text-sm leading-none text-gray-600">
                      Gender
                    </span>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <Field name="gender" type="radio" value="Male" />
                        <span className=" ml-2 text-sm text-gray-500">
                          Male
                        </span>
                      </label>
                      <label className="ml-6 inline-flex items-center">
                        <Field name="gender" type="radio" value="Female" />
                        <span className="ml-2 text-sm text-gray-500">
                          Female
                        </span>
                      </label>
                    </div>
                    {/* <div className="text-sm text-red-600">
                      {errors.gender && touched.gender && errors.gender}
                    </div> */}
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="symptoms"
                      value={values.symptoms}
                      type="text"
                    ></textarea>
                    <div className="text-sm text-red-600">
                      {errors.symptoms && touched.symptoms && errors.symptoms}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="font-md text-sm leading-none text-gray-600">
                      Preferred Consultation
                    </span>
                    <div className="mt-2 flex flex-col">
                      <label className="ml-2 flex items-center space-x-2">
                        <Field
                          name="consultationType"
                          type="radio"
                          value="Telemedicine"
                        />

                        <span className="text-sm text-gray-500">
                          Telemedicine (video/call/chat)
                        </span>
                      </label>
                      <label className="ml-2 flex items-center space-x-2">
                        <Field
                          name="consultationType"
                          type="radio"
                          value="Home"
                        />

                        <span className=" text-sm text-gray-500">
                          Home Doctor
                        </span>
                      </label>
                      <div className="text-sm text-red-600">
                        {errors.consultationType &&
                          touched.consultationType &&
                          errors.consultationType}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center ">
                    <button
                      disabled={isSubmitting}
                      type="submit"
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
                  <div className="flex items-center justify-center pt-1 text-sm text-red-600">
                    {error && <p>{error}</p>}
                  </div>
                  {loading && (
                    <div className="flex justify-center ">
                      {/* <BeatLoader color={color} loading={loading} size={150} /> */}
                      <Image
                        src="/loader.gif"
                        alt=""
                        className="w-full rounded-lg object-cover object-center shadow-md"
                        width={70}
                        height={50}
                        layout="fixed"
                      />
                    </div>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}
