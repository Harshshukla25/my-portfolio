import React from 'react';
import { SkillsInfo } from '../../constants';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[7vw] font-sans clip-path-custom"
      style={{
        backgroundImage:
          'linear-gradient(38.73deg, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0) 50%), linear-gradient(141.27deg, rgba(56, 189, 248, 0) 50%, rgba(56, 189, 248, 0.15) 100%)',
      }}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#38bdf8] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and learning experiences.
        </p>
      </div>

      {/* Category Boxes */}
      <div className="flex flex-wrap justify-center gap-6">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 py-6 w-full sm:w-[45%] lg:w-[23%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(56,189,248,0.3)]"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4 text-center">
              {category.title}
            </h3>

            {/* Individual Skill Items - stacked on large screens */}
            <div className="flex flex-wrap lg:flex-col items-center justify-center gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 border border-gray-700 bg-gray-800 rounded-xl px-4 py-2 hover:scale-105 transition-transform w-fit"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm text-gray-200 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
