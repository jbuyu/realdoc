import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <div className="flex h-60 w-full  items-center justify-between bg-[#EEF2FF] md:justify-around md:p-8 ">
    <Link href="/">
      <div className="flex w-1/5 cursor-pointer items-center space-x-4 h-100">
        <img src="/adonis.svg" alt="Vercel Logo" className="ml-2 h-12 " />
        <div className="hidden font-semibold md:flex  ">
          Star Homecare Services
        </div>
      </div>
    </Link>
    <div className="justify-aroun flex w-2/3 md:w-1/5">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center md:items-start">
          <div>Terms</div>
          <div>Privacy Policy</div>
          <div>Pharmacy</div>
        </div>
        <div className="flex justify-center py-4 font-semibold md:justify-start">
          Get In Touch
        </div>
        <div className="flex w-full  justify-between text-center ">
          <a href="www.facebook.com">
            <img className="w-8 md:w-12" src="/facebook.svg" alt="" />
          </a>
          <a href="www.twitter.com">
            <img className="w-8 md:w-12" src="/twitter.svg" alt="" />
          </a>
          <a href="www.linkedin.com">
            <img className="w-8 md:w-12" src="/linkedin.svg" alt="" />
          </a>
          <a href="www.instagram.com">
            <img className="w-8 md:w-12" src="/insta.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex h-full w-1/5 flex-col justify-evenly">
      <div className="flex items-center justify-center md:justify-start ">
        <img className="w-8" src="/location.svg" alt="" />
        <div className="hidden pl-4 md:flex">Nairobi</div>
      </div>
      <div className="flex items-center justify-center md:justify-start ">
        <img className="w-8" src="/phone.svg" alt="" />
        <div className="hidden pl-4 md:flex">+254700456768</div>
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <img className="w-8" src="/email.svg" alt="" />
        <div className="hidden pl-4 md:flex"> homeserve@gmail.com</div>
      </div>
    </div>
  </div>
)

export default Footer
