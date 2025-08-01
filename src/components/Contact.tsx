import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start a project together or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <MessageCircle className="text-cyan-400" />
                <span>Get in Touch</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400">rithisshraj.ks2023cse@sece.ac.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-400">+91 80562 61252</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    className="group p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} className="text-gray-400 group-hover:text-cyan-400" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="group p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} className="text-gray-400 group-hover:text-cyan-400" />
                  </a>
                  <a
                    href="#"
                    className="group p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="text-white font-semibold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-gray-400 text-sm">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">&lt;24h</div>
                  <div className="text-gray-400 text-sm">Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Start a Project Together</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
              >
                {/* Wave Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative flex items-center justify-center space-x-2">
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-xl rounded-full px-8 py-4 border border-cyan-500/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;