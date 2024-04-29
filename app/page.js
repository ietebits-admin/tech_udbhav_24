'use client';
import React, { useEffect, useState } from 'react';
import Event from '@/components/Event';
import { Footer } from '@/components/Footer';
import { MainHero } from '@/components/MainHero';
import Navbar from '@/components/Navbar';
import Sponser from '@/components/Sponsers';
import TimeLine from '@/components/TimeLine';
import { About } from '@/components/ui/About';
import EventCard from '@/components/EventCard';
import { useEventContext } from '@/context/EventProvider';
import { events } from '@/utils/eventData';

const Home = () => {
  const { onClickImage } = useEventContext();
  const [uniqueEvents, setUniqueEvents] = useState([]);

  useEffect(() => {
    const uniqueToShowImages = new Set();
    const filteredEvents = events.filter((event) => {
      if (!uniqueToShowImages.has(event.toShow)) {
        uniqueToShowImages.add(event.toShow);
        return true;
      }
      return false;
    });
    setUniqueEvents(filteredEvents);
  }, [events]);

  return (
    <>
      <Navbar />
      <MainHero />
      <About />
      <a
        href="#event"
        className="grid grid-cols-2 lg:grid-cols-6 gap-6 p-8 items-center"
      >
        {uniqueEvents?.map((product) => (
          <EventCard
            product={product}
            key={product.id}
            onClickImage={onClickImage}
          />
        ))}
      </a>
      <Event />
      <TimeLine />
      <Sponser />
      <Footer />
    </>
  );
};

export default Home;
