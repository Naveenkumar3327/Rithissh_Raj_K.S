import React from 'react';
import { ExternalLink, Github, Database, Brain, Code, ShoppingCart, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Fake Product Review Generator',
      description: 'An intelligent system that generates realistic product reviews using advanced NLP and sentiment analysis. Features sophisticated backend logic with MySQL integration for comprehensive data management and clean review output.',
      technologies: ['Java', 'MySQL', 'NLP', 'Sentiment Analysis', 'Spring Boot'],
      features: ['Advanced NLP Processing', 'MySQL Database Integration', 'Sentiment Analysis Engine', 'Clean Review Output', 'RESTful API'],
      icon: Brain,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan-500/25',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive full-stack e-commerce solution built with modern MERN stack technologies. Features include user authentication, payment gateway integration, admin dashboard, and responsive design for optimal user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      features: ['User Authentication', 'Payment Gateway', 'Admin Dashboard', 'Responsive Design', 'Real-time Updates'],
      icon: ShoppingCart,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-teal-600',
      glowColor: 'green-500/25',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex data sets with real-time updates and advanced filtering capabilities. Built with modern charting libraries and optimized for high performance with large datasets.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js', 'Redis'],
      features: ['Real-time Data Updates', 'Interactive Charts', 'Advanced Filtering', 'Export Functionality', 'Performance Optimized'],
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-600',
      glowColor: 'purple-500/25',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time synchronization, team collaboration features, and advanced project tracking capabilities. Built for modern teams and agile workflows.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'WebSocket'],
      features: ['Real-time Collaboration', 'Task Tracking', 'Team Management', 'File Sharing', 'Mobile Responsive'],
      icon: Code,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-indigo-600',
      glowColor: 'blue-500/25',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div
                key={project.title}
                className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  {/* Project Icon Overlay */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-cyan-400 rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demoUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg font-medium border border-cyan-500/30 hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span className="flex items-center space-x-2">
              <ExternalLink size={20} />
              <span>View All Projects</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;