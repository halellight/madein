import p_img1 from "./p_img1.png";
import p_img2_1 from "./p_img2_1.png";
import p_img2_2 from "./p_img2_2.png";
import p_img2_3 from "./p_img2_3.png";
import p_img2_4 from "./p_img2_4.png";
import p_img3 from "./p_img3.png";
import p_img4 from "./p_img4.png";
import p_img5 from "./p_img5.png";
import p_img6 from "./p_img6.png";
import p_img7 from "./p_img7.png";
import p_img8 from "./p_img8.png";
import p_img9 from "./p_img9.png";
import p_img10 from "./p_img10.png";
import p_img11 from "./p_img11.png";
import p_img12 from "./p_img12.png";
import p_img13 from "./p_img13.png";
import p_img14 from "./p_img14.png";
import p_img15 from "./p_img15.png";
import p_img16 from "./p_img16.png";
import p_img17 from "./p_img17.png";
import p_img18 from "./p_img18.png";
import p_img19 from "./p_img19.png";
import p_img20 from "./p_img20.png";
import p_img21 from "./p_img21.png";
import p_img22 from "./p_img22.png";
import p_img23 from "./p_img23.png";
import p_img24 from "./p_img24.png";
import p_img25 from "./p_img25.png";
import p_img26 from "./p_img26.png";
import p_img27 from "./p_img27.png";
import p_img28 from "./p_img28.png";
import p_img29 from "./p_img29.png";
import p_img30 from "./p_img30.png";
import p_img31 from "./p_img31.png";
import p_img32 from "./p_img32.png";
import p_img33 from "./p_img33.png";
import p_img34 from "./p_img34.png";
import p_img35 from "./p_img35.png";
import p_img36 from "./p_img36.png";
import p_img37 from "./p_img37.png";
import p_img38 from "./p_img38.png";
import p_img39 from "./p_img39.png";
import p_img40 from "./p_img40.png";
import p_img41 from "./p_img41.png";
import p_img42 from "./p_img42.png";
import p_img43 from "./p_img43.png";
import p_img44 from "./p_img44.png";
import p_img45 from "./p_img45.png";
import p_img46 from "./p_img46.png";
import p_img47 from "./p_img47.png";
import p_img48 from "./p_img48.png";
import p_img49 from "./p_img49.png";
import p_img50 from "./p_img50.png";
import p_img51 from "./p_img51.png";
import p_img52 from "./p_img52.png";
import watashi from "./Wata.jpg";
import keepitrad from "./keepitrad.jpg";
import sew from "./sew.jpg";
import chain_earphones from "./chain_earphones.jpg";
import madein_logo from "./madein_logo.png";

import ajora_card_case from "./ajora_card_case.jpg";
import ajora_kawaii_lovely_case from "./ajora_kawaii_lovely_case.jpg";
import ajora_liquid_ripple_case from "./ajora_liquid_ripple_case.jpg";
import ajora_wavy_melt_case from "./ajora_wavy_melt_case.jpg";
import ajora_hello_kitty_case from "./ajora_hello_kitty_case.jpg";

import logo from "./Logo.svg";
import hero_img from "./main.jpg";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import boat_icon from "./boatoutline.svg";

export const assets = {
  logo,
  madein_logo,
  watashi,
  sew,
  keepitrad,
  chain_earphones,
  ajora_card_case,
  ajora_kawaii_lovely_case,
  ajora_liquid_ripple_case,
  ajora_wavy_melt_case,
  ajora_hello_kitty_case,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
  boat_icon,
};

// Simplified Categories
export const categories = [
  { id: "phone_cases", name: "Phone Cases & Accessories", description: "3D Relief, Liquid Ripple & Translucent Cardholder Cases", image: ajora_wavy_melt_case },
  { id: "wigs", name: "Wigs & Hair", description: "HD Lace, Raw Virgin Hair & Custom Styled Units", image: sew },
  { id: "clothing", name: "Clothing & Fashion", description: "Contemporary Streetwear, Adire & Haute Couture", image: watashi },
  { id: "eyewear", name: "Eyewear & Accessories", description: "Silver Chain Earphone Accessories, Frames & Sunglasses", image: chain_earphones },
  { id: "thrift", name: "Thrift & Vintage", description: "Curated Retro Pieces, Rare Denim & Y2K Finds", image: keepitrad },
];

