import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Tech Particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-float-fast"></div>
      <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-teal-400/30 rounded-full animate-float-slow"></div>
      
      {/* Tech Grid Lines */}
      <div className="absolute top-1/5 right-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/5 left-1/5 w-0.5 h-12 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent animate-pulse delay-1000"></div>
      
      {/* Circuit-like Elements */}
      <svg className="absolute top-1/4 left-1/2 w-8 h-8 text-cyan-300/20 animate-float-medium" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
      </svg>
      
      <svg className="absolute bottom-1/3 right-1/5 w-6 h-6 text-blue-300/25 animate-float-fast" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
      </svg>
      
      {/* Glowing Orbs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-200/5 to-blue-200/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-200/5 to-pink-200/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Tech Symbols */}
      <div className="absolute top-1/3 left-1/5 text-cyan-400/10 text-2xl font-mono animate-pulse">&lt;/&gt;</div>
      <div className="absolute bottom-1/3 right-1/4 text-blue-400/10 text-xl font-mono animate-pulse delay-1000">{}</div>
      <div className="absolute top-2/3 left-1/2 text-purple-400/10 text-lg font-mono animate-pulse delay-2000">[]</div>
    </div>
  );
};

export default FloatingElements;