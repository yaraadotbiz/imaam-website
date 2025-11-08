"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Youtube, Facebook, Twitter, ExternalLink, Heart, MessageCircle, Share2, Play, Users, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Loading skeleton component
const LoadingSkeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`} />
);

// Social media stats
const socialStats = [
  {
    platform: 'Instagram',
    icon: Instagram,
    followers: '12.5K',
    engagement: '8.2%',
    color: 'from-pink-500 to-purple-600',
    handle: '@jciroyals'
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    followers: '8.3K',
    engagement: '12.5%',
    color: 'from-red-500 to-red-600',
    handle: 'JCI Royals'
  },
  {
    platform: 'Facebook',
    icon: Facebook,
    followers: '15.2K',
    engagement: '6.8%',
    color: 'from-blue-500 to-blue-600',
    handle: 'JCI Royals Salem'
  },
  {
    platform: 'Twitter',
    icon: Twitter,
    followers: '5.7K',
    engagement: '4.3%',
    color: 'from-sky-400 to-sky-600',
    handle: '@JCIRoyals'
  }
];

// Mock Instagram posts
const instagramPosts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
    caption: 'Community health camp reaching 200+ families in rural Salem! 🏥❤️ #CommunityService #Healthcare',
    likes: 245,
    comments: 18,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8500452/pexels-photo-8500452.jpeg',
    caption: 'Education is the key to breaking the cycle of poverty. Distributing books to 150 children today! 📚✨ #Education #Hope',
    likes: 189,
    comments: 12,
    timestamp: '1 day ago'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg',
    caption: 'Environmental cleanup drive completed! 1000kg of waste collected by our amazing volunteers 🌱🌍 #Environment #CleanUp',
    likes: 312,
    comments: 25,
    timestamp: '3 days ago'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    caption: 'Leadership summit 2024 - Empowering the next generation of changemakers! 💪🎯 #Leadership #Youth',
    likes: 156,
    comments: 8,
    timestamp: '5 days ago'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/6303761/pexels-photo-6303761.jpeg',
    caption: 'Bringing smiles to our senior citizens through care and companionship 👴👵❤️ #SeniorCare #Community',
    likes: 278,
    comments: 22,
    timestamp: '1 week ago'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/6238022/pexels-photo-6238022.jpeg',
    caption: 'Rural development project making a real difference in village infrastructure 🏘️🔧 #RuralDevelopment #Progress',
    likes: 203,
    comments: 15,
    timestamp: '1 week ago'
  }
];

// Mock YouTube videos
const youtubeVideos = [
  {
    id: 1,
    title: 'JCI Royals Community Health Camp 2024',
    thumbnail: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
    duration: '5:32',
    views: '2.1K',
    uploadDate: '3 days ago'
  },
  {
    id: 2,
    title: 'Educational Material Distribution Drive',
    thumbnail: 'https://images.pexels.com/photos/8500452/pexels-photo-8500452.jpeg',
    duration: '3:45',
    views: '1.8K',
    uploadDate: '1 week ago'
  },
  {
    id: 3,
    title: 'Environmental Cleanup Success Story',
    thumbnail: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg',
    duration: '4:12',
    views: '3.2K',
    uploadDate: '2 weeks ago'
  },
  {
    id: 4,
    title: 'Youth Leadership Summit Highlights',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    duration: '6:18',
    views: '1.5K',
    uploadDate: '3 weeks ago'
  }
];

export default function SocialMediaPage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#db434d] to-[#90000a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Connect With Us
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Follow our journey, share our mission, and be part of the positive change happening across Tamil Nadu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Social Media Stats */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Social Media Presence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join thousands of supporters across all platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialStats.map((stat, index) => (
                <motion.div
                  key={stat.platform}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {stat.platform}
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.followers}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {stat.engagement} engagement
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.handle}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-12"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-1 flex flex-wrap gap-1 shadow-lg">
                {['all', 'instagram', 'youtube', 'facebook', 'twitter'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 capitalize ${activeTab === tab
                      ? 'bg-[#90000a] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Instagram Feed */}
              {(activeTab === 'all' || activeTab === 'instagram') && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Instagram</h3>
                        <p className="text-sm text-gray-500">@jciroyals</p>
                      </div>
                      <Link href="https://instagram.com/jciroyals" className="ml-auto">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {loading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                          <div key={i} className="space-y-3">
                            <LoadingSkeleton className="h-48 w-full" />
                            <LoadingSkeleton className="h-4 w-3/4" />
                            <LoadingSkeleton className="h-4 w-1/2" />
                          </div>
                        ))
                      ) : (
                        instagramPosts.slice(0, 3).map((post) => (
                          <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <img
                              src={post.image}
                              alt="Instagram post"
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                {post.caption}
                              </p>
                              <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center space-x-4">
                                  <span className="flex items-center space-x-1">
                                    <Heart className="w-4 h-4" />
                                    <span>{post.likes}</span>
                                  </span>
                                  <span className="flex items-center space-x-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{post.comments}</span>
                                  </span>
                                </div>
                                <span>{post.timestamp}</span>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* YouTube Videos */}
              {(activeTab === 'all' || activeTab === 'youtube') && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Youtube className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">YouTube</h3>
                        <p className="text-sm text-gray-500">JCI Royals</p>
                      </div>
                      <Link href="https://youtube.com/@jciroyals" className="ml-auto">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-4">
                      {loading ? (
                        Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="flex space-x-3">
                            <LoadingSkeleton className="h-20 w-32 flex-shrink-0" />
                            <div className="flex-1 space-y-2">
                              <LoadingSkeleton className="h-4 w-full" />
                              <LoadingSkeleton className="h-3 w-2/3" />
                            </div>
                          </div>
                        ))
                      ) : (
                        youtubeVideos.map((video) => (
                          <div key={video.id} className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            <div className="relative flex-shrink-0">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-32 h-20 object-cover rounded-lg"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                  <Play className="w-4 h-4 text-white ml-0.5" />
                                </div>
                              </div>
                              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                                {video.duration}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                                {video.title}
                              </h4>
                              <div className="text-xs text-gray-500 space-y-1">
                                <div>{video.views} views</div>
                                <div>{video.uploadDate}</div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Facebook & Twitter Combined */}
              {(activeTab === 'all' || activeTab === 'facebook' || activeTab === 'twitter') && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="lg:col-span-1 space-y-6"
                >
                  {/* Facebook Widget */}
                  {(activeTab === 'all' || activeTab === 'facebook') && (
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Facebook className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Facebook</h3>
                          <p className="text-sm text-gray-500">JCI Royals Salem</p>
                        </div>
                        <Link href="https://facebook.com/jciroyals" className="ml-auto">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>

                      {loading ? (
                        <div className="space-y-4">
                          <LoadingSkeleton className="h-32 w-full" />
                          <LoadingSkeleton className="h-4 w-3/4" />
                          <LoadingSkeleton className="h-4 w-1/2" />
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">JR</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white">JCI Royals</div>
                                <div className="text-xs text-gray-500">2 hours ago</div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                              Proud to announce our latest community health camp reached over 200 families!
                              Thank you to all our volunteers who made this possible. 🏥❤️
                            </p>
                            <img
                              src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg"
                              alt="Facebook post"
                              className="w-full h-32 object-cover rounded-lg mb-3"
                            />
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center space-x-1">
                                  <Heart className="w-4 h-4" />
                                  <span>156</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>23</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Share2 className="w-4 h-4" />
                                  <span>12</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Twitter Widget */}
                  {(activeTab === 'all' || activeTab === 'twitter') && (
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center">
                          <Twitter className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Twitter</h3>
                          <p className="text-sm text-gray-500">@JCIRoyals</p>
                        </div>
                        <Link href="https://twitter.com/jciroyals" className="ml-auto">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>

                      {loading ? (
                        <div className="space-y-4">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="space-y-2">
                              <LoadingSkeleton className="h-4 w-full" />
                              <LoadingSkeleton className="h-4 w-2/3" />
                              <LoadingSkeleton className="h-3 w-1/3" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">JR</span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-gray-900 dark:text-white">JCI Royals</span>
                                  <span className="text-gray-500">@JCIRoyals</span>
                                  <span className="text-gray-500">·</span>
                                  <span className="text-gray-500 text-sm">3h</span>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                  Education is the most powerful weapon to change the world. Today we distributed books to 150+ children. Every child deserves quality education! 📚✨ #Education #CommunityService
                                </p>
                                <div className="flex items-center space-x-6 text-sm text-gray-500">
                                  <span className="flex items-center space-x-1 hover:text-sky-600 cursor-pointer">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>12</span>
                                  </span>
                                  <span className="flex items-center space-x-1 hover:text-green-600 cursor-pointer">
                                    <Share2 className="w-4 h-4" />
                                    <span>8</span>
                                  </span>
                                  <span className="flex items-center space-x-1 hover:text-red-600 cursor-pointer">
                                    <Heart className="w-4 h-4" />
                                    <span>45</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">JR</span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-gray-900 dark:text-white">JCI Royals</span>
                                  <span className="text-gray-500">@JCIRoyals</span>
                                  <span className="text-gray-500">·</span>
                                  <span className="text-gray-500 text-sm">1d</span>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                  🌱 Environmental cleanup drive completed! Our volunteers collected 1000kg of waste from public spaces. Together we can create a cleaner, greener future! #Environment #CleanUp
                                </p>
                                <div className="flex items-center space-x-6 text-sm text-gray-500">
                                  <span className="flex items-center space-x-1 hover:text-sky-600 cursor-pointer">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>18</span>
                                  </span>
                                  <span className="flex items-center space-x-1 hover:text-green-600 cursor-pointer">
                                    <Share2 className="w-4 h-4" />
                                    <span>15</span>
                                  </span>
                                  <span className="flex items-center space-x-1 hover:text-red-600 cursor-pointer">
                                    <Heart className="w-4 h-4" />
                                    <span>67</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Live Feed Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Live Social Feed
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time updates from all our social media platforms
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {instagramPosts.slice(0, 6).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={post.image}
                          alt="Social media post"
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm line-clamp-2">{post.caption}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs">
                            <span className="flex items-center space-x-1">
                              <Heart className="w-3 h-3" />
                              <span>{post.likes}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{post.comments}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Join Our Social Community
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Follow us on social media to stay updated with our latest initiatives and be part of the change.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialStats.map((social) => (
                  <Link key={social.platform} href={`#${social.platform.toLowerCase()}`}>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${social.color} hover:scale-105 transition-transform duration-300 text-white border-0`}
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      Follow on {social.platform}
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}