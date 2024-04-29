import Image from 'next/image';
import React from 'react';

const Sponsers = () => {
  return (
    <main className="relative h-200 flex flex-col justify-center bg-dark-900 overflow-hidden">
      <h1 className="font-bold  text-4xl md:text-6xl my-4 justify-center items-center flex  bg-gradient-to-r from-blue-600 via-purple-300 to-purple-600  text-transparent bg-clip-text pb-5  w-fit mx-auto">
        Our Previous Sponsors
      </h1>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-10">
        <div className="text-center">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-11.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-22.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-33.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-44.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-55.jpg"
                  alt="Facebook"
                  height={50}
                  width={50}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-11.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-22.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-33.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-44.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                  className="aspect-3/2 object-contain"
                />
              </li>{' '}
              <li className="bg-white p-4 rounded-lg">
                <Image
                  src="/assets/sponser-55.jpg"
                  alt="Facebook"
                  height={50}
                  width={50}
                  className="aspect-3/2 object-contain"
                />
              </li>{' '}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sponsers;
