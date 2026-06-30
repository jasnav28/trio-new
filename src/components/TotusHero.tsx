import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TotusHeroProps {
  theme: 'light' | 'dark';
  scrollToSection: (id: 'hero' | 'about' | 'strengths' | 'contact') => void;
}

const slides = [
  {
    id: 1,
    title: "Thought Tax, thought TRIOTAX",
    desc: "Here compliance and technology are integrated for the efficiency of your business.",
    link: "Learn more",
    href: "#services",
    image: "/totus_expert.png"
  },
  {
    id: 2,
    title: "Simplify tax filings",
    desc: "Our automated systems handle tax filings, GST returns, and registrations securely.",
    link: "Explore services",
    href: "#services",
    image: "/totus_expert.png"
  },
  {
    id: 3,
    title: "Dedicated Experts",
    desc: "Get full statutory adherence and transparent corporate reporting for business growth.",
    link: "Consult an expert",
    href: "#contact",
    image: "/totus_expert.png"
  }
];

export function TotusHero({ theme, scrollToSection }: TotusHeroProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentSlide = slides[activeSlideIndex];

  const handleLetsTalk = () => {
    // Open WhatsApp
    const whatsappMessage = `*Hi TRIOTAX, I would like to consult an expert regarding my business compliance.*`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919591578333?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isLight = theme === 'light';

  return (
    <div 
      className={`relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-32 pb-16 font-sans select-none transition-colors duration-500 ${
        isLight ? 'bg-[#F4F6F8]' : 'bg-[#020712]'
      }`}
      style={{
        backgroundImage: isLight ? "url('/light.webp')" : "url('/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      
      {/* Background Glowing Ambient Blobs (Only visible in dark mode for contrast) */}
      {!isLight && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Blob 1 - Glowing Teal in the Center/Left */}
          <motion.div 
            animate={{
              scale: [1, 1.08, 1],
              x: [0, 15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[15%] left-[-15%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[140px]"
          />

          {/* Blob 2 - Dark Blue Glow Bottom Right */}
          <motion.div 
            animate={{
              scale: [1.08, 1, 1.08],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[-10%] right-[10%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-blue-500/5 blur-[120px] sm:blur-[160px]"
          />
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 md:px-16 w-full flex-grow flex flex-col justify-center gap-12 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
        
        {/* LEFT COLUMN - Tagline, Headline and CTA */}
        <div className="flex-1 flex flex-col items-start text-left max-w-3xl lg:pr-12">
          
          {/* Top Pill Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-colors w-fit cursor-pointer ${
              isLight 
                ? 'border-neutral-300 bg-white/60 text-neutral-600 hover:border-neutral-400' 
                : 'border-white/10 bg-white/[0.03] text-neutral-300 hover:border-white/20'
            }`}
          >
            <span className="text-[9px] text-neutral-400 uppercase tracking-widest">Latest updates</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
            <span className={isLight ? 'text-neutral-700 font-semibold' : 'text-neutral-200'}>TRIOTAX Backoffice</span>
            <span className="text-[#00E5FF] font-bold ml-1">›</span>
          </motion.div>

          {/* Main Huge Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-[1.2] tracking-tight mb-8 font-sans max-w-2xl transition-colors duration-350 ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}
          >
            We help businesses manage registrations, taxation, invoicing, and compliance with fast, reliable, and professional support.
          </motion.h1>

          {/* Cyan Call-to-Action button */}
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={handleLetsTalk}
            className="bg-[#00E5FF] hover:bg-[#00CBE5] active:scale-95 transition-all text-neutral-900 font-extrabold text-[13px] tracking-widest px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(0,229,255,0.3)] cursor-pointer mb-12 uppercase"
          >
            Get started
          </motion.button>

          {/* Footnote bottom-left */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xs sm:text-sm font-medium tracking-wide mt-auto pt-6 lg:pt-16 transition-colors ${
              isLight ? 'text-neutral-500' : 'text-neutral-500'
            }`}
          >
            Meet the leading business support platform.
          </motion.p>
        </div>

        {/* RIGHT COLUMN - Stats & Sliding Card */}
        <div className="relative w-full lg:w-auto self-stretch flex flex-col justify-between items-end lg:pl-8">
          
          {/* Top-Right Trust Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-1 items-start text-left select-none mb-12 lg:mb-0 lg:absolute lg:top-0 lg:right-0"
          >
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] font-extrabold text-xs">+</span>
              <span className={`font-extrabold text-xl tracking-wider ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}>70,000</span>
            </div>
            <p className={`text-[9px] uppercase font-bold tracking-widest leading-normal ${
              isLight ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              COMPANIES TRUST <br /> TRIOTAX
            </p>
          </motion.div>

          {/* Bottom-Right Dynamic Slide Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-[460px] bg-white text-neutral-900 p-5 sm:p-6 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-neutral-100 lg:absolute lg:bottom-0 lg:right-0 z-20"
          >
            {/* Card Content Left */}
            <div className="flex-1 flex flex-col items-start text-left w-full">
              {/* Slide Index Badge */}
              <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] font-bold text-neutral-500 mb-3">
                {currentSlide.id}
              </div>

              {/* Title & Description with Framer Motion AnimatePresence */}
              <div className="min-h-[110px] flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlideIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="font-bold text-neutral-950 text-base sm:text-[17px] uppercase tracking-tight mb-2 leading-snug">
                      {currentSlide.title}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed mb-4 max-w-[240px]">
                      {currentSlide.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Link */}
              <a 
                href={currentSlide.href} 
                onClick={(e) => {
                  if (currentSlide.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(currentSlide.href.substring(1) as any);
                  }
                }}
                className="text-xs font-extrabold text-neutral-950 underline decoration-2 decoration-neutral-950 hover:text-cyan-600 hover:decoration-cyan-600 transition-colors uppercase tracking-wider"
              >
                {currentSlide.link}
              </a>
            </div>

            {/* Card Image Right & Controls */}
            <div className="w-full sm:w-[150px] h-[150px] relative rounded-xl overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeSlideIndex}
                  src={currentSlide.image} 
                  alt={currentSlide.title} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-cover select-none" 
                />
              </AnimatePresence>

              {/* Chevron Slider Controls at bottom-left of image */}
              <div className="absolute bottom-2 left-2 flex gap-1 z-25">
                <button 
                  onClick={prevSlide}
                  className="w-7 h-7 bg-white text-neutral-900 flex items-center justify-center font-bold text-sm hover:bg-neutral-50 transition-colors shadow-md rounded border border-neutral-150 cursor-pointer active:scale-95"
                >
                  ‹
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-7 h-7 bg-white text-neutral-900 flex items-center justify-center font-bold text-sm hover:bg-neutral-50 transition-colors shadow-md rounded border border-neutral-150 cursor-pointer active:scale-95"
                >
                  ›
                </button>
              </div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Fade out transition effect at the end of the section */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10 bg-gradient-to-t transition-all duration-500 ${
          isLight 
            ? 'from-[#F4F6F8] via-[#F4F6F8]/60 to-transparent' 
            : 'from-[#08080C] via-[#08080C]/65 to-transparent'
        }`}
      />

    </div>
  );
}
