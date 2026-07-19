'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import JoinSection from '@/components/JoinSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import {
  Zap,
  Target,
  Trophy,
  Users,
  Crown,
  Calendar,
  Star,
  ChevronRight,
  Quote,
  ArrowRight,
  Activity,
  Shield,
  Award,
  ChevronLeft,
} from 'lucide-react';

/* ─── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center overflow-hidden pt-16"
    >
      {/* Background overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 mx-auto lg:mx-0 w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-xs sm:text-sm font-medium">Now Enrolling — 2026 Season</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight sm:leading-none mb-4 sm:mb-6">
              Potential Becomes
              <br />
              <span className="text-red-500">Performance</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Elite coaching, performance analytics, and 360° training programs across Cricket, Football, Basketball &amp; Taekwondo.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scroll('join')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 shadow-lg shadow-red-900/40 text-sm sm:text-base"
                aria-label="Join Now"
              >
                <Zap className="w-4 h-4" />
                Join Now
              </button>
              <button
                onClick={() => scroll('programs')}
                className="border border-white/30 hover:border-red-500 text-white hover:text-red-400 font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 text-sm sm:text-base"
                aria-label="View Programs"
              >
                View Programs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right — Animated counter cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-0">
            <AnimatedCounter
              end={20000}
              suffix="+"
              duration={2.5}
              label="Active Athletes"
              icon={<Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
            <AnimatedCounter
              end={500}
              suffix="+"
              duration={2.5}
              label="Championships Won"
              icon={<Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
            <AnimatedCounter
              end={50}
              suffix="+"
              duration={2.5}
              label="Professional Coaches"
              icon={<Crown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
            <AnimatedCounter
              end={2009}
              suffix=""
              duration={2.5}
              label="Since 2009"
              icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
function AboutSection() {
  const values = [
    { icon: Target, title: 'Precision Training', desc: 'Science-backed methods tailored to each athlete.' },
    { icon: Shield, title: 'Safety First', desc: 'Expert oversight and injury-prevention protocols.' },
    { icon: Award, title: 'Championship Culture', desc: 'A winning mindset ingrained from day one.' },
    { icon: Activity, title: 'Live Analytics', desc: 'Real-time performance data to accelerate growth.' },
  ];

  return (
    <section id="about" className="bg-gray-950 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-3 sm:mb-4">
              Built by Champions, <br />
              <span className="text-red-500">For Champions</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Founded in 2009, Shadow Striker United has grown from a single training pitch to a full multi-sport performance academy. We combine elite-level expertise with cutting-edge technology to unlock every athlete&apos;s potential.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Our coaches are former professionals who understand what it takes to win at the highest level. Every program is designed to challenge, inspire, and elevate.
            </p>
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 transition-colors w-fit mx-auto lg:mx-0 text-sm sm:text-base"
              aria-label="Explore Programs"
            >
              Explore Programs <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-red-600/40 transition-colors"
              >
                <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2 w-fit mb-3 sm:mb-4">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Carousel Component with Auto-slide ───────────────────────────────────────────────── */
