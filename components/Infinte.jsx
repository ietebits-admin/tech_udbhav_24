import Image from 'next/image';

const ScrollCarousel = () => {
  return (
    <>
      <div className="mb-96">
        <div className="relative w-full p-16  overflowx-hidden">
          <div className="flex absolute left-0 animate-marquee-infinite">
            <div className="flex w-96 justify-around">
              <Image
                src="/assets/sponser-11.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-22.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-33.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-44.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-55.jpg"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/Sponsers6.jpeg"
                alt=""
                width={100}
                height={200}
              />
            </div>
            <div className="flex w-96 justify-around">
              <Image
                src="/assets/sponser-11.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-22.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-33.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-44.png"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/sponser-55.jpg"
                alt=""
                width={100}
                height={200}
              />
              <Image
                src="/assets/Sponsers6.jpeg"
                alt=""
                width={100}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCarousel;
