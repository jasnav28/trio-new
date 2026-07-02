import { motion } from 'framer-motion';
import { ShieldCheck, User, Lightbulb, Handshake, TrendingUp, Target } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We act with honesty and transparency' },
  { icon: User, title: 'Client First', desc: 'Our clients’ success is our priority' },
  { icon: Lightbulb, title: 'Expertise', desc: 'Deep knowledge, practical solutions' },
  { icon: Handshake, title: 'Reliability', desc: 'Count on us for consistent support' },
  { icon: TrendingUp, title: 'Growth', desc: 'We grow together with your business' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const }
  })
};

export function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[#F8FAFC] py-16 md:py-24 font-sans text-slate-800" style={{ backgroundImage: "url('/a.webp')" }}>
      
      {/* Subtle Black Filter Shade */}
      <div className="absolute inset-0 bg-black/[0.03] pointer-events-none z-0" />

      {/* Fade out bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#FAFBFF] z-20 pointer-events-none" />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20 items-start">
        
        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col pt-4">
          
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-sm font-bold text-[#2563EB] tracking-widest uppercase mb-4 block">
              ABOUT US
            </span>
          </motion.div>

          <motion.h2 custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] text-[#0F172A] mb-4">
            Partnering in Compliance.<br />
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">Growth.</span>
          </motion.h2>

          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-16 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#93C5FD] rounded-full mb-8" />

          <motion.p custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            We are a team of compliance experts, legal professionals, and industry specialists dedicated to simplifying regulatory complexities for businesses of all sizes.
          </motion.p>
          
          <motion.p custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-base md:text-lg text-slate-600 leading-relaxed mb-12">
            From startup registration to ongoing compliance management, we ensure your business stays compliant, so you can focus on what matters most—growing your business.
          </motion.p>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col relative">
          
          {/* Main Image Container */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
              alt="Business team discussing compliance" 
              className="w-full h-full object-cover object-center"
            />
            {/* Soft dark overlay at top for the floating card to pop slightly */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/20" />

            {/* Floating Mission Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-6 right-6 md:top-8 md:right-8 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.4)] max-w-[240px] border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-wide">Our Mission</h4>
              </div>
              <p className="text-blue-100 text-xs leading-relaxed font-medium">
                To simplify compliance and empower businesses to grow with confidence.
              </p>
            </motion.div>
          </motion.div>

          {/* Core Values Card (Overlapping image slightly on desktop) */}
          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative lg:-mt-12 bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-8 z-10 w-full mx-auto max-w-[95%] lg:max-w-full">
            <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">Our Core Values</h3>
            <div className="w-10 h-1 bg-[#2563EB] rounded-full mb-8" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 group-hover:border-[#2563EB] group-hover:bg-blue-50 transition-colors duration-300">
                    <val.icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <h5 className="text-xs font-bold text-[#0F172A] mb-1">{val.title}</h5>
                  <p className="text-[10px] text-slate-500 leading-tight px-2">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
