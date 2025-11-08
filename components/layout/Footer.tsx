"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const chapters = [
  { name: "ஜோன் 1 – சேலம் சந்திப்பு", href: "#" },
  { name: "ஜோன் 2 – வழப்பாடி", href: "#" },
  { name: "ஜோன் 3 – தாரமங்கலம்", href: "#" },
  { name: "ஜோன் 4 – சேலம் வடக்கு", href: "#" },
];

const quickLinks = [
  { name: "எங்களைப் பற்றி", href: "/about" },
  { name: "நிகழ்வுகள்", href: "/events" },
  { name: "உறுப்பினராக", href: "/membership" },
  { name: "தொடர்புக்கு", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-[80px] h-16"
              >
                <Image
                  src={"/assets/imaam-logo.png"}
                  alt="imaam-logo"
                  loading="lazy"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              தலைமைத்துவ வளர்ச்சி மற்றும் அர்த்தமுள்ள உறவுகளின் மூலம்
              தமிழ்நாடு முழுவதும் சமூகத்தில் நேர்மறை மாற்றத்தை உருவாக்க இளம் தலைவர்களை ஊக்குவித்தல்.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">விரைவு இணைப்புகள்</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chapters */}
          <div>
            <h3 className="text-lg font-semibold mb-4">எங்கள் ஜோன்கள்</h3>
            <ul className="space-y-2">
              {chapters.map((chapter) => (
                <li key={chapter.name}>
                  <Link
                    href={chapter.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {chapter.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">தொடர்பு தகவல்</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#90000a]" />
                <span className="text-gray-400 text-sm">info@imaam.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#90000a]" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#90000a] mt-0.5" />
                <span className="text-gray-400 text-sm">
                  சேலம், தமிழ்நாடு
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Imaam. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Designed by</span>
              <Link
                href={"https://www.yaraa.biz"}
                target="_blank"
                className="flex items-center"
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={"/assets/yaraa-1.png"}
                    alt="yaraa-logo"
                    fill
                    loading="lazy"
                    quality={100}
                    className="object-cover "
                  />
                </div>
                <div className="relative w-16 h-6">
                  <Image
                    src={"/assets/yaraa-2.png"}
                    alt="yaraa-logo"
                    fill
                    loading="lazy"
                    quality={100}
                    className="object-cover filter invert brightness-0"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