// Featured Vendors
export const vendors = [
  {
    _id: "vendor_ajora",
    name: "Ajora Cases",
    tagline: "3D Relief, Water Ripple & Aesthetic Tech Cases",
    location: "Lagos, NG",
    category: "Phone Cases & Accessories",
    image: ajora_wavy_melt_case,
    verified: true,
    rating: 4.9,
    exclusiveCount: 5,
    story: "Ajora Cases designs trendsetting 3D relief covers, glossy liquid water-ripple cases, and multi-functional pastel cardholder tech accessories."
  },
  {
    _id: "vendor_watashi",
    name: "Watashi Studio",
    tagline: "Artisanal Crochet & High-Street Jewelry",
    location: "Abuja, NG",
    category: "Clothing & Fashion",
    image: watashi,
    verified: true,
    rating: 4.9,
    exclusiveCount: 5,
    story: "Born in Abuja, Watashi blends traditional hand-crochet technique with modern streetwear silhouettes and chrome jewelry."
  },
  {
    _id: "vendor_marythin",
    name: "Marythin Optics",
    tagline: "Avant-Garde Eyewear & Hardware",
    location: "Lagos, NG",
    category: "Eyewear & Accessories",
    image: chain_earphones,
    verified: true,
    rating: 4.9,
    exclusiveCount: 4,
    story: "Lagos-based brand designing chrome charm earphone chains and futuristic frames inspired by West African youth culture."
  },
  {
    _id: "vendor_keepitrad",
    name: "KeepItRad.NG",
    tagline: "Street Culture & Alté Apparel",
    location: "Abuja, NG",
    category: "Clothing & Fashion",
    image: keepitrad,
    verified: true,
    rating: 5.0,
    exclusiveCount: 5,
    story: "Representing the heart of youth alté culture with oversized statement drops."
  },
  {
    _id: "vendor_luxe hair",
    name: "Crown & Mane Wigs",
    tagline: "100% Raw Virgin HD Lace Luxury Wigs",
    location: "Lagos, NG",
    category: "Wigs & Hair",
    image: sew,
    verified: true,
    rating: 4.9,
    exclusiveCount: 4,
    story: "Hand-stitched raw Vietnamese & Cambodian hair extensions tailored to perfection in Lekki."
  },
  {
    _id: "vendor_reloved",
    name: "Thrifted Royalty",
    tagline: "Sustainable Vintage & Designer Archival Thrift",
    location: "Port Harcourt, NG",
    category: "Thrift & Vintage",
    image: p_img3,
    verified: true,
    rating: 4.7,
    exclusiveCount: 3,
    story: "Sourcing rare 90s vintage, Y2K graphic tees, and reworked denim across Nigeria."
  }
];

// Vendor Retention Incentives
export const vendorIncentives = [
  {
    icon: "flash",
    title: "0% Commission Intro",
    description: "Keep 100% of your sales revenue for your first 90 days on MADEIN. Zero setup or listing fees."
  },
  {
    icon: "diamond",
    title: "Only-on-MADEIN Badge",
    description: "Get priority algorithm placement, featured homepage carousels, and VIP buyer curation."
  },
  {
    icon: "chart",
    title: "Free Vendor Analytics",
    description: "Real-time sales metrics, customer demographics, and inventory demand forecasts."
  },
  {
    icon: "box",
    title: "Integrated Doorstep Shipping",
    description: "Instant dispatch logistics across Lagos, Abuja, Port Harcourt, and nationwide delivery."
  },
  {
    icon: "horn",
    title: "Editorial Spotlight & Ads",
    description: "We fund high-production fashion campaigns spotlighting your brand on socials & press."
  },
  {
    icon: "shield",
    title: "Instant Escrow Protection",
    description: "Guaranteed payouts upon delivery with complete fraud protection built for local vendors."
  }
];

