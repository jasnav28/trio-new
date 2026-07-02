import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES_DATA } from './ServicesPage';
import { 
  Menu as MenuIcon, 
  X as XIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type View = 'hero' | 'about' | 'strengths' | 'contact';

export interface NavServiceItem {
  title: string;
  href: string;
}

const categories = CATEGORIES_DATA.map(cat => ({
  id: cat.id,
  name: cat.name,
  list: cat.services.map(s => ({
    title: s.title,
    href: `#services?service=${encodeURIComponent(s.title)}`
  }))
}));

const getServiceDescription = (title: string) => {
  for (const cat of CATEGORIES_DATA) {
    const serv = cat.services.find(s => s.title === title);
    if (serv) {
      return {
        desc: serv.desc,
        highlights: serv.highlights
      };
    }
  }
  return null;
};

const categoryDescriptions: Record<string, { title: string; desc: string; highlights?: string[] }> = {
  "company-registration": {
    title: "Business Startup Setup",
    desc: "Establish your business entity legally in India. We help you choose and setup the ideal structure—from Partnerships to Private Limited Companies.",
    highlights: ["Limited Liability options", "100% online registration", "Startup India recognition support"]
  },
  "licensing": {
    title: "Licensing & Registration Services",
    desc: "Obtain mandatory government registrations, licenses, and intellectual property protections required to operate legally.",
    highlights: ["GST & FSSAI registrations", "Trademark & brand protection", "Local municipality trade licenses"]
  },
  "digital-essentials": {
    title: "Digital Essentials & Creative Services",
    desc: "Establish a strong online presence and streamline operations with website development, logo design, billing & enterprise software, and custom marketing media.",
    highlights: ["Modern Responsive Design", "GST Invoicing Integration", "Custom Brand Identity"]
  },
  "labour-compliance": {
    title: "Labour Compliance & Law Advisory",
    desc: "Ensure complete adherence to labor regulations and employee welfare. We manage EPF, ESI, LWF, POSH, and statutory registers.",
    highlights: ["EPFO & ESIC monthly returns", "POSH policy implementation", "Statutory register maintenance"]
  },
  "taxation": {
    title: "Taxation Services",
    desc: "Stay fully compliant with Indian direct and indirect tax laws. We manage GST registration, GST return filings, Income Tax (ITR) filings, and TDS returns.",
    highlights: ["Accurate Tax computations", "Timely quarterly/monthly filing", "Optimize deductions & refunds"]
  },
  "mca-corporate": {
    title: "MCA & Corporate Services",
    desc: "Keep your corporate structure up-to-date and fully compliant. We handle ROC filings, address changes, board updates, and annual filings.",
    highlights: ["ROC Annual Filings", "Director appointment & removal", "MOA & AOA amendments"]
  },
  "legal-services": {
    title: "Corporate Legal Services",
    desc: "Secure your business transactions and relationships with expert drafting of contracts, legal notices, NDAs, and joint venture agreements.",
    highlights: ["Custom business contract drafts", "Advocate-vetted legal notices", "Strict confidentiality protocols"]
  }
};

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  scrollToSection: (id: View) => void;
}

