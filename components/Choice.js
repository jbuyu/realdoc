import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Choice = () => (
  <div className="mx-auto max-w-9xl bg-cover bg-no-repeat pt-8 md:bg-[url('/bgpattern1.svg')] md:pt-0">
    <div className="bg-[url('/lightblob.svg ')]bg-center flex items-center justify-between ">
      <div className="md:pd-0 relative mt-8 flex flex-col pl-2 md:mt-0 md:w-3/5 md:items-center md:justify-center ">
        <div className="text-xl font-extrabold text-[#224E73] md:w-2/3 md:text-2xl">
          Why Choose Our Services
        </div>
        <div className="text-[#224E73]  md:w-2/3 ">
          More than 90% of patients who visit hospitals do not need in-patient
          care. In this era where hospitals are hot spots for the spread of
          infectious diseases, we give you a feasible alternative to have
          quality medical care at the comfort of your home.
        </div>
        <div className="flex justify-center pt-8 md:w-2/3 md:justify-start md:pt-4 ">
          <button className="hover:-translate-1 inline-flex w-2/5 justify-center rounded bg-indigo-500 py-2 px-4 font-bold text-white transition ease-in-out hover:scale-110 hover:bg-indigo-700 md:w-1/4">
            <Link href="/Services">
              <span>Learn more</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="hidden w-2/5 flex-col items-center justify-center md:flex">
        <div className="flex w-full p-4">
          <div className=" flex-start flex ">
            <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
              <div className="flex flex-col items-center justify-center">
                <Image src="/professional.png" width={264} height={264} />
                <div className="font-semibold">24/7 Patient Support </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex w-full  justify-end p-4 ">
          <div className="flex items-end justify-items-end">
            <div className=" max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
              <div className="flex  flex-col items-center justify-center ">
                <Image src="/caring.png" width={264} height={264} />
                <div className="font-semibold">Prompt results & analysis</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full p-4">
          <div className="flex-start flex">
            <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
              <div className="flex flex-col items-center justify-center ">
                <Image src="/notes.png" width={264} height={264} />
                <div className="font-semibold">Proffesional Doctors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center md:hidden">
      <div className="flex w-full p-4">
        <div className=" flex-start flex ">
          <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
            <div className="flex flex-col items-center justify-center">
              <Image src="/professional.png" width={360} height={360} />
              <div className="font-semibold">24/7 Patient Support </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex w-full  justify-end p-4 ">
        <div className="flex items-end justify-items-end">
          <div className=" max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
            <div className="flex  flex-col items-center justify-center ">
              <Image src="/caring.png" width={360} height={360} />
              <div className="font-semibold">Prompt results & analysis</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full p-4">
        <div className="flex-start flex">
          <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
            <div className="flex flex-col items-center justify-center ">
              <Image src="/notes.png" width={360} height={360} />
              <div className="font-semibold">Proffesional Doctors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Choice
