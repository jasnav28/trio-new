import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/Typewriter';

interface CyberHeroProps {
  theme: 'light' | 'dark';
  scrollToSection: (id: 'hero' | 'about' | 'strengths' | 'contact') => void;
}

const servicesData = {
  'start-business': {
    name: 'Start Business',
    list: [
      "Partnership",
      "Private Limited Company",
      "One Person Company",
      "Indian Subsidiary",
      "Section 8 Company",
      "Trust Registration",
      "Limited Liability Partnership Company-LLP",
      "Public Limited Company",
      "Proprietorship"
    ]
  },
  'registrations': {
    name: 'Registrations & Licensing',
    list: [
      "PF Registration",
      "ESI Registration",
      "Professional Tax Registration",
      "GST Registration",
      "Import Export Code Registration",
      "ICEGATE Registration",
      "Digital Signature Certificate",
      "Trade License Registration",
      "Trademark Registration",
      "Shops and Establishment Registration-Labour lic",
      "CLRA License -Contract Labour License",
      "BOCW Registration",
      "Udyam-MSME Registration"
    ]
  },
  'taxation': {
    name: 'Taxation and Filing',
    list: [
      "Income Tax Filings-ITR-1 to 7",
      "ROC Filings for PVT-LLP",
      "GST Returns and Filings",
      "Payroll",
      "EPF-ESI and Professional Tax Returns",
      "TDS Return Filing",
      "E-Way Bill and E-Invoicing"
    ]
  },
  'corporate': {
    name: 'Corporate Requirements',
    list: [
      "Change of Registration Office",
      "Increasing Authorized - Paid Up Capital",
      "MoA and AoA Amendments",
      "Winding Up of a Company or an LLP",
      "Cancellation and Clearance Notices",
      "Adding Directors or Promoters",
      "Removal of Directors or Promoters"
    ]
  }
};

