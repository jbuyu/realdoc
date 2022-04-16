import Image from 'next/image'
import { testimonialArray } from '../data'
import SEO from '@bradgarropy/next-seo'

const About = () => (
  <>
    <SEO title="About" description="About Star Homecare Services" />
    <div className="mx-auto flex max-w-9xl flex-col items-center font-mono px-8">
      <div className="mt-40 mb-10 md:mb-0 flex h-96 flex-col items-center justify-around py-4 px-4 md:mt-12 md:flex-row">
        <div className="flex h-full items-center md:w-3/5">
          <Image
            src="/docall.jpg"
            alt=""
            className="w-full rounded-2xl object-cover object-center shadow-md"
            width={520}
            height={310}
            layout="fixed"
            priority="true"
          />
        </div>
        <div className="item-center mt-10 flex h-full w-3/5 flex-col justify-center md:mt-0">
          <div className="item-start flex w-full text-2xl font-extrabold text-[#224E73]">
            About us
          </div>
          <div className="py-8 text-slate-600">
            Star Homecare Services Limited is a registered Kenyan Company that
            offers home based health services including but not limited to
            diagnostic services, rehabilitative services, nursing services,
            doctor consultations and nutritional services.
          </div>
        </div>
      </div>
      <div className="mt-96 flex h-96 flex-col-reverse items-center justify-between py-4 md:mt-12 md:flex-row">
        <div className="flex h-full w-3/5 flex-col items-center justify-center">
          <div className="item-start mt-12 flex w-full text-2xl font-extrabold text-[#224E73] md:mt-0">
            Prompt results &amp; fast feedback
          </div>
          <div className="py-8 text-slate-600">
            We have a wide range of doctors fully backed with a state of the art
            laboratory. After diagnosis, we'll stay in touch, offering
            guidelines throughout the recovery journey.
          </div>
        </div>
        <div className="flex h-full items-center justify-end md:w-3/5">
          <Image
            src="/nurse-table.jpg"
            alt=""
            className="w-full rounded-2xl object-cover object-center shadow-md"
            width={520}
            height={310}
            layout="fixed"
            priority
          />
        </div>
      </div>
      <div className="mt-12 flex h-96 flex-col items-center justify-around py-4 px-4 md:mt-12 md:flex-row">
        <div className="mt-32 flex h-full  items-center md:mt-0 md:w-3/5">
          <Image
            src="/syrange.jpg"
            alt=""
            className="w-full rounded-2xl object-cover object-center shadow-md"
            width={520}
            height={310}
            layout="fixed"
            priority="true"
          />
        </div>
        <div className="item-center mt-10 flex h-full w-3/5 flex-col justify-center md:mt-0">
          <div className="item-start flex w-full text-2xl font-extrabold text-[#224E73]">
            Mission
          </div>
          <div className="py-8 text-slate-600">
            To provide quality, compassionate and safe medical services to
            patients at the comfort of their home.
          </div>
        </div>
      </div>
      <div className="mt-96 flex h-96 flex-col-reverse items-center justify-between py-4 md:mt-12 md:flex-row">
        <div className="flex h-full w-3/5 flex-col items-center justify-center">
          <div className="item-start mt-12 flex w-full text-2xl font-extrabold text-[#224E73] md:mt-0">
            Vision
          </div>
          <div className="py-8 text-slate-600">
            To become a leader in telemedicine and homebased medical service
            provision in Kenya.
          </div>
        </div>
        <div className="flex h-full items-center justify-end md:w-3/5">
          <Image
            src="/patient-lie.jpg"
            alt=""
            className="w-full rounded-2xl object-cover object-center shadow-md"
            width={520}
            height={310}
            layout="fixed"
            priority
          />
        </div>
      </div>
      <div className="mt-12 flex w-full flex-col items-start justify-start md:mt-8">
        <div className="mt-2 flex w-full justify-center py-4 text-2xl font-extrabold text-[#224E73] md:mt-0 ">
          Feedback &amp; Testimonials
        </div>
        <div className="mt-2 flex w-full flex-col items-center justify-center space-x-0  md:mt-12 md:flex-row md:space-x-10 ">
          {testimonialArray.map(({ id, icon, comment, name, image }) => (
            <div
              key={id}
              className="mt-8 flex h-60 w-80 flex-col justify-around rounded-2xl bg-[#EEF2FF] p-4 md:w-auto "
            >
              <Image src={icon} alt="" width={20} height={20} layout="fixed" />
              <div>{comment}</div>
              <div className="flex items-center space-x-4">
                <Image
                  src={image}
                  alt=""
                  width={30}
                  height={30}
                  layout="fixed"
                  priority
                />
                <div className="flex items-center justify-center pt-1 font-bold text-[#224E73]">
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default About
