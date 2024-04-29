'use client';
import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();
export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState({
    id: 1,
    toShow: '/assets/Poster1.webp',
    mainPoster: '/assets/Poster1.webp',
    topPoster: '/assets/robo1.avif',
    bottomPoster: '/assets/robo2.avif',
    title: 'Robo Soccer',
    about:
      'What is Robo Soccer? Well its a soccer game but with a slit twist-the players are not humans but manually operated bots. Whether you are a tech enthusiast, a soccer fanatic, or just curious being-this event is worth participating and watching. Imagine the adrenaline rush as these manually operated bots compete fiercely on the field. From designing and building the bots to the intense battles among them, there is so much to experience and appreciate',
    formLink: 'https://bit.ly/RoboSoccer_iete',
    ruleBookLink: 'https://bit.ly/RoboSoccer_Rulebook',
    abstractLink: '',
    venue: '',
    date: '',
  });

  const onClickImage = (clickedData) => {
    setEventData(clickedData);
  };

  return (
    <EventContext.Provider value={{ eventData, onClickImage }}>
      {children}
    </EventContext.Provider>
  );
};
