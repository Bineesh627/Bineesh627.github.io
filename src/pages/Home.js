import React from 'react';
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyChooseMe } from '../components/WhyChooseMe';
import { Experience } from '../components/Experience';
import { Qualifications } from '../components/Qualifications';
import { Skills } from '../components/Skills';
import { Awards } from '../components/Awards';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <WhyChooseMe />
      <Experience />
      <Awards />
      <Skills />
      <Qualifications />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};