import { TranslationSet, WorkshopType, CatalogProduct } from "./types";

export const translations: Record<"en", TranslationSet> = {
  en: {
    navAbout: "PHILOSOPHY",
    navWorkshop: "ATELIER",
    navCatalog: "COLLECTION",
    navContacts: "CONTACTS",
    heroSubtitle: "BRIDAL COUTURE | BRIDESMAID FITS | COCKTAIL FITS",
    heroCta: "Book Your Bridal Fitting  →",
    philosophyTitle: "WE TURN EVERY BRIDE’S DREAM INTO ELEGANT REALITY",
    philosophyDesc: "MAN MANDIR BRIDAL STUDIO OFFERS MAGNIFICENT BESPOKE BRIDAL WEAR, MAGICAL BRIDESMAID LEHENGAS, COCKTAIL GOWNS, AND COUTURE SEPARATES SYNONYMOUS WITH ROYAL LUXURY AND COUTURE HERITAGE SINCE 1994.",
    sculptureTitle: "CURATED COUTURE ATELIER",
    sculptureDesc: "Each masterpiece in our studio is designed with meticulous attention to detail, utilizing organic silks, heavy brocades, and fine hand-embroidered laces. Hover to view design highlights.",
    questionsTitle: "Have any questions?",
    questionsSubtitle: "Inquire about bridal alterations, custom silhouettes, private masterclasses, or bespoke bridesmaid styling. Our couture advisors will guide you.",
    footerContact: "STUDIO HOURS & ACCESS",
    footerDistribution: "CUSTOM DESIGN & WORLD SHIPPING",
    copyright: "© 1994 - 2026 MAN MANDIR BRIDAL STUDIO. ALL RIGHTS RESERVED.",
    
    // Book Form
    bookModalTitle: "Reserve a Private Bridal Session",
    bookModalSubtitle: "Schedule an exclusive 1-on-1 boutique fitting with our master stylists to outline your custom sketches and measurements.",
    formName: "YOUR FULL NAME",
    formNamePlaceholder: "Sophia Patel",
    formEmail: "EMAIL ADDRESS",
    formEmailPlaceholder: "sophia@example.com",
    formPhone: "MOBILE PHONE",
    formPhonePlaceholder: "+1 (555) 794-1994",
    formDate: "CHOOSE DATE",
    formTime: "TIME PREFERENCE",
    formWorkshopType: "FITTING FOCUS",
    formNotes: "STUDIO SIZING & BRIDAL COUTURE PREFERENCES",
    formNotesPlaceholder: "Provide details of pieces you love (e.g., custom A-line gown, bridesmaid color theme, cocktail fit sizing)...",
    formSubmit: "CONFIRM PRIVATE RESERVATION",
    formSubmitting: "REGISTERING APPOINTMENT...",
    formSuccessTitle: "Bridal Appointment Confirmed",
    formSuccessDesc: "Your styling slot is secured. You will receive an SMS and warm confirmation email from our lead consultant within 10 minutes.",
    formSuccessClose: "CLOSE BOOKING",

    // Catalog
    catalogModalTitle: "Man Mandir Bridal Collection",
    catalogModalClose: "Back to Studio",
    filterAll: "ALL PIECES",
    filterBlazers: "BLAZERS",
    filterDresses: "BRIDAL & COUTURES",
    filterTrousers: "LEHENGAS",
    filterKnitwear: "COCKTAIL WEAR",
    sizingLabel: "SIZES AVAILABLE",
    materialLabel: "MATERIAL COMPOSITION",
    priceLabel: "ESTIMATED VALUE",
    addToCart: "ADD TO SELECTION INQUIRY",
    cartBtn: "MY FAVORITES",
    checkoutBtn: "SUBMIT SELECTION INQUIRY",
    cartEmpty: "No designs curated yet. Tap 'Add' to place exquisite outfits in your dream wishlist.",
    addedAlert: "Added to your custom bridal selection list!"
  }
};

export const workshops: WorkshopType[] = [
  {
    id: "capsule-styling",
    nameEn: "1-on-1 Bridal Consultation Masterclass",
    price: 4500,
    durationEn: "1.5 hours",
    capacity: 1,
    descriptionEn: "Co-curate your dream wedding trousseau featuring bespoke silhouettes, fine handlooms, and perfect palette selections for every ceremony.",
    levelEn: "Private At-Studio"
  },
  {
    id: "made-to-measure",
    nameEn: "Bespoke Bridal Tailoring & Sizing",
    price: 8500,
    durationEn: "2 hours",
    capacity: 1,
    descriptionEn: "Work face-to-face with our master couturiers to map your exact professional measurements and hand-adjust gorgeous drape sweeps.",
    levelEn: "Hand Customization"
  },
  {
    id: "wardrobe-detox",
    nameEn: "Bridal Trousseau Curating & Design",
    price: 12500,
    durationEn: "3 hours",
    capacity: 1,
    descriptionEn: "Our expert styling team helps organize, document, and pair your customized bridal fits, jewelry selections, and heavy lehengas.",
    levelEn: "Lead Stylist Service"
  },
  {
    id: "couture-bridal",
    nameEn: "Heirloom Couture & Custom Lehenga Design",
    price: 20000,
    durationEn: "3 hours",
    capacity: 2,
    descriptionEn: "Draft fine regal bridal lehengas, customized bridesmaid fits, and cocktail silhouettes using gold zari threads and pure raw mulberry silks.",
    levelEn: "Heirloom Special"
  }
];

