import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users, ShieldCheck, HeadphonesIcon, Timer, IndianRupee, Briefcase, Building2, FileText, ArrowRight } from 'lucide-react';

const plans = [
  {
    title: 'Proprietorship\nRegistration',
    icon: Briefcase,
    price: '3,000',
    popular: false,
    includes: [
      'Proprietorship Business Setup',
      'GST Registration',
      'MSME (Udyam) Registration',
      'Basic Business Compliance Guidance',
      'Account Opening Assistance',
    ],
    turnaround: '3–5 Working Days',
    idealFor: 'Freelancers, Traders, Consultants,\nSmall Business Owners, and Startups.',
  },
  {
    title: 'Private Limited /\nLLP Registration',
    icon: Building2,
    price: '5,000',
    popular: true,
    includes: [
      'Name Reservation (RUN/SPICe+)',
      'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)',
      'Certificate of Incorporation (COI)',
      'PAN & TAN Application',
      'MOA & AOA Drafting and Filing',
      'Company Incorporation Filing with MCA',
      'Account Opening Assistance',
    ],
    turnaround: '5–12 Working Days',
    idealFor: 'Startups, Growing Businesses, Investors,\nand Companies seeking limited liability\nprotection.',
  },
  {
    title: 'Income Tax Return\n(ITR) Filing',
    icon: FileText,
    price: '1,000',
    popular: false,
    includes: [
      'Income Tax Return Preparation & Filing',
      'Tax Computation Review',
      'Verification & Submission Assistance',
      'Guidance on Applicable Deductions\nand Exemptions',
      'Post-Filing Support',
    ],
    turnaround: '3–5 Working Days',
    idealFor: 'Freelancers, Traders, Consultants,\nSmall Business Owners, and Startups.',
  },
];

const bottomBadges = [
  { icon: ShieldCheck, title: '100% Secure', desc: 'Your data is safe with us' },
  { icon: HeadphonesIcon, title: 'Expert Support', desc: 'Get help from professionals' },
  { icon: Timer, title: 'On-Time Delivery', desc: 'We value your time' },
  { icon: IndianRupee, title: 'Transparent Pricing', desc: 'No hidden charges' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const }
  })
};

export function PricingSection() {
  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-[#FAFBFF] py-20 md:py-28 font-sans text-slate-800">
      
      {/* Subtle Black Filter Shade */}
      <div className="absolute inset-0 bg-black/[0.03] pointer-events-none z-0" />

      {/* Subtle Dot Background Pattern (like in image) */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#2563EB 2px, transparent 2px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      {/* Soft gradient bursts for the background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-70 translate-x-1/2 translate-y-1/4 pointer-events-none" />

      {/* Fade out bottom overlay for transitioning to the next dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-blue-100/50">
              PRICING PLANS
            </span>
          </motion.div>
          <motion.h2 custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">
            Simple. Transparent. Value Driven.
          </motion.h2>
          <motion.p custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Choose the right plan for your business needs. All plans include expert support and a commitment to your success.
          </motion.p>
        </div>

        {/* ── PRICING CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-20 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              custom={3 + idx} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeUp}
              className={`relative bg-white rounded-2xl flex flex-col h-full shadow-[0_12px_40px_rgba(0,0,0,0.05)] border transition-all duration-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] ${
                plan.popular ? 'border-[#2563EB] shadow-[0_20px_60px_rgba(37,99,235,0.15)] md:-mt-4 md:mb-[-1rem] z-10' : 'border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2563EB] text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-6 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 shadow-inner">
                    <plan.icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0F172A] leading-tight whitespace-pre-line">
                    {plan.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-1">Starting From</p>
                  <div className="flex items-baseline text-[#2563EB]">
                    <span className="text-4xl font-black tracking-tight">₹{plan.price}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-6 flex-grow flex flex-col">
                <h4 className="text-[11px] font-bold text-slate-900 mb-4 uppercase tracking-wider">What's Included</h4>
                <ul className="space-y-3 mb-8">
                  {plan.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[13px] text-slate-600 font-medium whitespace-pre-line leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold text-slate-900 mb-2 uppercase tracking-wider">Turnaround Time</h4>
                    <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
                      <Clock className="w-4 h-4 text-[#2563EB]" />
                      <span>{plan.turnaround}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-[10px] font-bold text-slate-900 mb-2 uppercase tracking-wider">Ideal For</h4>
                    <div className="flex items-start gap-2 text-slate-500 text-xs font-medium whitespace-pre-line leading-relaxed">
                      <Users className="w-4 h-4 mt-0.5 text-[#2563EB] shrink-0" />
                      <span>{plan.idealFor}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      const cleanTitle = plan.title.replace(/\n/g, ' ');
                      const message = `Hello, I am interested in the ${cleanTitle} plan for ₹${plan.price}. Please help me get started.`;
                      const whatsappUrl = `https://wa.me/919591578333?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group ${
                      plan.popular 
                        ? 'bg-[#2563EB] text-white hover:bg-blue-700 shadow-md hover:shadow-xl hover:shadow-blue-500/20' 
                        : 'bg-white border-2 border-blue-100 text-[#2563EB] hover:border-[#2563EB] hover:bg-blue-50'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM TRUST BADGES ── */}
        <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-y-8 gap-x-4 pt-10 border-t border-slate-200/60">
          {bottomBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 md:gap-4 px-2 w-[45%] md:w-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                <badge.icon className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
              </div>
              <div>
                <h5 className="text-[11px] md:text-sm font-bold text-slate-900 leading-tight">{badge.title}</h5>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium mt-0.5">{badge.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default PricingSection;
