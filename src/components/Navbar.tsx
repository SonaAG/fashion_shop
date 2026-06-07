import React from "react";
import { TranslationSet } from "../types";
import { ManMandirLogo } from "./ManMandirLogo";

interface NavbarProps {
  translations: TranslationSet;
  onOpenBooking: () => void;
  onOpenCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  translations,
  onOpenBooking,
  onOpenCatalog,
}) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-40 bg-transparent py-6 px-6 sm:px-12 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Left Small Logo & Studio Title */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center space-x-3 cursor-pointer select-none group shrink-0"
      >
        <ManMandirLogo size={36} showBorder={false} />
        <div className="flex flex-col text-left">
          <span className="font-sans text-xs sm:text-sm tracking-[0.2em] font-medium text-enola-charcoal group-hover:text-[#E54D41] transition-colors duration-300">
            MAN MANDIR
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.2em] font-sans font-medium text-enola-muted uppercase leading-none mt-1">
            BRIDAL STUDIO
          </span>
        </div>
      </div>

      {/* Center Menu */}
      <div className="flex items-center space-x-6 sm:space-x-10 text-xs sm:text-sm font-sans tracking-[0.2em] text-enola-charcoal">
        <button
          id="nav-about-btn"
          onClick={() => handleScrollTo("philosophy-section")}
          className="hover:opacity-60 cursor-pointer font-medium transition-all duration-300"
        >
          {translations.navAbout}
        </button>
        <button
          id="nav-atelier-btn"
          onClick={() => handleScrollTo("workshops-section")}
          className="hover:opacity-60 cursor-pointer font-medium transition-all duration-300"
        >
          {translations.navWorkshop}
        </button>
        <button
          id="nav-catalog-btn"
          onClick={onOpenCatalog}
          className="hover:opacity-60 cursor-pointer font-medium transition-all duration-300"
        >
          {translations.navCatalog}
        </button>
      </div>

      {/* Right Menu */}
      <div className="flex items-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-sans tracking-[0.2em] text-enola-charcoal">
        <button
          id="nav-contacts-btn"
          onClick={() => handleScrollTo("contacts-section")}
          className="hover:opacity-60 cursor-pointer font-medium transition-all duration-300"
        >
          {translations.navContacts}
        </button>
        
        <span className="opacity-35">|</span>
        
        <button
          onClick={onOpenBooking}
          className="bg-enola-charcoal/5 hover:bg-enola-charcoal hover:text-white px-4 py-1.5 rounded-full transition-all duration-300 font-medium text-[10px] tracking-wider cursor-pointer"
        >
          BOOK PRIVATE SESSION
        </button>
      </div>
    </nav>
  );
};
