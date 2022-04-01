import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <div
    className="mt-8 flex h-60 w-full items-center  justify-between bg-[#EEF2FF] md:mt-0 md:justify-around md:p-8"
    id="contacts"
  >
    <Link href="/">
      <div className=" h-100 hidden w-1/5 cursor-pointer items-center space-x-4 md:flex ">
        <img src="/adonis.svg" alt="Vercel Logo" className="ml-2 h-12 " />
        <div className="hidden font-semibold md:flex  ">
          Star Homecare Services
        </div>
      </div>
    </Link>
    <div className="flex w-full justify-around md:w-1/5 ">
      <div className="flex w-full flex-col ">
        <div className="flex flex-col items-center space-y-2 pb-8 md:hidden md:items-start md:pb-0 ">
          <div className="text-md font-bold text-[#224E73] ">
            <a href="mailto:starhomecareservice1@gmail.com">Mail</a>
          </div>
          <div className="text-md font-bold text-[#224E73] ">
            <a href="tel:0742464878">+254703468112</a>
          </div>
          <div className="text-md font-bold text-[#224E73] ">
            &copy; Star Homecare Services
          </div>
        </div>
        <div className="hidden justify-center py-4 font-semibold md:flex md:justify-start">
          Get In Touch
        </div>
        <div className="flex justify-around px-4 text-center md:w-full  md:justify-between md:px-0  ">
          <a className="w-8 md:w-12" href="www.facebook.com">
            <img src="/facebook.svg" alt="" />
          </a>
          <a className="w-8 md:w-12" href="www.twitter.com">
            <img src="/twitter.svg" alt="" />
          </a>
          <a className="w-8 md:w-12" href="www.linkedin.com">
            <img src="/linkedin.svg" alt="" />
          </a>
          <a className="w-8 md:w-12" href="www.instagram.com">
            <img src="/insta.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div className="hidden h-full w-1/5 flex-col justify-evenly md:flex">
      <div className="flex items-center justify-center md:justify-start">
        <img className="w-8" src="/email.svg" alt="" />
        <div className="hidden pl-4 md:flex">
          <a href="mailto:starhomecareservice1@gmail.com">Contact</a>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start ">
        <img className="w-8" src="/location.svg" alt="" />
        <div className="hidden pl-4 md:flex">Nairobi</div>
      </div>

      <div className="flex items-center justify-center md:justify-start ">
        <img className="w-8" src="/phone.svg" alt="" />
        <div className="hidden pl-4 md:flex">+254700456768</div>
      </div>
    </div>
  </div>
)

export default Footer
