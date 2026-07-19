'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', sport: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create WhatsApp message
    const message = `*New Enquiry from Website*%0A%0A
*Name:* ${form.name}%0A
*Email:* ${form.email}%0A
*Phone:* ${form.phone || 'Not provided'}%0A
*Sport:* ${form.sport || 'Not selected'}%0A
*Message:* ${form.message}%0A%0A
*Sent from:* Shadow Strikers United Website`;

    // Your WhatsApp number (with country code, no plus sign or spaces)
    // Example: 919540879700 (91 is India code, 9540879700 is number)
    const phoneNumber = '919540879700'; // Change this to your WhatsApp number
    
    // Create WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', sport: '', message: '' });
    }, 800);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      lines: ['Greater noida world school', 'sigma I', 'Greater noida',
'ST. Joseph’s school', 'alpha I', 'Greater noida', 
'Jesus and Mary convent school', 'Delta III', 'Greater noida'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+91 9667078797', '+91 9540879700'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@shadowstrikerunited.com', 'join@shadowstrikerunited.com'],
    },
    {
      icon: Clock,
      title: 'Training Hours',
      lines: ['Mon – Sat: 5:30 PM – 7:00 PM', 'Sun: Closed'],
    },
  ];

  return (
    <section id="contact" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Contact <span className="text-red-500">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions about our programs? Ready to start your journey? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{title}</h3>
                  </div>
                  {lines.map((line, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* WhatsApp Direct Button */}
            <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 text-center hover:border-green-500 transition-all duration-300">
              <MessageCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Chat on WhatsApp</h3>
              <p className="text-gray-400 text-sm mb-4">Get instant replies on WhatsApp</p>
              <a
                href="https://wa.me/919540879700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Start Chat
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-gray-800 h-64 bg-gray-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-transparent" />
              <div className="text-center z-10">
                <MapPin className="w-10 h-10 text-red-500 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Shadow Strikers Arena</p>
                <p className="text-gray-500 text-xs">Greater noida world school, sigma I, Greater noida 
ST. Joseph’s school, alpha I, greater noida 
Jesus and Mary convent school, Delta III, greater noida</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="bg-red-600/20 border border-red-600/30 rounded-full p-4 mb-5">
                  <CheckCircle className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">WhatsApp Opened!</h3>
                <p className="text-gray-400 max-w-xs">
                  Your message has been prepared. Please send it on WhatsApp to connect with our team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-red-500 text-sm font-medium hover:text-red-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-6 p-3 bg-green-600/10 border border-green-600/30 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-gray-300 text-xs sm:text-sm">
                    <span className="text-green-500 font-semibold">WhatsApp Integration:</span> Fill this form and it will open WhatsApp with your message pre-filled
                  </p>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 9540879700"
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Sport Interest</label>
                      <select
                        name="sport"
                        value={form.sport}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Select a sport</option>
                        <option value="Cricket" className="bg-black">Cricket</option>
                        <option value="Football" className="bg-black">Football</option>
                        <option value="Basketball" className="bg-black">Basketball</option>
                        <option value="Taekwondo" className="bg-black">Taekwondo</option>
                        <option value="General Inquiry" className="bg-black">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals or any questions you have..."
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Send on WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}