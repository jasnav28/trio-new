import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { MiniCalendar } from '@/components/ui/mini-calendar';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

interface CtaSectionProps {
  theme: 'light' | 'dark';
}

const contactItems = [
  { icon: MailIcon,    label: 'Email',   value: 'support@triotax.in' },
  { icon: PhoneIcon,   label: 'Phone',   value: '+91 9591578333 / +91 6361556801' },
  { icon: MapPinIcon,  label: 'Address', value: 'Bengaluru, Karnataka, India' },
];

export function CtaSection({ theme }: CtaSectionProps) {
  const { toast } = useToast();

  const handleBookConsultation = () => {
    toast({
      title: 'Request Received! 🎉',
      description: `We'll reach out to you within 24 hours for your free consultation.`,
    });
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      className={`w-full px-4 py-16 md:px-8 lg:px-16 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-slate-50'
      }`}
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2545F3] mb-2">
          Free Consultation
        </p>
        <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Let's Start Your Business Journey
        </h2>
        <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Reach out via WhatsApp or book a time — we'll handle the rest.
        </p>
      </motion.div>

      {/* Main card — background image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl min-h-[420px]"
      >
        {/* Background image */}
        <img
          src="/bg1.webp"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />

        {/* Content grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[420px]">

          {/* ── LEFT: Contact info + trust badges ── */}
          <div className="flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                Get in Touch
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                Compliance Made Simple —<br />From Day One
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Join 500+ businesses across India that trust TRIOTAX for company registration,
                GST filing, trademark protection, and end-to-end compliance.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-3">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-lg bg-[#2545F3]/20 border border-[#2545F3]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#2545F3]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{label}</p>
                      <p className="text-xs text-slate-200 font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['✅ Free Consultation', '✅ No Hidden Charges', '✅ Pan-India Service'].map(b => (
                <span key={b} className="text-[10px] text-slate-400 font-medium">{b}</span>
              ))}
            </div>
          </div>


          {/* ── RIGHT: Mini Calendar ── */}
          <div className="flex flex-col items-center justify-center p-8 md:p-10">
            <div className="w-full max-w-[260px]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2545F3] mb-4 text-center">Book a Slot</p>
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 shadow-2xl">
                <MiniCalendar onBookConsultation={handleBookConsultation} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
