'use client';

import { useState } from 'react';
import { Check, Zap, Shield, Star, Users, ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '2000',
    period: '3 days',
    description: 'Perfect for beginners starting their athletic journey',
    features: [
      '2 training sessions per week',
      'Access to 1 sport program',
      'Basic performance tracking',
      'Group coaching sessions',
      'Access to online resources',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Elite',
    price: '19999',
    period: 'Yearly',
    description: 'Our most popular plan for serious athletes',
    features: [
      '5 training sessions per week',
      'Access to all sport programs',
      'Advanced analytics dashboard',
      'Personal coaching sessions (2/mo)',
      'Video analysis & feedback',
      'Nutrition consultation',
      'Priority scheduling',
    ],
    cta: 'Join Elite',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '4000',
    period: '6 days',
    description: 'For athletes competing at the highest level',
    features: [
      'Unlimited training sessions',
      'All sports + cross-training',
      'Full performance analytics',
      'Dedicated personal coach',
      'Competition preparation',
      'Sports psychology sessions',
      'Custom nutrition plan',
      '24/7 facility access',
    ],
    cta: 'Go Pro',
    highlight: false,
  },
];

const sports = ['Cricket', 'Football', 'Basketball', 'Taekwondo'];

export default function JoinSection() {
  const [selectedPlan, setSelectedPlan] = useState('Elite');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', sport: '', age: '', plan: 'Elite' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setFormData((f) => ({ ...f, plan: planName }));
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create WhatsApp message with all form details
    const message = `*🏆 NEW MEMBERSHIP REGISTRATION* 🏆%0A%0A
*━━━━━━━━━━━━━━━━━━━━*%0A
*📋 MEMBER DETAILS*%0A
*━━━━━━━━━━━━━━━━━━━━*%0A
*👤 Name:* ${formData.name}%0A
*📧 Email:* ${formData.email}%0A
*📞 Phone:* ${formData.phone}%0A
*🎂 Age:* ${formData.age || 'Not provided'}%0A
*🏅 Sport:* ${formData.sport || 'Not selected'}%0A
*💎 Plan:* ${formData.plan}%0A%0A

*━━━━━━━━━━━━━━━━━━━━*%0A
*💰 PLAN DETAILS*%0A
*━━━━━━━━━━━━━━━━━━━━*%0A${
      formData.plan === 'Starter' ? '• Price: ₹2,000/3 days\n• Sessions: 2 per week\n• Sport: 1 program' :
      formData.plan === 'Elite' ? '• Price: ₹19,999/month\n• Sessions: 5 per week\n• Personal coaching: 2/month' :
      '• Price: ₹4,000/6 days\n• Sessions: Unlimited\n• Dedicated coach'
    }%0A%0A

*━━━━━━━━━━━━━━━━━━━━*%0A
*⏰ TIMESTAMP*%0A
*━━━━━━━━━━━━━━━━━━━━*%0A
*📅 Date:* ${new Date().toLocaleDateString('en-IN')}%0A
*🕐 Time:* ${new Date().toLocaleTimeString('en-IN')}%0A%0A

*🔴 SHADOW STRIKERS UNITED* 🔴
*_Where Passion Meets Performance_*`;

    // Your WhatsApp number (with country code, no plus sign or spaces)
    const phoneNumber = '919540879700'; // Change this to your WhatsApp number
    
    // Create WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Don't reset form data so user can see what they submitted
    }, 800);
  };

  return (
    <section id="join" className="bg-gray-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Membership
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Join <span className="text-red-500">Shadow Striker</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the plan that matches your ambition. Every membership includes access to world-class facilities and expert coaching.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'bg-red-600 border-2 border-red-500 shadow-2xl shadow-red-900/40 scale-105'
                  : 'bg-gray-900 border border-gray-800 hover:border-red-600/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-red-600 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-red-600" /> MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-red-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-extrabold ${plan.highlight ? 'text-white' : 'text-white'}`}>
                    ₹{plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlight ? 'text-red-100' : 'text-gray-500'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlight ? 'text-white' : 'text-red-500'
                      }`}
                    />
                    <span className={`text-sm ${plan.highlight ? 'text-red-50' : 'text-gray-300'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-white text-red-600 hover:bg-gray-100'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {plan.cta} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        {showForm && (
          <div id="join-form" className="max-w-2xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="bg-green-600/20 border border-green-600/30 rounded-full p-4 w-fit mx-auto mb-5">
                    <MessageCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">WhatsApp Opened!</h3>
                  <p className="text-gray-400 max-w-sm mx-auto mb-2">
                    Your <span className="text-red-500 font-semibold">{selectedPlan}</span> membership application has been prepared.
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Please check WhatsApp and send the message to complete your registration.
                  </p>
                  <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-3 mb-6">
                    <p className="text-green-500 text-xs">💡 Tip: Click the send button on WhatsApp to notify our team</p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setShowForm(false); setFormData({ name: '', email: '', phone: '', sport: '', age: '', plan: 'Elite' }); }}
                    className="text-red-500 text-sm font-medium hover:text-red-400 transition-colors"
                  >
                    ← Back to plans
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2">
                      <Zap className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Complete Your Registration</h3>
                      <p className="text-gray-400 text-sm">
                        Selected plan: <span className="text-red-500 font-semibold">{selectedPlan}</span>
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Info Banner */}
                  <div className="mb-6 p-3 bg-green-600/10 border border-green-600/30 rounded-lg flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <p className="text-gray-300 text-xs">
                      <span className="text-green-500 font-semibold">WhatsApp Registration:</span> Fill this form and it will open WhatsApp with your registration details pre-filled
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
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
                          value={formData.email}
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
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9540879700"
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Age</label>
                        <input
                          name="age"
                          type="number"
                          min="5"
                          max="80"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Your age"
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Preferred Sport *</label>
                        <select
                          name="sport"
                          required
                          value={formData.sport}
                          onChange={handleChange}
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors appearance-none"
                        >
                          <option value="" className="bg-black">Select a sport</option>
                          {sports.map((s) => (
                            <option key={s} value={s.toLowerCase()} className="bg-black">{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Membership Plan</label>
                        <select
                          name="plan"
                          value={formData.plan}
                          onChange={handleChange}
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors appearance-none"
                        >
                          {plans.map((p) => (
                            <option key={p.name} value={p.name} className="bg-black">{p.name} — ₹{p.price}/{p.period === 'month' ? 'month' : p.period}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center gap-4 py-3 border-t border-gray-800">
                      {[
                        { icon: Shield, text: 'Secure Registration' },
                        { icon: Users, text: 'No Hidden Fees' },
                        { icon: CheckCircle, text: 'Cancel Anytime' },
                        { icon: MessageCircle, text: 'WhatsApp Confirmation' },
                      ].map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <Icon className="w-3.5 h-3.5 text-green-500" />
                          {text}
                        </div>
                      ))}
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
                          Register via WhatsApp
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}



