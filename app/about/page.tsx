"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Heart,
  Award,
  Calendar,
  Globe,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const values = [
  {
    icon: Users,
    title: "Community First",
    description:
      "We believe in putting community needs at the center of everything we do, fostering inclusive growth and development.",
  },
  {
    icon: Heart,
    title: "Compassionate Service",
    description:
      "Our work is driven by empathy and genuine care for those we serve, ensuring meaningful and lasting impact.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in all our initiatives, delivering quality programs that create real change.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "While we work locally, we think globally, applying international best practices to our community programs.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Foundation",
    description:
      "Imaam Royals Salem chapter was established with 15 founding members committed to community service.",
    milestone: "Started with education support for 50 children",
  },
  {
    year: "2021",
    title: "Expansion",
    description:
      "Launched healthcare initiatives and established Velur chapter, expanding our reach to rural communities.",
    milestone: "Served 500+ families through health camps",
  },
  {
    year: "2022",
    title: "Growth",
    description:
      "Opened Elampillai chapter and launched environmental conservation programs across all chapters.",
    milestone: "Planted 1000+ trees and cleaned 50+ public spaces",
  },
  {
    year: "2023",
    title: "Recognition",
    description:
      "Received state recognition for outstanding community service and leadership development programs.",
    milestone: "Trained 100+ young leaders",
  },
  {
    year: "2024",
    title: "Innovation",
    description:
      "Launched digital initiatives and expanded partnerships with government and corporate organizations.",
    milestone: "Impacted 3000+ lives through various programs",
  },
];

const achievements = [
  {
    number: "55+",
    label: "Active Members",
    description: "Dedicated volunteers",
  },
  {
    number: "26+",
    label: "Projects Completed",
    description: "Successful initiatives",
  },
  {
    number: "3K+",
    label: "Lives Impacted",
    description: "Community beneficiaries",
  },
  {
    number: "₹5.5L+",
    label: "Funds Utilized",
    description: "Community investment",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
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
                About Imaam
              </h1>
              <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
                Empowering young leaders to create positive change in communities
                across Tamil Nadu through service, leadership development, and
                meaningful connections.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To create opportunities that empower young people to develop
                    the leadership skills, social responsibility, and
                    entrepreneurship necessary to improve themselves and their
                    communities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 text-green-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To be the leading global network of young active citizens who
                    create impact in their communities and foster positive change
                    that builds a more just and sustainable world.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These principles guide our actions and define our commitment to
                creating positive change.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#f4bcc0] rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#90000a]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From humble beginnings to significant impact - discover our growth
                story.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#db434d] to-[#90000a] rounded-full"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                      <div className="text-2xl font-bold text-[#90000a] mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {item.description}
                      </p>
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Milestone: {item.milestone}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-[#90000a] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        {/* <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to creating positive change.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-blue-200">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

        {/* Imaam Constitution */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Imaam Constitution
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our foundation is built on the principles and guidelines of Junior
                Chamber International.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Constitutional Framework
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Purpose
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        To provide development opportunities that empower young
                        people to create positive change.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Membership
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Open to individuals between 18-40 years committed to
                        personal and community development.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Activities
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Leadership training, community service, networking, and
                        personal development programs.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Resources & Documents
                  </h3>
                  <div className="space-y-4">
                    <Link
                      href="/documents/Imaam-constitution.pdf"
                      className="block"
                    >
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                            <span className="text-red-600 text-sm font-bold">
                              PDF
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              Imaam Constitution
                            </div>
                            <div className="text-sm text-gray-500">
                              Complete constitutional document
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/documents/bylaws.pdf" className="block">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-bold">
                              PDF
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              Chapter Bylaws
                            </div>
                            <div className="text-sm text-gray-500">
                              Local chapter regulations
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/documents/code-of-ethics.pdf" className="block">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                            <span className="text-green-600 text-sm font-bold">
                              PDF
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              Code of Ethics
                            </div>
                            <div className="text-sm text-gray-500">
                              Ethical guidelines and standards
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of a community that's making a real difference. Your
              journey of leadership and service starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Become a Member
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black dark:text-white hover:bg-white hover:text-blue-600"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
      </div>
      <Footer />

    </>
  );
}
