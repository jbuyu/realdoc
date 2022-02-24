export default function Form() {
  return (
    <div className="mx-auto flex max-w-7xl  flex-col bg-[url('/bgpattern.svg')] bg-cover bg-no-repeat">
      <div className=" h-96 items-center rounded-b-3xl bg-indigo-600 text-xl text-white">
        <div className="relative">
          <div className="w-2/5 p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            aliquam quidem veritatis vero perspiciatis, possimus aperiam ipsam
            odio vitae aliquid debitis asperiores quibusdam, dolore amet rerum
            provident vel modi! Quae.
          </div>
          <form className=" bg-red-200mt-8 absolute top-0 right-0 mt-12 mr-12 flex w-2/5 flex-col justify-center rounded-xl bg-white p-10">
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                First Name
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Last Name
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Phone
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Phone
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="w-full rounded border bg-indigo-700 py-4 text-sm font-semibold leading-none text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
