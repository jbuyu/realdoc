import Image from 'next/image'
import servicesArray from '../data/services'

const Services = () => (
  <div className="mx-auto flex max-w-7xl flex-col">
    <div className="mt-10 flex flex-col text-gray-900">
      <header className="font-md text-center py-2 font-mono text-3xl font-semibold text-slate-600">
        Our Services
      </header>
      <div className=" text-center  py-4 text-xl text-slate-600 ">
        We provide state of the art medical care for all our patients.
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {servicesArray.map(({id, icon, title, description }) => (
          <div key={id} className="m-8 flex h-84 w-80 flex-col items-center  justify-center rounded-3xl p-4">
            <div className="flex h-56 w-56 items-center justify-center rounded-xl bg-gray-50 ">
              <Image src={icon} width={124} height={124} layout="fixed" />
            </div>
            <div className="text-lg p-1 font-semibold text-black">{title}</div>
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
