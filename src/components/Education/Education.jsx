import React from 'react';
import { education } from '../../constants';

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans  clip-path-custom-3"
      style={{
        backgroundImage:
          'linear-gradient(38.73deg, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0) 50%), linear-gradient(141.27deg, rgba(56, 189, 248, 0) 50%, rgba(56, 189, 248, 0.15) 100%)',
      }}

    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block z-0" />

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="mb-20 relative"
          >
            

            {/* Education Card */}
            <div
              className={`w-full sm:max-w-md mt-8 sm:mt-0 p-5 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(56,189,248,0.4)] transform transition-transform duration-300 hover:scale-105
              ${
                index % 2 === 0
                  ? 'sm:ml-[calc(50%+20px)] sm:mr-0'
                  : 'sm:mr-[calc(50%+20px)] sm:ml-0'
              }`}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex justify-center items-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
