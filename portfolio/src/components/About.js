import React from 'react';
import hero from '../components/images/hero.png';
import html from '../components/images/lang/html.png';
import css from '../components/images/lang/css.png';
import bootstrap from '../components/images/lang/bootstrap.png';
import sass from '../components/images/lang/sass.png';
import tailwind from '../components/images/lang/tailwind.png';
import js from '../components/images/lang/js.png';
import react from '../components/images/lang/react.png';
import git from '../components/images/lang/git.png';
import responsive from '../components/images/lang/responsive.png';


const About = () => {
  return (
<section id="about" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex flex-col mb-10 w-full items-center mx-auto">
          <img src={hero} alt="aboutimage" className="w-40 h-auto rounded-lg shadow-lg mb-8 " />
          <p className="text-lg mb-4 italic">
          Hello! My name is Ajay Kumar Shahu. From a young age, I've been fascinated by how technology works, especially platforms like Facebook, Instagram, YouTube, and mobile games. This curiosity led me to pursue computer engineering. Now, as a frontend developer, I channel that passion into coding and creating seamless, engaging digital experiences. I’m particularly interested in blending aesthetics with functionality, ensuring that every project I work on is both beautiful and intuitive. Beyond coding, I love capturing beauty through photography and video, finding inspiration in the world around me. Looking ahead, I’m excited to continue exploring innovative ways to bridge design and technology.
          </p>
        </div>
     <div className="flex flex-col items-center">
            <p className="text-lg mb-6">
            I have become confident using the following technologies.
             </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            <img src={html} alt="HTML" className="w-16 h-16 " />
            <img src={css} alt="CSS" className="w-16 h-16"/>
            <img src={bootstrap} alt="Bootstrap" className="w-16 h-16" />
            <img src={sass} alt="Sass" className="w-16 h-16" />
            <img src={tailwind} alt="Tailwind" className="w-16 h-16" />
            <img src={js} alt="JavaScript" className="w-16 h-16" />
            <img src={react} alt="react" className="w-16 h-16"/>
            <img src={git} alt="Git" className="w-16 h-16" />
            <img src={responsive} alt="Responsive" className="w-16 h-16" />
           
        </div>
    </div>
    </div>
</section>
  );
};

export default About;
