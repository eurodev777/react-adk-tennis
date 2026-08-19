import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { Banner } from "../types";

interface BannerHeroProps {
  banners: Banner[];
  onNavigateTab: (tabId: string) => void;
  onOpenUnit: (unitId: string) => void;
}

export const BannerHero: React.FC<BannerHeroProps> = ({
  banners,
  onNavigateTab,
  onOpenUnit,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1 = próximo
  // -1 = anterior
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);

    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setDirection(-1);

    setCurrentSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!banners.length) return;

    const timer = setInterval(() => {
      setDirection(1);

      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 12000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const handleBannerAction = (id: number) => {
    if (id === 1) {
      onNavigateTab("quemsomos");
    } else if (id === 2) {
      onOpenUnit("sp-sp");
    } else if (id === 3) {
      onNavigateTab("intensivo");
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x;

    // esquerda
    if (distance < -70 || velocity < -500) {
      handleNext();
      return;
    }

    // direita
    if (distance > 70 || velocity > 500) {
      handlePrev();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  if (!banners.length) return null;

  const slide = banners[currentSlide];

  return (
    <div
      className="
        relative
        h-[550px]
        md:h-[650px]
        w-full
        bg-zinc-950
        overflow-hidden
        border-b
        border-zinc-900
        touch-pan-y
      "
      id="adk-hero-slider"
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        mode="popLayout"
      >
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"

          transition={{
            x: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            },
          }}

          drag="x"

          // Faz acompanhar o dedo com liberdade
          dragConstraints={{
            left: 0,
            right: 0,
          }}

          // Quanto maior, mais acompanha o dedo
          dragElastic={1}

          // Movimento do dedo controla diretamente o slide
          dragMomentum={false}

          onDragEnd={handleDragEnd}

          style={{
            touchAction: "pan-y",
          }}

          className="
            absolute
            inset-0
            w-full
            h-full
            cursor-grab
            active:cursor-grabbing
          "
          id={`slide-panel-${slide.id}`}
        >
          {/* IMAGEM */}
          <img
            src={slide.image}
            alt={slide.title}
            draggable={false}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              brightness-[0.8]
              select-none
              pointer-events-none
            "
          />

          {/* CONTEÚDO */}
          <div className="absolute inset-0 z-20 flex items-end pb-16 md:pb-24 pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 w-full text-left">
              <div className="max-w-3xl space-y-4">

                {/* BADGES */}
                <div className="flex items-center space-x-2">
                  {slide.badge && (
                    <span className="bg-adk-yellow text-zinc-950 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                      {slide.badge}
                    </span>
                  )}

                  {slide.date && (
                    <span className="flex items-center text-xs text-zinc-300 font-mono gap-1">
                      <Calendar className="w-3.5 h-3.5 text-adk-yellow" />

                      {slide.date}
                    </span>
                  )}

                  {slide.tag && (
                    <span className="flex items-center text-xs text-zinc-400 font-mono gap-1 border-l border-zinc-800 pl-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />

                      {slide.tag}
                    </span>
                  )}
                </div>

                {/* TÍTULO */}
                <h1 className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter leading-none">
                  {slide.title.includes("ADK TENNIS")
                    ? slide.title
                        .split("ADK TENNIS")
                        .map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}

                            {i < arr.length - 1 && (
                              <span className="text-adk-yellow">
                                ADK TENNIS
                              </span>
                            )}
                          </React.Fragment>
                        ))
                    : slide.title}
                </h1>

                {/* SUBTÍTULO */}
                <h3 className="text-lg md:text-xl font-bold text-zinc-200 mt-2">
                  {slide.subtitle}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl font-sans font-light">
                  {slide.description}
                </p>

                {/* BOTÕES */}
                <div className="pt-3 flex flex-wrap gap-4 pointer-events-auto">
                  <button
                    onClick={() =>
                      handleBannerAction(slide.id)
                    }
                    className="
                      group
                      bg-adk-yellow
                      text-zinc-950
                      font-black
                      uppercase
                      text-xs
                      tracking-wider
                      px-6
                      py-3
                      rounded
                      flex
                      items-center
                      gap-2
                      transform
                      hover:-translate-y-1
                      hover:shadow-lg
                      hover:shadow-adk-yellow/30
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    {slide.linkText}

                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() =>
                      handleBannerAction(slide.id)
                    }
                    className="
                      text-white
                      hover:text-adk-yellow
                      border
                      border-zinc-700
                      hover:border-adk-yellow
                      font-black
                      uppercase
                      text-xs
                      tracking-wider
                      px-6
                      py-3
                      rounded
                      transition-colors
                      duration-300
                      cursor-pointer
                    "
                  >
                    Conheça nossas unidades
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* SETAS */}
      <div
        className="absolute right-6 bottom-8 z-30 flex items-center space-x-2"
        id="slider-nav-arrows"
      >
        <button
          onClick={handlePrev}
          className="
            p-3
            rounded-full
            bg-zinc-900/80
            hover:bg-adk-yellow
            text-white
            hover:text-zinc-950
            border
            border-zinc-800
            hover:border-adk-yellow
            transition-all
            duration-300
            cursor-pointer
          "
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="
            p-3
            rounded-full
            bg-zinc-900/80
            hover:bg-adk-yellow
            text-white
            hover:text-zinc-950
            border
            border-zinc-800
            hover:border-adk-yellow
            transition-all
            duration-300
            cursor-pointer
          "
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* DOTS */}
      <div
        className="absolute left-6 bottom-8 z-30 flex items-center space-x-2"
        id="slider-nav-dots"
      >
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
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