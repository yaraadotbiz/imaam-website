"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  ExternalLink,
  Users,
  Calendar,
  Heart,
  DollarSign,
  ZoomIn,
  ZoomOut,
  X,
  Maximize,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import chaptersData from "@/data/chapters.json";

// Mock organizational structure data
const organizationalStructure = {
  salem: {
    president: {
      name: "John Doe",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      email: "john@jciroyals.org",
      phone: "+91 9876543210",
    },
    mentor: {
      name: "Dr. Smith",
      photo:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      email: "smith@jciroyals.org",
      phone: "+91 9876543211",
    },
    pastPresident: {
      name: "Sarah Wilson",
      photo:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      email: "sarah@jciroyals.org",
      phone: "+91 9876543212",
    },
    secretary: {
      name: "Mike Johnson",
      photo:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      email: "mike@jciroyals.org",
      phone: "+91 9876543213",
    },
    treasurer: {
      name: "Emily Davis",
      photo:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
      email: "emily@jciroyals.org",
      phone: "+91 9876543214",
    },
    parliamentarian: {
      name: "David Brown",
      photo:
        "https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg",
      email: "david@jciroyals.org",
      phone: "+91 9876543215",
    },
    vicePresidents: {
      management: {
        name: "Lisa Chen",
        photo:
          "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg",
        email: "lisa@jciroyals.org",
        phone: "+91 9876543216",
      },
      business: {
        name: "Robert Taylor",
        photo:
          "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg",
        email: "robert@jciroyals.org",
        phone: "+91 9876543217",
      },
      training: {
        name: "Anna Martinez",
        photo:
          "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg",
        email: "anna@jciroyals.org",
        phone: "+91 9876543218",
      },
      growth: {
        name: "James Wilson",
        photo:
          "https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg",
        email: "james@jciroyals.org",
        phone: "+91 9876543219",
      },
      community: {
        name: "Maria Garcia",
        photo:
          "https://images.pexels.com/photos/1239292/pexels-photo-1239292.jpeg",
        email: "maria@jciroyals.org",
        phone: "+91 9876543220",
      },
      marketing: {
        name: "Kevin Lee",
        photo:
          "https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg",
        email: "kevin@jciroyals.org",
        phone: "+91 9876543221",
      },
    },
    directors: {
      management: {
        name: "Tom Anderson",
        photo:
          "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg",
        email: "tom@jciroyals.org",
        phone: "+91 9876543222",
      },
      business: {
        name: "Rachel Green",
        photo:
          "https://images.pexels.com/photos/1239293/pexels-photo-1239293.jpeg",
        email: "rachel@jciroyals.org",
        phone: "+91 9876543223",
      },
      training: {
        name: "Chris Evans",
        photo:
          "https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg",
        email: "chris@jciroyals.org",
        phone: "+91 9876543224",
      },
      growth: {
        name: "Sophie Turner",
        photo:
          "https://images.pexels.com/photos/1239294/pexels-photo-1239294.jpeg",
        email: "sophie@jciroyals.org",
        phone: "+91 9876543225",
      },
      community: {
        name: "Alex Johnson",
        photo:
          "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg",
        email: "alex@jciroyals.org",
        phone: "+91 9876543226",
      },
      marketing: {
        name: "Emma Stone",
        photo:
          "https://images.pexels.com/photos/1239295/pexels-photo-1239295.jpeg",
        email: "emma@jciroyals.org",
        phone: "+91 9876543227",
      },
    },
    officers: {
      ladyChairperson: {
        name: "Grace Kelly",
        photo:
          "https://images.pexels.com/photos/1239296/pexels-photo-1239296.jpeg",
        email: "grace@jciroyals.org",
        phone: "+91 9876543228",
      },
      international: {
        name: "Ryan Cooper",
        photo:
          "https://images.pexels.com/photos/2379009/pexels-photo-2379009.jpeg",
        email: "ryan@jciroyals.org",
        phone: "+91 9876543229",
      },
      mrf: {
        name: "Olivia Parker",
        photo:
          "https://images.pexels.com/photos/1239297/pexels-photo-1239297.jpeg",
        email: "olivia@jciroyals.org",
        phone: "+91 9876543230",
      },
      editor: {
        name: "Daniel Craig",
        photo:
          "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg",
        email: "daniel@jciroyals.org",
        phone: "+91 9876543231",
      },
    },
  },
};

