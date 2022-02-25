import Link from 'next/link'
import React from 'react'

const Choice = () => (
  <div className="mx-auto max-w-9xl bg-[url('/bgpattern1.svg')] bg-cover bg-no-repeat">
    <div className="bg-[url('/lightblob.svg ')]bg-center flex items-center justify-between ">
      <div className="relative flex w-3/5 flex-col items-center justify-center">
        <div className="w-2/3 text-2xl font-extrabold">
          Why Choose Our Services
        </div>
        <div className="w-2/3 ">
          More than 90% of patients who visit hospitals do not need in-patient
          care. In this era where hospitals are hot spots for the spread of
          infectious diseases, we give you a feasible alternative to have
          quality medical care at the comfort of your home.
          {/* <div className=" absolute top-20 left-12 opacity-30">
            <img src="/dots.svg" alt="" className="w-1/3" />
          </div> */}
        </div>
        <div className="w-2/3 pt-4">
          <button className="hover:-translate-1 inline-flex rounded bg-indigo-500 py-2 px-4 font-bold text-white transition ease-in-out hover:scale-110 hover:bg-indigo-700">
            <Link href="/Services">
              <span>Learn more</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="flex w-2/5 flex-col  items-center justify-center">
        <div className="flex w-full p-4">
          <div className=" flex-start flex ">
            <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
              <div className="flex flex-col items-center justify-center">
                <img src="/professional.png" alt="" className="w-72" />
                <div className="font-semibold">24/7 Patient Support </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex w-full  justify-end p-4 ">
          <div className="flex items-end justify-items-end">
            <div className=" max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
              <div className="flex  flex-col items-center justify-center ">
                <img src="/caring.png" alt="" className="w-72" />
                <div className="font-semibold">Prompt results & analysis</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full p-4">
          <div className="flex-start flex">
            <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
              <div className="flex flex-col items-center justify-center ">
                <img src="/notes.png" alt="" className="w-72" />
                <div className="font-semibold">Proffesional Doctors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Choice
