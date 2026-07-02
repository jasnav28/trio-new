"use client";

import React from "react";
import { cn } from "@/lib/utils";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface CalendarDayProps {
  day: number | string;
  isHeader?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day, isHeader, isToday, isSelected, onClick }) => {
  const highlight = !isHeader && isSelected;
  return (
    <div
      className={cn(
        "col-span-1 row-span-1 flex h-7 w-7 items-center justify-center",
        !isHeader && "rounded-lg",
        highlight && "bg-[#2545F3] text-white shadow-md",
        !highlight && !isHeader && "text-slate-300 hover:bg-white/10 cursor-pointer transition-colors"
      )}
      onClick={!isHeader ? onClick : undefined}
    >
      <span className={cn("font-medium", isHeader ? "text-[9px] text-slate-500 uppercase tracking-wider" : "text-xs")}>
        {day}
      </span>
    </div>
  );
};

interface MiniCalendarProps {
  onBookConsultation?: () => void;
  className?: string;
}

export function MiniCalendar({ onBookConsultation, className }: MiniCalendarProps) {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const firstDayOfWeek = new Date(currentYear, today.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const todayDate = today.getDate();

  const [selectedDate, setSelectedDate] = React.useState<number>(todayDate);
  const [userName, setUserName] = React.useState<string>("");

  const handleBook = () => {
    if (!userName.trim()) {
      alert("Please enter your name.");
      return;
    }
    const dateStr = `${selectedDate} ${currentMonth} ${currentYear}`;
    const message = `Hello, I am ${userName.trim()}. I would like to book a consultation on ${dateStr}.`;
    const whatsappUrl = `https://wa.me/919591578333?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    if (onBookConsultation) onBookConsultation();
  };

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-bold text-white">
            {currentMonth} {currentYear}
          </p>
          <p className="text-[10px] text-slate-400">30 min consultation</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-medium">Available</span>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-3">
        {/* Day headers */}
        {DAY_NAMES.map(d => (
          <CalendarDay key={d} day={d} isHeader />
        ))}
        {/* Empty leading cells */}
        {Array(firstDayOfWeek).fill(null).map((_, i) => (
          <div key={`e-${i}`} className="h-7 w-7" />
        ))}
        {/* Days */}
        {Array(daysInMonth).fill(null).map((_, i) => (
          <CalendarDay 
            key={i + 1} 
            day={i + 1} 
            isToday={i + 1 === todayDate}
            isSelected={i + 1 === selectedDate}
            onClick={() => setSelectedDate(i + 1)}
          />
        ))}
      </div>

      {/* Name Input */}
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 mb-3 outline-none focus:border-[#2545F3] transition-colors"
      />

      {/* Book button */}
      <button
        onClick={handleBook}
        className="mt-auto w-full py-2.5 rounded-xl bg-[#2545F3] hover:bg-[#1b36c7] text-white text-xs font-bold tracking-wide transition-colors cursor-pointer"
      >
        Book Free Consultation →
      </button>
    </div>
  );
}
