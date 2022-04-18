import SEO from '@bradgarropy/next-seo'
import Image from 'next/image'
import { servicesArray } from '../data'

const Services = () => (
  <>
    <SEO title="Services" description="Our Services" />
    <div className="mx-auto flex max-w-7xl flex-col">
      <div className="mt-10 flex flex-col">
        <h1 className="font-md py-2 text-center font-mono text-3xl font-semibold text-[#224E73]">
          Star Homecare Services
        </h1>
        <div className=" py-4  text-center text-xl text-slate-600 ">
          We provide state of the art medical care for all our patients.
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {servicesArray.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="h-84  flex w-96 flex-col items-center  justify-center rounded-3xl p-4"
            >
              <div className="flex h-56 w-56 items-center justify-center rounded-xl bg-gray-50 ">
                <Image src={icon} width={124} height={124} layout="fixed" />
              </div>
              <div className="p-1 text-center text-lg font-semibold text-[#224E73]">
                {title}
              </div>
              <div className=" text-md flex w-60 overflow-hidden whitespace-normal text-center text-sm font-medium text-slate-600">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default Services
