import React from 'react';
import { experiences } from '../../constants';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans  clip-path-custom-2"
      style={{
        backgroundImage:
          'linear-gradient(38.73deg, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0) 50%), linear-gradient(141.27deg, rgba(56, 189, 248, 0) 50%, rgba(56, 189, 248, 0.15) 100%)',
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical timeline line (for sm and up) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block" />

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            }`}
          >

            {/* Experience Card */}
            <div
              className={`w-full sm:max-w-md mt-8 sm:mt-0 p-5 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(56,189,248,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? 'sm:ml-12' : 'sm:mr-12'
              }`}
            >
              {/* Top Section: Logo + Info */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain "
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#156c92] text-gray-100 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
