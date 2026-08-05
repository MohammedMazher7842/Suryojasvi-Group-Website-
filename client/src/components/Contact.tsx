import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section Component
 * 
 * Design Philosophy: Dynamic Energy & Innovation
 * - Asymmetric layout with contact info on left, form on right
 * - Orange accent elements and gradient backgrounds
 * - Interactive form with smooth transitions
 * - Multiple contact methods displayed prominently
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: 'Bangalore Head Office',
      value: '3rd Floor, Srinivasa Industrial Estate, Survey # 19/3, Kanakapura Rd, Behind RMS International School & PU College, Mango Garden Layout, Konanakunte, Bengaluru, Karnataka 560062',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MapPin,
      title: 'Noida Office',
      value: 'H-59, First Floor, Sector 63, H-Block, Near Electronic City Metro Station, Exit Gate No. 2, Behind KFC, Near Ginger Hotel, Noida - 201301, Uttar Pradesh',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9148906916',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.wyzmindz.com',
      color: 'from-red-400 to-orange-400',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <div className="inline-block">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            We'd love to hear from you. Reach out to us today!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg flex flex-col items-start"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">
                  {method.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">{method.value}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                Why Contact Us?
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                Whether you're interested in partnerships, career opportunities, or learning more about our services, we're here to help. Our team is dedicated to providing you with the best experience and answers to your questions.
              </p>
            </div>

            {/* Decorative element */}
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-200">
              <p className="text-gray-700 font-semibold font-poppins mb-2">
                Follow Us
              </p>
              <p className="text-gray-600 text-sm font-inter">
                Connect with us on social media for the latest updates and insights.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2 font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 font-inter"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 font-inter"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2 font-poppins">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 font-inter"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 font-inter resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-center font-inter animate-fade-in">
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
