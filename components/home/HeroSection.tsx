"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  Award,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroImages = [
  {
    url: "/assets/slide-1.jpg",
    title: "இமாம்களை வலுப்படுத்தி, உம்மாவை உயர்த்துவோம்",
    description: `விசுவாசத்தால் வழிநடத்தி, சேவையால் சமுதாயத்தை இணைத்து, 
    ஒற்றுமையால் ஒவ்வொரு உயிரையும் உயர்த்தும் தமிழக இமாம்கள் பேரவை.`
  },
  {
    url: "/assets/slide-2.jpg",
    title: "ஈமானின் ஒளியால் சமூக முன்னேற்றம்",
    description: `ஆன்மீக வழிகாட்டுதலின் மூலம் நல்வழி, நற்பண்பு மற்றும்
     நன்மை பரப்பும் உறுதியான இமாம்களின் இயக்கம்.`,
  },
  {
    url: "/assets/slide-3.png",
    title: "ஒற்றுமையால் உறுதியான உம்மா",
    description: `இமாம்களின் இணைப்பு, சமூகத்தின் வளர்ச்சி, மதப்பண்பின் ஒளி — ஒன்றிணைந்து உயர்வோம்.`
  },
  {
    url: "/assets/slide-4.png",
    title: "சேவையால் தலைமை, தலைமைக்குள் சேவை",
    description: `சமூக சேவையிலும், மத வழிநடத்தலிலும் முன்னேறி,
     மக்களின் நம்பிக்கையை வளர்க்கும் இமாம்களின் சக்தி.`,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImages[currentSlide].url})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {heroImages[currentSlide].title}
              </h1>
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base text-gray-200 mb-8 leading-relaxed font-mono"
            >
              {heroImages[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/membership">
                <Button
                  size="lg"
                  className="bg-[#90000a] hover:bg-[#90000a] text-white px-8 py-3 text-lg"
                >
                  உறுப்பினராக
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-[#90000a] hover:bg-white hover:text-black px-8 py-3 text-lg"
                >
                  நிகழ்வுகள்
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 max-w-lg"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#CCFFDC] rounded-full mb-2 mx-auto">
                  <Users className="w-6 h-6 text-[#90000a]" />
                </div>
                <div className="text-2xl font-bold text-white">72+</div>
                <div className="text-sm text-gray-300">உறுப்பினர்கள்</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#CCFFDC] rounded-full mb-2 mx-auto">
                  <Award className="w-6 h-6 text-[#90000a]" />
                </div>
                <div className="text-2xl font-bold text-white">126+</div>
                <div className="text-sm text-gray-300">நிறைவு பெற்ற திட்டங்கள்</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#CCFFDC] rounded-full mb-2 mx-auto">
                  <Heart className="w-6 h-6 text-[#90000a]" />
                </div>
                <div className="text-2xl font-bold text-white">6000+</div>
                <div className="text-sm text-gray-300">பயன்பெற்ற உள்ளங்கள்</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={` rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#90000a] scale-110 w-3 h-3" : "w-2 mt-0.5 h-2 bg-white/50"
              }`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all"
        >
          <Play
            className={`w-5 h-5 ${isAutoPlaying ? "opacity-100" : "opacity-50"
              }`}
          />
        </button>
      </div>
    </section>
  );
}