export const catalogProducts: CatalogProduct[] = [
  {
    id: "p1",
    nameEn: "Handcrafted Gota Patti Blazer Coat",
    category: "blazers",
    price: 32000,
    materialEn: "Premium silk velvet with hand-sewn gota and zardozi cuffs",
    dimensionsEn: "Custom Boutique Tailoring / S / M / L",
    descriptionEn: "Structured blazer coat adorned with vintage Indian craftsmanship. Beautifully drapes for high-end cocktail events.",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p2",
    nameEn: "Royal Crimson Zardozi Lehenga Set",
    category: "trousers",
    price: 185000,
    materialEn: "100% Raw mulberry silk, premium gold zari and sequence embroidery",
    dimensionsEn: "Bespoke Sizing / Stitched to Proportions",
    descriptionEn: "A magnificent regal crimson lehenga crafted by hand. Features heavy dual-border detailing and a lightweight silk dupatta.",
    imageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p3",
    nameEn: "Mulberry Silk Bias-Cut Bridal Gown",
    category: "dresses",
    price: 145000,
    materialEn: "100% Heavy 22-momme double-layered Mulberry silk satin",
    dimensionsEn: "XS / S / M / L / XL Custom",
    descriptionEn: "A timeless, liquid ivory bridal gown flowing with natural lustre. Features an elegant open-back and hand-stitched hem folds.",
    imageUrl: "https://images.unsplash.com/photo-1609142720921-729ec0b1d3d6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p4",
    nameEn: "Sheer Organza Gold Cocktail Cape",
    category: "knitwear",
    price: 24000,
    materialEn: "Fine Italian organza with metallic gold threads",
    dimensionsEn: "One-Size / Fluid Silhouette",
    descriptionEn: "A dramatic sheer gold overlay perfect for reception cocktails. Creates an ethereal look styled over wedding slips.",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p5",
    nameEn: "Hand-Spun Pashmina Bridesmaid Wrap",
    category: "knitwear",
    price: 18500,
    materialEn: "100% Authentic Kashmiri hand-loomed Pashmina wool",
    dimensionsEn: "Standard Wrap Dimensions",
    descriptionEn: "An soft hand-loomed wrap in subtle pastel blush. Perfect, warm luxury for midnight bridesmaid photoshoots.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p6",
    nameEn: "Ivory Silk Georgette Anarkali Suit",
    category: "dresses",
    price: 58000,
    materialEn: "100% Pure silk georgette with lucknowi chikankari borders",
    dimensionsEn: "Custom Measured / S / M / L",
    descriptionEn: "Soft ivory Anarkali outline with deep pocket options and handwoven thread finishes. Breathable and supremely comfortable.",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
  }
];

export const galleryCards = [
  {
    id: "card-1",
    labelEn: "BRIDAL DETAIL",
    titleEn: "Hand-Embroidered Zari",
    descEn: "Meticulous golden thread and beadwork sewn by hand onto pure raw silk panels.",
    shapeClass: "rounded-full w-24 md:w-36 h-[300px] md:h-[400px]",
    imageUrl: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "card-2",
    labelEn: "COUTURES",
    titleEn: "The Crimson Silk",
    descEn: "Rich, deep shades of crimson reflecting modern heritage with maximum movement.",
    shapeClass: "rounded-[3rem] w-48 md:w-64 h-[420px] md:h-[550px]",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "card-3",
    labelEn: "STUNNING OUTLINES",
    titleEn: "Flowing Gowns",
    descEn: "Clean neck cuts paired with magnificent silk trails and delicate lace sleeves.",
    shapeClass: "rounded-[3.5rem] w-56 md:w-80 h-[480px] md:h-[640px]",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "card-4",
    labelEn: "BRIDESMAIDS",
    titleEn: "Pastel Silhouettes",
    descEn: "Soft rose and golden peach hues, tailored into modular, fluid bridesmaid separates.",
    shapeClass: "rounded-[3rem] w-48 md:w-64 h-[420px] md:h-[550px]",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "card-5",
    labelEn: "ATELIER HARMONY",
    titleEn: "Couture Fittings",
    descEn: "Where every stitch coordinates your dream gown with precise bodily outlines.",
    shapeClass: "rounded-full w-24 md:w-36 h-[300px] md:h-[400px]",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80"
  }
];
