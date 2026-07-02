import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function FloatingCTA() {
  const { toast } = useToast();
  const [bounce, setBounce] = useState(false);

  // Trigger subtle bounce every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 1000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // If a modal existed, we'd open it here. For now, scroll to contact section or toast.
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast({
        title: "Book Consultation",
        description: "Redirecting to consultation booking...",
      });
    }
  };

  return (
    <>
      {/* ── DESKTOP: Vertical Right-Aligned Floating CTA ── */}
      <motion.button
        onClick={handleClick}
        animate={bounce ? { y: [0, -10, 0, -5, 0] } : { y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, paddingLeft: 8 }}
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex-col items-center justify-center w-12 h-44 bg-gradient-to-b from-[#1b36c7] to-[#0a155a] rounded-l-2xl border border-white/20 border-r-0 backdrop-blur-md shadow-[-4px_0_24px_rgba(37,69,243,0.3)] hover:shadow-[-8px_0_32px_rgba(37,69,243,0.6)] hover:from-[#2545F3] hover:to-[#1b36c7] transition-all duration-300 group cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
        
        {/* Rotated Text */}
        <span className="text-white text-xs font-bold tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 mb-4 whitespace-nowrap">
          Book Consultation
        </span>
        
        {/* Icon */}
        <div className="mt-auto mb-4 bg-white/20 p-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all">
          <CalendarCheck className="w-4 h-4 text-white" />
        </div>
      </motion.button>

      {/* ── MOBILE: Bottom Floating Pill ── */}
      <motion.button
        onClick={handleClick}
        animate={bounce ? { y: [0, -8, 0, -4, 0] } : { y: 0 }}
        transition={{ duration: 0.6 }}
        whileTap={{ scale: 0.95 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#1b36c7] to-[#0a155a] rounded-full border border-white/20 backdrop-blur-md shadow-[0_8px_24px_rgba(37,69,243,0.4)] text-white cursor-pointer"
      >
        <CalendarCheck className="w-4 h-4" />
        <span className="text-sm font-bold tracking-wide">Book Consultation</span>
      </motion.button>
    </>
  );
}

export default FloatingCTA;
