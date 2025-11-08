"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import blogData from "@/data/blog.json";

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const x = useMotionValue(0);

  const posts = blogData.posts;

  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView, posts.length]);

  useEffect(() => {
    const controls = animate(x, -currentIndex * 100, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });

    return controls.stop;
  }, [currentIndex, x]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stories of Change
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Read about our community initiatives, success stories, and the
            positive impact we're making together.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              className="flex"
              style={{
                x: useTransform(x, (value) => `${value}%`),
              }}
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image Side */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden ">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                          <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="space-y-6"
                    >
                      {/* Meta Information */}
                      <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Read More Button */}
                      <div className="flex items-center space-x-4">
                        <Link href={`/blog/${post.id}`}>
                          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white group">
                            Read Full Story
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>

                      {/* Social Share */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Share:
                        </span>
                        <div className="flex space-x-2">
                          {["Facebook", "Twitter", "LinkedIn"].map(
                            (platform) => (
                              <button
                                key={platform}
                                className="w-8 h-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                                aria-label={`Share on ${platform}`}
                              >
                                <span className="text-xs font-bold">
                                  {platform[0]}
                                </span>
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-2 mt-8"
        >
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-emerald-600 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
            />
          ))}
        </motion.div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
            >
              View All Stories
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
