'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  icon?: React.ReactNode;
  label: string;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2.5,
  decimals = 0,
  icon,
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(end * easeOut * Math.pow(10, decimals)) / Math.pow(10, decimals);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, decimals, hasAnimated]);

  return (
    <div
      ref={ref}
      className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 flex flex-col items-start hover:border-red-600/40 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 group"
    >
      {icon && (
        <div className="bg-red-600/20 border border-red-600/20 group-hover:border-red-600/50 group-hover:shadow-lg group-hover:shadow-red-600/20 rounded-xl p-3 mb-4 transition-all duration-300">
          {icon}
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-2 transition-colors duration-300">
        {prefix}
        {count.toLocaleString('en-US', { maximumFractionDigits: decimals })}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </div>
  );
}
