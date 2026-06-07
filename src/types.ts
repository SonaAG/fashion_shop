export type Language = "en";

export interface TranslationSet {
  navAbout: string;
  navWorkshop: string; // Will show "ATELIER" or "STYLING"
  navCatalog: string;
  navContacts: string;
  heroSubtitle: string;
  heroCta: string;
  philosophyTitle: string;
  philosophyDesc: string;
  sculptureTitle: string; // Gallery title
  sculptureDesc: string; // Gallery desc
  questionsTitle: string;
  questionsSubtitle: string;
  footerContact: string;
  footerDistribution: string;
  copyright: string;
  
  // Workshop Book Form Translations
  bookModalTitle: string;
  bookModalSubtitle: string;
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formPhone: string;
  formPhonePlaceholder: string;
  formDate: string;
  formTime: string;
  formWorkshopType: string;
  formNotes: string;
  formNotesPlaceholder: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  formSuccessClose: string;

  // Catalog Translations
  catalogModalTitle: string;
  catalogModalClose: string;
  filterAll: string;
  filterBlazers: string;
  filterDresses: string;
  filterTrousers: string;
  filterKnitwear: string;
  sizingLabel: string;
  materialLabel: string;
  priceLabel: string;
  addToCart: string;
  cartBtn: string;
  checkoutBtn: string;
  cartEmpty: string;
  addedAlert: string;
}

export interface WorkshopType {
  id: string;
  nameEn: string;
  price: number;
  durationEn: string;
  capacity: number;
  descriptionEn: string;
  levelEn: string;
}

export interface CatalogProduct {
  id: string;
  nameEn: string;
  category: "blazers" | "dresses" | "trousers" | "knitwear";
  price: number;
  materialEn: string;
  dimensionsEn: string; // Represents sizing (e.g. S, M, L)
  descriptionEn: string;
  imageUrl: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  workshopTypeId: string;
  notes?: string;
}
