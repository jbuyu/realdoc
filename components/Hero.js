import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => (
  <div className="h-128">
    <div className="mx-auto flex justify-between pt-4 md:-0 px-2 md:max-w-7xl md:px-0">
      <div className="flex h-128 flex-1 flex-col justify-center ">
        <div className="flex-start flex w-full space-x-2 border-l-4 border-solid border-indigo-700  ">
          <span></span>
          <div className=" text-xl md:text-2xl font-extrabold text-[#224E73]">
            Personalized Healthcare at your doorstep
          </div>
        </div>
        <div className="w-full pt-3 font-medium">
          <div className="w-4/5">
            We offer Professional and reliable health services at the comfort of
            your home/office.
          </div>
        </div>
        <div className="pt-8 md:pt-4">
          <button className="hover:-translate-1 inline-flex rounded bg-indigo-500 py-2 px-2 font-bold text-white transition ease-in-out hover:scale-110 hover:bg-indigo-700 md:px-4">
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
          className="absolute top-0 right-0 hidden md:flex w-1/6"
        />
        <div className=" absolute top-36 md:top-10 right-0 md:right-10">
          <Image
            // loader={myLoader}
            src="/doc3.jpeg"
            alt="Picture of the author"
            width={432}
            height={624}
            className=" rounded-2xl  "
          />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
