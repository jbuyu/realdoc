import React from 'react'

const Team = () => (
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-center bg-[url('/bgpattern2.svg')] bg-cover bg-no-repeat ">
    <div className="mt-10 flex items-center justify-center text-gray-900">
      <div>
        <div className="h-80 w-130">
          <img
            src="/doc.jpeg"
            alt=" random imgee"
            class="w-full rounded-lg object-cover object-center shadow-md"
          />
        </div>

        <div class="relative mt-36 px-10 ">
          <div class="rounded-lg bg-white p-6 shadow-lg">
            <h4 class="text-md mt-1 truncate font-semibold  leading-tight">
              Dr. Cindy Murella
            </h4>
            <div class="flex items-baseline pt-2">
              <span class="inline-block rounded-full bg-teal-200 px-2 py-1 text-xs font-semibold  uppercase tracking-wide text-teal-800">
                Physiotherapist
              </span>
            </div>
            {/* <div class="mt-4">
              <span class="text-md font-semibold text-teal-600">
                4/5 ratings{' '}
              </span>
              <span class="text-sm text-gray-600">(based on 234 ratings)</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Team
