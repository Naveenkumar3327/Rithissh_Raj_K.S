import React, { useState } from 'react';
import { Home, User, Brain, Laptop, GraduationCap, FileText, Mail, Menu, X, Code2 } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'projects', label: 'Projects', icon: Laptop },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleItemClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 left-6 z-50 lg:hidden p-3 rounded-lg bg-gray-900/90 backdrop-blur-md border border-cyan-500/30 shadow-lg hover:bg-gray-800/90 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} className="text-cyan-400" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 z-40 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Background Blur Overlay for Mobile */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Sidebar Content */}
        <div className="h-full bg-gray-900/95 backdrop-blur-xl border-r border-cyan-500/20 flex flex-col">
          {/* Header */}
          <div className="p-8 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Rithisshraj</h2>
                <p className="text-cyan-400 text-sm">Developer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`group flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon size={20} className={`transition-all duration-300 ${
                      isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="text-center">
              <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-3"></div>
              <p className="text-gray-400 text-xs">© 2024 Rithisshraj K.S</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;