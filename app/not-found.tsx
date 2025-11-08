// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-12 text-white overflow-hidden">
      {/* Background animated blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 2 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 bg-purple-500 rounded-full blur-[150px] z-0"
      />

      <div className="relative z-10 max-w-2xl text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Wrench
            size={80}
            className="text-yellow-400 mb-6 animate-spin-slow"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Page Under Development
          </h1>
          <p className="text-lg text-slate-300 max-w-lg mb-8">
            We're working hard to finish the development of this page. Hang
            tight, amazing things are coming your way soon!
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            <ArrowLeft size={18} />
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
