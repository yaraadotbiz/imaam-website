"use client";

import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FactsNewsSection from '@/components/home/FactsNewsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import BlogCarousel from '@/components/home/BlogCarousel';
import CallToAction from '@/components/home/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <StatsSection />
        <FactsNewsSection />
        <GalleryPreview />
        {/* <BlogCarousel />
      <CallToAction /> */}
      </div>
      <Footer />

    </>
  );
}