function Carousel({ items, renderItem, itemsPerView = 3, title, autoSlide = true, slideInterval = 5000 }: { 
  items: any[], 
  renderItem: (item: any, index: number) => React.ReactNode, 
  itemsPerView?: number, 
  title?: string,
  autoSlide?: boolean,
  slideInterval?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(autoSlide);
  
  // Responsive items per view
  const getItemsPerView = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return itemsPerView;
  }, [itemsPerView]);

  const [currentItemsPerView, setCurrentItemsPerView] = useState(getItemsPerView());
  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - currentItemsPerView);

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Reset index when items or items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [items.length, currentItemsPerView]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getItemsPerView]);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || !isAutoSliding) return;
    
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        next();
      } else {
        setCurrentIndex(0);
      }
    }, slideInterval);
    
    return () => clearInterval(interval);
  }, [autoSlide, isAutoSliding, currentIndex, maxIndex, next, slideInterval]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoSliding(false);
  const handleMouseLeave = () => setIsAutoSliding(autoSlide);

  const visibleItems = items.slice(currentIndex, currentIndex + currentItemsPerView);
  const showNavigation = totalItems > currentItemsPerView;

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">{title}</h3>}
      <div className="flex items-center gap-2 sm:gap-4">
        {showNavigation && (
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="p-1.5 sm:p-2 rounded-full bg-gray-800 hover:bg-red-600/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 z-10 shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        )}
        
        <div className={`grid gap-4 sm:gap-6 flex-1 transition-all duration-300 ${
          currentItemsPerView === 1 ? 'grid-cols-1' :
          currentItemsPerView === 2 ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {visibleItems.map((item, idx) => renderItem(item, idx))}
        </div>

        {showNavigation && (
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="p-1.5 sm:p-2 rounded-full bg-gray-800 hover:bg-red-600/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 z-10 shrink-0"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        )}
      </div>
      
      {/* Dots indicator for mobile */}
      {showNavigation && totalItems > currentItemsPerView && (
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {Array.from({ length: Math.ceil(totalItems / currentItemsPerView) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * currentItemsPerView)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / currentItemsPerView) === idx
                  ? 'bg-red-500 w-4 sm:w-6'
                  : 'bg-gray-600 w-1.5 sm:w-2 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Programs Section with Carousel ───────────────────────────────────────────────── */
function ProgramsSection() {
  const programs = [
    {
      sport: 'Cricket',
      img: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['Beginner', 'Intermediate', 'Elite'],
      desc: 'Comprehensive batting, bowling, and fielding development with biomechanical analysis.',
    },
    {
      sport: 'Football',
      img: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['Youth', 'Amateur', 'Pro'],
      desc: 'Technical skills, tactical understanding, and match-speed conditioning.',
    },
    {
      sport: 'Basketball',
      img: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['Beginner', 'Advanced', 'Competitive'],
      desc: 'Dribbling, shooting mechanics, court vision, and team play systems.',
    },
    {
      sport: 'Taekwondo',
      img: 'https://images.pexels.com/photos/7045585/pexels-photo-7045585.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['White Belt', 'Color Belt', 'Black Belt'],
      desc: 'Discipline, flexibility, self-defence, and competition sparring.',
    },
    {
      sport: 'Skating',
      img: 'https://images.pexels.com/photos/274839/pexels-photo-274839.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      desc: 'Balance, speed control, turns, and tricks development with professional coaching.',
    },
  ];

  const renderProgram = (program: any) => (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={program.img}
          alt={program.sport}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4">
          <h3 className="text-white font-bold text-lg sm:text-xl">{program.sport}</h3>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">{program.desc}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {program.levels.map((l: string) => (
            <span
              key={l}
              className="bg-red-600/10 border border-red-600/20 text-red-400 text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="programs" className="bg-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Programs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-2 sm:mb-3">
            Train in Your <span className="text-red-500">Sport</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-4">
            From grassroots to elite competition, we have a program for every level and age group.
          </p>
        </div>

        <Carousel 
          items={programs} 
          renderItem={renderProgram} 
          itemsPerView={3}
          autoSlide={true}
          slideInterval={4000}
        />
      </div>
    </section>
  );
}

/* ─── Coaches Section with Carousel ───────────────────────────────────────────────── */
function CoachesSection() {
  const coaches = [
    {
      name: 'Mr. SHAIJU BALA',
      sport: 'MANAGER',
      exp: '20 yrs',
      img: 'https://i.ibb.co/39M1mJyZ/Whats-App-Image-2026-06-04-at-4-15-39-PM.jpg',
      bio: '20 plus years of experience in the field of physical education (games and sports/ fitness)',
    },
    {
      name: 'Mr. TRIMOHAN KUMAR',
      sport: 'C-LICENSE FOOTBALL COACH',
      exp: '17 yrs',
      img: 'https://i.ibb.co/HfWrMm2q/Whats-App-Image-2026-06-04-at-4-15-41-PM.jpg',
      bio: 'AFC C-LICENSE FOOTBALL COACH WITH MORE THAN 17 YEARS OF EXPERIENCE IN PLAYER DEVELOPMENT, TACTICAL TRAINING, AND COMPETITIVE FOOTBALL.',
    },
    {
      name: 'Mr. YOGESH BHATI',
      sport: 'TAEKWONDO COACH',
      exp: '12 yrs',
      img: 'https://i.ibb.co/DggRtLpZ/Whats-App-Image-2026-06-04-at-4-15-40-PM-1.jpg',
      bio: 'PLAYED MORE THAN 5 Nationals and 2 more international, he is associated with Noida taekwondo association',
    },
    {
      name: 'Mr. ADITYA KUMAR SINGH',
      sport: 'BASKETBALL',
      exp: '15 yrs',
      img: 'https://i.ibb.co/xqTxjLKr/Whats-App-Image-2026-06-04-at-4-15-40-PM.jpg',
      bio: 'Former national-level basketball player with 15+ years of coaching experience, dedicated to building skilled, disciplined, and high-performance athletes.',
    },
    {
      name: 'Mr. AJAY KUMAR SINGH',
      sport: 'SENIOR COACH',
      exp: '20 yrs',
      img: 'https://i.ibb.co/mV6862H9/Whats-App-Image-2026-06-08-at-10-37-17-AM.jpg',
      bio: 'Experienced FIFA B Licensed Coach with over 20 years of developing players and leading teams to success.',
    },
    {
      name: 'Mr. RAVIKANT THAKUR',
      sport: 'SENIOR SKATING COACH',
      exp: '20 yrs',
      img: 'https://i.ibb.co/qL7PPz4d/image-removebg-preview-8.png',
      bio: 'Secretary, Rollball Association, G.B. Nagar | 20+ years of professional coaching experience in skating & rollball',
    },
    {
      name: 'Mr. AAKASH MOURYA',
      sport: 'ASST. COACH',
      exp: '5 yrs',
      img: 'https://i.ibb.co/j98mvfJs/Whats-App-Image-2026-06-04-at-4-15-42-PM.jpg',
      bio: 'Playing for Delhi University.',
    },
    {
      name: 'Ms. INDERJEET',
      sport: 'ASST. COACH',
      exp: '5 yrs',
      img: 'https://i.ibb.co/ZR2DJbCV/Whats-App-Image-2026-06-04-at-4-15-42-PM-1.jpg',
      bio: 'Playing for Delhi University.',
    },
    {
      name: 'Ms. VIKKI GAUTAM ',
      sport: 'SKATING, rollball',
      exp: '6 yrs',
      img: 'https://i.ibb.co/gbJWfgKV/Whats-App-Image-2026-07-11-at-9-11-56-AM.jpg',
      bio: 'Asst coach g b nagar district 6 years of Experience',
    },
  ];

  const renderCoach = (coach: any) => (
    <div className="bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group h-full flex flex-col">
      <div className="relative pt-4 px-4 sm:pt-6 sm:px-6 bg-gradient-to-b from-gray-800/50 to-gray-900">
        <div className="aspect-square w-full max-w-[280px] mx-auto rounded-full overflow-hidden border-4 border-red-600/30 group-hover:border-red-500 transition-all duration-300">
          <img
            src={coach.img}
            alt={coach.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
      <div className="p-4 sm:p-5 text-center flex-1 flex flex-col">
        <h3 className="text-white font-bold text-base sm:text-lg mb-1">{coach.name}</h3>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-2 sm:mb-3">
          <span className="bg-red-600/20 text-red-400 text-xs px-2 py-0.5 sm:px-2.5 rounded-full border border-red-600/20">
            {coach.sport}
          </span>
          <span className="text-gray-500 text-xs">{coach.exp} experience</span>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">{coach.bio}</p>
      </div>
    </div>
  );

  return (
    <section id="coaches" className="bg-gray-950 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Coaches</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Learn From the <span className="text-red-500">Best</span>
          </h2>
        </div>

        <Carousel 
          items={coaches} 
          renderItem={renderCoach} 
          itemsPerView={3}
          autoSlide={true}
          slideInterval={5000}
        />
      </div>
    </section>
  );
}

/* ─── Achievements ───────────────────────────────────────────── */
function AchievementsSection() {
  const achievements = [
    { year: '2023', title: 'National Youth Championship', sport: 'Cricket', medal: 'Gold' },
    { year: '2023', title: 'Regional Football League', sport: 'Football', medal: 'Silver' },
    { year: '2022', title: 'State Basketball Tournament', sport: 'Basketball', medal: 'Gold' },
    { year: '2022', title: 'National Taekwondo Open', sport: 'Taekwondo', medal: 'Gold' },
    { year: '2021', title: 'Under-19 Cricket Series', sport: 'Cricket', medal: 'Gold' },
    { year: '2021', title: 'Youth Football Cup', sport: 'Football', medal: 'Bronze' },
  ];

  const medalColor: Record<string, string> = {
    Gold: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    Silver: 'text-gray-300 bg-gray-300/10 border-gray-300/30',
    Bronze: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  };

  return (
    <section id="achievements" className="bg-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Achievements</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-2 sm:mb-3">
            Our Trophy <span className="text-red-500">Cabinet</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-4">
            Decades of hard work reflected in our athletes&apos; success on every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map(({ year, title, sport, medal }) => (
            <div
              key={`${year}-${title}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:border-red-600/40 transition-colors"
            >
              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2 sm:p-3 shrink-0">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-2 mb-1">
                  <span className="text-gray-500 text-xs">{year}</span>
                  <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full border font-medium ${medalColor[medal]}`}>
                    {medal}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate">{title}</h3>
                <span className="text-red-400 text-xs">{sport}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Blog Section with Gallery ───────────────────────────────────────────────── */
function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  
  const images = [
    'https://i.ibb.co/gbzNwWzH/image.jpg',
    'https://i.ibb.co/bg4ZH54P/e8e48de2-92e1-4a15-8b8a-7553593b6d4e.png',
    'https://i.ibb.co/Lz6Mp85L/6343d037-2725-4743-829e-b3e43fa2a4c8.png',
    'https://i.ibb.co/5hLc5G2v/Whats-App-Image-2026-06-08-at-11-31-17-AM.jpg',
    'https://i.ibb.co/dw5j9b71/f3116b28-7afd-4cd8-8efe-0f294c005004.png',
    'https://i.ibb.co/DDx3QZ9S/88dc83e0-9062-454d-bc20-1d5087449bf0.png',
    'https://i.ibb.co/bMKN7K8T/3fa885bc-6c0c-40b9-b045-f6bfee9c9b56.png',
    'https://i.ibb.co/HDKrNchr/1691ffa3-389e-4891-808c-e5b9d9a9580f.png',
    'https://i.ibb.co/jkBPTmGk/df2aa72a-e721-4e52-9cbc-9fb6cb4123ab.png',
    'https://i.ibb.co/Wp3QVF4j/23ccb148-4983-4931-83ae-eed6e8d9ed3a.png',
    'https://i.ibb.co/v6bGj7dq/cb5ef784-1aa5-492b-a1c6-64e59d66ce56.png',
    'https://i.ibb.co/wh5BJzL6/69b9ca85-aec2-4db5-889c-e17af93baccd.png',
    'https://i.ibb.co/8n1J112q/b30597aa-b839-48ba-9e01-8bacd4b1ae15.png',
    'https://i.ibb.co/VYScp5CY/61d475f0-0b1c-49d9-8f0b-6c185f1f4d53.png',
    'https://i.ibb.co/6R7xG9St/e2091a93-95c1-47b9-9cfd-556fe3a3917b.png',
    'https://i.ibb.co/zVNRkrTt/e106f4f1-04d5-4a54-979e-2ee2c6b853b7.png',
  ];

  const initialDisplayCount = 8;
  const displayedImages = showAll ? images : images.slice(0, initialDisplayCount);

  return (
    <section id="blog" className="bg-gray-950 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-6">
          <div className="text-center sm:text-left">
            <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              Sports <span className="text-red-500">Moments</span>
            </h2>
          </div>
          <span className="text-gray-500 text-sm">
            {displayedImages.length} of {images.length} photos
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer"
            >
              <img
                src={img}
                alt={`Sports moment ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] sm:text-xs font-medium bg-red-600 px-2 py-0.5 rounded-full">
                  #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {images.length > initialDisplayCount && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-2.5 bg-transparent border-2 border-red-600 text-red-500 font-semibold text-sm sm:text-base rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
              aria-label={showAll ? 'Show Less' : 'Show More'}
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Arjun Mehta',
      sport: 'Cricket',
      rating: 5,
      text: 'Shadow Striker United completely transformed my batting. Within six months I earned a spot on the regional squad. The coaching here is world-class.',
    },
    {
      name: 'Priya Nair',
      sport: 'Football',
      rating: 5,
      text: 'The analytical approach is unlike anything I experienced before. Video breakdowns after each session gave me insights I never had access to.',
    },
    {
      name: 'James Wu',
      sport: 'Taekwondo',
      rating: 5,
      text: 'Master Ji-Won is an incredible coach. The discipline and technique I learned here helped me win gold at the national open.',
    },
  ];

  return (
    <section className="bg-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            What Our <span className="text-red-500">Athletes</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map(({ name, sport, rating, text }) => (
            <div
              key={name}
              className="bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-red-600/40 transition-colors h-full"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-red-600/40 mb-3 sm:mb-4" />
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">{name}</div>
                  <div className="text-red-400 text-xs">{sport}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CoachesSection />
      <AchievementsSection />
      <TestimonialsSection />
      <BlogSection />
      <JoinSection />
      <ContactSection />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}