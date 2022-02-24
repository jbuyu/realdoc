import React from 'react'

const Services = () => (
  <div className="mt-10 ">
    <div className="fontlg flex justify-center p-8 text-3xl font-semibold">
      Our Services
    </div>
    <div className="flex-start mx-auto flex  max-w-9xl items-center justify-evenly pb-12 ">
      <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110">
        <div className="flex flex-col items-center justify-center">
          <img src="/consul.svg" alt="" className="w-48" />
          <div className="font-semibold">Consultations</div>
        </div>
      </div>
      <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
        <div className="flex flex-col items-center justify-center">
          <img src="/homecare.svg" alt="" className="w-48" />
          <div className="font-semibold">Homecare</div>
        </div>
      </div>
      <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
        <div className="flex flex-col items-center justify-center">
          <img src="/laboratory.svg" alt="" className="w-48" />
          <div className="font-semibold">Laboratory</div>
        </div>
      </div>
      <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
        <div className="flex flex-col items-center justify-center">
          <img src="/nutrition.svg" alt="" className="w-48" />
          <div className="font-semibold">Nutrition</div>
        </div>
      </div>
      <div className="block max-w-sm cursor-pointer rounded-lg bg-white p-6 shadow-lg transition ease-in-out hover:scale-110">
        <div className="flex flex-col items-center justify-center">
          <img src="/physiotherapy.svg" alt="" className="w-48" />
          <div className="font-semibold">Physicotherapy</div>
        </div>
      </div>
    </div>
  </div>
)

export default Services
