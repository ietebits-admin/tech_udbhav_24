import Image from 'next/image';

export const About = () => {
  return (
    <div className="relative mx-auto py-30 md:flex-row md:py-10 px-4 lg:px-16 lg:py-32 w-full flex flex-col justify-evenly gap-10 md:gap-40" id='about'>
      <div>
        <h1 className="text-6xl md:text-7xl font-bold  bg-gradient-to-r from-blue-600 via-purple-300 to-purple-600 inline-block text-transparent bg-clip-text">
          About Us
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mt-8 text-neutral-200">
          Tech Udbhav 2024, the flagship technical fest presented by the IETE
          Students Forum, is on the horizon! Get ready to immerse yourself in a
          world where creativity knows no bounds and innovation takes center
          stage. Tech Udbhav is more than just a fest; it is an experience that
          will leave you inspired and awestruck. Stay tuned as we reveal more
          about our lineup of events, attractions and surprises in store.
        </p>
      </div>

      <div>
        <Image
          src="/assets/hero-bannerr.jpeg"
          alt=""
          width={300}
          height={700}
        />
      </div>
    </div>
  );
};
