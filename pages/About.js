import Image from 'next/image'
import Link from 'next/link'

const About = () => (
  <div className="mx-auto flex max-w-7xl flex-col items-center ">
    <div className="mt-12 flex h-96 items-center justify-around py-4">
      <div className="">
        <Image
          src="/docparade.jpeg"
          alt=""
          className="w-full rounded-lg object-cover object-center shadow-md"
          width={448}
          height={296}
          layout="fixed"
          className="rounded-4xl"
        />
      </div>
      <div className="item-center flex h-full w-1/2 flex-col justify-center font-mono">
        <div className="text-2xl font-extrabold">
          Preventative, Prescriptive &amp; Curative Medical Practices
        </div>
        <div className="py-8">
          We take our work seriously; offering consultations, preventative care
          and therapeutic advice with utmost integrity. We see our work as a
          service to the community because a healthy society is our bet towards
          life well lived.
        </div>
      </div>
    </div>
    <div className="mt-12 flex h-96 items-center justify-around py-4">
      <div className="flex h-full w-1/2 flex-col items-center justify-center font-mono">
        <div className="text-2xl font-extrabold">
          State of the art Equipment, Prompt results &amp; fast feedback
        </div>
        <div className="py-8">
          We Believe in delivering services as quick and in the most perfect way
          we can. Alongside having state of the art equipment, our team is
          dedicated and at your service. Feel free to reach out
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
          className="rounded-4xl"
        />
      </div>
    </div>
  </div>
)

export default About
