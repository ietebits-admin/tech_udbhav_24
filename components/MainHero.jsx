'use client';
import React from 'react';
import Hero from './ui/Hero';
import { events } from '@/utils/eventData';
// import { Hero } from './ui/Hero';

export function MainHero() {
  return <Hero products={events} />;
}
