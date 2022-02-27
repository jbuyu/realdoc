import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <div className="flex h-60 w-full  items-center justify-around bg-[#EEF2FF] p-8 ">
    <Link href="/">
      <div className="flex w-1/5 cursor-pointer items-center space-x-4">
        <img src="/adonis.svg" alt="Vercel Logo" className="ml-2 h-12 " />
        <div className="font-semibold">Star Homecare Services</div>
      </div>
    </Link>
    <div className="flex w-1/5 justify-around">
      <div className="flex w-full flex-col ">
        <div className="flex flex-col">
          <div>Terms</div>
          <div>Privacy Policy</div>
          <div>Pharmacy</div>
        </div>
        <div className="py-4 font-semibold">Get In Touch</div>
        <div className="w-100 flex justify-between ">
          <a href="www.facebook.com">
            <img className="w-12" src="/facebook.svg" alt="" />
          </a>
          <a href="www.facebook.com">
            <img className="w-12" src="/twitter.svg" alt="" />
          </a>
          <a href="www.facebook.com">
            <img className="w-12" src="/linkedin.svg" alt="" />
          </a>
          <a href="www.facebook.com">
            <img className="w-12" src="/insta.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex h-full w-1/5 flex-col justify-evenly">
      <div className="flex items-center">
        <img className="w-8" src="/location.svg" alt="" />
        <div className="pl-4">Nairobi</div>
      </div>
      <div className="flex items-center ">
        <img className="w-8" src="/phone.svg" alt="" />
        <div className="pl-4">+254700456768</div>
      </div>
      <div className="flex items-center">
        <img className="w-8" src="/email.svg" alt="" />
        <div className="pl-4"> homeserve@gmail.com</div>
      </div>
    </div>
  </div>
)

export default Footer
