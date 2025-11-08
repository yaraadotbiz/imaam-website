"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Filter,
  Search,
  Eye,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import eventsData from "@/data/events.json";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const categories = [
  "All",
  "Community Service",
  "Education",
  "Environment",
  "Leadership",
  "Healthcare",
];
const statuses = ["All", "Completed", "Upcoming"];
const chapters = ["All", "Salem", "Velur", "Elampillai"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = useMemo(() => {
    return eventsData.events.filter((event) => {
      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "All" || event.status === selectedStatus;
      const matchesChapter =
        selectedChapter === "All" || event.chapter === selectedChapter;
      const matchesSearch =
        searchTerm === "" ||
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());

      return (
        matchesCategory && matchesStatus && matchesChapter && matchesSearch
      );
    });
  }, [selectedCategory, selectedStatus, selectedChapter, searchTerm]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
                Our Events & Projects
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Discover the initiatives that are making a real difference in
                communities across Tamil Nadu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200  dark:border-gray-700">
          <Link href={"https://eps.jciroyals.in/"} target="_blank" className="">
            <div className="relative max-w-7xl mx-auto h-[500px] rounded-xl mb-8">
              <Image
                src={"/assets/eps-img.jpg"}
                alt="eps-img"
                fill
                loading="lazy"
                quality={100}
                className="object-cover rounded-xl"
              />
            </div>
          </Link>
          <Link href={"https://ztws.jciroyals.in/"} target="_blank">
            <div className="relative max-w-7xl mx-auto h-[500px] rounded-xl mb-8">
              <Image
                src={"/assets/ztws-img.jpg"}
                alt="ztws-img"
                fill
                loading="lazy"
                quality={100}
                className="object-cover rounded-xl"
              />
            </div>
          </Link>
          <Link href={"https://admin.jciroyals.in"} target="_blank">
            <div className="relative max-w-7xl mx-auto h-[500px] rounded-xl mb-8 border-2 shadow-xl">
              <Image
                src={"/assets/admin-img.jpg"}
                alt="admin-img"
                fill
                loading="lazy"
                quality={100}
                className="object-cover rounded-xl object-top"
              />
            </div>
          </Link>
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>

            <div className="hidden lg:flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {chapters.map((chapter) => (
                  <option key={chapter} value={chapter}>
                    {chapter}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 grid grid-cols-1 gap-4"
              >
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {chapters.map((chapter) => (
                    <option key={chapter} value={chapter}>
                      {chapter}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
        </section>

        {/* <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or search terms.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.images[0]}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            event.status
                          )}`}
                        >
                          {event.status.charAt(0).toUpperCase() +
                            event.status.slice(1)}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.chapter}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                        <div>
                          <div className="flex items-center justify-center text-blue-600 mb-1">
                            <Users className="w-4 h-4" />
                          </div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">
                            {event.participants}
                          </div>
                          <div className="text-xs text-gray-500">
                            Participants
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center text-green-600 mb-1">
                            <Heart className="w-4 h-4" />
                          </div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">
                            {event.beneficiaries}
                          </div>
                          <div className="text-xs text-gray-500">
                            Beneficiaries
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center text-yellow-600 mb-1">
                            <DollarSign className="w-4 h-4" />
                          </div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">
                            ₹{event.funds.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">Funds</div>
                        </div>
                      </div>

                      <Link href={`/events/${event.id}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group/btn">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section> */}

        {/* <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Want to Join Our Next Event?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of the change! Join our upcoming events and help us create
              positive impact in communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Become a Volunteer
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
