import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES_DATA } from './ServicesPage';
import { 
  Rocket, 
  Search, 
  Star, 
  Quote,
  Users,
  CheckCircle2,
  Clock,
  Briefcase,
  ArrowRight
  // BarChart3,
  // Shield
} from 'lucide-react';
import AetherFlowHero from '@/components/ui/aether-flow-hero';
import { Typewriter } from '@/components/ui/Typewriter';
// import SocialCards from '@/components/ui/card-fan-carousel';



interface AetherHeroProps {
  theme: 'light' | 'dark';
  scrollToSection: (id: 'hero' | 'about' | 'strengths' | 'contact') => void;
}

export function AetherHero({ theme, scrollToSection }: AetherHeroProps) {
  const [cardsEntered, setCardsEntered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const ALL_SERVICES = CATEGORIES_DATA.flatMap(cat => cat.services.map(serv => serv.title));

  const filteredSuggestions = searchQuery.trim() === ""
    ? []
    : ALL_SERVICES.filter(service => 
        service.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSelectService = (serviceName: string) => {
    setSearchQuery("");
    setShowSuggestions(false);
    window.location.hash = `#services?service=${encodeURIComponent(serviceName)}`;
  };

  useEffect(() => {
    // Start background transition to black 150ms after component mounts (cards start animating in)
    const timer = setTimeout(() => {
      setCardsEntered(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  interface ServiceCardItem {
    src: string;
    title: string;
    desc: string;
    serviceName: string;
  }

  const SERVICE_CARDS: ServiceCardItem[] = [
    {
      src: "/services/BSS.webp",
      title: "Business Startup Setup",
      desc: "Incorporate Private Limited, LLP, Partnership, and other corporate structures with complete setup assistance.",
      serviceName: "Private Limited Company Registration"
    },
    {
      src: "/services/BRL.webp",
      title: "Registrations & Licenses",
      desc: "Instant registration of GST, MSME/Udyam, Shop Act, FSSAI Food licenses, and other regulatory permissions.",
      serviceName: "GST New Registration"
    },
    {
      src: "/services/CLC.webp",
      title: "Company/LLP Compliance",
      desc: "Keep your business fully compliant with annual ROC returns, bookkeeping, and director updates.",
      serviceName: "Company, LLP & OPC Compliance Management"
    },
    {
      src: "/services/LLP.webp",
      title: "Labor Law Compliance",
      desc: "Register and file returns for Provident Fund (PF), ESIC, Professional Tax, and payroll audits.",
      serviceName: "Professional Tax (PT) Registration & Filing"
    },
    {
      src: "/services/NPE.webp",
      title: "Non-Profit Setup (NGO)",
      desc: "Establish Section 8 Companies, Charitable Trusts, or Societies with tax-exemption registrations.",
      serviceName: "Section 8 (NGO) Company Registration"
    },
    {
      src: "/services/TIS.webp",
      title: "Trademark & IP Services",
      desc: "Protect your logo, brand name, and original creations with Trademark, Patent, and Copyright filings.",
      serviceName: "Trademark Registration"
    },
    {
      src: "/services/CWU.webp",
      title: "Closing & Winding Up",
      desc: "Frictionless legal winding up and official strike-off support for defunct companies & LLPs.",
      serviceName: "Winding Up of Company"
    }
  ];

  const duplicatedCards = [...SERVICE_CARDS, ...SERVICE_CARDS];

  const trendingTags = [
    "Company Registration",
    "GST Registration",
    "Trademark Registration",
    "Legal Consultation"
  ];

  const partners = [
    { name: "Swiggy", color: "text-[#FC8019]" },
    { name: "amazon", color: "text-slate-800 dark:text-white" },
    { name: "AXIS BANK", color: "text-[#AE285D]" },
    { name: "GLOBALINKER", color: "text-slate-400" },
    { name: "Flipkart", color: "text-[#2874F0]" },
    { name: "digit", color: "text-slate-800 dark:text-white font-bold" },
    { name: "airtel", color: "text-[#E11900]" }
  ];

  const isDark = theme !== 'light';

  return (
    <AetherFlowHero 
      theme={theme} 
      className={`w-full transition-all duration-[1200ms] ease-in-out ${
        cardsEntered 
          ? (isDark ? 'bg-black' : 'bg-white') 
          : (isDark 
              ? 'bg-slate-950 bg-[radial-gradient(circle_at_center,rgba(37,69,243,0.12)_0%,rgba(9,10,15,0)_70%)]' 
              : 'bg-slate-50 bg-[radial-gradient(circle_at_center,rgba(37,69,243,0.06)_0%,rgba(255,255,255,0)_70%)]')
      }`}
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-6 pt-32 pb-16 text-center select-none">
        
        {/* TOP SECTION: Reviews Pill & Title */}
        <div className="flex flex-col items-center mt-12 max-w-3xl relative">
          {/* Company Name & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center justify-center gap-3.5 mb-6"
          >
            <img
              src="/logo.png"
              alt="TRIOTAX Logo"
              className="h-20 w-20 md:h-24 md:w-24 object-contain shrink-0 filter drop-shadow-[0_0_15px_rgba(37,69,243,0.4)]"
            />
            <span className="text-4xl sm:text-5xl md:text-7xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#2545F3] filter drop-shadow-[0_2px_10px_rgba(37,69,243,0.35)]">
              TRIOTAX
            </span>
          </motion.div>

          {/* Headline with Typewriter */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-base md:text-xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white font-sans mb-8 min-h-[30px] sm:min-h-[38px] md:min-h-[46px]"
          >
            Trusted business support with{" "}
            <Typewriter
              text={[
                "manage taxes easily.",
                "handle compliance securely.",
                "grow businesses confidently.",
                "streamline registrations.",
                "simplify tax filings.",
              ]}
              speed={70}
              className="text-[#2545F3] dark:text-blue-400 font-black"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans mb-6"
          >
            We help businesses manage registrations, taxation, invoicing, and compliance with fast, reliable, and professional support.
          </motion.p>

          {/* Rating Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 dark:bg-slate-900/60 dark:border-slate-800/80 mb-8 backdrop-blur-sm"
          >
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-blue-600 border border-slate-950 flex items-center justify-center text-[8px] font-bold text-white">G</div>
              <div className="w-5 h-5 rounded-full bg-cyan-600 border border-slate-950 flex items-center justify-center text-[8px] font-bold text-white">S</div>
              <div className="w-5 h-5 rounded-full bg-indigo-600 border border-slate-950 flex items-center justify-center text-[8px] font-bold text-white">M</div>
              <div className="w-5 h-5 rounded-full bg-emerald-600 border border-slate-950 flex items-center justify-center text-[8px] font-bold text-white">P</div>
            </div>
            <div className="flex gap-0.5 text-yellow-400">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
              4.5/5 (20K+ Reviews)
            </span>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-xl mx-auto mb-4 z-40"
          >
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                // Delay hiding suggestions so that click event on suggestion can fire
                setTimeout(() => setShowSuggestions(false), 200);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && filteredSuggestions.length > 0) {
                  handleSelectService(filteredSuggestions[0]);
                }
              }}
              placeholder="Try 'Company Registration'"
              className="w-full bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full py-4.5 pl-6 pr-14 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-[#2545F3]/50 dark:focus:border-[#60a5fa]/50 transition-colors"
            />
            <button 
              onClick={() => {
                if (filteredSuggestions.length > 0) {
                  handleSelectService(filteredSuggestions[0]);
                } else if (searchQuery.trim() !== "") {
                  const closest = ALL_SERVICES.find(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
                  if (closest) handleSelectService(closest);
                  else scrollToSection('contact');
                } else {
                  scrollToSection('contact');
                }
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#2545F3] hover:bg-[#1b36c7] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden text-left max-h-60 overflow-y-auto">
                {filteredSuggestions.map((service) => (
                  <div
                    key={service}
                    onMouseDown={() => handleSelectService(service)}
                    className="px-6 py-3.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/50 last:border-b-0"
                  >
                    <Search className="w-3.5 h-3.5 text-[#2545F3] dark:text-[#60a5fa] shrink-0" />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Trending Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-8"
          >
            {trendingTags.map((tag) => {
              const handleTagClick = () => {
                if (tag === "Company Registration") handleSelectService("Private Limited Company Registration");
                else if (tag === "GST Registration") handleSelectService("GST New Registration");
                else if (tag === "Trademark Registration") handleSelectService("Trademark Registration");
                else if (tag === "Legal Consultation") scrollToSection("contact");
              };
              return (
                <span 
                  key={tag} 
                  onClick={handleTagClick}
                  className="px-4 py-2 rounded-full border border-slate-200 bg-slate-100/50 hover:border-blue-500/30 hover:text-blue-500 dark:border-slate-800/80 dark:bg-slate-900/30 dark:hover:border-blue-500/30 dark:hover:text-blue-400 dark:hover:bg-slate-900/50 transition-all cursor-pointer"
                >
                  {tag}
                </span>
              );
            })}
          </motion.div>
        </div>

        {/* ANIMATED IMAGE MARQUEE SECTION */}
        <div className="w-full relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] z-20">
          <motion.div
            className="flex gap-6 w-max py-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleSelectService(card.serviceName)}
                className="group flex flex-col justify-between w-72 md:w-80 h-[360px] md:h-[400px] flex-shrink-0 bg-white dark:bg-zinc-950 border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl shadow-md hover:shadow-xl dark:hover:shadow-zinc-950/50 hover:scale-[1.02] cursor-pointer transition-all duration-300 overflow-hidden"
                style={{
                  rotate: `${(index % 2 === 0 ? -1 : 2)}deg`,
                }}
              >
                {/* Image Container with aspect ratio, internal padding and contain */}
                <div className="relative aspect-[4/3] w-full p-0 flex items-center justify-center bg-white border-b border-slate-100 dark:border-zinc-900/85 overflow-hidden">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-contain select-none pointer-events-none group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  {/* CTA with Arrow */}
                  <div className="flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-[#2545F3] dark:text-[#60a5fa] mt-3">
                    <span>Know more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SOCIAL PROOF / REVIEWS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center text-left my-10 px-4">
          {/* Quote block */}
          <div className="space-y-3">
            <Quote className="w-8 h-8 text-blue-500 opacity-50" />
            <p className="text-sm italic text-slate-350 leading-relaxed">
              "Registration, Filing, and Legal help in one app just makes sense"
            </p>
            <a href="#contact" className="text-xs text-blue-400 hover:underline block font-semibold">
              Review Sanjivani Awale on Google
            </a>
          </div>

          {/* Laurel badge */}
          <div className="flex flex-col items-center justify-center text-center p-5 border border-blue-500/10 rounded-2xl bg-blue-500/[0.02] backdrop-blur-sm">
            <div className="flex gap-1 mb-2 text-yellow-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1.5">20,000+ Reviews</span>
            <h4 className="text-xs font-black text-white leading-tight uppercase max-w-[200px]">
              Voted No 1 Legal Platform In India <span className="text-blue-400">2026</span>
            </h4>
          </div>

          {/* Google Reviews */}
          <div className="flex items-center gap-4 border border-slate-800/80 p-4 rounded-2xl bg-slate-900/20 backdrop-blur-sm">
            <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex gap-0.5 text-yellow-500 mb-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-xs font-bold text-white">Google Reviews</div>
              <div className="text-[10px] text-slate-400">4.5/5 (20K+ Reviews)</div>
            </div>
          </div>
        </div>

        {/* TRUSTED PARTNERS ROW */}
        <div className="w-full my-12 border-t border-slate-900/60 pt-10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-6">
            Trusted Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-60">
            {partners.map((partner) => (
              <span 
                key={partner.name} 
                className={`text-sm sm:text-base font-extrabold uppercase tracking-widest font-sans ${partner.color}`}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        {/* GROWTH / SCALE-UP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center my-16 text-left">
          {/* Text block */}
          <div className="space-y-6 max-w-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
              From Startup to Scale-Up — <br />
              We <span className="text-blue-500">Power</span> Your Growth.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              No matter your stage or journey, we'll be your partner from start to the top.
            </p>
          </div>

          {/* Growth Visualization */}
          <div className="relative h-64 bg-slate-900/10 border border-slate-900 rounded-3xl p-6 flex flex-col justify-end overflow-hidden backdrop-blur-sm w-full">
            {/* Animated dotted curve line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none">
              <path 
                d="M50,180 Q150,160 220,100 T350,30" 
                stroke="#2545F3" 
                strokeWidth="2.5" 
                strokeDasharray="6,6"
                className="opacity-60"
              />
              <path 
                d="M50,180 Q150,160 220,100 T350,30" 
                stroke="#60a5fa" 
                strokeWidth="1.5"
                className="opacity-40"
              />
            </svg>

            {/* Glowing Rocket on the curve */}
            <motion.div 
              animate={{
                x: [0, 290, 0],
                y: [140, -10, 140],
                rotate: [45, 45, 45]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute text-blue-400 z-10 w-8 h-8 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              style={{ top: 20, left: 30 }}
            >
              <Rocket className="w-5 h-5 transform -rotate-45" />
            </motion.div>

            {/* Glowing vertical bar charts */}
            <div className="flex items-end justify-between w-[80%] mx-auto relative z-0">
              {[
                { h: "h-6", delay: 0.1 },
                { h: "h-10", delay: 0.2 },
                { h: "h-16", delay: 0.3 },
                { h: "h-20", delay: 0.4 },
                { h: "h-28", delay: 0.5 },
                { h: "h-36", delay: 0.6 }
              ].map((bar, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.8, delay: bar.delay }}
                  className={`w-8 bg-gradient-to-t from-[#2545F3]/30 to-blue-500/80 rounded-t-md relative group-hover:to-cyan-400 ${bar.h} shadow-[0_0_15px_rgba(59,130,246,0.3)]`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STATS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full py-8 border-t border-slate-900/60 my-10 text-left">
          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-none mb-1">10K+</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Businesses Served</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-none mb-1">99.9%</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Compliance Rate</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-none mb-1">50+</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Expert Professionals</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-none mb-1">24/7</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Support Available</div>
            </div>
          </div>
        </div>

      </div>
    </AetherFlowHero>
  );
}
