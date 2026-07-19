import { Zap, Twitter, Instagram, Facebook, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Programs: [
    { label: 'Cricket Academy', href: '#programs' },
    { label: 'Football Training', href: '#programs' },
    { label: 'Basketball Camp', href: '#programs' },
    { label: 'Taekwondo Classes', href: '#programs' },
    { label: 'Cross-Training', href: '#programs' },
    { label: 'Skating Academy', href: '#programs' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Coaches', href: '#coaches' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Blog & News', href: '#blog' },
    { label: 'Careers', href: '#' },
  ],
  Support: [
    { label: 'Join Now', href: '#join' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQs', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/shadowstrikers' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/shadowstrikersunited' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/shadowstrikersunited' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@shadowstrikersunited' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/shadowstrikersunited' },
];

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '20K+', label: 'Athletes Trained' },
  { value: '5', label: 'Sport Disciplines' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Stats bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-red-500 mb-1">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-red-600 rounded p-1.5">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-wide">
                SHADOW STRIKERS <span className="text-red-500">UNITED</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elite coaching, performance analytics, and 360° training programs across Cricket, Football, Basketball, Taekwondo & Skating. Building champions since 2009.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-900 hover:bg-red-600 border border-gray-800 hover:border-red-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <button
                        onClick={() => handleNav(href)}
                        className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {label}
                        {href === '#' && (
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-red-900/40 via-red-800/20 to-transparent border border-red-800/30 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Ready to become a champion?</h3>
            <p className="text-gray-400 text-sm">Start your journey today with a free trial session.</p>
          </div>
          <button
            onClick={() => handleNav('#join')}
            className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200"
          >
            <Zap className="w-4 h-4" />
            Join Now
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Shadow Strikers United. All rights reserved. WEBSITE DEVELOP & DESIGN BY RAISHDESIGNLAB
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}