import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Trophy, Building, TrendingUp } from 'lucide-react';

interface StrengthsProps {
  theme?: 'light' | 'dark';
}

const servicesList = [
  {
    id: 1,
    title: "Start Business",
    shortDesc: "Company / LLP / OPC / Partnership",
    items: [
      {
        title: "Company Registration",
        desc: "Incorporate Private Limited, One Person Company (OPC), or Public Limited entities with complete legal registration."
      },
      {
        title: "LLP & Partnership",
        desc: "Set up Limited Liability Partnerships or traditional Partnership Firms with notary-verified deeds."
      },
      {
        title: "Proprietorship Setup",
        desc: "Launch your solo venture quickly with basic commercial registrations and bank account setup."
      }
    ]
  },
  {
    id: 2,
    title: "Registrations",
    shortDesc: "GST, S&E, Trade License, IEC & More",
    items: [
      {
        title: "GST Registration",
        desc: "Register under Goods & Services Tax legally, allowing you to pass tax credits to clients."
      },
      {
        title: "Trade & S&E License",
        desc: "Obtain local municipal Trade Licenses and Shops & Establishments registrations for your commercial premises."
      },
      {
        title: "IEC & Trademark",
        desc: "Get your Import Export Code for global trade and file trademarks to protect your corporate brand name."
      }
    ]
  },
  {
    id: 3,
    title: "Digital Essentials",
    shortDesc: "Website, Logo, Invoicing & More",
    items: [
      {
        title: "Website Setup",
        desc: "Establish your online presence with professional responsive landing pages and web design."
      },
      {
        title: "Logo & Branding",
        desc: "Create premium high-resolution corporate logos and digital brand style guidelines."
      },
      {
        title: "Invoicing & Billing",
        desc: "Setup electronic billing, digital invoices, and synchronization systems with GST portals."
      }
    ]
  },
  {
    id: 4,
    title: "Labour Compliance",
    shortDesc: "PF, ESI, PT, LWF & More",
    items: [
      {
        title: "PF & ESI Setup",
        desc: "Register for Employee Provident Fund and State Insurance schemes to provide social security."
      },
      {
        title: "Professional Tax (PT)",
        desc: "Ensure compliant Professional Tax registration and monthly returns for salaried employees."
      },
      {
        title: "Labour Welfare Fund",
        desc: "Maintain statutory welfare fund compliance and periodic filings across state requirements."
      }
    ]
  },
  {
    id: 5,
    title: "Taxation Services",
    shortDesc: "GST, Income Tax, TDS & More",
    items: [
      {
        title: "Income Tax Filings (ITR)",
        desc: "Accurate filing of annual income tax returns (ITR-1 to 7) for individuals, LLPs, and companies."
      },
      {
        title: "GST Returns & Filings",
        desc: "Monthly, quarterly, and annual GST return filings to maintain a clean tax compliance record."
      },
      {
        title: "TDS Returns",
        desc: "Calculate and submit quarterly Tax Deducted at Source returns for vendor and salary payments."
      }
    ]
  },
  {
    id: 6,
    title: "MCA Compliances",
    shortDesc: "ROC Filings, Annual Compliance & More",
    items: [
      {
        title: "Annual ROC Returns",
        desc: "File mandatory financial statements (AOC-4) and annual returns (MGT-7) with the Registrar of Companies."
      },
      {
        title: "Director KYC & DIN",
        desc: "Ensure director DIN activations, corporate updates, and annual Director KYC compliance."
      },
      {
        title: "Company Resolutions",
        desc: "Draft board resolutions, maintain official minute books, and coordinate required corporate filings."
      }
    ]
  },
  {
    id: 7,
    title: "Legal Services",
    shortDesc: "Agreements, Notices, Consultation & More",
    items: [
      {
        title: "Contracts & Agreements",
        desc: "Draft NDA documents, employment contracts, partnership deeds, and vendor service agreements."
      },
      {
        title: "Legal Notices",
        desc: "Draft formal legal notices, replies, and respond effectively to department queries."
      },
      {
        title: "Expert Consultations",
        desc: "Receive customized legal and compliance advisory support for corporate operations and expansion."
      }
    ]
  }
];

