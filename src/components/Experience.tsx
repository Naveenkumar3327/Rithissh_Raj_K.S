import React from 'react';
import { Calendar, MapPin, Award, Building, Code, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'C# Development Intern',
      company: 'Tech Solutions Ltd',
      period: '2023',
      location: 'Remote',
      type: 'Internship',
      description: 'Worked on .NET projects focusing on debugging, optimization, and software development lifecycle management. Gained hands-on experience with enterprise-level applications.',
      achievements: [
        'Developed multiple .NET applications using C# and ASP.NET',
        'Improved application performance by 25% through code optimization',
        'Collaborated with senior developers on complex debugging tasks',
        'Mastered advanced debugging techniques and best practices',
        'Contributed to software documentation and testing procedures'
      ],
      color: 'from-blue-500 to-purple-600',
      icon: Code
    },
    {
      title: 'MERN Stack Intern',
      company: 'Better Tomorrow',
      period: '2023',
      location: 'Chennai',
      type: 'Internship',
      description: 'Built full-stack React applications with focus on REST API development and modern UI integration. Worked with MongoDB, Express.js, React, and Node.js technologies.',
      achievements: [
        'Built responsive React applications with modern UI components',
        'Developed RESTful API endpoints using Node.js and Express',
        'Integrated frontend applications with backend services',
        'Implemented modern UI/UX practices and design patterns',
        'Worked with MongoDB for database design and optimization'
      ],
      color: 'from-teal-500 to-green-600',
      icon: Briefcase
    }
  ];

  const certifications = [
    {
      title: 'Android Development',
      issuer: 'Appex Technologies',
      year: '2023',
      icon: '📱',
      color: 'from-green-400 to-blue-500',
      skills: ['Java', 'Android Studio', 'Mobile UI/UX']
    },
    {
      title: 'Introduction to Full Stack',
      issuer: 'Udemy',
      year: '2023',
      icon: '🌐',
      color: 'from-purple-400 to-pink-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'Hardware Fundamentals',
      issuer: 'Rampex',
      year: '2024',
      icon: '🔧',
      color: 'from-orange-400 to-red-500',
      skills: ['Computer Hardware', 'Troubleshooting', 'System Architecture']
    },
    {
      title: 'Blender 3D Modeling',
      issuer: 'Naan Mudhalvan',
      year: '2023',
      icon: '🎨',
      color: 'from-blue-400 to-purple-500',
      skills: ['3D Modeling', 'Animation', 'Rendering']
    },
    {
      title: 'Cloud Computing - AWS',
      issuer: 'AWS',
      year: '2024',
      icon: '☁️',
      color: 'from-yellow-400 to-orange-500',
      skills: ['EC2', 'S3', 'Lambda', 'Cloud Architecture']
    },
    {
      title: 'Advanced MERN Stack',
      issuer: 'SkillIn',
      year: '2024',
      icon: '⚛️',
      color: 'from-teal-400 to-cyan-500',
      skills: ['MongoDB', 'Express', 'React', 'Node.js']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional journey through internships and hands-on development experience.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              
              return (
                <div
                  key={exp.title}
                  className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Glowing Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Building size={16} />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold flex items-center space-x-2">
                        <Award size={16} className="text-yellow-400" />
                        <span>Key Achievements</span>
                      </h4>
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-gray-400 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Continuous learning through professional certifications and skill development programs.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glowing Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    {cert.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 text-center">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-center">{cert.issuer}</p>
                  
                  {/* Year Badge */}
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Award size={14} className="text-yellow-400" />
                    <span className="text-sm font-medium text-cyan-400">{cert.year}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;