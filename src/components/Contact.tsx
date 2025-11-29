import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Facebook, Dribbble, Linkedin, Instagram, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', location: '', budget: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[15px] shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row gap-16">
          
          {/* Left Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="font-work font-semibold text-4xl text-dark-100 mb-4">Let's discuss your Project</h2>
              <p className="font-work text-gray-500 text-lg">
                Ready to bring your ideas to life? Contact me today and let's start building something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
                <div className="bg-primary p-3 rounded-md text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#424E60] font-work">Address:</p>
                  <p className="text-dark-100 font-medium font-work">Peravurnani, Thanjavur, Tamilnadu, India</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-lg flex items-start gap-4 hover:bg-white hover:shadow-lg transition-all">
                <div className="bg-primary/10 p-3 rounded-md text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#424E60] font-work">My Email:</p>
                  <p className="text-dark-100 font-medium font-work">saivigneshas@yahoo.com</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-lg flex items-start gap-4 hover:bg-white hover:shadow-lg transition-all">
                <div className="bg-primary/10 p-3 rounded-md text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#424E60] font-work">Call Me Now:</p>
                  <p className="text-dark-100 font-medium font-work">9360826971 / 8106009864</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[Facebook, Dribbble, Linkedin, Instagram].map((Icon, i) => (
                <div key={i} className={`p-4 rounded-md cursor-pointer transition-colors ${i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}>
                   <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-2/3">
            <p className="text-gray-500 mb-8 font-work">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-primary font-work text-lg">Name*</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-500 font-work text-lg">Email*</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none py-2 focus:border-primary transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-500 font-work text-lg">Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none py-2 focus:border-primary transition-colors" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-gray-500 font-work text-lg">Budget*</label>
                  <input 
                    type="text" 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none py-2 focus:border-primary transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-500 font-work text-lg">Subject*</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none py-2 focus:border-primary transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-500 font-work text-lg">Message*</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none py-2 focus:border-primary transition-colors"
                ></textarea>
              </div>

              <div className="flex flex-col items-start gap-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`
                    px-8 py-4 rounded-md font-work font-semibold flex items-center gap-3 shadow-lg transition-all
                    ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary/90'}
                    ${status === 'loading' ? 'opacity-80 cursor-not-allowed' : ''}
                  `}
                >
                  {status === 'loading' ? (
                    <>Sending... <Loader2 size={18} className="animate-spin" /></>
                  ) : status === 'success' ? (
                    <>Sent Successfully <CheckCircle size={18} /></>
                  ) : (
                    <>Submit <Send size={18} /></>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-500 bg-red-50 px-4 py-2 rounded-md"
                    >
                      <AlertCircle size={18} />
                      <span className="text-sm font-medium">{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
