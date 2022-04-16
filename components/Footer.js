import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MailIcon, PhoneIcon, DeviceMobileIcon } from '@heroicons/react/solid'

const Footer = () => (
  <div
    className="mt-8 flex h-60 w-full items-center  justify-between bg-[#EEF2FF] md:mt-0 md:justify-around md:p-8"
    id="contacts"
  >
    <Link href="/">
      <div className=" h-100 hidden w-1/5 cursor-pointer items-center space-x-4 md:flex ">
        <Image src="/logo2.svg" alt="Vercel Logo" width={96} height={96} />
        <div className="hidden font-semibold md:flex  ">
          Star Homecare Services
        </div>
      </div>
    </Link>
    <div className="flex w-full justify-around md:w-1/5 ">
      <div className="flex w-full flex-col ">
        <div className="ml-10 mt-4 flex flex-col items-start space-y-4 pb-8 md:hidden md:items-start md:pb-0">
          <div className="text-md flex items-center font-bold text-[#224E73]">
            <DeviceMobileIcon className="flex justify-start" width={36} />
            <a href="tel:0742464878">+254703468112</a>
          </div>
          <div className="text-md  flex items-center space-x-2 font-bold text-[#224E73] ">
            <MailIcon width={36} />
            <a href="mailto:info@starhomecareservices.com">Mail</a>
          </div>
        </div>
        <div className="hidden justify-center py-4 font-semibold md:flex md:justify-start">
          Get In Touch
        </div>
        <div className="mt-2 flex justify-around px-4 text-center  md:w-full md:justify-between md:px-0  ">
          <a className="w-8 md:w-12" href="www.facebook.com">
            <Image src="/facebook.svg" width={56} height={56} />
          </a>
          <a className="w-8 md:w-12" href="www.twitter.com">
            <Image src="/twitter.svg" width={56} height={56} />
          </a>
          <a className="w-8 md:w-12" href="www.linkedin.com">
            <Image src="/linkedin.svg" width={56} height={56} />
          </a>
          <a className="w-8 md:w-12" href="www.instagram.com">
            <Image src="/insta.svg" width={56} height={56} />
          </a>
        </div>
        <div className="text-md mt-8 ml-10 font-bold text-[#224E73] md:hidden ">
          &copy; Star Homecare Services
        </div>
      </div>
    </div>
    <div className="hidden h-full w-1/5 flex-col justify-evenly md:flex">
      <div className="flex items-center justify-center md:justify-start">
        <Image className="w-8" src="/email.svg" width={36} height={36} />
        <div className="hidden pl-4 md:flex">
          <a href="mailto:starhomecareservice1@gmail.com">Contact</a>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start ">
        <Image className="w-8" src="/location.svg" width={36} height={36} />
        <div className="hidden pl-4 md:flex">Nairobi</div>
      </div>

      <div className="flex items-center justify-center md:justify-start ">
        <Image className="w-8" src="/phone.svg" width={36} height={36} />
        <div className="hidden pl-4 md:flex">+254700456768</div>
      </div>
    </div>
  </div>
)

export default Footer
