"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "/assets/gl-1.jpg",
    title: "இமாம்கள் மற்றும் உறுப்பினர்களுக்கான அரசியல் மற்றும் பாரம்பரிய நோக்கமுள்ள புதுப்பிப்பு பயிற்சி",
    description:
      "நாட்டு நடப்புகள், அரசியல் விழிப்புணர்வு மற்றும் பாரம்பரிய மதப்பயிற்சி சார்ந்த அறிவை புதுப்பிக்கும் நோக்கத்தில், அனைத்து இமாம்களுக்கும் உறுப்பினர்களுக்கும் சிறப்பு புதுப்பிப்பு பயிற்சி நடத்தப்படுகிறது. இந்த பயிற்சி வழியாக சமூக முன்னேற்றத்திற்கான தலைமையையும், இணக்கத்தையும் வலுப்படுத்தும் முயற்சி மேற்கொள்ளப்படுகிறது.",
    date: "22-12-2024",
    location: "ஒமலூர், சேலம்",
    participants: 54,
    category: "பயிற்சி",
  },
  {
    id: 2,
    url: "/assets/gl-2.jpg",
    title: "தலைவர்களை பாராட்டும் விழா",
    description: "சிறந்த தலைமைத்துவம், அர்ப்பணிப்பு மற்றும் சமூக சேவையில் முன்னிலை வகித்த தலைவர்களை கௌரவிக்கும் சிறப்பு விழா நடத்தப்படுகிறது. இது அவர்களின் பங்களிப்பை மதிக்கும் ஒரு சிறந்த தருணமாகும்.",
    date: "31-01-2025",
    location: "சேலம் ஜங்க்ஷன்",
    participants: 11,
    category: "தலைமைத்துவம்",
  },
  {
    id: 3,
    url: "/assets/gl-3.jpg",
    title: "இமாம்கள் பேரவையின் குடும்ப ஒன்று கூடல்",
    description:
      "எங்கள் அடுத்த தலைமுறையை நற்பண்பு, ஒற்றுமை மற்றும் நேர்மையான பாதைக்குத் திசைதிருப்பும் நோக்கத்தில் இமாம்கள் பேரவையின் குடும்ப ஒன்று கூடல் நடத்தப்படுகிறது. குடும்ப இணைப்பையும் ஆன்மீக வளர்ச்சியையும் வலுப்படுத்தும் சிறப்பான நிகழ்வு இது.",
    date: "12-02-2025",
    location: "வாழப்பாடி",
    participants: 28,
    category: "சமூக சேவை",
  },
  {
    id: 4,
    url: "/assets/gl-4.jpg",
    title: "இமாம்கள் மற்றும் உறுப்பினர்கள் பெருநாள் சந்திப்பு",
    description:
      "இமாம்கள் மற்றும் உறுப்பினர்கள் பெருநாளை மகிழ்ச்சியுடன் கொண்டாடும் நோக்கத்தில், உறவையும் ஒற்றுமையையும் வலுப்படுத்தும் சிறப்பு ஒன்று கூடல் நிகழ்வு உயிரியல் பூங்கா, சேலத்தில் நடைபெறுகிறது. இது மகிழ்ச்சி, பகிர்வு மற்றும் சகோதரத்துவத்தின் நாளாகும்.",
    date: "11-01-2025",
    location: "உயிரியல் பூங்கா, சேலம்",
    participants: 13,
    category: "கொண்டாட்டம்",
  },

  {
    id: 5,
    url: "/assets/gl-5.jpg",
    title: "இமாம்களை ஊக்குவிக்கும் உலகத் தரமான விருதுகள் வழங்கும் விழா",
    description:
      "மதப் பணியில் சிறந்து விளங்கும் இமாம்களை ஊக்குவிக்கும் நோக்கத்தில், அவர்களின் அர்ப்பணிப்பு மற்றும் சமூகச் சேவையை பாராட்டும் வகையில் உலகத் தரமான விருதுகள் மற்றும் பாராட்டுச் சான்றுகள் வழங்கப்படும் சிறப்பு விழா. இந்நிகழ்வு இமாம்களின் சேவைக்கு புதிய உந்துதலாக அமையும்.",
    date: "15-03-2025",
    location: "கே.எம்.பி. (KMB), சேலம்",
    participants: 500,
    category: "முன்னேற்றம்",
  },
  {
    id: 6,
    url: "/assets/gl-6.png",
    title: "சமூக மாற்றத்தில் பங்காற்றும் இமாம்களுக்கு அதிகாரப்பூர்வ ஊக்க விழா",
    description:
      "சமூக முன்னேற்றம் மற்றும் நற்பண்பு வளர்ச்சியில் முக்கிய பங்கு வகிக்கும் தேர்ந்தெடுக்கப்பட்ட இமாம்களை வலுப்படுத்தும் நோக்கத்தில், அவர்களின் சமூகச் செயற்பாடுகளுக்கு ஊக்கமும் ஆதரவும் வழங்கும் சிறப்பு நிகழ்வு. இது, இமாம்களின் தாக்கத்தை மேலும் விரிவாக்கும் ஒரு ஊக்குவிப்பு முயற்சி ஆகும்.",
    date: "02-04-2025",
    location: "மேட்டூர்",
    participants: 722,
    category: "சமூக வலுவூட்டல்",
  },
];

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].id);
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
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
            மனதில் நிற்கும் நினைவுகள்
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            நற்பெயரும் சமூக மாற்றமும் மலர்ந்த தருணங்களை எங்கள் பல்வேறு முயற்சிகளின் வழியாக பதிவு செய்த நிமிடங்கள்.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.url})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    {/* <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {image.description}
                    </p> */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{image.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{image.participants}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-5 h-5 text-white" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
            >
              View Complete Gallery
            </Button>
          </Link>
        </motion.div> */}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="relative">
                <img
                  src={currentImage.url}
                  alt={currentImage.title}
                  className="max-w-full max-h-[50vh] mx-auto object-contain rounded-lg"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Image Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {currentImage.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{currentImage.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{currentImage.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>பங்கேற்பாளர் எண்ணிக்கை: {currentImage.participants} </span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
