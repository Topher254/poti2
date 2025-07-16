import React, { useState } from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email body with all form data
    const emailBody = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Subject: ${formData.subject}
      
      Message:
      ${formData.message}
      
      ---
      This message was sent from your portfolio website.
    `;

    // Encode the email components
    const encodedSubject = encodeURIComponent(formData.subject || 'Message from Portfolio Website');
    const encodedBody = encodeURIComponent(emailBody);

    // Create mailto link
    const mailtoLink = `mailto:raphaelsarota@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    // Open user's email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-purple-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Let's collaborate on your next project or discuss opportunities in technology and engineering
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-400">Nairobi-Kenya</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400">+254796871876</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">raphaelsarota@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-8">Connect With Me</h2>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Topher254" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded border border-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a 
                  href="http://www.linkedin.com/in/sarota-raphael" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded border border-gray-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-400 italic mb-4">
                "I believe in the power of technology to solve real-world problems and create meaningful connections between people and communities."
              </p>
              <p className="text-gray-500 text-sm">- Sarota Raphael</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-white text-2xl font-semibold mb-8">Send a Message</h2>
            
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Collaboration"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded border border-gray-600 focus:border-purple-500 focus:outline-none resize-none transition-colors"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-purple-500 text-xl font-bold">Sarota Raphael</h3>
              <p className="text-gray-400 text-sm">Full-Stack Developer & Engineering Student</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Topher254" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="http://www.linkedin.com/in/sarota-raphael" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:raphaelsarota@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm flex items-center gap-1">
              &copy; {new Date().getFullYear()} Sarota Raphael
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;