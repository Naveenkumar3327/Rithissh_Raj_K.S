import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering - Computer Science',
      institution: 'Sri Eshwar College of Engineering',
      period: '2021 - 2025',
      location: 'Coimbatore, Tamil Nadu',
      type: 'Undergraduate',
      description: 'Pursuing B.E in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern web technologies.',
      achievements: [
        'Relevant Coursework: Data Structures, Algorithms, DBMS, Software Engineering',
        'Active participation in coding competitions and hackathons',
        'Member of Computer Science Association',
        'Project-based learning in full-stack development'
      ],
      color: 'from-cyan-500 to-blue-600',
      icon: '🎓'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Higher Secondary School',
      period: '2019 - 2021',
      location: 'Tamil Nadu',
      type: 'Higher Secondary',
      description: 'Completed Higher Secondary Education with Computer Science as major subject, building strong foundation in mathematics and computer fundamentals.',
      achievements: [
        'Computer Science Major with Mathematics',
        'Strong foundation in programming concepts',
        'Participated in inter-school competitions',
        'Developed early interest in software development'
      ],
      color: 'from-green-500 to-teal-600',
      icon: '📚'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Government High School',
      period: '2018 - 2019',
      location: 'Tamil Nadu',
      type: 'Secondary',
      description: 'Completed secondary education with excellent academic performance and developed foundational knowledge across various subjects.',
      achievements: [
        'Strong academic performance across all subjects',
        'Developed analytical and problem-solving skills',
        'Active participation in school activities',
        'Built foundation for technical education'
      ],
      color: 'from-purple-500 to-pink-600',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic journey and educational milestones that shaped my technical foundation.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full hidden md:block"></div>

          {educationData.map((edu, index) => (
            <div key={edu.degree} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900 shadow-lg z-10 hidden md:flex items-center justify-center">
                <div className="text-white text-xs">{edu.icon}</div>
              </div>

              {/* Education Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105">
                  {/* Glowing Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="text-2xl">{edu.icon}</div>
                          <span className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                            {edu.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                          <BookOpen size={16} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm mb-3 flex items-center space-x-2">
                        <Award size={16} className="text-yellow-400" />
                        <span>Key Highlights</span>
                      </h4>
                      {edu.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-gray-400 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
            <div className="text-gray-400 font-medium">Years of Study</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-400 font-medium">Technical Subjects</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-400 font-medium">Academic Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;