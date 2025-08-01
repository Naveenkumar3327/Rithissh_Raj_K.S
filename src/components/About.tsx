import React from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Hi! Naan <span className="font-semibold text-cyan-400">Rithisshraj</span>, oru passionate developer with a strong interest in 
                  <span className="font-semibold text-blue-400"> Software Development</span> and 
                  <span className="font-semibold text-purple-400"> Creative Technologies</span>. 
                  Enakku backend & frontend la equal interest irukku, and I love solving real-world problems using code.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  With hands-on projects, internships and strong technical knowledge, I'm continuously learning and building 
                  <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> innovative tech solutions</span> 
                  that make a difference in people's lives.
                </p>
              </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <Code className="text-cyan-400 mb-2" size={24} />
                <h3 className="text-white font-semibold mb-1">Frontend</h3>
                <p className="text-gray-400 text-sm">React, JavaScript, CSS3</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <Database className="text-blue-400 mb-2" size={24} />
                <h3 className="text-white font-semibold mb-1">Backend</h3>
                <p className="text-gray-400 text-sm">Node.js, Python, MySQL</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <Palette className="text-purple-400 mb-2" size={24} />
                <h3 className="text-white font-semibold mb-1">Design</h3>
                <p className="text-gray-400 text-sm">Figma, Blender, UI/UX</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <Zap className="text-yellow-400 mb-2" size={24} />
                <h3 className="text-white font-semibold mb-1">Tools</h3>
                <p className="text-gray-400 text-sm">Git, VS Code, AWS</p>
              </div>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                RK
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rithisshraj K.S</h3>
              <p className="text-cyan-400 mb-4">Full Stack Developer</p>
              <div className="flex justify-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold">Chennai</div>
                  <div className="text-gray-400">Location</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-bold">2021</div>
                  <div className="text-gray-400">Started</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400 mb-1">5+</div>
                <div className="text-gray-400 text-sm">Languages</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-cyan-500/20">
                <div className="text-2xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-cyan-500/20">
                <div className="text-2xl font-bold text-purple-400 mb-1">3+</div>
                <div className="text-gray-400 text-sm">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;