import React, { useState } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
Image
import {
  Link as Linker,
  smooth,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import Image from 'next/image'

const NavBar = () => {
  const [isopen, setIsOpen] = useState(false)
  const handleHamburger = () => {
    setIsOpen(!isopen)
  }
  return (
    <nav className="font-semibold">
      <div className="mx-auto max-w-7xl py-2 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex w-2/5 cursor-pointer items-center space-x-4">
              <Image height={100} width={100} src="/logo2.svg" alt="Vercel Logo" className="ml-2 h-14 " />
              <div className=" hidden text-[#224E73] md:flex">
                StarHome Health Services
              </div>
            </div>
          </Link>
          <div className="hidden w-full justify-around text-[#224E73] md:flex md:w-2/5">
            {/* <Link className="cursor-pointer" href="/Team">
              <div className="cursor-pointer hover:text-indigo-700 hover:underline">
                Team
              </div>
            </Link> */}
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

          {/* mobile nave */}
          <div className="flex items-center text-indigo-600  md:hidden">
            <button onClick={handleHamburger} className="mobile-menu-button">
              <MenuIcon width="40" className="font-bold" />
            </button>
          </div>
          <div className="hidden  md:flex">
            <button className="rounded-full bg-indigo-600 py-2 px-6 font-bold text-white hover:bg-indigo-700">
              <Linker
                className="cursor-pointer"
                to="contacts"
                scrollspy="true"
                smooth={true}
              >
                Contact
              </Linker>
            </button>
          </div>
        </div>
        <div
          className={
            isopen
              ? 'mobile-menu block space-y-3 p-4 md:hidden'
              : 'mobile-menu hidden space-y-3 p-4 md:hidden'
          }
        >
          {/* <Link className="cursor-pointer" href="/Team">
            <div className="cursor-pointer hover:text-indigo-700 hover:underline">
              Team
            </div>
          </Link> */}
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
      </div>
    </nav>
  )
}

export default NavBar
