import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Adversity Solutions",
      duration: "July 2024 \u2013 October 2025",
      location: "Mysore, India",
      type: "Full-Time",
      logo: "\u{1F3E2}",
      description:
        "Built, optimized, and deployed scalable full-stack web applications in an Agile environment, working with cross-functional teams to deliver reliable and high-performance digital products.",
      responsibilities: [
        "Developed and maintained production-ready MERN stack applications using MongoDB, Express.js, React.js, and Node.js.",
        "Integrated REST APIs, authentication workflows, and Stripe payments for secure end-to-end user flows.",
        "Worked closely with a 4-member engineering team using Agile sprints and collaborative delivery practices.",
        "Improved application performance, code quality, and security through debugging, reviews, and ongoing optimization.",
        "Reduced bugs and downtime by 25% through continuous testing, issue resolution, and deployment support."
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Git", "REST APIs" 
      
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Adversity Solutions",
      duration: "May 2024 \u2013 July 2024",
      location: "Mysore, India",
      type: "Internship",
      logo: "\u{1F4BB}",
      description:
        "Delivered responsive and user-focused frontend features for web applications, contributing to interface development, API integration, and overall product usability in a collaborative engineering environment.",
      responsibilities: [
        "Developed responsive and reusable UI components using React.js, HTML5, CSS3, and modern frontend development practices.",
        "Collaborated with backend engineers to integrate REST APIs and implement smooth asynchronous data flows across application modules.",
        "Enhanced usability, accessibility, and frontend performance through clean code, responsive layouts, and structured component design.",
        "Contributed to internal documentation and shared frontend components to improve development consistency and team productivity."
      ],
      technologies: [ "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JavaScript",
        "Git",
        "Stripe API",
        "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My 1.6 years of experience delivering modern web applications with the MERN stack
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-pink-500 to-purple-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
                data-aos-delay={index * 200}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full border-4 border-black z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{experience.logo}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                          <p className="text-blue-400 font-medium">{experience.company}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                        {experience.type}
                      </span>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm text-gray-300 flex items-start space-x-2">
                            <span className="text-blue-400 mt-1">&bull;</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready for the next challenge
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always looking for new opportunities to grow and contribute to exciting projects
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