// Curated Product Catalog
export const products = [
  {
    _id: "prod_chain_01",
    name: "Silver Cuban Chain Earphone Jewelry Attachment",
    vendor: "Marythin Optics",
    vendorId: "vendor_marythin",
    category: "Eyewear & Accessories",
    subCategory: "Accessories",
    price: 32000,
    image: [chain_earphones],
    description: "1-of-1 handcrafted chrome Cuban link chain earphone strap with custom lock charms & USB-C connection. Exclusively made for MADEIN.",
    sizes: ["One Size"],
    date: 1716639999999,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_001",
    name: "Handmade Textured Crochet Cardigan",
    vendor: "Watashi Studio",
    vendorId: "vendor_watashi",
    category: "Clothing & Fashion",
    subCategory: "Topwear",
    price: 45000,
    image: [watashi, p_img2_1, p_img2_2],
    description: "Handcrafted 100% cotton yarn cardigan with custom horn buttons. Made over 18 hours in Abuja.",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_002",
    name: "Architectural Shield Acetate Sunglasses",
    vendor: "Marythin Optics",
    vendorId: "vendor_marythin",
    category: "Eyewear & Accessories",
    subCategory: "Accessories",
    price: 28000,
    image: [p_img1, p_img4],
    description: "UV400 protection polarized lenses set in hand-polished tortoiseshell acetate. Designed in Lagos.",
    sizes: ["One Size"],
    date: 1716621345448,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_003",
    name: "Alté Heavyweight Graphic Hoodie",
    vendor: "KeepItRad.NG",
    vendorId: "vendor_keepitrad",
    category: "Clothing & Fashion",
    subCategory: "Topwear",
    price: 35000,
    image: [keepitrad, p_img8],
    description: "450GSM French Terry cotton hoodie with custom puff print graphics and distressed ribbing.",
    sizes: ["M", "L", "XL", "XXL"],
    date: 1716234545448,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_004",
    name: "28' HD Melt Lace Frontal Straight Wig",
    vendor: "Crown & Mane Wigs",
    vendorId: "vendor_luxe hair",
    category: "Wigs & Hair",
    subCategory: "HD Lace Wigs",
    price: 185000,
    image: [sew, p_img5],
    description: "Raw Vietnamese virgin hair bleached knot, pre-plucked hairline with 13x6 invisible skin lace.",
    sizes: ["Medium Cap"],
    date: 1716621345448,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_005",
    name: "Vintage 90s Leather Moto Jacket",
    vendor: "Thrifted Royalty",
    vendorId: "vendor_reloved",
    category: "Thrift & Vintage",
    subCategory: "Outerwear",
    price: 42000,
    image: [p_img21, p_img28],
    description: "1-of-1 authentic vintage calfskin leather motorcycle jacket with aged patina and silver hardware.",
    sizes: ["L"],
    date: 1716622345448,
    bestseller: false,
    exclusive: true,
    condition: "Curated Thrift"
  },
  {
    _id: "prod_006",
    name: "Adire Dyed Oversized Unisex Silk Shirt",
    vendor: "Watashi Studio",
    vendorId: "vendor_watashi",
    category: "Clothing & Fashion",
    subCategory: "Topwear",
    price: 38000,
    image: [p_img2_1, p_img2_3],
    description: "Hand-dyed indigo Adire motif on Mulberry silk blend. Breathable, relaxed drape.",
    sizes: ["S", "M", "L"],
    date: 1716623423448,
    bestseller: true,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_007",
    name: "Cyber Tinted Narrow Rectangle Frames",
    vendor: "Marythin Optics",
    vendorId: "vendor_marythin",
    category: "Eyewear & Accessories",
    subCategory: "Accessories",
    price: 22000,
    image: [p_img12, p_img11],
    description: "Sleek Y2K rimless frames with gradient amber lenses and titanium nose pads.",
    sizes: ["One Size"],
    date: 1716621542448,
    bestseller: false,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_008",
    name: "Deep Wave Curly Raw Cambodian Wig",
    vendor: "Crown & Mane Wigs",
    vendorId: "vendor_luxe hair",
    category: "Wigs & Hair",
    subCategory: "HD Lace Wigs",
    price: 210000,
    image: [p_img6, sew],
    description: "High density 250% raw Cambodian deep wave unit with 5x5 HD closure.",
    sizes: ["Small Cap", "Medium Cap"],
    date: 1716622345448,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_009",
    name: "Vintage Reworked Denim Cargo Pants",
    vendor: "Thrifted Royalty",
    vendorId: "vendor_reloved",
    category: "Thrift & Vintage",
    subCategory: "Bottomwear",
    price: 32000,
    image: [p_img7, p_img10],
    description: "Upcycled 90s Levi's denim reconstructed into wide-leg multi-pocket cargo trousers.",
    sizes: ["W32", "W34"],
    date: 1716621235448,
    bestseller: false,
    exclusive: true,
    condition: "Reworked Thrift"
  },
  {
    _id: "prod_010",
    name: "Alté Washed Heavy Cotton T-Shirt",
    vendor: "KeepItRad.NG",
    vendorId: "vendor_keepitrad",
    category: "Clothing & Fashion",
    subCategory: "Topwear",
    price: 24000,
    image: [p_img2_4, p_img14],
    description: "Acid washed 300GSM drop-shoulder tee with screen-printed typography.",
    sizes: ["S", "M", "L", "XL"],
    date: 1716622235448,
    bestseller: true,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_011",
    name: "Urban Acid-Wash Oversized Tee",
    vendor: "KeepItRad.NG",
    vendorId: "vendor_keepitrad",
    category: "Clothing & Fashion",
    subCategory: "Topwear",
    price: 14500,
    image: [p_img13, p_img14],
    description: "Affordable heavyweight 300GSM 100% cotton drop-shoulder tee with vintage acid wash treatment.",
    sizes: ["S", "M", "L", "XL"],
    date: 1716624444444,
    bestseller: true,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_012",
    name: "Adire Indigo Patchwork Utility Shirt",
    vendor: "Watashi Studio",
    vendorId: "vendor_watashi",
    category: "Clothing & Fashion",
    subCategory: "Topwear",
    price: 28000,
    image: [p_img15, p_img16],
    description: "Hand-dyed local cotton-linen blend button up with Adire motifs and wooden button details.",
    sizes: ["M", "L", "XL"],
    date: 1716625555555,
    bestseller: false,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_013",
    name: "Multi-Pocket Techwear Cargo Pants",
    vendor: "KeepItRad.NG",
    vendorId: "vendor_keepitrad",
    category: "Clothing & Fashion",
    subCategory: "Bottomwear",
    price: 24500,
    image: [p_img17, p_img18],
    description: "Durable water-resistant ripstop cotton pants with 6 deep utility pockets and adjustable ankle drawstrings.",
    sizes: ["S", "M", "L", "XL"],
    date: 1716626666666,
    bestseller: true,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_014",
    name: "Futuristic Chrome Wrap-Around Sunglasses",
    vendor: "Marythin Optics",
    vendorId: "vendor_marythin",
    category: "Eyewear & Accessories",
    subCategory: "Accessories",
    price: 9500,
    image: [p_img19, p_img20],
    description: "Ultra-affordable cyber wrap sunglasses featuring UV400 mirror finish polycarbonate lenses.",
    sizes: ["One Size"],
    date: 1716627777777,
    bestseller: true,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_015",
    name: "Y2K Gradient Amber Rimless Square Frames",
    vendor: "Marythin Optics",
    vendorId: "vendor_marythin",
    category: "Eyewear & Accessories",
    subCategory: "Accessories",
    price: 7800,
    image: [p_img22, p_img23],
    description: "Retro frameless square sunglasses with gradient amber tint and titanium nose bridge.",
    sizes: ["One Size"],
    date: 1716628888888,
    bestseller: false,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_016",
    name: "Braided Stainless Earphone Charm Strap",
    vendor: "Marythin Optics",
    vendorId: "vendor_marythin",
    category: "Eyewear & Accessories",
    subCategory: "Accessories",
    price: 12500,
    image: [chain_earphones, p_img24],
    description: "Handcrafted anti-tarnish stainless steel chain with quick-release silicone loops for AirPods and wireless earbuds.",
    sizes: ["One Size"],
    date: 1716629999999,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_017",
    name: "Retro 90s Oversized Bomber Jacket",
    vendor: "Thrifted Royalty",
    vendorId: "vendor_reloved",
    category: "Thrift & Vintage",
    subCategory: "Outerwear",
    price: 22000,
    image: [p_img25, p_img26],
    description: "Curated vintage heavyweight nylon bomber jacket with iconic quilted orange interior lining.",
    sizes: ["L", "XL"],
    date: 1716631111111,
    bestseller: true,
    exclusive: true,
    condition: "Curated Thrift"
  },
  {
    _id: "prod_018",
    name: "Upcycled Patchwork Denim Mini Skirt",
    vendor: "Thrifted Royalty",
    vendorId: "vendor_reloved",
    category: "Thrift & Vintage",
    subCategory: "Bottomwear",
    price: 15000,
    image: [p_img27, p_img29],
    description: "Reconstructed 90s vintage Levi's denim turned into a raw-edge asymmetric mini skirt.",
    sizes: ["S", "M"],
    date: 1716632222222,
    bestseller: false,
    exclusive: true,
    condition: "Reworked Thrift"
  },
  {
    _id: "prod_019",
    name: "Everyday 12' HD Lace Frontal Straight Bob Wig",
    vendor: "Crown & Mane Wigs",
    vendorId: "vendor_luxe hair",
    category: "Wigs & Hair",
    subCategory: "HD Lace Wigs",
    price: 58000,
    image: [sew, p_img30],
    description: "Affordable high quality 100% virgin human hair 12-inch sleek straight bob with pre-plucked 13x4 HD lace frontal.",
    sizes: ["Medium Cap"],
    date: 1716633333333,
    bestseller: true,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_020",
    name: "Water Wave 18' Transparent Closure Unit",
    vendor: "Crown & Mane Wigs",
    vendorId: "vendor_luxe hair",
    category: "Wigs & Hair",
    subCategory: "HD Lace Wigs",
    price: 85000,
    image: [p_img31, sew],
    description: "High density 180% natural water wave human hair unit with 4x4 transparent lace closure. Easy glueless wear.",
    sizes: ["Small Cap", "Medium Cap"],
    date: 1716634444444,
    bestseller: true,
    exclusive: false,
    condition: "Brand New"
  },
  {
    _id: "prod_ajora_01",
    name: "Ajora Translucent Pastel Cardholder Case",
    vendor: "Ajora Cases",
    vendorId: "vendor_ajora",
    category: "Phone Cases & Accessories",
    subCategory: "Cardholder Cases",
    price: 11500,
    image: [ajora_card_case],
    description: "Translucent candy-colored silicone phone case featuring a built-in rear card slot for IDs or payment cards. Flexible shock-absorbent TPU bumper with raised camera protection.",
    sizes: ["iPhone 13", "iPhone 14", "iPhone 14 Pro", "iPhone 15", "iPhone 15 Pro Max"],
    date: 1716640000001,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_ajora_02",
    name: "Ajora Kawaii 3D 'Life is Lovely' Slide Lens Case",
    vendor: "Ajora Cases",
    vendorId: "vendor_ajora",
    category: "Phone Cases & Accessories",
    subCategory: "3D Relief Cases",
    price: 14500,
    image: [ajora_kawaii_lovely_case],
    description: "Ultra-cute 3D textured phone cover with pastel party-hat bear, bunny charms, strawberry details, and a sliding camera cover decorated with a 'cute' heart for total lens protection.",
    sizes: ["iPhone 13", "iPhone 14", "iPhone 14 Pro", "iPhone 15", "iPhone 15 Pro Max"],
    date: 1716640000002,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_ajora_03",
    name: "Ajora Glossy Liquid Water Ripple Sculpted Case",
    vendor: "Ajora Cases",
    vendorId: "vendor_ajora",
    category: "Phone Cases & Accessories",
    subCategory: "Liquid Wave Cases",
    price: 13000,
    image: [ajora_liquid_ripple_case],
    description: "High-shine glossy water ripple sculpted protective case. Features fluid 3D wave ridges that enhance grip while offering heavy-duty corner drop protection.",
    sizes: ["iPhone 13", "iPhone 14", "iPhone 14 Pro", "iPhone 15", "iPhone 15 Pro Max"],
    date: 1716640000003,
    bestseller: false,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_ajora_04",
    name: "Ajora Organic Flow Wavy Melt Contour Case",
    vendor: "Ajora Cases",
    vendorId: "vendor_ajora",
    category: "Phone Cases & Accessories",
    subCategory: "3D Relief Cases",
    price: 12500,
    image: [ajora_wavy_melt_case],
    description: "Soft-touch organic wave contour case with sculpted fluid ridges. Designed with raised lip bezel edge protection, anti-scratch finish, and wireless charging support.",
    sizes: ["iPhone 13", "iPhone 14", "iPhone 14 Pro", "iPhone 15", "iPhone 15 Pro Max"],
    date: 1716640000004,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  },
  {
    _id: "prod_ajora_05",
    name: "Ajora Hello Kitty Daily Life 3D Relief Case",
    vendor: "Ajora Cases",
    vendorId: "vendor_ajora",
    category: "Phone Cases & Accessories",
    subCategory: "3D Relief Cases",
    price: 15000,
    image: [ajora_hello_kitty_case],
    description: "Playful 3D relief pattern case featuring Hello Kitty in daily life outfits, gold-rimmed camera shield, non-slip textured back, and integrated charm attachment loop.",
    sizes: ["iPhone 13", "iPhone 14", "iPhone 14 Pro", "iPhone 15", "iPhone 15 Pro Max"],
    date: 1716640000005,
    bestseller: true,
    exclusive: true,
    condition: "Brand New"
  }
];
