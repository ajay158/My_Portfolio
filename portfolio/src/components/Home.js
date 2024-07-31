import React from 'react';
import hero from '../components/images/hero.png';

const Home = () => {
  return (
    <>
    <div className="">
      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 lg:px-60 flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Ajay</h1>
            <p className="text-xl">Full Stack Developer</p>
            <p>I design and code simple, beautiful things. I love bringing ideas to life with my work.</p>
            <div className="flex justify-center lg:justify-start gap-3 mt-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">Say Hello</button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded">Hire Me</button>
            </div>
          </div>
          <div className="mb-6 lg:mb-0 lg:ml-6">
            <img src={hero} alt="hero.png" className="max-w-xs mx-auto lg:mx-0"/>
          </div>
        </div>
      </header>
    </div>
  </>
  
  
  );
};

export default Home;
