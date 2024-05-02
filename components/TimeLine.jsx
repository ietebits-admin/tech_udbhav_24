const TimeLine = () => {
  return (
    <>
      <h1 className="font-bold text-4xl md:text-7xl *: my-4 justify-center items-center flex  bg-gradient-to-r from-blue-600 via-purple-300 to-purple-600  text-transparent bg-clip-text pb-5 w-fit mx-auto">
        Events TimeLine
      </h1>
      <ol className="sm:flex px-4 lg:justify-center pb-12 gap-6 ">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full ring-0  bg-purple-500 sm:ring-8 ring-gray-900 shrink-0 text-3xl">
              <svg
                className="w-5 h-5 text-purple-500-800 text-white-300 text-3xl"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  className="text-3xl"
                />
              </svg>
            </div>
            <div className="hidden sm:flex w-full  h-0.5 bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white">
              Day 1 <br /> Morning
            </h3>
            <time className="btext-base font-normal text-gray-400">
              Robo Soccer Round 1 8:00AM-11:000AM
              <br />
              Venue: LH Complex
            </time>
            <p className="text-base font-normal text-gray-400">
              Tech Trivia Prelims 9AM-11:30AM
              <br />
              Venue: LH 002
            </p>
            <h3 className="text-lg font-semibold text-white">Evening</h3>
            <time className="btext-base font-normal text-gray-400">
              Cyber Battleground Round 1 4:30PM-6:30PM
              <br />
              Venue:LH 003
            </time>
            <p className="text-base font-normal text-gray-400">
              Mine Field Rescue
              <br />
              Venue: LH Complex
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full ring-0  bg-purple-500 sm:ring-8 ring-gray-900 shrink-0 text-3xl">
              <svg
                className="w-5 h-5 text-white-800 text-white-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full  h-0.5 bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-white">
              Day 2 <br /> Morning
            </h3>
            <time className="btext-base font-normal text-gray-400">
              Innovation Tank 9:00AM-12:00PM
              <br />
              Venue: LH 001
            </time>
            <p className="text-base font-normal text-gray-400">
              Cloak Coding 8:00AM-11:00AM
              <br />
              Venue:G-23 IT Building
            </p>
            <h3 className="text-lg font-semibold text-white">Evening</h3>
            <time className="btext-base font-normal text-gray-400">
              Tech Trivia 4:00PM-6:00PM
              <br />
              Venue:LH 002
            </time>
            <p className="text-base font-normal text-gray-400">
              Mine Field Rescue
              <br />
              Venue: LH Complex
            </p>
            <p className="text-base font-normal text-gray-400">
              WorkShop 3:00PM-8:00PM
              <br />
              Venue:DPA
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full ring-0 bg-purple-500 sm:ring-8 ring-gray-900 shrink-0">
              <svg
                className="w-5 h-5 text-white-800 text-white-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full  h-0.5 bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white">
              Day 3 <br /> Morning
            </h3>
            <time className="btext-base font-normal text-gray-400">
              Robo Soccer 8:00AM-11:00AM
              <br />
              Venue: LH Complex
            </time>
            <p className="text-base font-normal text-gray-400">
              Cloak Coding 9:00AM-11:00AM
              <br />
              Venue: G-23 IT Building
            </p>
          </div>
        </li>
      </ol>
    </>
  );
};

export default TimeLine;