// Mock gallery images for each chapter
const chapterGalleries = {
  salem: [
    {
      id: 1,
      url: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg",
      title: "Community Health Camp",
      location: "Salem District Hospital",
      coordinates: "11.6643° N, 78.1460° E",
      venue: "Salem District Hospital, Salem",
      date: "March 15, 2024",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/8500452/pexels-photo-8500452.jpeg",
      title: "Education Drive",
      location: "Government School Salem",
      coordinates: "11.6643° N, 78.1460° E",
      venue: "Government Higher Secondary School",
      date: "March 10, 2024",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      title: "Leadership Summit",
      location: "Salem Convention Center",
      coordinates: "11.6643° N, 78.1460° E",
      venue: "Salem Convention Center",
      date: "March 5, 2024",
    },
  ],
  velur: [
    {
      id: 1,
      url: "https://images.pexels.com/photos/6238022/pexels-photo-6238022.jpeg",
      title: "Rural Development",
      location: "Velur Village",
      coordinates: "11.1271° N, 78.0081° E",
      venue: "Velur Community Center",
      date: "March 12, 2024",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg",
      title: "Environmental Cleanup",
      location: "Velur Lake",
      coordinates: "11.1271° N, 78.0081° E",
      venue: "Velur Lake Area",
      date: "March 8, 2024",
    },
  ],
  elampillai: [
    {
      id: 1,
      url: "https://images.pexels.com/photos/6303761/pexels-photo-6303761.jpeg",
      title: "Senior Care Program",
      location: "Elampillai Old Age Home",
      coordinates: "11.5816° N, 78.1348° E",
      venue: "Elampillai Senior Care Center",
      date: "March 14, 2024",
    },
  ],
};