export function Navbar({ theme, setTheme, scrollToSection }: NavbarProps) {
  const [activeMenuValue, setActiveMenuValue] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>('company-registration');
  const [hoveredSubService, setHoveredSubService] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [showDevModal, setShowDevModal] = useState(false);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setHoveredSubService(null);
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <img
      src="/logo.png"
      alt="TRIOTAX Logo"
      className="h-8 w-8 object-contain cursor-pointer shrink-0 transition-transform duration-300 hover:scale-105"
      onClick={() => scrollToSection('hero')}
    />
  );

  return (
    <>
      <AnimatePresence>
        {activeMenuValue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/15 dark:bg-black/40 backdrop-blur-[6px] z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>
      <div className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out"
        style={isScrolled ? { background: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 2px 24px 0 rgba(0,0,0,0.4)' } : {}}
      >
        <NavigationMenu 
          className="w-full max-w-none" 
          viewport={true}
          value={activeMenuValue}
          onValueChange={(val) => {
            setActiveMenuValue(val);
            if (val === 'services') {
              setActiveCategory('company-registration');
            }
          }}
        >
          <div 
            className={cn(
              "flex items-center justify-between gap-4 transition-all duration-500 ease-in-out relative",
              isScrolled
                ? "h-16 w-full max-w-6xl mx-auto px-6 md:px-8 rounded-none bg-transparent border-transparent shadow-none"
                : "h-14 mt-4 w-[calc(100%-2rem)] max-w-6xl mx-auto px-6 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            )}
          >
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-sans text-sm font-extrabold tracking-wider hidden sm:inline-block uppercase text-white">
                TRIOTAX
              </span>
            </div>

            {/* Desktop Menu links directly here as part of the same root */}
            <NavigationMenuList className="hidden lg:flex flex-1 items-center justify-center gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="cursor-pointer font-semibold text-xs px-2.5 py-1.5 text-white hover:text-[#2545F3] transition-colors duration-200"
                  onClick={() => scrollToSection('hero')}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="cursor-pointer font-semibold text-xs px-2.5 py-1.5 text-white hover:text-[#2545F3] transition-colors duration-200"
                  href="#about"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="cursor-pointer font-semibold text-xs px-2.5 py-1.5 text-white hover:text-[#2545F3] transition-colors duration-200"
                  href="#pricing"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem value="services">
                <NavigationMenuTrigger 
                  className="font-semibold text-xs cursor-pointer bg-transparent hover:bg-transparent text-white hover:text-[#2545F3] transition-colors duration-200"
                  onClick={() => { window.location.hash = '#services'; }}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[1100px] max-w-[calc(100vw-3rem)] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-xl overflow-hidden">
                    {/* Left Column: Categories */}
                    <div className="w-[220px] p-3 flex flex-col gap-1 border-r border-neutral-100 dark:border-neutral-900 bg-neutral-50/30 dark:bg-neutral-950 shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 px-3 mb-2">
                        Categories
                      </span>
                      {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onMouseEnter={() => {
                              setActiveCategory(cat.id as any);
                              setHoveredSubService(null);
                            }}
                            className={cn(
                              "w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer",
                              isActive 
                                ? "bg-[#2545F3]/10 text-[#2545F3] dark:bg-[#2545F3]/20 dark:text-[#60a5fa]" 
                                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 hover:text-neutral-950 dark:hover:text-white"
                            )}
                          >
                            <span>{cat.name}</span>
                            {isActive && (
                              <div className="h-1.5 w-1.5 rounded-full bg-[#2545F3] dark:bg-[#60a5fa]" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Middle Column: Sub-Services */}
                    <div className="w-[440px] p-4 bg-white dark:bg-neutral-950 overflow-y-auto max-h-[360px] border-r border-neutral-100 dark:border-neutral-900 shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 px-2 block mb-3">
                        {categories.find(c => c.id === activeCategory)?.name} Offerings
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.ul
                          key={activeCategory}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5"
                        >
                          {categories.find((c) => c.id === activeCategory)?.list.map((item) => (
                            <li key={item.title}>
                              <a
                                href={`#services?service=${encodeURIComponent(item.title)}`}
                                onMouseEnter={() => setHoveredSubService(item.title)}
                                onClick={() => setActiveMenuValue("")}
                                className="block select-none rounded-xl p-2 text-xs font-semibold leading-normal no-underline outline-none transition-all duration-150 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-[#2545F3] dark:hover:text-[#60a5fa] text-neutral-700 dark:text-neutral-355 border border-transparent hover:border-neutral-100 dark:hover:border-neutral-800"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    </div>

                    {/* Right Column: Description Pane */}
                    <div className="flex-1 p-5 bg-neutral-50/20 dark:bg-neutral-950/20 flex flex-col justify-start min-h-[320px]">
                      <AnimatePresence mode="wait">
                        {hoveredSubService && getServiceDescription(hoveredSubService) ? (
                          <motion.div
                            key={hoveredSubService}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="flex flex-col h-full"
                          >
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#2545F3] dark:text-[#60a5fa] mb-1">
                              Service Details
                            </span>
                            <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                              {hoveredSubService}
                            </h4>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                              {getServiceDescription(hoveredSubService)?.desc}
                            </p>
                            {getServiceDescription(hoveredSubService)?.highlights && (
                              <div className="mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-900/60">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-455 block mb-2">
                                  Key Highlights
                                </span>
                                <ul className="space-y-1.5">
                                  {getServiceDescription(hoveredSubService)?.highlights?.map((highlight: string, idx: number) => (
                                    <li key={idx} className="flex items-center gap-2 text-[11px] text-neutral-655 dark:text-neutral-450">
                                      <div className="h-1.5 w-1.5 rounded-full bg-[#2545F3] dark:bg-[#60a5fa] shrink-0" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="flex flex-col h-full"
                          >
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#2545F3] dark:text-[#60a5fa] mb-1">
                              Category Overview
                            </span>
                            <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                              {categoryDescriptions[activeCategory]?.title}
                            </h4>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                              {categoryDescriptions[activeCategory]?.desc}
                            </p>
                            {categoryDescriptions[activeCategory]?.highlights && (
                              <div className="mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-900/60">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-455 block mb-2">
                                  Category Features
                                </span>
                                <ul className="space-y-1.5">
                                  {categoryDescriptions[activeCategory].highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-[11px] text-neutral-655 dark:text-neutral-450">
                                      <div className="h-1.5 w-1.5 rounded-full bg-[#2545F3] dark:bg-[#60a5fa] shrink-0" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "cursor-pointer font-semibold text-xs px-2.5 py-1.5 transition-colors duration-500",
                    isScrolled 
                      ? "text-neutral-800 dark:text-gray-300 hover:text-[#2545F3] dark:hover:text-[#60a5fa]" 
                      : "text-white dark:text-gray-300 hover:text-[#2545F3] dark:hover:text-[#60a5fa]"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDevModal(true);
                  }}
                >
                  Calculator
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center">
                {currentTime && (
                  <span className={cn(
                    "text-[10px] md:text-xs font-semibold mr-2 transition-colors duration-500",
                    isScrolled ? "text-neutral-700 dark:text-neutral-300" : "text-white"
                  )}>
                    {currentTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} • {currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                  </span>
                )}
              </div>
              
              {/* Mobile Menu */}
              <MobileNav scrollToSection={scrollToSection} isScrolled={isScrolled} />
            </div>
          </div>
        </NavigationMenu>
      </div>

      {/* Under Development Modal */}
      <AnimatePresence>
        {showDevModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center relative border border-neutral-100 dark:border-neutral-800"
            >
              <button 
                onClick={() => setShowDevModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
              <div className="w-16 h-16 bg-[#2545F3]/10 text-[#2545F3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Coming Soon!</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Our smart calculator is currently under development. Stay tuned for an easy way to calculate your compliance needs!
              </p>
              <Button 
                onClick={() => setShowDevModal(false)}
                className="w-full bg-[#2545F3] hover:bg-[#1b36c7] text-white rounded-xl"
              >
                Got it
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNav({ 
  scrollToSection, 
  isScrolled,
}: { 
  scrollToSection: (id: View) => void; 
  isScrolled?: boolean;
}) {
  const sections = CATEGORIES_DATA.map(cat => ({
    id: cat.id,
    name: cat.name,
    list: cat.services.map(s => ({
      title: s.title,
      href: `#services?service=${encodeURIComponent(s.title)}`
    }))
  }));

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          size="icon" 
          variant="ghost" 
          className={cn(
            "rounded-full lg:hidden cursor-pointer h-9 w-9 transition-colors duration-500",
            isScrolled 
              ? "text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800" 
              : "text-white dark:text-white hover:bg-white/10"
          )}
        >
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-white/95 dark:bg-neutral-950/95 border-l border-neutral-200 dark:border-neutral-800 w-full max-w-sm gap-0 backdrop-blur-lg flex flex-col p-0 transition-colors duration-300"
        showClose={false}
        side="right"
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-neutral-100 dark:border-neutral-800">
          <span className="font-semibold text-neutral-900 dark:text-white">TRIOTAX Menu</span>
          <SheetClose asChild>
            <Button size="icon" variant="ghost" className="rounded-full text-[#192837] dark:text-white cursor-pointer h-9 w-9">
              <XIcon className="size-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>
        
        <div className="flex-grow overflow-y-auto px-6 py-4">
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border-neutral-200 dark:border-neutral-800">
                <AccordionTrigger className="capitalize text-neutral-900 dark:text-white hover:no-underline font-medium py-3 text-sm">
                  {section.name}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-1 pt-1">
                    {section.list.map((link) => {
                      return (
                        <li key={link.title}>
                          <SheetClose asChild>
                            <a
                              href={`#services?service=${encodeURIComponent(link.title)}`}
                              className="block py-2 px-3 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg transition-colors leading-normal"
                            >
                              {link.title}
                            </a>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-6 space-y-3 flex flex-col">
            <SheetClose asChild>
              <button
                onClick={() => {
                  scrollToSection('hero');
                }}
                className="w-full text-left py-3 px-1 border-b border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-950 dark:text-white hover:text-[#2545F3] cursor-pointer"
              >
                Home
              </button>
            </SheetClose>

            <SheetClose asChild>
              <a
                href="#about-us"
                className="w-full text-left py-3 px-1 border-b border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-950 dark:text-white hover:text-[#2545F3]"
              >
                About Us
              </a>
            </SheetClose>

            <SheetClose asChild>
              <a
                href="#services"
                className="w-full text-left py-3 px-1 border-b border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-950 dark:text-white hover:text-[#2545F3]"
              >
                Explore
              </a>
            </SheetClose>

            <SheetClose asChild>
              <a
                href="#calculator"
                className="w-full text-left py-3 px-1 border-b border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-950 dark:text-white hover:text-[#2545F3]"
              >
                Calculator
              </a>
            </SheetClose>
          </div>
        </div>

        <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 flex flex-col gap-3">
          <button className="w-full py-3 rounded-full bg-[#2545F3] text-white font-medium shadow-md cursor-pointer hover:bg-[#1b36c7] transition-all text-sm">
            Start For Free
          </button>
          <button className="w-full py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-[#192837] dark:text-white font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer text-sm">
            Sign In
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