export function CyberHero({ theme: _theme, scrollToSection }: CyberHeroProps) {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof servicesData>('start-business');
  const [selectedService, setSelectedService] = useState('Partnership');

  const handleCategoryChange = (catId: keyof typeof servicesData) => {
    setSelectedCategory(catId);
    const list = servicesData[catId]?.list || [];
    setSelectedService(list[0] || '');
  };

  const handleLetsTalk = (e: React.FormEvent) => {
    e.preventDefault();
    const categoryName = servicesData[selectedCategory]?.name || selectedCategory;
    const whatsappMessage = `*New Inquiry - TRIOTAX Website*\n\n` +
      `*Service Category:* ${categoryName}\n` +
      `*Service Selected:* ${selectedService}\n\n` +
      `I would like to discuss this service with you.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919591578333?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen lg:h-screen w-full flex flex-col lg:flex-row bg-[#FBFBFD] dark:bg-black overflow-hidden font-sans transition-colors duration-300">
      
      {/* LEFT PANEL - Electric Blue Branding Section */}
      <div 
        className="w-full lg:w-[55%] lg:h-[82vh] bg-[#2545F3] dark:bg-[#1A2EBF] relative p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between pt-28 lg:pt-36 pb-16 lg:pb-20 transition-colors duration-500 rounded-none z-10 shadow-2xl"
      >
        {/* SVG Decorative Curved Waves Container (handles internal overflow hidden) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-none">
          <svg 
            className="absolute inset-0 w-full h-full opacity-25" 
            viewBox="0 0 800 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-100,100 C150,180 350,30 900,150" stroke="white" strokeWidth="1.5" />
            <path d="M-50,280 C200,200 400,360 850,260" stroke="white" strokeWidth="1.5" />
            <path d="M-80,450 C220,480 480,330 900,490" stroke="white" strokeWidth="1.5" />
            <path d="M-20,620 C280,560 380,740 880,600" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Content Area */}
        <div className="relative z-10 flex flex-col justify-center flex-grow max-w-xl mx-auto lg:mx-0 w-full">
          
          {/* Tag */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-white/95 uppercase tracking-widest text-[11px] sm:text-xs font-bold mb-6 sm:mb-8"
          >
            <span className="w-8 h-[2.5px] bg-white inline-block"></span>
            TRIOTAX
          </motion.div>

          {/* Main Headline with Typewriter Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white text-3xl sm:text-5xl lg:text-[42px] xl:text-5.5xl font-bold leading-[1.15] tracking-tight mb-6 sm:mb-8 font-sans min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]"
          >
            Trusted business support with <br className="hidden sm:inline" />
            <Typewriter
              text={[
                "manage taxes easily.",
                "handle compliance securely.",
                "grow businesses confidently.",
                "streamline registrations.",
                "simplify tax filings.",
              ]}
              speed={70}
              className="text-amber-300 dark:text-amber-400 font-extrabold"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </motion.h1>

          {/* Subheading Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base leading-relaxed mb-10 max-w-lg font-sans"
          >
            We help businesses manage registrations, taxation, invoicing, and compliance with fast, reliable, and professional support.
          </motion.p>

          {/* Interactive Form Search Box (Overlaps the bottom edge on desktop) */}
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleLetsTalk}
            className="relative lg:absolute lg:bottom-0 lg:translate-y-1/2 lg:left-20 lg:w-[calc(100%-10rem)] lg:max-w-xl bg-white dark:bg-neutral-900 rounded-[28px] sm:rounded-full p-2 pl-4 sm:pl-6 pr-2 shadow-2xl flex flex-col sm:flex-row items-center gap-3 w-full border border-black/5 dark:border-white/10 z-25 mt-4 lg:mt-0"
          >
            {/* Dropdown 1: Service Categories */}
            <div className="relative w-full sm:w-auto flex-1">
              <select 
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value as any)}
                className="w-full bg-transparent text-neutral-800 dark:text-neutral-200 font-semibold text-sm py-2 pr-8 pl-1 outline-none border-none cursor-pointer appearance-none"
              >
                {Object.entries(servicesData).map(([id, cat]) => (
                  <option key={id} value={id} className="text-black dark:text-white bg-white dark:bg-neutral-900">
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-neutral-200 dark:bg-neutral-700"></div>

            {/* Dropdown 2: Dynamic Services Selection */}
            <div className="relative w-full sm:w-auto flex-1">
              <select 
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-transparent text-neutral-800 dark:text-neutral-200 font-semibold text-sm py-2 pr-8 pl-1 outline-none border-none cursor-pointer appearance-none"
              >
                {servicesData[selectedCategory].list.map((service) => (
                  <option key={service} value={service} className="text-black dark:text-white bg-white dark:bg-neutral-900">
                    {service}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Orange Action Button */}
            <button 
              type="submit"
              className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#FF8B1F] active:scale-95 transition-all text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg cursor-pointer shrink-0 z-10"
              style={{
                boxShadow: '0 4px 14px rgba(255, 122, 0, 0.35)',
              }}
            >
              Let's talk
            </button>
          </motion.form>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          onClick={() => scrollToSection('strengths')}
          className="absolute left-8 bottom-6 hidden lg:flex items-center gap-3 origin-left -rotate-90 text-white/50 text-[10px] uppercase font-bold tracking-widest cursor-pointer hover:text-white transition-colors duration-200"
        >
          <span>Scroll</span>
          <span className="inline-block transform rotate-90">→</span>
        </div>

      </div>

      {/* RIGHT PANEL - Expert Image Section */}
      <div 
        className="w-full lg:w-[45%] lg:h-screen min-h-[450px] lg:min-h-0 relative overflow-hidden rounded-bl-[60px] lg:rounded-bl-[80px] z-0 shadow-inner bg-[#F3F4F6] dark:bg-neutral-900"
      >
        {/* Background Image of Expert & Office */}
        <img 
          src="/cyber_expert.png" 
          alt="Cyber insurance expert holding laptop with city window and orange wall" 
          className="absolute inset-0 w-full h-full object-cover select-none"
        />

        {/* Black-like subtle overlay filter */}
        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
      </div>

    </div>
  );
}
