import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Sparkles, 
  BookOpen, 
  Heart,
  Clock,
  Briefcase
} from "lucide-react";

import { translations, workshops, catalogProducts, galleryCards } from "./data";
import { Navbar } from "./components/Navbar";
import { BookingModal } from "./components/BookingModal";
import { CatalogModal } from "./components/CatalogModal";
import { ManMandirLogo } from "./components/ManMandirLogo";

interface EditorialSlide {
  id: string;
  tabLabel: string;
  subTitle: string;
  boldHeader: string;
  textBlock: string;
  leftImage: string;
  bottomImage: string;
  bottomLabel: string;
}

const editorialSlides: EditorialSlide[] = [
  {
    id: "foundations",
    tabLabel: "FOUNDATIONS",
    subTitle: "THE ART OF MODERN BRIDAL STYLE",
    boldHeader: "It is more than a gown.",
    textBlock: "It is the physical poetry of your love story. We craft magnificent bespoke bridal wear and bridesmaid sets with custom embroideries that mirror your inner sparkle on your most meaningful day.",
    leftImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&h=900&q=80",
    bottomImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    bottomLabel: "HAND STITCH DETAIL / NO. 12"
  },
  {
    id: "clients",
    tabLabel: "CLIENTS",
    subTitle: "THE INDIVIDUAL FITTING",
    boldHeader: "Draped to your unique symmetries.",
    textBlock: "We believe in custom perfections. Every masterclass fitting and bridal consultation session maps your proportions by hand. Your unique patterns are meticulously preserved, ensuring flawless couture results.",
    leftImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&h=900&q=80",
    bottomImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    bottomLabel: "PRIVATE COUTURE / NO. 04"
  },
  {
    id: "collection",
    tabLabel: "COLLECTION",
    subTitle: "COUTURE SEPARATES & LEHENGAS",
    boldHeader: "Handcrafted luxury that speaks volumes.",
    textBlock: "We design couture elements that blend timeless heirloom design with modern grace. From fluid mulberry silk skirts to heavy crimson zardozi lehengas and cocktail capes, our collections evoke absolute elegance.",
    leftImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&h=900&q=80",
    bottomImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    bottomLabel: "ROYAL EMBROIDERY / NO. 08"
  },
  {
    id: "textiles",
    tabLabel: "TEXTILES",
    subTitle: "MAJESTIC EMBELLISHMENTS",
    boldHeader: "Woven with authentic gold & silk fibers.",
    textBlock: "Our fabrics are traceably organic silks, brocades, and fine hand-spun organzas sourced ethically from certified weaving houses. Finished with custom lace placements and reinforced hand welds, these masterpieces breathe with grace.",
    leftImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=700&h=900&q=80",
    bottomImage: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    bottomLabel: "ZARI WEAVE SPEC / NO. 27"
  }
];

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState("capsule-styling");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeEditorialIndex, setActiveEditorialIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [galleryOffset, setGalleryOffset] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  useEffect(() => {
    if (isAutoplayPaused) {
      const timeout = setTimeout(() => {
        setIsAutoplayPaused(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
    const interval = setInterval(() => {
      setActiveEditorialIndex((prev) => (prev === editorialSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplayPaused, activeEditorialIndex]);

  useEffect(() => {
    if (isGalleryPaused) {
      const timeout = setTimeout(() => {
        setIsGalleryPaused(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
    const interval = setInterval(() => {
      setGalleryOffset((prev) => (prev + 1) % galleryCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isGalleryPaused, galleryOffset]);

  const rotateGalleryNext = () => {
    setIsGalleryPaused(true);
    setGalleryOffset((prev) => (prev + 1) % galleryCards.length);
  };

  const rotateGalleryPrev = () => {
    setIsGalleryPaused(true);
    setGalleryOffset((prev) => (prev === 0 ? galleryCards.length - 1 : prev - 1));
  };

  const goToPreviousSlide = () => {
    setIsAutoplayPaused(true);
    setActiveEditorialIndex((prev) => (prev === 0 ? editorialSlides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setIsAutoplayPaused(true);
    setActiveEditorialIndex((prev) => (prev === editorialSlides.length - 1 ? 0 : prev + 1));
  };

  // Single-Language Setup: English
  const t = translations["en"];

  const handleOpenBookingFor = (id: string) => {
    setSelectedWorkshopId(id);
    setIsBookingOpen(true);
  };

  const handleOpenBookingDefault = () => {
    setSelectedWorkshopId(workshops[0]?.id || "capsule-styling");
    setIsBookingOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      qEn: "How do I determine my correct size for Man Mandir Bridal Studio outfits?",
      aEn: "We utilize custom boutique measurements. Each masterpiece's product layout features detailed structure dimensions. We heavily recommend booking a private 1-on-1 studio fitting to map your precise proportions and perfect your drape lengths.",
    },
    {
      qEn: "What is your bespoke tailoring timeline?",
      aEn: "Every bespoke adjustment or made-to-measure outfit requires 10 to 14 working days. Our senior master couturiers craft custom paper patterns by hand directly at our flagship studio before finalizing sequins, zardozi work, and double-firing seams with precision.",
    },
    {
      qEn: "Can I host a private fitting or a bridesmaid photoshoot?",
      aEn: "Absolutely. Our sunlit boutique spaces can be fully reserved for personal bridal showers, bridesmaid styling, or private design consultations. Please submit an email request to our studio coordinators at boutique@manmandirbridal.com and we will organize custom sketch kits and custom drapes.",
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#EFEAE4] overflow-x-hidden selection:bg-enola-charcoal selection:text-white">
      
      {/* 1. Global Navigation Overlay Header */}
      <Navbar
        translations={t}
        onOpenBooking={handleOpenBookingDefault}
        onOpenCatalog={() => setIsCatalogOpen(true)}
      />

      {/* 2. Immersive Hero Section (100vh split) */}
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-stretch justify-between overflow-hidden">
        
        {/* Left Half (Slightly darker warm grey-beige) */}
        <div className="flex-1 bg-[#DCD6CE] flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 pt-52 xs:pt-48 md:pt-0 pb-16 md:pb-0 relative text-center md:text-left">

          <div className="space-y-6 md:space-y-8 max-w-lg relative z-10 w-full flex flex-col md:items-start items-center">
            
            {/* Visual Emblem of Atelier Form */}
            <motion.div 
              initial={{ rotate: -15, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden md:flex items-center space-x-2 opacity-85"
            >
              <span className="w-1.5 h-1.5 bg-[#231F1C] rounded-full"></span>
              <Heart className="w-4 h-4 text-[#E54D41]" />
              <span className="w-1.5 h-1.5 bg-[#231F1C] rounded-full"></span>
            </motion.div>

            {/* Huge Serif Logo Title */}
            <div className="space-y-4 text-center md:text-left flex flex-col md:items-start items-center">
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-enola-charcoal tracking-[0.06em] uppercase leading-tight"
              >
                Man Mandir
                <span className="block text-2xl sm:text-3xl md:text-4xl font-light font-sans tracking-[0.15em] text-[#A89D93] mt-1">
                  Bridal Studio
                </span>
              </motion.h1>
              
              {/* Uppercase Subtitle */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-[10px] sm:text-xs md:text-sm tracking-[0.18em] font-sans font-medium text-enola-charcoal uppercase leading-relaxed max-w-md text-center md:text-left"
              >
                {t.heroSubtitle}
              </motion.p>
            </div>

            {/* CTA action pill button */}
            <motion.button
              id="hero-cta-btn"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              onClick={handleOpenBookingDefault}
              className="bg-enola-charcoal text-white hover:bg-[#3D3732] rounded-full px-8 py-3.5 text-xs sm:text-sm font-sans tracking-[0.15em] font-semibold flex items-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer select-none"
            >
              <span>{t.heroCta}</span>
            </motion.button>
          </div>
        </div>

        {/* Right Half (Warm soft linen beige background showing minimalist garment piece artwork) */}
        <div className="flex-1 bg-[#EFEAE4] flex justify-center items-center px-6 sm:px-12 md:px-16 pt-10 md:pt-0 pb-20 md:pb-0 relative">

          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-center justify-center">
            
            {/* The Shadow Base Shape */}
            <div className="absolute w-[80%] h-[80%] bg-[#DCD6CE]/50 rounded-t-[140px] rounded-b-[140px] filter blur-xl transform rotate-6 scale-95" />

            {/* Center Masterpiece Garment Image with Capsule Border Radius */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="relative w-[85%] h-[85%] rounded-[4rem] sm:rounded-[6rem] overflow-hidden border-4 border-white shadow-xl z-10 hover:skew-x-1 transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80"
                alt="Man Mandir Bridal Ivory Gown"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-sans text-[10px] tracking-widest font-semibold uppercase">
                Bridal Couture Series 01 / Ivory Silk Gown
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Introduction & Philosophy Section */}
      <section id="philosophy-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto border-t border-[#DCD6CE]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 text-enola-muted font-sans text-xs tracking-widest font-semibold uppercase">
              <span className="w-1.5 h-1.5 bg-enola-muted rounded-full"></span>
              <span>CREATIVE PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans tracking-wide text-enola-charcoal leading-tight uppercase font-medium">
              {t.philosophyTitle}
            </h2>
          </div>

          <div className="md:col-span-5 md:pt-14 space-y-6 text-enola-muted">
            <p className="text-xs sm:text-sm tracking-wider uppercase leading-relaxed font-medium">
              {t.philosophyDesc}
            </p>
            
            {/* Elegant Signature */}
            <div className="flex items-center space-x-3 pt-4 border-t border-enola-bg-dark">
              <div className="w-9 h-9 bg-enola-bg-dark rounded-full overflow-hidden flex items-center justify-center font-serif text-sm font-bold text-enola-charcoal">
                N
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-enola-charcoal tracking-widest font-sans uppercase">
                  Elena & Nika
                </h5>
                <p className="text-[9px] text-enola-muted tracking-wider uppercase">
                  Studio Founders & Master Designers
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Horizontal Organic Sculpture Gallery Section */}
      <section className="py-16 sm:py-24 bg-[#DCD6CE]/30 border-t border-b border-[#DCD6CE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-[10px] tracking-widest font-bold text-enola-muted uppercase block font-sans">
              VISUAL INDEX
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-enola-charcoal">
              {t.sculptureTitle}
            </h3>
            <p className="text-xs sm:text-sm text-enola-muted max-w-xl font-sans leading-relaxed">
              {t.sculptureDesc}
            </p>
          </div>

          {/* Gallery Manual Controls */}
          <div className="flex items-center space-x-3 shrink-0 self-start sm:self-auto">
            <button
              onClick={rotateGalleryPrev}
              className="w-10 h-10 rounded-full border border-enola-charcoal/10 bg-white/60 hover:bg-white hover:border-[#787068] text-enola-charcoal flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 duration-300"
              aria-label="Previous visual slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={rotateGalleryNext}
              className="w-10 h-10 rounded-full border border-enola-charcoal/10 bg-white/60 hover:bg-white hover:border-[#787068] text-enola-charcoal flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 duration-300"
              aria-label="Next visual slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll / Layout container */}
        <div 
          onMouseEnter={() => setIsGalleryPaused(true)}
          onMouseLeave={() => setIsGalleryPaused(false)}
          className="w-full overflow-x-auto gap-4 md:gap-6 flex items-center justify-start md:justify-center py-6 px-6 sm:px-12 md:px-16 no-scrollbar snap-x snap-mandatory select-none"
        >
          {[
            "rounded-full w-20 xs:w-24 sm:w-28 md:w-36 h-[200px] sm:h-[300px] md:h-[400px]",
            "rounded-[2rem] sm:rounded-[3rem] w-28 xs:w-36 sm:w-48 md:w-56 lg:w-64 h-[250px] sm:h-[420px] md:h-[550px]",
            "rounded-[2.5rem] sm:rounded-[3.5rem] w-32 xs:w-44 sm:w-56 md:w-64 lg:w-80 h-[280px] sm:h-[480px] md:h-[640px]",
            "rounded-[2rem] sm:rounded-[3rem] w-28 xs:w-36 sm:w-48 md:w-56 lg:w-64 h-[250px] sm:h-[420px] md:h-[550px]",
            "rounded-full w-20 xs:w-24 sm:w-28 md:w-36 h-[200px] sm:h-[300px] md:h-[400px]"
          ].map((slotShape, idx) => {
            const cardIdx = (idx - galleryOffset + galleryCards.length * 10) % galleryCards.length;
            const card = galleryCards[cardIdx];
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 relative group overflow-hidden ${slotShape} snap-center shadow-lg border-2 border-white`}
              >
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={card.id}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={card.imageUrl}
                    alt={card.titleEn}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 opacity-80 z-10" />
                
                <div className="absolute bottom-8 left-6 right-6 text-white space-y-1.5 pointer-events-none translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <span className="text-[9px] tracking-widest uppercase font-semibold font-sans bg-white/20 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm">
                    {card.labelEn}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-sm md:text-lg font-serif">
                        {card.titleEn}
                      </h4>
                      <p className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-normal max-w-xs font-sans">
                        {card.descEn}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5.5 BRAND NEW SPECIFIED SECTION: IMMERSIVE EDITORIAL BRAND BOARD CAROUSEL */}
      {/* (Implements the required design with interactive horizontal switching as indicated in the markup) */}
      <section 
        onMouseEnter={() => setIsAutoplayPaused(true)}
        onMouseLeave={() => setIsAutoplayPaused(false)}
        className="w-full bg-[#EFEAE4] border-t border-b border-[#DCD6CE] flex flex-col md:flex-row items-stretch select-none relative overflow-hidden"
      >
        
        {/* Left Side: Elegant Portrait Panel with responsive side navigation */}
        <div className="flex-1 bg-[#EFEAE4] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-16 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-[#DCD6CE]">

          {/* Picture frame and carousel controls wrapper */}
          <div className="relative w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[420px] flex items-center justify-center">
            
            {/* Absolute navigation controls bounded directly to the picture frame */}
            <button
              onClick={goToPreviousSlide}
              className="absolute -left-3 sm:-left-16 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-enola-charcoal/10 bg-white/95 backdrop-blur-md shadow-md hover:shadow-lg flex items-center justify-center text-enola-charcoal hover:bg-enola-charcoal hover:text-white transition-all duration-300 transform active:scale-95 group/btn cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
            </button>
            
            <button
              onClick={goToNextSlide}
              className="absolute -right-3 sm:-right-16 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-enola-charcoal/10 bg-white/95 backdrop-blur-md shadow-md hover:shadow-lg flex items-center justify-center text-enola-charcoal hover:bg-enola-charcoal hover:text-white transition-all duration-300 transform active:scale-95 group/btn cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </button>

            {/* Bounded Picture Frame */}
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-lg border-4 border-white bg-[#DCD6CE] flex">
              <AnimatePresence mode="wait">
                <motion.img
                  key={editorialSlides[activeEditorialIndex].leftImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={editorialSlides[activeEditorialIndex].leftImage}
                  alt="Man Mandir Studio lookbook section illustration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover shrink-0"
                />
              </AnimatePresence>
              {/* Soft shadow overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

          </div>
        </div>

        {/* Right Side: Branding block & fabric details sleeve detail */}
        <div className="flex-1 flex flex-col">
          {/* Top Panel (Branding Statement with Left Border Accent) */}
          <div className="p-5 sm:p-8 md:p-16 flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 bg-white border-b border-[#DCD6CE] relative overflow-hidden">
            
            {/* Horizontal Slide Selector tabs (FOUNDATIONS, CLIENTS, COLLECTION, TEXTILES) */}
            <div className="flex items-center space-x-4 sm:space-x-6 pb-4 border-b border-enola-bg-dark overflow-x-auto no-scrollbar relative z-10">
              {editorialSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveEditorialIndex(idx)}
                  className={`text-[8.5px] sm:text-[10px] tracking-[0.2em] font-sans uppercase font-bold cursor-pointer transition-all duration-300 relative py-1.5 shrink-0 ${
                    activeEditorialIndex === idx
                      ? "text-enola-charcoal font-bold"
                      : "text-enola-muted opacity-50 hover:opacity-100"
                  }`}
                >
                  <span>{slide.tabLabel}</span>
                  {activeEditorialIndex === idx && (
                    <motion.div
                      layoutId="activeEditorialTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-enola-charcoal"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeEditorialIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#787068] font-sans uppercase font-bold block">
                  {editorialSlides[activeEditorialIndex].subTitle}
                </span>

                {/* Custom stylized MAN MANDIR matching the premium aesthetic */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif tracking-[0.12em] text-[#A89D93] font-semibold uppercase select-none leading-none">
                  MAN MANDIR
                </h1>

                {/* The Text Block with Vertical line on left */}
                <div className="flex items-stretch space-x-4 sm:space-x-6 pt-1 sm:pt-2">
                  <div className="w-[1.5px] bg-[#A89D93] shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-enola-charcoal leading-relaxed font-sans text-justify">
                    <strong className="font-semibold block text-[13px] sm:text-base md:text-lg mb-1">{editorialSlides[activeEditorialIndex].boldHeader}</strong>
                    {editorialSlides[activeEditorialIndex].textBlock}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Panel (Beautiful fabric close-up matching close-up jacket sleeve/fabric with white buttons) */}
          <div className="relative h-[160px] sm:h-[220px] md:h-[320px] bg-[#DCD6CE] overflow-hidden flex">
            <AnimatePresence mode="wait">
              <motion.img
                key={editorialSlides[activeEditorialIndex].bottomImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={editorialSlides[activeEditorialIndex].bottomImage}
                alt={editorialSlides[activeEditorialIndex].bottomLabel}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none shrink-0"
              />
            </AnimatePresence>
            {/* Luxury text sticker detail */}
            <div className="absolute top-4 right-4 bg-[#EFEAE4]/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white text-[8px] font-sans tracking-widest text-[#787068] font-bold uppercase z-10 shadow-sm">
              {editorialSlides[activeEditorialIndex].bottomLabel}
            </div>
          </div>
        </div>

      </section>

      {/* 5. Workshops & Master Classes Grid */}
      <section id="workshops-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-[#DCD6CE] pb-10">
            <div className="space-y-3">
              <span className="text-[10px] tracking-widest font-bold text-enola-muted uppercase block font-sans">
                ATELIER EXPERIENCES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-enola-charcoal">
                Private styling, customization & bespoke options
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-enola-muted font-sans max-w-sm leading-relaxed">
              Every private session includes organic bridal herbal mocktails, individualized silhouette measurements, fabric touch exploration, and custom sketch sheets.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {workshops.map((ws, idx) => (
              <motion.div
                key={ws.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-[#DCD6CE] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:shadow-xl hover:border-enola-charcoal transition-all duration-500 group"
              >
                <div className="space-y-4">
                  {/* Category level & pricing */}
                  <div className="flex justify-between items-center text-[10px] font-sans text-enola-muted tracking-widest font-bold uppercase">
                    <span className="bg-[#EFEAE4] text-enola-charcoal px-3 py-1 rounded-full border border-[#DCD6CE]">
                      {ws.levelEn}
                    </span>
                    <span className="text-base font-serif font-semibold text-enola-charcoal">
                      {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(ws.price)}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-serif text-enola-charcoal group-hover:text-black transition-colors">
                      {ws.nameEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-enola-muted leading-relaxed font-sans font-medium">
                      {ws.descriptionEn}
                    </p>
                  </div>
                </div>

                {/* Meta details & book CTA */}
                <div className="pt-6 border-t border-enola-bg/60 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center space-x-4 text-[10px] font-sans text-enola-muted tracking-wider uppercase font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-enola-muted" />
                      <span>{ws.durationEn}</span>
                    </div>
                    <span>•</span>
                    <div>
                      <span>Max {ws.capacity} attendees</span>
                    </div>
                  </div>

                  <button
                    id={`book-ws-btn-${ws.id}`}
                    onClick={() => handleOpenBookingFor(ws.id)}
                    className="bg-enola-charcoal text-white hover:bg-[#3D3732] px-6 py-2.5 rounded-full font-sans tracking-widest text-[10px] font-semibold flex items-center space-x-1.5 transition-all duration-300 transform select-none cursor-pointer"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Accordion FAQ Section */}
      <section className="py-24 sm:py-32 bg-[#DCD6CE]/25 border-b border-[#DCD6CE] px-6 sm:px-12 md:px-16">
        <div className="max-w-3xl mx-auto space-y-10">
          
          <div className="text-center space-y-2.5">
            <span className="text-[10px] tracking-widest font-bold text-enola-muted uppercase block font-sans">
              COMMON INQUIRIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-enola-charcoal">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DCD6CE] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-5 px-6 font-sans font-semibold tracking-wide text-xs sm:text-sm text-enola-charcoal hover:bg-[#EFEAE4]/30 flex justify-between items-center transition-all duration-300 cursor-pointer"
                >
                  <span className="uppercase pr-4">
                    {faq.qEn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-enola-muted transition-transform duration-300 shrink-0 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-enola-muted leading-relaxed font-sans border-t border-enola-bg/40">
                        {faq.aEn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Contact Inquiry Form Area ("Any Questions?") */}
      <section id="contacts-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto text-center space-y-10">
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif text-enola-charcoal italic leading-normal">
            {t.questionsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-enola-muted font-sans font-medium uppercase leading-relaxed tracking-wider">
            {t.questionsSubtitle}
          </p>
        </div>

        {/* Big direct email link */}
        <div className="py-6">
          <a
            href="mailto:boutique@manmandirbridal.com"
            className="inline-block text-2xl sm:text-4.5xl md:text-5xl font-serif text-enola-charcoal hover:text-[#E54D41] border-b border-enola-charcoal hover:border-[#E54D41] transition-all duration-300 pb-2 uppercase tracking-wide"
          >
            boutique@manmandirbridal.com ↗
          </a>
        </div>

        {/* Mini Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 text-[10px] font-sans font-bold tracking-widest text-[#787068] uppercase max-w-4xl mx-auto border-t border-[#DCD6CE]">
          <div className="space-y-2.5 p-4">
            <MapPin className="w-5 h-5 text-[#E54D41] mx-auto" />
            <h5 className="text-enola-charcoal">Studio Location</h5>
            <p className="text-enola-muted font-medium text-[9px] leading-relaxed block">
              Man Mandir Bridal Studio <br />Vadodara, Gujarat
            </p>
          </div>
          
          <div className="space-y-2.5 p-4">
            <Phone className="w-5 h-5 text-enola-charcoal mx-auto" />
            <h5 className="text-enola-charcoal">Phone Inquiries</h5>
            <p className="text-enola-muted font-medium text-[9px] leading-relaxed">
              +91 (0265) 243-1994 <br />+91 98765 43210
            </p>
          </div>

          <div className="space-y-2.5 p-4">
            <Instagram className="w-5 h-5 text-[#C2185B] mx-auto" />
            <h5 className="text-enola-charcoal">Visual Journal</h5>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-enola-muted font-medium text-[9px] block hover:text-[#C2185B] hover:underline"
            >
              @manmandir_bridalstudio ↗
            </a>
          </div>
        </div>
      </section>

      {/* 8. Bottom Footer */}
      <footer className="py-12 border-t border-[#DCD6CE] px-6 sm:px-12 md:px-16 bg-[#DCD6CE]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Left */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold tracking-widest text-enola-charcoal block">
                {t.footerContact}
              </span>
              <p className="text-xs text-enola-muted leading-relaxed font-sans tracking-wide">
                We design and tailor inside our Vadodara studio from Tuesday to Sunday, 10:00 AM until 08:30 PM. Studio entry is strictly limited to pre-scheduled wardrobe appointments.
              </p>
            </div>

            {/* Center */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold tracking-widest text-enola-charcoal block md:text-center">
                {t.footerDistribution}
              </span>
              <p className="text-xs text-enola-muted leading-relaxed font-sans tracking-wide md:text-center max-w-sm mx-auto">
                Bespoke silhouettes, custom measurements, and premium organic cotton wholesale capsules can be initiated via our private Selection Catalog or directly calling our stylist team.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold tracking-widest text-enola-charcoal block md:text-right">
                CRAFTED APPAREL
              </span>
              <p className="text-xs text-enola-muted leading-relaxed font-sans tracking-wide md:text-right">
                Slowly woven under certified sustainable flax fields, tailored with clean deconstructed layouts, finished with authentic horn buttons, and packed in recycled linen packages.
              </p>
            </div>
          </div>

          <div className="text-center md:flex md:justify-between md:items-center pt-8 border-t border-[#DCD6CE] text-[10px] font-sans font-medium text-[#787068] tracking-widest uppercase">
            <span>{t.copyright}</span>
            <span className="mt-2 md:mt-0 block">Vadodara, Gujarat</span>
          </div>

        </div>
      </footer>

      {/* Appointment Booking Modal Overlay */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        translations={t}
        workshops={workshops}
        selectedWorkshopId={selectedWorkshopId}
      />

      {/* Catalog Modal Drawer Overlay */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        translations={t}
        products={catalogProducts}
      />

    </div>
  );
}
