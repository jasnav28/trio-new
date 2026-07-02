"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MiniCalendar } from "@/components/ui/mini-calendar";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 100, damping: 12 },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-card text-card-foreground shadow-2xl",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <img
          src={imageSrc}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* Content */}
        <motion.div
          className="relative z-10 grid h-full grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left: Text */}
          <div className="flex flex-col items-start text-left text-white">
            <motion.span
              variants={itemVariants}
              className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm"
            >
              Get Started Today
            </motion.span>
            <motion.h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 max-w-lg text-base text-neutral-300 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          {/* Right: Mini Calendar */}
          <motion.div
            className="flex w-full flex-col items-stretch justify-center"
            variants={itemVariants}
          >
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 shadow-2xl">
              <MiniCalendar onBookConsultation={onButtonClick} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
