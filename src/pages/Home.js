import React from 'react';
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};