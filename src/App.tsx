import { useState, useEffect } from 'react';

import { Navbar } from '@/components/Navbar';
import { HoverFooter } from '@/components/HoverFooter';
import { AboutSection } from '@/components/AboutSection';
// import { StrengthsRevealSection } from '@/components/StrengthsRevealSection';
import ProjectCalculator from '@/components/ProjectCalculator';
import { ToastProvider } from '@/components/ui/toaster';
import { TrioTaxHero } from '@/components/TrioTaxHero';
import { CtaSection } from '@/components/CtaSection';

import { MapSection } from '@/components/MapSection';
import ServicesPage from '@/components/ServicesPage';
import { FloatingCTA } from '@/components/FloatingCTA';
import { PricingSection } from '@/components/PricingSection';

type View = 'hero' | 'about' | 'strengths' | 'contact';

function App() {
  const [, setCurrentView] = useState<View>('hero');
  // const [isProgrammaticScrolling, setIsProgrammaticScrolling] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Set up IntersectionObserver to update active section in navbar as user scrolls
  useEffect(() => {
    const sections: View[] = ['hero', 'strengths'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentView(id);
          }
        },
        {
          threshold: 0.4, // Trigger when 40% of the section is visible
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const [currentPage, setCurrentPage] = useState<'home' | 'calculator' | 'about-us' | 'services'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#calculator') return 'calculator';
      if (hash === '#about-us') return 'about-us';
      if (hash.startsWith('#services')) return 'services';
      return 'home';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#calculator') {
        setCurrentPage('calculator');
      } else if (hash === '#about-us') {
        setCurrentPage('about-us');
      } else if (hash.startsWith('#services')) {
        setCurrentPage('services');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPage === 'home' && typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      if (id === 'contact' || id === 'strengths' || id === 'hero') {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [currentPage]);

  const scrollToSection = (id: View) => {
    // setIsProgrammaticScrolling(true);
    // setTimeout(() => {
    //   setIsProgrammaticScrolling(false);
    // }, 1200);

    if (window.location.hash && window.location.hash !== '') {
      window.location.hash = '';
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setCurrentView(id);
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setCurrentView(id);
      }
    }
  };

  return (
    <ToastProvider>
      <div className="min-h-screen w-full scroll-smooth bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 select-none">
        <Navbar theme={theme} setTheme={setTheme} scrollToSection={scrollToSection} />
        <FloatingCTA />

        {currentPage === 'calculator' ? (
          <>
            <div className="pt-20">
              <ProjectCalculator theme={theme} />
            </div>
            {/* Footer Section */}
            <section 
              className="relative h-screen w-full bg-[#0F0F11] dark:bg-black text-white transition-colors duration-300"
            >
              <HoverFooter scrollToSection={scrollToSection} />
            </section>
          </>

        ) : currentPage === 'services' ? (
          <>
            <div className="pt-24 min-h-[calc(100vh-80px)]">
              <ServicesPage theme={theme} onGoHome={() => {
                window.location.hash = '';
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} />
            </div>
            {/* Footer Section */}
            <section 
              className="relative h-screen w-full bg-[#0F0F11] dark:bg-black text-white transition-colors duration-300"
            >
              <HoverFooter scrollToSection={scrollToSection} />
            </section>
          </>
        ) : (
          <>
            {/* Hero Section */}
            <section 
              id="hero" 
              className="relative h-[80vh] w-full overflow-hidden bg-[#0d0d0d]"
            >
              <TrioTaxHero theme={theme} scrollToSection={scrollToSection} />
            </section>

            {/* About Us Section */}
            <section id="about" className="relative w-full">
              <AboutSection />
            </section>

            {/* Pricing Section */}
            <PricingSection />



              {/* Our Key Strength Section
              <section 
                id="strengths" 
                className="relative w-full bg-black transition-colors duration-300"
              >
                <StrengthsRevealSection theme={theme} isProgrammaticScrolling={isProgrammaticScrolling} />
              </section>
              */}

            {/* CTA Section */}
            <CtaSection theme={theme} />


            {/* Office Locations Map Section */}
            <MapSection theme={theme} />

            {/* Footer Section */}
            <section 
              className="relative h-screen w-full bg-[#0F0F11] dark:bg-black text-white transition-colors duration-300"
            >
              <HoverFooter scrollToSection={scrollToSection} />
            </section>
          </>
        )}
      </div>
    </ToastProvider>
  );
}

export default App;
