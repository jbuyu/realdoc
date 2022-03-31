import Image from 'next/image'
import { testimonialArray } from '../data'
import SEO from '@bradgarropy/next-seo'

const About = () => (
  <>
    <SEO description="About Star Homecare Services" />
    <div className="mx-auto flex max-w-7xl flex-col items-center font-mono">
      <div className="mt-40 flex h-96 flex-col items-center justify-around py-4 px-4 md:mt-12 md:flex-row">
        <div className="">
          <Image
            src="/docparade.jpeg"
            alt=""
            className="w-full rounded-3xl object-cover object-center shadow-md"
            width={448}
            height={296}
            layout="fixed"
            priority="true"
          />
        </div>
        <div className="item-center mt-10 flex h-full w-1/2 flex-col justify-center md:mt-0">
          <div className="item-start flex w-full text-2xl font-extrabold text-[#224E73]">
            Commitment to homecare
          </div>
          <div className="py-8 text-slate-600">
            We take our work seriously; our team of doctors offer consultations,
            preventative care and therapeutic advice at your doorstep. Alongside
            helping you during your recovery process, we are here to make sure
            you stay healthy in the long run.
          </div>
        </div>
      </div>
      <div className="mt-80 flex h-96 flex-col-reverse items-center justify-around py-4 md:mt-12 md:flex-row ">
        <div className="flex h-full w-1/2 flex-col items-center justify-center">
          <div className="item-start mt-32 flex w-full text-2xl font-extrabold text-[#224E73] md:mt-0">
            Prompt results &amp; fast feedback
          </div>
          <div className="py-8 text-slate-600">
            Your health is very important to us. We'll dispatch a doctor best
            suited for your conditio. They have a modern state of the art
            laboratory at their disposal to bolster fast feedback. After their
            diagnosis, we'll stay in touch, offering guidelines and everything
            necesary through your recovery journey.
          </div>
        </div>
        <div className="">
          <Image
            src="/doctorslab.jpeg"
            alt=""
            className="w-full rounded-3xl object-cover object-center shadow-md"
            width={448}
            height={296}
            layout="fixed"
            priority
          />
        </div>
      </div>
      <div className="mt-32 flex w-full flex-col items-start justify-start md:mt-8">
        <div className="flex w-full justify-center mt-24 md:mt-0 py-4 text-2xl font-extrabold text-[#224E73] ">
          Feedback &amp; Testimonials
        </div>
        <div className="mt-6 flex w-full flex-col items-center justify-center space-x-0  md:mt-12 md:flex-row md:space-x-10 ">
          {testimonialArray.map(({ id, icon, comment, name, image }) => (
            <div
              key={id}
              className="mt-8 flex h-60 w-80 flex-col justify-around rounded-3xl bg-[#EEF2FF] p-4 md:w-auto "
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
