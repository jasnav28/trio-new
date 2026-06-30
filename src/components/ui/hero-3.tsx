"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn
import { ArrowRight } from "lucide-react";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
}

// Reusable Button component styled like in the image
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 px-8 py-3 rounded-full bg-red-500 text-white font-semibold shadow-lg transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
  >
    {children}
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full h-screen overflow-hidden bg-background flex flex-col items-center justify-center text-center px-4",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
        >
          {typeof title === 'string' ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Animated Image Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-[320px] md:h-[380px] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden z-20">
        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => {
            // Helper to get service title & description dynamically
            const getServiceDetails = (imgUrl: string) => {
              if (imgUrl.includes("BSS.webp")) {
                return {
                  title: "Business Startup Setup",
                  desc: "Incorporate Private Limited, LLP, Partnership, and other corporate structures with complete setup assistance."
                };
              }
              if (imgUrl.includes("BRL.webp")) {
                return {
                  title: "Registrations & Licenses",
                  desc: "Instant registration of GST, MSME/Udyam, Shop Act, FSSAI Food licenses, and other regulatory permissions."
                };
              }
              if (imgUrl.includes("CLC.webp")) {
                return {
                  title: "Company/LLP Compliance",
                  desc: "Keep your business fully compliant with annual ROC returns, bookkeeping, and director updates."
                };
              }
              if (imgUrl.includes("LLP.webp")) {
                return {
                  title: "Labor Law Compliance",
                  desc: "Register and file returns for Provident Fund (PF), ESIC, Professional Tax, and payroll audits."
                };
              }
              if (imgUrl.includes("NPE.webp")) {
                return {
                  title: "Non-Profit Setup (NGO)",
                  desc: "Establish Section 8 Companies, Charitable Trusts, or Societies with tax-exemption registrations."
                };
              }
              if (imgUrl.includes("TIS.webp")) {
                return {
                  title: "Trademark & IP Services",
                  desc: "Protect your logo, brand name, and original creations with Trademark, Patent, and Copyright filings."
                };
              }
              if (imgUrl.includes("CWU.webp")) {
                return {
                  title: "Closing & Winding Up",
                  desc: "Frictionless legal winding up and official strike-off support for defunct companies & LLPs."
                };
              }
              return {
                title: "Professional Services",
                desc: "Complete registration, filing, and legal compliance support for businesses of all sizes."
              };
            };

            const details = getServiceDetails(src);

            return (
              <div
                key={index}
                className="group flex flex-col justify-between w-64 md:w-72 h-[280px] md:h-[320px] flex-shrink-0 bg-card border border-border rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-all duration-300 overflow-hidden"
                style={{
                  rotate: `${(index % 2 === 0 ? -1 : 1.5)}deg`,
                }}
              >
                {/* Image Container with aspect ratio, internal padding and contain */}
                <div className="relative aspect-[4/3] w-full p-0 flex items-center justify-center bg-white border-b border-border overflow-hidden">
                  <img
                    src={src}
                    alt={details.title}
                    className="w-full h-full object-contain select-none pointer-events-none group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
                <div className="p-4 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors duration-200">
                      {details.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed font-sans line-clamp-2">
                      {details.desc}
                    </p>
                  </div>

                  {/* CTA with Arrow */}
                  <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-semibold text-primary mt-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