export default function ChaptersPage() {
  const [selectedChapter, setSelectedChapter] = useState("salem");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredMember, setHoveredMember] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const currentChapter = chaptersData.chapters.find(
    (chapter) => chapter.id === selectedChapter
  );
  //@ts-ignore
  const currentGallery = chapterGalleries[selectedChapter] || [];
  //@ts-ignore
  const currentOrgStructure =
    //@ts-ignore
    organizationalStructure[selectedChapter] || organizationalStructure.salem;

  const openImageViewer = (imageIndex: any) => {
    setCurrentImageIndex(imageIndex);
    setSelectedImage(currentGallery[imageIndex]);
    setZoomLevel(1);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentGallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentGallery[nextIndex]);
    setZoomLevel(1);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentGallery[prevIndex]);
    setZoomLevel(1);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));

  const MemberCard = ({ member, title, size = "normal", delay = 0 }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className={`relative group cursor-pointer ${
        size === "large"
          ? "w-32 h-32"
          : size === "medium"
          ? "w-24 h-24"
          : "w-20 h-20"
      }`}
      onMouseEnter={() => setHoveredMember({ ...member, title })}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <div
        className={`w-full h-full rounded-full overflow-hidden border-4 border-blue-600 shadow-lg ${
          size === "large" ? "border-6" : ""
        }`}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div
          className={`font-semibold text-gray-900 dark:text-white ${
            size === "large" ? "text-sm" : "text-xs"
          }`}
        >
          {member.name}
        </div>
        <div
          className={`text-blue-600 ${
            size === "large" ? "text-xs" : "text-xs"
          }`}
        >
          {title}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-16">
      {/* Chapter Dropdown Navigation */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              JCI Royals Chapters
            </h1>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span className="font-medium">
                  {currentChapter?.name} Chapter
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                  >
                    {chaptersData.chapters.map((chapter) => (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          setSelectedChapter(chapter.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          selectedChapter === chapter.id
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <div className="font-medium">{chapter.name}</div>
                        <div className="text-sm text-gray-500">
                          {chapter.location}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Gallery Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentChapter?.name} Chapter Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Latest events and activities from our {currentChapter?.name}{" "}
              chapter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentGallery.map((image: any, index: number) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative cursor-pointer"
                onClick={() => openImageViewer(index)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <div className="flex items-center space-x-2 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{image.location}</span>
                      </div>
                      <div className="text-xs text-gray-200">{image.date}</div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentChapter?.name} Chapter Statistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our impact and achievements in numbers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                label: "Events Conducted",
                value: currentChapter?.totalEvents,
                color: "from-blue-500 to-blue-600",
                progress: 85,
              },
              {
                icon: Heart,
                label: "Beneficiaries Helped",
                value: currentChapter?.totalBeneficiaries,
                color: "from-red-500 to-red-600",
                progress: 92,
              },
              {
                icon: Users,
                label: "Members Involved",
                value: currentChapter?.totalMembers,
                color: "from-green-500 to-green-600",
                progress: 78,
              },
              {
                icon: DollarSign,
                label: "Funds Utilized",
                value: `₹${currentChapter?.totalFunds?.toLocaleString()}`,
                color: "from-yellow-500 to-yellow-600",
                progress: 88,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-6 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {stat.label}
                  </h3>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${stat.progress}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                  />
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  {stat.progress}% of annual target
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Tree Structure */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentChapter?.name} Chapter Organization
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet our leadership team and organizational structure
            </p>
          </motion.div>

          <div className="relative">
            {/* Top Level - President with Mentor and Past President */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex items-center space-x-16">
                <MemberCard
                  member={currentOrgStructure.mentor}
                  title="Mentor"
                  size="medium"
                  delay={0.1}
                />
                <MemberCard
                  member={currentOrgStructure.president}
                  title="President"
                  size="large"
                  delay={0}
                />
                <MemberCard
                  member={currentOrgStructure.pastPresident}
                  title="Immediate Past President"
                  size="medium"
                  delay={0.2}
                />
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-blue-600"></div>
            </div>

            {/* Second Level - Secretary, Treasurer, Parliamentarian */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex items-center space-x-16">
                <MemberCard
                  member={currentOrgStructure.secretary}
                  title="Secretary"
                  delay={0.3}
                />
                <MemberCard
                  member={currentOrgStructure.treasurer}
                  title="Treasurer"
                  delay={0.4}
                />
                <MemberCard
                  member={currentOrgStructure.parliamentarian}
                  title="Parliamentarian"
                  delay={0.5}
                />
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-blue-600"></div>
            </div>

            {/* Third Level - Vice Presidents */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Vice Presidents
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <MemberCard
                  member={currentOrgStructure.vicePresidents.management}
                  title="VP Management"
                  delay={0.6}
                />
                <MemberCard
                  member={currentOrgStructure.vicePresidents.business}
                  title="VP Business"
                  delay={0.7}
                />
                <MemberCard
                  member={currentOrgStructure.vicePresidents.training}
                  title="VP Training"
                  delay={0.8}
                />
                <MemberCard
                  member={currentOrgStructure.vicePresidents.growth}
                  title="VP Growth & Development"
                  delay={0.9}
                />
                <MemberCard
                  member={currentOrgStructure.vicePresidents.community}
                  title="VP Community Development"
                  delay={1.0}
                />
                <MemberCard
                  member={currentOrgStructure.vicePresidents.marketing}
                  title="VP Promotion & Marketing"
                  delay={1.1}
                />
              </div>
            </div>

            {/* Fourth Level - Directors */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Directors
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <MemberCard
                  member={currentOrgStructure.directors.management}
                  title="Director Management"
                  delay={1.2}
                />
                <MemberCard
                  member={currentOrgStructure.directors.business}
                  title="Director Business"
                  delay={1.3}
                />
                <MemberCard
                  member={currentOrgStructure.directors.training}
                  title="Director Training"
                  delay={1.4}
                />
                <MemberCard
                  member={currentOrgStructure.directors.growth}
                  title="Director Growth & Development"
                  delay={1.5}
                />
                <MemberCard
                  member={currentOrgStructure.directors.community}
                  title="Director Community Development"
                  delay={1.6}
                />
                <MemberCard
                  member={currentOrgStructure.directors.marketing}
                  title="Director Promotion & Marketing"
                  delay={1.7}
                />
              </div>
            </div>

            {/* Fifth Level - Officers */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Officers
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <MemberCard
                    member={currentOrgStructure.officers.ladyChairperson}
                    title="Lady JC Chairperson"
                    delay={1.8}
                  />
                  <MemberCard
                    member={currentOrgStructure.officers.international}
                    title="Officer International"
                    delay={1.9}
                  />
                  <MemberCard
                    member={currentOrgStructure.officers.mrf}
                    title="Officer MRF & Biddings"
                    delay={2.0}
                  />
                  <MemberCard
                    member={currentOrgStructure.officers.editor}
                    title="Editor"
                    delay={2.1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeImageViewer}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
                <button
                  onClick={zoomOut}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={zoomIn}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={closeImageViewer}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Arrows */}
              {currentGallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  //@ts-ignore
                  src={selectedImage.url}
                  //@ts-ignore
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              </div>

              {/* Image Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {
                    //@ts-ignore
                    selectedImage.title
                  }
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Location:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {
                        //@ts-ignore
                        selectedImage.location
                      }
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Date:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {
                        //@ts-ignore
                        selectedImage.date
                      }
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Coordinates:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {
                        //@ts-ignore
                        selectedImage.coordinates
                      }
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Venue:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {
                        //@ts-ignore
                        selectedImage.venue
                      }
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    //@ts-ignore
                    href={`https://maps.google.com/?q=${selectedImage.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Member Hover Card */}
      <AnimatePresence>
        {hoveredMember && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm"
          >
            <div className="flex items-center space-x-3 mb-3">
              <img
                //@ts-ignore
                src={hoveredMember.photo}
                //@ts-ignore
                alt={hoveredMember.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {
                    //@ts-ignore
                    hoveredMember.name
                  }
                </div>
                <div className="text-sm text-blue-600">
                  {
                    //@ts-ignore
                    hoveredMember.title
                  }
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  {
                    //@ts-ignore
                    hoveredMember.email
                  }
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  {
                    //@ts-ignore
                    hoveredMember.phone
                  }
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
