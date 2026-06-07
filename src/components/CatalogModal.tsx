import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, SlidersHorizontal, Plus, ShoppingBag, Send, Check } from "lucide-react";
import { TranslationSet, CatalogProduct } from "../types";

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  translations: TranslationSet;
  products: CatalogProduct[];
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  translations,
  products,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [collection, setCollection] = useState<CatalogProduct[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquirySending, setInquirySending] = useState(false);

  // Filter products based on category selection
  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  const addToCollection = (p: CatalogProduct) => {
    if (collection.some(item => item.id === p.id)) return;
    setCollection(prev => [...prev, p]);
    
    // Auto-open collection panel to guide user
    setIsSidebarOpen(true);
  };

  const removeFromCollection = (id: string) => {
    setCollection(prev => prev.filter(item => item.id !== id));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (collection.length === 0) return;

    setInquirySending(true);
    setTimeout(() => {
      setInquirySending(false);
      setInquirySuccess(true);
    }, 1500);
  };

  const handleClearInquiry = () => {
    setCollection([]);
    setInquirySuccess(false);
    setIsSidebarOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Main Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Immersive Full Screen Catalog Board */}
          <motion.div
            initial={{ x: "100%", opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.9 }}
            transition={{ type: "spring", damping: 30, stiffness: 180 }}
            className="relative w-full max-w-7xl bg-[#EFEAE4] h-full shadow-2xl z-10 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Catalog Main Canvas (Left side) */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Header inside Catalog */}
              <header className="flex justify-between items-center px-6 sm:px-10 py-6 border-b border-[#DCD6CE] bg-[#EFEAE4]/80 backdrop-blur">
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest uppercase text-enola-muted font-sans font-semibold">
                    CAPSULE SEPARATES
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-enola-charcoal">
                    {translations.catalogModalTitle}
                  </h2>
                </div>
                
                <div className="flex items-center space-x-3">
                  {/* Shopping Bag Button (Cart counter) */}
                  <button
                    id="cart-toggle-btn"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="relative p-2.5 bg-white border border-enola-bg-dark rounded-full hover:border-enola-charcoal transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm animate-none"
                  >
                    <ShoppingBag className="w-5 h-5 text-enola-charcoal" />
                    {collection.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-enola-charcoal text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-sans font-bold">
                        {collection.length}
                      </span>
                    )}
                  </button>

                  {/* Close btn */}
                  <button
                    id="close-catalog-modal"
                    onClick={onClose}
                    className="p-2 sm:px-4 sm:py-2.5 bg-enola-charcoal text-[#EFEAE4] hover:bg-[#3D3732] rounded-full transition-all duration-300 flex items-center space-x-2 text-xs font-sans tracking-wider font-medium cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">{translations.catalogModalClose}</span>
                  </button>
                </div>
              </header>

              {/* Filters Menu */}
              <div className="px-6 sm:px-10 py-4 bg-[#EFEAE4] flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD6CE]">
                <div className="flex flex-wrap gap-2 text-xs font-sans tracking-widest font-semibold text-enola-muted">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeCategory === "all"
                        ? "bg-enola-charcoal text-white"
                        : "bg-white/40 hover:bg-white border border-enola-bg-dark"
                    }`}
                  >
                    {translations.filterAll}
                  </button>
                  <button
                    onClick={() => setActiveCategory("blazers")}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeCategory === "blazers"
                        ? "bg-enola-charcoal text-white"
                        : "bg-white/40 hover:bg-white border border-enola-bg-dark"
                    }`}
                  >
                    {translations.filterBlazers}
                  </button>
                  <button
                    onClick={() => setActiveCategory("dresses")}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeCategory === "dresses"
                        ? "bg-enola-charcoal text-white"
                        : "bg-white/40 hover:bg-white border border-enola-bg-dark"
                    }`}
                  >
                    {translations.filterDresses}
                  </button>
                  <button
                    onClick={() => setActiveCategory("trousers")}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeCategory === "trousers"
                        ? "bg-enola-charcoal text-white"
                        : "bg-white/40 hover:bg-white border border-enola-bg-dark"
                    }`}
                  >
                    {translations.filterTrousers}
                  </button>
                  <button
                    onClick={() => setActiveCategory("knitwear")}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeCategory === "knitwear"
                        ? "bg-enola-charcoal text-white"
                        : "bg-white/40 hover:bg-white border border-enola-bg-dark"
                    }`}
                  >
                    {translations.filterKnitwear}
                  </button>
                </div>
                
                <div className="text-[10px] tracking-wider text-enola-muted uppercase flex items-center space-x-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Showing {filteredProducts.length} curated garments</span>
                </div>
              </div>

              {/* Products Grid Canvas */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 no-scrollbar bg-[#EFEAE4]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16">
                  {filteredProducts.map((p, idx) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group bg-white rounded-[2rem] overflow-hidden border border-enola-bg-dark flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-500"
                    >
                      {/* Image Frame */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#DCD6CE]">
                        <img
                          src={p.imageUrl}
                          alt={p.nameEn}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <span className="absolute top-4 left-4 bg-white text-[9px] font-sans tracking-[0.15em] font-bold text-enola-charcoal px-3 py-1 rounded-full uppercase shadow-sm border border-white/40">
                          {p.category}
                        </span>
                      </div>

                      {/* Product details */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-lg font-serif text-enola-charcoal leading-snug">
                            {p.nameEn}
                          </h4>
                          <p className="text-xs text-enola-muted leading-relaxed font-sans line-clamp-2">
                            {p.descriptionEn}
                          </p>
                        </div>

                        {/* Specs */}
                        <div className="pt-3 border-t border-enola-bg/60 space-y-1.5 text-[10px] font-sans text-enola-muted uppercase tracking-widest">
                          <div>
                            <span className="font-semibold text-enola-charcoal">{translations.sizingLabel}:</span>{" "}
                            {p.dimensionsEn}
                          </div>
                          <div>
                            <span className="font-semibold text-enola-charcoal">{translations.materialLabel}:</span>{" "}
                            {p.materialEn}
                          </div>
                        </div>

                        {/* Price Tag & Action */}
                        <div className="pt-3 flex justify-between items-center">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-sans text-enola-muted tracking-wider block uppercase">
                              {translations.priceLabel}
                            </span>
                            <span className="text-base font-serif text-enola-charcoal font-semibold">
                              {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(p.price)}
                            </span>
                          </div>

                          <button
                            id={`add-product-${p.id}`}
                            onClick={() => addToCollection(p)}
                            className="bg-[#EFEAE4] hover:bg-enola-charcoal hover:text-white text-enola-charcoal p-2.5 sm:px-4 sm:py-2 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-300 flex items-center space-x-1 cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">Add</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiries / Mini Cart Sidebar (Slide-out Right half) */}
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  initial={{ x: "100%", opacity: 0.9 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0.9 }}
                  transition={{ type: "spring", damping: 25, stiffness: 180 }}
                  className="w-full md:w-[380px] bg-white border-l border-[#DCD6CE] h-full flex flex-col z-25 shadow-xl relative"
                >
                  {/* Sidebar Header */}
                  <div className="py-6 px-6 border-b border-[#DCD6CE] bg-[#EFEAE4]/40 flex justify-between items-center">
                    <div className="flex items-center space-x-2.5">
                      <ShoppingBag className="w-5 h-5 text-enola-charcoal" />
                      <h3 className="text-base font-sans font-bold tracking-widest text-enola-charcoal">
                        {translations.cartBtn}
                      </h3>
                    </div>
                    <button
                      id="close-cart-btn"
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-1 hover:bg-[#EFEAE4]/50 rounded-full transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5 text-enola-charcoal" />
                    </button>
                  </div>

                  {/* Curated list container */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar bg-white">
                    {inquirySuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12 space-y-5 bg-white"
                      >
                        <div className="w-14 h-14 bg-green-50 text-green-700 rounded-full flex items-center justify-center mx-auto">
                          <Check className="w-7 h-7" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xl font-serif text-enola-charcoal">Inquiry Submitted</h4>
                          <p className="text-xs text-enola-muted max-w-xs mx-auto leading-relaxed font-sans">
                            Our personal shopping concierge is reviewing your curated piece list. Sizing guides and tailored reserve options will be sent to your primary email block within 2 hours.
                          </p>
                        </div>
                        <button
                          id="clear-inquiry-btn"
                          onClick={handleClearInquiry}
                          className="px-6 py-2.5 bg-enola-charcoal text-white rounded-xl text-xs font-sans tracking-widest font-semibold hover:bg-[#3d3732] transition-colors"
                        >
                          Clear & Continue
                        </button>
                      </motion.div>
                    ) : collection.length === 0 ? (
                      <div className="text-center py-24 text-enola-muted text-xs space-y-3 font-sans leading-relaxed">
                        <ShoppingBag className="w-10 h-10 mx-auto text-enola-bg-dark/80" />
                        <p className="max-w-[200px] mx-auto">{translations.cartEmpty}</p>
                      </div>
                    ) : (
                      <div className="space-y-3.5">
                        {collection.map(item => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-3.5 p-3 bg-[#EFEAE4]/20 border border-enola-bg-dark rounded-2xl relative group"
                          >
                            <img
                              src={item.imageUrl}
                              alt={item.nameEn}
                              referrerPolicy="no-referrer"
                              className="w-14 h-14 object-cover rounded-xl bg-[#DCD6CE]"
                            />
                            <div className="flex-1 min-w-0 pr-6 bg-transparent">
                              <h5 className="text-xs font-bold text-enola-charcoal truncate">
                                {item.nameEn}
                              </h5>
                              <p className="text-[10px] text-enola-muted truncate capitalize font-sans">
                                {item.category}
                              </p>
                              <span className="text-xs font-serif font-semibold text-enola-charcoal block mt-0.5">
                                {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(item.price)}
                              </span>
                            </div>
                            <button
                              id={`remove-product-${item.id}`}
                              onClick={() => removeFromCollection(item.id)}
                              className="absolute right-2 top-2 p-1 text-enola-muted hover:text-black hover:bg-[#EFEAE4] rounded-full transition-all cursor-pointer opacity-70 group-hover:opacity-100"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submission Footer inside Sidebar */}
                  {collection.length > 0 && !inquirySuccess && (
                    <div className="p-6 border-t border-[#DCD6CE] bg-[#EFEAE4]/30">
                      <div className="flex justify-between items-baseline mb-4 text-enola-charcoal">
                        <span className="text-[10px] font-sans font-bold tracking-wider text-enola-muted uppercase">
                          TOTAL VALUE
                        </span>
                        <span className="text-xl font-serif font-semibold">
                          {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(collection.reduce((sum, item) => sum + item.price, 0))}
                        </span>
                      </div>

                      <form onSubmit={handleInquirySubmit} className="space-y-3">
                        <input
                          type="email"
                          placeholder="Enter your email for proposal *"
                          className="w-full px-4 py-2.5 bg-white border border-[#DCD6CE] hover:border-enola-charcoal focus:border-enola-charcoal outline-none rounded-xl text-xs transition-all duration-300"
                          required
                        />

                        <button
                          id="submit-catalog-inquiry"
                          type="submit"
                          disabled={inquirySending}
                          className="w-full bg-enola-charcoal hover:bg-[#3D3732] text-white py-3 px-4 rounded-xl font-sans tracking-widest text-[10px] font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center space-x-1.5"
                        >
                          {inquirySending ? (
                            <span>{translations.formSubmitting}</span>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              <span>{translations.checkoutBtn}</span>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
