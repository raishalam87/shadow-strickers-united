'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function StickyWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '9540879700'; // Replace with your WhatsApp number
  const whatsappMessage = 'Hello! I am interested in Shadow Striker United programs.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Message tooltip */}
      {isHovered && (
        <div className="bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Chat with us!
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