export function MinimalistHeroDemo({ theme }: StrengthsProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentService = servicesList[activeSlide];

  // Auto slideshow effect rotating slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % servicesList.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleLetsTalk = () => {
    const whatsappMessage = `*Hi TRIOTAX, I would like to learn more about your ${currentService.title} compliance services.*`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919591578333?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % servicesList.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev - 1 + servicesList.length) % servicesList.length);
  };

  const isLight = theme === 'light';

  // Helper to render distinct icons for sub-items
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Rocket className="w-5 h-5" />;
      case 1:
        return <Trophy className="w-5 h-5" />;
      case 2:
      default:
        return <Building className="w-5 h-5" />;
    }
  };

  return (
    <div className={`w-full py-16 md:py-24 transition-colors duration-500 ${
      isLight ? 'bg-[#F4F6F8] text-neutral-900' : 'bg-[#08080C] text-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN - Title and Dynamic Active Service Details */}
        <div className="flex flex-col text-left w-full space-y-8">
          <div className="space-y-4">
            <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight font-sans ${
              isLight ? 'text-neutral-950' : 'text-white'
            }`}>
              Our Services
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-lg">
              We help you navigate the complexities of starting, growing, and managing your business.
            </p>
          </div>

          {/* Dynamic Active Service Description & Details */}
          <div className="min-h-[380px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-[#00E5FF] rounded-full"></div>
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                    isLight ? 'text-neutral-950' : 'text-white'
                  }`}>
                    {currentService.title}
                  </h3>
                </div>

                {/* Divided Feature List for Active Service */}
                <div className="flex flex-col w-full divide-y divide-neutral-300/30 dark:divide-neutral-800/40">
                  {currentService.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-5 py-5">
                      <div className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center shrink-0 bg-white/40 dark:bg-neutral-900/10 text-cyan-500 mt-0.5">
                        {getIcon(idx)}
                      </div>
                      <div className="space-y-1">
                        <h4 className={`text-sm font-bold ${
                          isLight ? 'text-neutral-850' : 'text-neutral-200'
                        }`}>
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pt-2">
            <button 
              onClick={handleLetsTalk}
              className={`inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full border transition-all cursor-pointer ${
                isLight 
                  ? 'bg-white border-neutral-300 text-neutral-950 hover:bg-neutral-50 shadow-sm' 
                  : 'bg-transparent border-white/20 text-white hover:bg-white/5'
              }`}
            >
              Call me back
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN - Image Box with Controller White Card */}
        <div 
          className="w-full h-[520px] rounded-3xl relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 shadow-2xl z-0"
          style={{
            backgroundImage: isLight ? "url('/lbox.webp')" : "url('/bbox.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Subtle dark tint to ensure text readability */}
          <div className="absolute inset-0 bg-black/45 dark:bg-black/35 z-0 pointer-events-none" />

          {/* Top Panel - Sustainability Text */}
          <div className="relative z-10 text-left max-w-md">
            <h3 className="text-white text-2xl sm:text-[28px] font-bold tracking-tight mb-3">
              Sustainability
            </h3>
            <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed">
              We act with the best management practices, always aiming for excellence and the best results, caring for how we influence and impact our society and environment.
            </p>
          </div>

          {/* Middle Panel - Floating White Controller Card showing Active Service details */}
          <div className="relative z-10 w-full bg-white text-neutral-900 p-5 rounded-2xl shadow-xl border border-neutral-100 flex justify-between items-start gap-4">
            <div className="flex-1 text-left flex flex-col items-start w-full">
              {/* Slide Counter Badge */}
              <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] font-bold text-neutral-500 mb-3">
                {currentService.id}
              </div>

              {/* Title & Description with AnimatePresence */}
              <div className="min-h-[85px] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-bold text-neutral-950 text-sm uppercase tracking-wider mb-1">
                      {currentService.title}
                    </h4>
                    <p className="text-neutral-500 text-xs leading-relaxed max-w-[245px]">
                      {currentService.shortDesc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic Bottom Counter (1/7, 2/7, ..., 7/7) & Square chevron controls */}
              <div className="flex items-center justify-between w-full mt-3 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-neutral-450 tracking-wider">
                  {currentService.id} / {servicesList.length}
                </span>

                <div className="flex gap-1">
                  <button 
                    onClick={prevSlide}
                    className="w-7 h-7 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold text-sm shadow-sm rounded border border-neutral-200 cursor-pointer active:scale-95 transition-all"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-7 h-7 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold text-sm shadow-sm rounded border border-neutral-200 cursor-pointer active:scale-95 transition-all"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* Trending Graph Icon at top right */}
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 text-cyan-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Panel - Footnote & outline Learn More button */}
          <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-white/10 text-left">
            <div className="text-white/80">
              <span className="text-[10px] font-bold uppercase tracking-wider block text-cyan-400">ESG Initiatives</span>
              <span className="text-xs font-semibold">TRIOTAX promotes sustainable growth daily.</span>
            </div>
            <button 
              onClick={handleLetsTalk}
              className="bg-transparent border border-white/25 hover:border-white/50 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shrink-0 transition-colors cursor-pointer active:scale-95"
            >
              Learn more
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
