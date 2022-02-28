import React from 'react'
import Link from 'next/link'

const NavBar = () => (
  <nav className="font-semibold ">
    <div className="mx-auto max-w-7xl py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex w-2/5 cursor-pointer items-center space-x-4">
            <img src="/adonis.svg" alt="Vercel Logo" className="ml-2 h-12 " />
            <div className='text-[#224E73]' >Star Homecare Services</div>
          </div>
        </Link>
        <div className="flex w-2/5 justify-around text-[#224E73]  ">
          <Link className="cursor-pointer" href="/Team">
            <div className="cursor-pointer hover:text-indigo-700 hover:underline">
              Team
            </div>
          </Link>
          <Link href="/Services">
            <div className="cursor-pointer hover:text-indigo-700 hover:underline">
              Services
            </div>
          </Link>
          <Link href="/About">
            <div className="cursor-pointer hover:text-indigo-700 hover:underline">
              About
            </div>
          </Link>
        </div>
        <div className="w-1/5">
          <button className="rounded-full bg-indigo-600 py-2 px-6 font-bold text-white hover:bg-indigo-700">
            <Link className="cursor-pointer" href="/services">
              Contact
            </Link>
          </button>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
