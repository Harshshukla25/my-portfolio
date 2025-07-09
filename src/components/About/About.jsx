import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import profileImage from '../../assets/profilepicround.png'

const About = () => {
  return (
    <section
    id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw]  font-sans mt-16 md:mt-24 lg:mt-10'>
    <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
      {/*Left side */}

      <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-8'>
      {/*Greeting */}
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
        Hi, I am
      </h1>
      <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
        Harsh Shukla
      </h2>
      {/*Typing effect */}
      <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#38bdf8] leading-tight'>
        <span className='text-white'>
          I am a{" "} 
        </span>
        <TypeAnimation
  sequence={[
    'Fullstack Developer', 2000,
    'Java Developer', 2000,
    'Coder', 2000
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-[#38bdf8]"
/>
      </h3>
      {/*About me paragraph*/}
      <p className='text-base sm:text-lg md:text-base text-gray-400 mb-8 mt-8 leading-relaxed'>
        I'm a dedicated Full Stack Developer and Java Developer with a strong grasp of both frontend and backend technologies. I specialize in building clean, scalable, and efficient web applications using Java, Spring Boot, React, Node.js, and MongoDB. I'm passionate about writing high-quality code, solving real-world problems, and continuously improving my skills.
      </p>
      {/*Resume Button */}
      <a href=""
      target='_blank'
      rel='noopener noreferrer'
      className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
      style={{
        background:"#078cc5"
      }}
      >
        DOWNLOAD CV
      </a>
      </div>


      {/*Right side*/}
      <div className='md:w-1/2 flex justify-center md:justify-end ml-0 md:ml-3 lg:ml-5'>
      <img src={profileImage}alt="Harsh Shukla"
      className='w-full h-full rounded-full object-cover shadow-[0_10px_20px_rgba(56,189,248,0.5)] '
      />
      </div>
    </div>
    </section>
  )
}

export default About
