"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Users,
  Calendar,
  Heart,
  DollarSign,
  Award,
  MapPin,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 72,
    suffix: "+",
    label: "செயலில் உள்ள உறுப்பினர்கள்",
    description: "அனைத்து கிளைகளிலும் அர்ப்பணிப்புடன் செயல்படும் தன்னார்வத் தொண்டர்கள்",
  },
  {
    icon: Calendar,
    value: 126,
    suffix: "+",
    label: "நிறைவு பெற்ற திட்டங்கள்",
    description: "சமூக முன்னேற்றத்தை நோக்கி வெற்றிகரமாக செயல்படுத்தப்பட்ட முயற்சிகள்",
  },
  {
    icon: Heart,
    value: 6000,
    suffix: "+",
    label: "பயன்பெற்ற உள்ளங்கள்",
    description: "எங்கள் பணியால் நேர்மறை மாற்றம் கண்ட மக்களின் வாழ்க்கைகள்",
  },
  {
    icon: IndianRupee,
    value: 550000,
    suffix: "+",
    label: "நிதி பயன்படுத்தப்பட்டது",
    prefix: "₹",
    description: "சமூக வளர்ச்சிக்காக அர்ப்பணிக்கப்பட்ட பொருளாதார ஆதாரங்கள்",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "விருதுகள் பெற்றோம்",
    description: "சிறந்த சேவைக்காக பெற்ற பாராட்டுகளும் அங்கீகாரங்களும்",
  },
  {
    icon: MapPin,
    value: 11,
    suffix: "",
    label: "செயலில் உள்ள ஜோன்கள்",
    description: "தமிழகத்தின் பல பகுதிகளில் சமூக சேவையில் ஈடுபடும் கிளைகள்",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} />;
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            {`நமது முயற்சி – இறைவனின் கொடை`}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            அர்ப்பணிப்பும் நம்பிக்கையும் இணைந்திடும் போது முயற்சி வெற்றி பெறுகிறது; அதுவே இறைவனின் அருளும் நமக்கான உண்மையான கொடையும் ஆகும்.

          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-[#90000a] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-[#90000a] rounded-xl mb-6 shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Stats */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`h-full bg-[#90000a] rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-[#90000a] rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">ஒவ்வொரு நாளும் வளர்கிறோம்</h3>
            <p className="text-white text-sm max-w-2xl mx-auto">
              எங்கள் தாக்கம் நாளுக்கு நாள் விரிவடைந்து வருகிறது; சமூக மாற்றத்திற்காக
              உற்சாகமுடன் இணையும் நபர்கள் தமிழகமெங்கும் நம்பிக்கையையும் நன்மையையும் பரப்புகின்றனர்.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
