import React from 'react';
import { Download, ExternalLink, Github, Linkedin, Terminal, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-cyan-500/20 rounded"></div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-blue-500/30 rounded-lg animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Terminal Box */}
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-lg border border-cyan-500/30 shadow-2xl mb-8 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Terminal size={16} />
              <span>portfolio.dev</span>
            </div>
          </div>

          <div className="p-6 font-mono text-left">
            <div className="text-cyan-400 mb-2">$ whoami</div>
            <div className="text-white mb-4">
              <span className="text-cyan-400">Name:</span> Rithisshraj K.S<br />
              <span className="text-cyan-400">Role:</span> Full Stack Developer & UI/UX Designer<br />
              <span className="text-cyan-400">Status:</span> <span className="text-green-400">Open to innovative opportunities and collaborations</span>
            </div>
            <div className="text-cyan-400 mb-2">$ cat skills.txt</div>
            <div className="text-gray-300 mb-4">
              Frontend: React, JavaScript, HTML5, CSS3<br />
              Backend: Node.js, Python, C#, Java<br />
              Databases: MySQL, MongoDB<br />
              Tools & Platforms: Git, VS Code, Figma, Blender
            </div>
            <div className="text-cyan-400">$ ./launch_portfolio.sh</div>
            <div className="text-green-400 animate-pulse">Portfolio launched successfully! ✓</div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-gradient">
          Rithisshraj K.S
        </h1>

        <div className="flex items-center justify-center space-x-2 mb-8">
          <Code size={24} className="text-cyan-400" />
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
            Passionate Full Stack Developer & Creative UI/UX Architect
          </h2>
          <Zap size={24} className="text-yellow-400 animate-pulse" />
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I specialize in crafting seamless digital experiences by blending cutting-edge frontend finesse with robust backend logic.
          Let's build intuitive interfaces and powerful systems that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center space-x-2">
              <ExternalLink size={20} />
              <span>Explore My Work</span>
            </span>
          </button>

          <button className="group px-8 py-4 bg-gray-800/50 backdrop-blur-md border border-cyan-500/30 text-gray-300 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700/50 hover:scale-105 hover:text-cyan-400">
            <span className="flex items-center space-x-2">
              <Download size={20} />
              <span>Get My Resume</span>
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
