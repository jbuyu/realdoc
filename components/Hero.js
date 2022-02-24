import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => (
  <div className="h-128">
    <div className="mx-auto flex max-w-7xl justify-between">
      <div className="flex h-128 flex-1 flex-col justify-center ">
        <div className="flex-start flex w-full space-x-2 border-l-4 border-solid border-indigo-700  ">
          <span></span>
          <div className="text-2xl font-extrabold">
            Personalized Healthcare at your doorstep
          </div>
        </div>
        <div className="w-full pt-3 font-medium">
          <div className="w-4/5">
            We offer Professional and reliable health services at the comfort of
            your home/office.
          </div>
        </div>
        <div className="pt-4">
          <button className="inline-flex rounded bg-indigo-500 py-2 px-4 font-bold text-white transition ease-in-out hover:-translate-1 hover:scale-110 hover:bg-indigo-700">
            <Link href="/Form">
              <span>Book Appointment</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col">
        <img
          src="dots.svg"
          alt="dots_svg"
          className="absolute top-0 right-0 flex w-1/6"
        />
        <div className=" absolute top-10 right-10">
          <Image
            // loader={myLoader}
            src="/doc3.jpeg"
            alt="Picture of the author"
            width={432}
            height={624}
            className=" rounded-lg "
          />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
