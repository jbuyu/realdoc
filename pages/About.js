import Image from 'next/image'
import { testimonialArray } from '../data'

const About = () => (
  <div className="mx-auto flex max-w-7xl flex-col items-center font-mono">
    <div className="mt-12 flex h-96 items-center justify-around py-4">
      <div className="">
        <Image
          src="/docparade.jpeg"
          alt=""
          className="w-full rounded-lg object-cover object-center shadow-md"
          width={448}
          height={296}
          layout="fixed"
          className="rounded-3xl"
        />
      </div>
      <div className="item-center flex h-full w-1/2 flex-col justify-center">
        <div className="text-2xl font-extrabold text-[#224E73] ">
          Preventative, Prescriptive &amp; Curative Medical Practices
        </div>
        <div className="py-8 text-slate-600">
          We take our work seriously; offering consultations, preventative care
          and therapeutic advice with utmost integrity. We see our work as a
          service to the community.
        </div>
      </div>
    </div>
    <div className="mt-12 flex h-96 items-center justify-around py-4">
      <div className="flex h-full w-1/2 flex-col items-center justify-center">
        <div className="text-2xl font-extrabold text-[#224E73]">
          State of the art Equipment, Prompt results &amp; fast feedback
        </div>
        <div className="py-8 text-slate-600">
          We Believe in delivering services as quick and in the most perfect way
          we can. Alongside having state of the art equipment, our team is
          dedicated and at your service.
        </div>
      </div>
      <div className="">
        <Image
          src="/doctorslab.jpeg"
          alt=""
          className="w-full rounded-lg object-cover object-center shadow-md"
          width={448}
          height={296}
          layout="fixed"
          className="rounded-3xl"
        />
      </div>
    </div>
    <div className="flex w-full flex-col items-start justify-start pl-12">
      <div className="  py-4 text-2xl font-extrabold text-[#224E73]">
        Feedback and Testimonials
      </div>
      <div className="mt-12 flex w-full space-x-10">
        {testimonialArray.map(({ id, icon, comment, name, image }) => (
          <div
            key={id}
            className="flex h-60 flex-col  justify-around rounded-3xl bg-[#EEF2FF] p-4 "
          >
            <Image src={icon} alt="" width={20} height={20} layout="fixed" />
            <div>{comment}</div>
            <div className="flex items-center space-x-4">
              <Image src={image} alt="" width={30} height={30} layout="fixed" />
              <div className="flex items-center justify-center pt-1 font-bold text-[#224E73]">
                {name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default About
