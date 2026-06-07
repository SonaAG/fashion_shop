import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Sparkles, Check } from "lucide-react";
import { TranslationSet, WorkshopType, BookingData } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  translations: TranslationSet;
  workshops: WorkshopType[];
  selectedWorkshopId: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  translations,
  workshops,
  selectedWorkshopId,
}) => {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "10:00",
    workshopTypeId: selectedWorkshopId || workshops[0]?.id || "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.workshopTypeId) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  // Pre-fill when selectedWorkshopId changes
  React.useEffect(() => {
    if (selectedWorkshopId) {
      setFormData((prev) => ({ ...prev, workshopTypeId: selectedWorkshopId }));
    }
  }, [selectedWorkshopId]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Upper Accent Header */}
            <div className="bg-enola-bg-dark/40 py-8 px-8 sm:px-10 relative flex justify-between items-start border-b border-enola-bg-dark">
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest uppercase text-enola-muted font-sans font-semibold">
                  MAN MANDIR BRIDAL STUDIO
                </span>
                <h2 className="text-2xl font-serif text-enola-charcoal tracking-wide">
                  {translations.bookModalTitle}
                </h2>
                <p className="text-xs text-enola-muted max-w-lg mt-1 font-sans">
                  {translations.bookModalSubtitle}
                </p>
              </div>
              <button
                id="close-booking-modal"
                onClick={onClose}
                className="p-2 hover:bg-enola-bg-dark/60 rounded-full transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5 text-enola-charcoal" />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-10 bg-white">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {errorMsg && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="block text-[10px] tracking-widest text-enola-charcoal font-semibold">
                          {translations.formName} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={translations.formNamePlaceholder}
                          className="w-full px-4 py-3 bg-[#EFEAE4]/30 border border-enola-bg-dark hover:border-enola-charcoal focus:border-enola-charcoal focus:bg-white outline-none rounded-xl text-sm transition-all duration-300"
                          required
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="block text-[10px] tracking-widest text-enola-charcoal font-semibold">
                          {translations.formEmail} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={translations.formEmailPlaceholder}
                          className="w-full px-4 py-3 bg-[#EFEAE4]/30 border border-enola-bg-dark hover:border-enola-charcoal focus:border-enola-charcoal focus:bg-white outline-none rounded-xl text-sm transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone input */}
                      <div className="space-y-2">
                        <label className="block text-[10px] tracking-widest text-enola-charcoal font-semibold">
                          {translations.formPhone} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={translations.formPhonePlaceholder}
                          className="w-full px-4 py-3 bg-[#EFEAE4]/30 border border-enola-bg-dark hover:border-enola-charcoal focus:border-enola-charcoal focus:bg-white outline-none rounded-xl text-sm transition-all duration-300"
                          required
                        />
                      </div>

                      {/* Atelier Appointment selection */}
                      <div className="space-y-2">
                        <label className="block text-[10px] tracking-widest text-enola-charcoal font-semibold">
                          {translations.formWorkshopType} *
                        </label>
                        <select
                          name="workshopTypeId"
                          value={formData.workshopTypeId}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#EFEAE4]/30 border border-enola-bg-dark hover:border-enola-charcoal focus:border-enola-charcoal focus:bg-white outline-none rounded-xl text-sm transition-all duration-300 text-enola-charcoal"
                          required
                        >
                          {workshops.map((ws) => (
                            <option key={ws.id} value={ws.id}>
                              {ws.nameEn} — {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(ws.price)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Date selection */}
                      <div className="space-y-2">
                        <label className="block text-[10px] tracking-widest text-enola-charcoal font-semibold">
                          {translations.formDate} *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-[#EFEAE4]/30 border border-enola-bg-dark hover:border-enola-charcoal focus:border-enola-charcoal focus:bg-white outline-none rounded-xl text-sm transition-all duration-300 text-enola-charcoal"
                            required
                          />
                          <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-enola-muted pointer-events-none" />
                        </div>
                      </div>

                      {/* Time Slot selection */}
                      <div className="space-y-2">
                        <label className="block text-[10px] tracking-widest text-enola-charcoal font-semibold">
                          {translations.formTime} *
                        </label>
                        <div className="relative">
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-[#EFEAE4]/30 border border-enola-bg-dark hover:border-enola-charcoal focus:border-enola-charcoal focus:bg-white outline-none rounded-xl text-sm transition-all duration-300 text-enola-charcoal"
                            required
                          >
                            <option value="10:00">10:00 AM - 11:30 AM</option>
                            <option value="12:00">12:00 PM - 01:30 PM</option>
                            <option value="14:00">02:00 PM - 03:30 PM</option>
                            <option value="16:00">04:00 PM - 05:30 PM</option>
                            <option value="18:00">06:00 PM - 07:30 PM</option>
                          </select>
                          <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-enola-muted pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes area */}
                    <div className="space-y-2">
                      <label className="block text-[10px] tracking-widest text-enola-charcoal font-semibold">
                        {translations.formNotes}
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder={translations.formNotesPlaceholder}
                        className="w-full px-4 py-3 bg-[#EFEAE4]/30 border border-enola-bg-dark hover:border-enola-charcoal focus:border-enola-charcoal focus:bg-white outline-none rounded-xl text-sm transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-booking-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 bg-enola-charcoal hover:bg-[#3D3732] text-white py-3.5 px-6 rounded-xl font-sans tracking-[0.15em] text-xs font-semibold cursor-pointer select-none transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>{translations.formSubmitting}</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>{translations.formSubmit}</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6"
                  >
                    <div className="w-16 h-16 bg-enola-bg-dark/40 rounded-full flex items-center justify-center text-green-700">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-enola-charcoal">
                        {translations.formSuccessTitle}
                      </h3>
                      <p className="text-sm text-enola-muted max-w-sm mx-auto leading-relaxed">
                        {translations.formSuccessDesc}
                      </p>
                    </div>
                    <button
                      id="booking-success-close"
                      onClick={() => {
                        setIsSuccess(false);
                        onClose();
                      }}
                      className="px-8 py-3 bg-enola-charcoal hover:bg-[#3D3732] text-white rounded-xl text-xs font-sans tracking-widest font-semibold transition-all duration-300 cursor-pointer"
                    >
                      {translations.formSuccessClose}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
