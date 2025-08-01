import React from 'react';
import { Code, Database, Palette, Settings, Cloud, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'Python', level: 85, color: 'bg-green-500' },
        { name: 'Java', level: 80, color: 'bg-red-500' },
        { name: 'C#', level: 75, color: 'bg-purple-500' },
        { name: 'C', level: 70, color: 'bg-blue-500' },
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'React', level: 90, color: 'bg-cyan-500' },
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'MySQL', level: 80, color: 'bg-blue-600' },
        { name: 'MongoDB', level: 75, color: 'bg-green-500' },
        { name: 'Express.js', level: 80, color: 'bg-gray-600' },
        { name: 'REST APIs', level: 85, color: 'bg-indigo-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'Visual Studio', level: 85, color: 'bg-blue-600' },
        { name: 'Figma', level: 80, color: 'bg-purple-500' },
        { name: 'Blender', level: 70, color: 'bg-orange-500' },
        { name: 'Docker', level: 65, color: 'bg-blue-500' },
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Cloud', icon: Cloud, color: 'text-yellow-400' },
    { name: 'Android Dev', icon: Smartphone, color: 'text-green-400' },
    { name: 'Full Stack', icon: Code, color: 'text-blue-400' },
    { name: 'Blender 3D', icon: Palette, color: 'text-purple-400' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={category.title}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
                >
                  <Icon size={32} className={`${cert.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-gray-300 font-medium text-sm">{cert.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Current Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Python', 'MySQL', 'JavaScript', 'Git', 'AWS', 'Figma'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full border border-cyan-500/30 text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;