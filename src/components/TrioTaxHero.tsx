import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Grid, Users, Star, HeadphonesIcon, Rocket, FileText, BarChart2, Search } from 'lucide-react';
import { CATEGORIES_DATA } from './ServicesPage';

interface TrioTaxHeroProps {
  theme: 'light' | 'dark';
  scrollToSection: (id: 'hero' | 'about' | 'strengths' | 'contact') => void;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const servicesList = [
  { title: 'Business Startup Setup', image: '/services/BSS.webp' },
  { title: 'Tax & Compliance', image: '/services/TIS.webp' },
  { title: 'Corporate Law', image: '/services/CLC.webp' },
  { title: 'LLP Registration', image: '/services/LLP.webp' },
  { title: 'Business Registration', image: '/services/BRL.webp' },
  { title: 'Non-Profit Entity', image: '/services/NPE.webp' },
];

export function TrioTaxHero({ scrollToSection }: TrioTaxHeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const ALL_SERVICES = CATEGORIES_DATA.flatMap(cat =>
    cat.services.map(serv => serv.title)
  );

  const filteredSuggestions = searchQuery.trim() === ''
    ? []
    : ALL_SERVICES.filter(s =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);

  const handleSelectService = (serviceName: string) => {
    setSearchQuery('');
    setShowSuggestions(false);
    window.location.hash = `#services?service=${encodeURIComponent(serviceName)}`;
  };

  const words = ["Growth.", "Success.", "Business.", "Future."];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full h-[90vh] min-h-[700px] md:h-screen overflow-hidden bg-slate-50 bg-[url('/mbg.webp')] bg-cover bg-center bg-no-repeat">
      
      {/* ── MAIN CONTENT (Left Aligned) ── */}
      <div className="relative z-10 flex w-full flex-col justify-center px-6 pt-12 pb-44 md:w-[60%] lg:px-16 xl:px-24">
        
        {/* Badge */}
        <motion.div custom={0} variants={item} initial="hidden" animate="visible" className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-[#2545F3] border border-blue-200/60 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span className="text-xs md:text-sm font-bold tracking-wide">Compliance Today. Growth Tomorrow.</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} variants={item} initial="hidden" animate="visible"
          className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight text-slate-900 mb-6"
        >
          Simplifying Compliance.<br />
          Empowering{' '}
          <span className="text-[#2545F3] inline-flex min-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2} variants={item} initial="hidden" animate="visible"
          className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-lg mb-8 font-medium"
        >
          End-to-end business setup, legal, tax, and compliance solutions to help you start, scale, and succeed with confidence.
        </motion.p>

        {/* Search Bar + Get Started */}
        <motion.div custom={3} variants={item} initial="hidden" animate="visible" className="relative w-full max-w-lg mb-3">
          <div className="flex items-stretch shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] rounded-[14px]">
            <div className="flex flex-1 items-center bg-white border border-slate-200 border-r-0 rounded-l-[14px] px-4 py-3 gap-2 focus-within:border-[#2545F3]/60 focus-within:bg-blue-50/10 transition-colors">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && filteredSuggestions.length > 0) {
                    handleSelectService(filteredSuggestions[0]);
                  }
                }}
                placeholder="Try 'Company Registration'…"
                className="flex-1 bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                if (filteredSuggestions.length > 0) handleSelectService(filteredSuggestions[0]);
                else scrollToSection('contact');
              }}
              className="shrink-0 flex items-center gap-2 px-7 py-3.5 bg-[#0a0f1d] hover:bg-black text-white text-sm font-bold rounded-r-[14px] transition-all cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-xl z-50 overflow-hidden">
              {filteredSuggestions.map(service => (
                <div
                  key={service}
                  onMouseDown={() => handleSelectService(service)}
                  className="px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex items-center gap-3 border-b border-slate-50 last:border-0"
                >
                  <Search className="w-3.5 h-3.5 text-[#2545F3] shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Testimonial / Trust Indicators */}
        <motion.div custom={4} variants={item} initial="hidden" animate="visible" className="flex items-center gap-4 mt-8">
          <div className="flex -space-x-3">
            <img src="/f1.png" alt="Client 1" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
            <img src="/f2.png" alt="Client 2" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
            <img src="/f3.png" alt="Client 3" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
            <img src="/f4.png" alt="Client 4" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
            <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
              +500
            </div>
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-extrabold text-slate-800 ml-1.5">4.9/5</span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">from 300+ reviews on Google</p>
          </div>
        </motion.div>

        {/* Auto-scrolling Services Marquee */}
        <style>{`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee {
            animation: scroll-marquee 15s linear infinite;
          }
        `}</style>
        <motion.div custom={5} initial="hidden" animate="visible" variants={item} className="w-full overflow-hidden relative mt-12 pt-2 pb-4 -mx-4 px-4 md:mx-0 md:px-0 max-w-full">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...servicesList, ...servicesList, ...servicesList].map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => { window.location.hash = '#services?service=' + encodeURIComponent(service.title); }}
                className="w-[160px] md:w-[200px] lg:w-[240px] shrink-0 bg-white/80 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mx-3 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] transition-all duration-300"
              >
                <div className="w-full h-20 md:h-24 lg:h-28 rounded-xl overflow-hidden mb-3">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xs md:text-sm font-bold text-[#0F172A] leading-tight pb-1">{service.title}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── FLOATING CARDS (Right Side) ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          
          {/* Card 1: Business Setup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-[20%] right-[38%] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 flex items-center gap-3 w-[220px]"
          >
            <div className="w-10 h-10 rounded-full bg-[#2545F3] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Business Setup</p>
              <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Launch your business the right way</p>
            </div>
          </motion.div>

          {/* Card 2: Compliance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-[50%] right-[42%] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 flex items-center gap-3 w-[200px]"
          >
            <div className="w-10 h-10 rounded-full bg-[#2545F3] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Compliance</p>
              <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Stay compliant always</p>
            </div>
          </motion.div>

          {/* Card 3: Growth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-[42%] -right-2 lg:-right-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 flex items-center gap-3 w-[200px]"
          >
            <div className="w-10 h-10 rounded-full bg-[#2545F3] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Growth</p>
              <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Focus on growth, we handle the rest</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── FLOATING STATS CARD (Bottom) ── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-10 left-6 right-6 md:left-16 md:right-16 lg:left-32 lg:right-32 z-20"
      >
        <div className="bg-white/95 backdrop-blur-2xl border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[32px] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-5 md:px-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <Users className="w-6 h-6 text-[#2545F3]" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 tracking-tight">500+</p>
                <p className="text-xs font-bold text-slate-600 mt-1">Businesses Served</p>
                <p className="text-[11px] text-slate-500">Across India</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-5 pt-6 md:pt-0 md:px-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <Star className="w-6 h-6 text-[#2545F3]" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 tracking-tight">99%</p>
                <p className="text-xs font-bold text-slate-600 mt-1">Client Satisfaction</p>
                <p className="text-[11px] text-slate-500">Trusted by thousands</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-5 pt-6 md:pt-0 md:px-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <HeadphonesIcon className="w-6 h-6 text-[#2545F3]" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 tracking-tight">24/7</p>
                <p className="text-xs font-bold text-slate-600 mt-1">Expert Support</p>
                <p className="text-[11px] text-slate-500">We're always here to help</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
      
    </div>
  );
}

export default TrioTaxHero;
