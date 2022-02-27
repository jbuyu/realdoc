import React from 'react'
import Image from 'next/image'
import {teamArray} from '../data'

const Team = () => (
  <div className="max-w-8xl mx-auto flex flex-col  bg-[url('/bgpattern4.svg')] bg-cover bg-no-repeat">
    <div className="mt-10 flex flex-wrap justify-around px-20 text-gray-900">
      {teamArray.map(({ id, image, name, speciality }) => (
        <div className="pt-4">
          <div className="h-64 w-130">
            <Image
              src={image}
              alt=""
              className="w-full rounded-lg object-cover object-center shadow-md"
              width={352}
              height={456}
              layout="fixed"
            />
          </div>
          <div className="relative mt-36 px-10 ">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h4 className="text-md mt-1 truncate font-semibold leading-tight text-slate-600">
                {name}
              </h4>
              <div className="flex items-baseline pt-2">
                <span className="inline-block rounded-full bg-teal-200 px-2 py-1 text-xs font-semibold  uppercase tracking-wide text-teal-800">
                  {speciality}
                </span>
              </div>
              {/* <div className="mt-4">
                <span className="text-md font-semibold text-teal-600">
                  4/5 ratings{' '}
                </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Team
