import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { Banner } from "../types";

interface BannerHeroProps {
  banners: Banner[];
  onNavigateTab: (tabId: string) => void;
}

export const BannerHero: React.FC<BannerHeroProps> = ({
  banners,
  onNavigateTab,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  // Maps banner targets directly to navigation action
  const handleBannerAction = (id: number) => {
    if (id === 1) {
      onNavigateTab("unidades");
    } else if (id === 2) {
      onNavigateTab("estrutura");
    } else if (id === 3) {
      onNavigateTab("equipe");
    }
  };

  return (
    <div
      className="relative h-[550px] md:h-[650px] w-full bg-zinc-950 overflow-hidden border-b border-zinc-900"
      id="adk-hero-slider"
    >
      {/* Slide Image Backgrounds and Details */}
      <AnimatePresence>
        {banners.map((slide, index) => {
          if (index !== currentSlide) return null;
          return (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
              id={`slide-panel-${slide.id}`}
            >
              {/* Image overlaid with high quality darkened sports gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-adk-dark via-adk-dark/62 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-adk-dark via-transparent to-transparent z-10 hidden md:block" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-102 filter brightness-[0.45]"
              />

              {/* Slide Content overlay */}
              <div className="absolute inset-0 z-20 flex items-end pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 w-full text-left">
                  <div className="max-w-3xl space-y-4">
                    {/* Badge */}
                    <div className="flex items-center space-x-2">
                      <span className="bg-adk-yellow text-zinc-950 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                        {slide.badge}
                      </span>
                      {slide.date && (
                        <span className="flex items-center text-xs text-zinc-300 font-mono gap-1">
                          <Calendar className="w-3.5 h-3.5 text-adk-yellow" />
                          {slide.date}
                        </span>
                      )}
                      {slide.tag && (
                        <span className="flex items-center text-xs text-zinc-400 font-mono gap-1 border-l border-zinc-805 pl-2">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                          {slide.tag}
                        </span>
                      )}
                    </div>

                    {/* Highly stylized tennis sports editorial headers using ADK identity colors */}
                    <h1 className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter leading-none">
                      {slide.title.split("ADK").map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-adk-yellow">ADK</span>
                          )}
                        </React.Fragment>
                      ))}
                    </h1>

                    <h3 className="text-lg md:text-xl font-bold text-zinc-200 mt-2">
                      {slide.subtitle}
                    </h3>

                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl font-sans font-light">
                      {slide.description}
                    </p>

                    {/* Main Actions */}
                    <div className="pt-3 flex flex-wrap gap-4">
                      <button
                        onClick={() => handleBannerAction(slide.id)}
                        className="group bg-adk-yellow text-zinc-950 font-black uppercase text-xs tracking-wider px-6 py-3 rounded flex items-center gap-2 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-adk-yellow/30 transition-all duration-300 pointer-events-auto cursor-pointer"
                        id={`slide-btn-primary-${slide.id}`}
                      >
                        {slide.linkText}
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <button
                        onClick={() => onNavigateTab("contato")}
                        className="text-white hover:text-adk-yellow border border-zinc-700 hover:border-adk-yellow font-black uppercase text-xs tracking-wider px-6 py-3 rounded transition-colors duration-300"
                        id={`slide-btn-sec-${slide.id}`}
                      >
                        Mais informações
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Slide Navigation controls */}
      <div
        className="absolute right-6 bottom-8 z-30 flex items-center space-x-2"
        id="slider-nav-arrows"
      >
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-zinc-900/80 hover:bg-adk-yellow text-white hover:text-zinc-950 border border-zinc-800 hover:border-adk-yellow transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-zinc-900/80 hover:bg-adk-yellow text-white hover:text-zinc-950 border border-zinc-800 hover:border-adk-yellow transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Staged Indicator dots */}
      <div
        className="absolute left-6 bottom-8 z-30 flex items-center space-x-2"
        id="slider-nav-dots"
      >
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentSlide
                ? "w-10 bg-adk-yellow"
                : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
