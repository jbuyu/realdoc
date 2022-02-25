import Image from 'next/image'
import servicesArray from '../data/services'

const Services = () => (
  <div className="mx-auto flex max-w-7xl flex-col bg-red-100">
    <div className="mt-10 flex flex-col text-gray-900">
      <header className="font-md flex items-center justify-center py-2 font-mono text-3xl font-semibold text-slate-600">
        Our Services
      </header>
      <div className="flex items-center justify-center py-4 text-xl text-slate-600 ">
        We provide state of the art medical care for all our patients.
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {servicesArray.map(({ icon, title, description }) => (
          <div className="m-8 flex h-80 w-80 flex-col items-center  justify-center rounded-3xl p-4">
            <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-gray-50 ">
              <Image src={icon} width={100} height={100} layout="fixed" />
            </div>
            <div className="text-lg p-4 font-semibold text-black">{title}</div>
            <div className=" text-md w-60 flex overflow-hidden whitespace-normal text-center text-sm font-medium">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Services
