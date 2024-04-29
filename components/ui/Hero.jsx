'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@react-hook/media-query';
import { useEventContext } from '@/context/EventProvider';

const Hero = ({ products }) => {
  const { onClickImage } = useEventContext();

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const isSmallDevice = useMediaQuery('(max-width: 767px)');
  const springConfig = { stiffness: 600, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2],
      isSmallDevice ? [-500, 0] : [-1000, 200]
    ),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] lg:h-[300vh] pt-40 pb-0 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10 lg:space-x-20 lg:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
              onClickImage={onClickImage}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-10 mb-10 lg:space-x-20 lg:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.id}
              onClickImage={onClickImage}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 lg:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
              onClickImage={onClickImage}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-30 px-4 w-full  left-0 top-0  items-center flex justify-center flex-col">
      <p className="font-bold mb-3 text-2xl uppercase">Echoes of Innovation</p>
      <h1 className="relative text-6xl md:text-8xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-300 to-purple-600 inline-block text-transparent bg-clip-text">
        Tech Udbhav <span className="font-medium text-5xl">By</span> IETE SF
      </h1>
      <p className="md:max-w-2xl text-lg md:text-xl md:mt-8  mt-4 text-neutral-200 text-center">
        Tech Udbhav 2024, the flagship technical fest presented by the IETE
        Students Forum, is on the horizon! Get ready to immerse yourself in a
        world where creativity knows no bounds and innovation takes center
        stage.
      </p>
      <a href="#about" className='z-50'>
        <button className="font-bold bg-gradient-to-r from-blue-600 via-purple-300 to-purple-600 mt-10 py-3 px-10 rounded-md text-slate-800">
          Explore More
        </button>
      </a>
    </div>
  );
};

export const ProductCard = ({ product, translate, onClickImage }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.id}
      className="group/product h-40 w-40 lg:h-96 lg:w-96 relative flex-shrink-0"
      onClick={() => onClickImage(product)}
    >
      <a href="#event" className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.toShow}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-40 w-40 lg:h-96 lg:w-96 inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default Hero;
