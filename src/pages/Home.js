import React from 'react';
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Qualifications } from '../components/Qualifications';
import { Skills } from '../components/Skills';
import { Awards } from '../components/Awards';
import { Contact } from './Contact';


export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Awards />
      <Skills />
      <Qualifications />
      <Contact />
    </>
  );
};