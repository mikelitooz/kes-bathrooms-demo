export type Category = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  description: string;
  dimensions: string;
  materials: string;
  delivery: string;
  images: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  offer?: boolean;
  room: "Living Room" | "Bedroom" | "Dining Room" | "Home Office";
};

const media = {
  sofaA: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85",
  sofaB: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  sofaC: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1500&q=85",
  cornerA: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1500&q=85",
  cornerB: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1500&q=85",
  reclinerA: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1500&q=85",
  bedA: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1500&q=85",
  bedB: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
  diningA: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85",
  diningB: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1500&q=85",
  chairA: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1500&q=85",
  coffeeA: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1500&q=85",
  wardrobeA: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=1500&q=85",
  decorA: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1500&q=85",
  decorB: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1500&q=85",
  showroomA: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  showroomB: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85"
};

export const categories: Category[] = [
  { slug: "sofas", name: "Sofas", description: "Family sofas and statement pieces", heroImage: media.sofaA },
  { slug: "corner-sofas", name: "Corner Sofas", description: "Spacious L-shape comfort", heroImage: media.cornerA },
  { slug: "recliner-sofas", name: "Recliner Sofas", description: "Cinema comfort seating", heroImage: media.reclinerA },
  { slug: "beds", name: "Beds", description: "Modern upholstered beds", heroImage: media.bedA },
  { slug: "dining", name: "Dining", description: "Dining sets and side chairs", heroImage: media.diningA },
  { slug: "chairs", name: "Chairs", description: "Accent chairs and armchairs", heroImage: media.chairA },
  { slug: "coffee-tables", name: "Coffee Tables", description: "Living room centerpieces", heroImage: media.coffeeA },
  { slug: "wardrobes", name: "Wardrobes", description: "Stylish bedroom storage", heroImage: media.wardrobeA },
  { slug: "decor", name: "Decor", description: "Rugs, lamps and accessories", heroImage: media.decorA }
];

export const products: Product[] = [
  {
    slug: "lancaster-cloud-4-seat-sofa",
    name: "Lancaster Cloud 4 Seat Sofa",
    category: "sofas",
    price: 1199,
    compareAtPrice: 1499,
    badge: "Save £300",
    shortDescription: "Deep-seat family sofa in soft woven fabric.",
    description: "The Lancaster Cloud balances relaxed comfort with clean showroom styling for modern homes.",
    dimensions: "W 248cm x D 102cm x H 86cm",
    materials: "Performance woven fabric, solid hardwood frame",
    delivery: "Delivery in 7-14 days with optional assembly",
    images: [media.sofaA, media.showroomA, media.sofaB],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "harrogate-tailored-3-seat-sofa",
    name: "Harrogate Tailored 3 Seat Sofa",
    category: "sofas",
    price: 899,
    shortDescription: "Refined profile with supportive back cushions.",
    description: "A polished three-seater made for compact and medium living rooms with premium texture.",
    dimensions: "W 212cm x D 94cm x H 84cm",
    materials: "Textured chenille fabric, kiln-dried frame",
    delivery: "Delivery in 7-14 days",
    images: [media.sofaB, media.sofaC, media.showroomB],
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "whitby-luxe-corner-sofa",
    name: "Whitby Luxe Corner Sofa",
    category: "corner-sofas",
    price: 1499,
    compareAtPrice: 1799,
    shortDescription: "Grand corner sofa with generous chaise section.",
    description: "Designed for open-plan homes, the Whitby Luxe delivers spacious seating and elegant lines.",
    dimensions: "W 284cm x D 196cm x H 88cm",
    materials: "Plush velvet, pocket sprung seat support",
    delivery: "Delivery in 10-21 days",
    images: [media.cornerA, media.cornerB, media.showroomA],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "york-cosy-chaise-corner-sofa",
    name: "York Cosy Chaise Corner Sofa",
    category: "corner-sofas",
    price: 1299,
    shortDescription: "Contemporary L-shape sofa with supportive seats.",
    description: "Flexible corner comfort for family living with a calm, premium visual finish.",
    dimensions: "W 271cm x D 182cm x H 86cm",
    materials: "Durable family fabric, foam and fiber fill",
    delivery: "Delivery in 10-21 days",
    images: [media.cornerB, media.cornerA, media.sofaA],
    room: "Living Room"
  },
  {
    slug: "driffield-cinema-recliner-sofa",
    name: "Driffield Cinema Recliner Sofa",
    category: "recliner-sofas",
    price: 1599,
    compareAtPrice: 1899,
    shortDescription: "Power recliner with USB charging and cup holders.",
    description: "Home cinema comfort with premium stitched upholstery and smooth electric recline.",
    dimensions: "W 236cm x D 103cm x H 103cm",
    materials: "Performance faux leather, steel recliner mechanism",
    delivery: "Delivery in 14-21 days",
    images: [media.reclinerA, media.showroomB, media.sofaC],
    featured: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "malton-manual-recliner-2-seat",
    name: "Malton Manual Recliner 2 Seat",
    category: "recliner-sofas",
    price: 999,
    shortDescription: "Supportive recliner loveseat for smaller spaces.",
    description: "Compact recliner comfort with soft cushioning and easy pull-handle operation.",
    dimensions: "W 168cm x D 98cm x H 101cm",
    materials: "Soft-touch fabric, reinforced frame",
    delivery: "Delivery in 7-14 days",
    images: [media.reclinerA, media.sofaA, media.showroomA],
    room: "Living Room"
  },
  {
    slug: "ainsley-upholstered-bed-frame",
    name: "Ainsley Upholstered Bed Frame",
    category: "beds",
    price: 749,
    compareAtPrice: 899,
    shortDescription: "Vertical-channel headboard in warm neutral fabric.",
    description: "A premium upholstered frame that elevates modern bedrooms with soft form and clean detail.",
    dimensions: "King: W 171cm x L 220cm x H 125cm",
    materials: "Textured linen-look fabric, sprung slats",
    delivery: "Delivery in 7-14 days",
    images: [media.bedA, media.bedB, media.showroomB],
    featured: true,
    offer: true,
    room: "Bedroom"
  },
  {
    slug: "bridlington-storage-ottoman-bed",
    name: "Bridlington Storage Ottoman Bed",
    category: "beds",
    price: 899,
    shortDescription: "Lift-up ottoman bed with hidden storage base.",
    description: "Smart storage and boutique styling combined in one easy-lift upholstered bed.",
    dimensions: "King: W 172cm x L 222cm x H 118cm",
    materials: "Velvet-touch fabric, gas-lift mechanism",
    delivery: "Delivery in 10-21 days",
    images: [media.bedB, media.bedA, media.decorA],
    bestSeller: true,
    room: "Bedroom"
  },
  {
    slug: "ilkley-extendable-dining-set",
    name: "Ilkley Extendable Dining Set",
    category: "dining",
    price: 1099,
    compareAtPrice: 1299,
    shortDescription: "6-8 seat extendable oak dining table set.",
    description: "A practical dining centerpiece with a premium warm-oak finish and upholstered seating.",
    dimensions: "Table: W 180-220cm x D 95cm x H 76cm",
    materials: "Oak veneer, powder-coated steel, woven fabric chairs",
    delivery: "Delivery in 7-14 days",
    images: [media.diningA, media.diningB, media.showroomA],
    featured: true,
    offer: true,
    room: "Dining Room"
  },
  {
    slug: "wetherby-round-dining-set",
    name: "Wetherby Round Dining Set",
    category: "dining",
    price: 849,
    shortDescription: "Space-friendly round table with 4 chairs.",
    description: "Built for modern dining spaces where flexibility and style matter every day.",
    dimensions: "Table: Diameter 120cm x H 75cm",
    materials: "Engineered oak top, curved upholstered chairs",
    delivery: "Delivery in 7-14 days",
    images: [media.diningB, media.diningA, media.chairA],
    newArrival: true,
    room: "Dining Room"
  },
  {
    slug: "helmsley-accent-chair",
    name: "Helmsley Accent Chair",
    category: "chairs",
    price: 429,
    shortDescription: "Curved accent chair with statement texture.",
    description: "An elegant occasional chair designed for reading corners and layered living spaces.",
    dimensions: "W 82cm x D 79cm x H 84cm",
    materials: "Boucle fabric, hardwood legs",
    delivery: "Delivery in 5-10 days",
    images: [media.chairA, media.sofaC, media.showroomA],
    bestSeller: true,
    room: "Living Room"
  },
  {
    slug: "skipton-swivel-armchair",
    name: "Skipton Swivel Armchair",
    category: "chairs",
    price: 499,
    shortDescription: "Modern swivel chair with cocoon comfort.",
    description: "Soft curves and 360 movement for flexible lounging and entertaining.",
    dimensions: "W 86cm x D 81cm x H 88cm",
    materials: "Textured weave fabric, metal swivel base",
    delivery: "Delivery in 7-14 days",
    images: [media.chairA, media.showroomB, media.decorB],
    room: "Living Room"
  },
  {
    slug: "knaresborough-stone-coffee-table",
    name: "Knaresborough Stone Coffee Table",
    category: "coffee-tables",
    price: 299,
    shortDescription: "Round coffee table with stone-effect top.",
    description: "A calm centerpiece table that pairs beautifully with contemporary sofas.",
    dimensions: "Diameter 90cm x H 37cm",
    materials: "Stone-effect composite top, oak veneer base",
    delivery: "Delivery in 3-7 days",
    images: [media.coffeeA, media.showroomB, media.decorA],
    featured: true,
    room: "Living Room"
  },
  {
    slug: "ripon-nesting-coffee-tables",
    name: "Ripon Nesting Coffee Tables",
    category: "coffee-tables",
    price: 249,
    shortDescription: "Set of two nesting tables in warm wood tones.",
    description: "Compact, practical and stylish for layered living room layouts.",
    dimensions: "Large: 78cm, Small: 58cm diameter",
    materials: "Oak veneer, powder-coated steel frame",
    delivery: "Delivery in 3-7 days",
    images: [media.coffeeA, media.showroomA, media.decorB],
    room: "Living Room"
  },
  {
    slug: "filey-3-door-wardrobe",
    name: "Filey 3 Door Wardrobe",
    category: "wardrobes",
    price: 799,
    compareAtPrice: 949,
    shortDescription: "Three-door wardrobe with soft-close storage.",
    description: "A contemporary wardrobe solution balancing hanging space, shelves and style.",
    dimensions: "W 152cm x D 60cm x H 202cm",
    materials: "Laminated oak board, matte black handles",
    delivery: "Delivery in 7-14 days",
    images: [media.wardrobeA, media.bedB, media.decorA],
    offer: true,
    room: "Bedroom"
  },
  {
    slug: "scarborough-sliding-wardrobe",
    name: "Scarborough Sliding Wardrobe",
    category: "wardrobes",
    price: 999,
    shortDescription: "Sliding door wardrobe for clean modern rooms.",
    description: "Ideal for tighter bedroom layouts where swing doors are less practical.",
    dimensions: "W 180cm x D 65cm x H 210cm",
    materials: "Premium MDF wrap, mirrored sliding panels",
    delivery: "Delivery in 10-21 days",
    images: [media.wardrobeA, media.bedA, media.showroomA],
    bestSeller: true,
    room: "Bedroom"
  },
  {
    slug: "heaton-wool-blend-rug",
    name: "Heaton Wool Blend Rug",
    category: "decor",
    price: 189,
    shortDescription: "Soft neutral rug with geometric texture.",
    description: "A grounding layer for living rooms and bedrooms with a premium tactile finish.",
    dimensions: "160cm x 230cm",
    materials: "Wool blend pile",
    delivery: "Delivery in 3-7 days",
    images: [media.decorB, media.decorA, media.showroomB],
    room: "Living Room"
  },
  {
    slug: "oakley-ceramic-table-lamp",
    name: "Oakley Ceramic Table Lamp",
    category: "decor",
    price: 89,
    shortDescription: "Ceramic table lamp with linen shade.",
    description: "Adds warm layered lighting and subtle texture to side tables and consoles.",
    dimensions: "H 52cm x Diameter 32cm",
    materials: "Glazed ceramic base, linen blend shade",
    delivery: "Delivery in 2-5 days",
    images: [media.decorA, media.showroomA, media.coffeeA],
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "bramley-sofa-bed",
    name: "Bramley Sofa Bed",
    category: "sofas",
    price: 999,
    shortDescription: "Pull-out sofa bed with everyday comfort.",
    description: "A dual-purpose piece made for guests, apartments and practical family homes.",
    dimensions: "W 215cm x D 98cm x H 88cm",
    materials: "Textured weave fabric, fold-out metal frame",
    delivery: "Delivery in 7-14 days",
    images: [media.sofaC, media.showroomB, media.bedA],
    room: "Living Room"
  },
  {
    slug: "settle-petite-2-seat-sofa",
    name: "Settle Petite 2 Seat Sofa",
    category: "sofas",
    price: 699,
    compareAtPrice: 849,
    shortDescription: "Compact two-seater for modern apartments.",
    description: "Scaled for smaller rooms without compromising style or comfort.",
    dimensions: "W 170cm x D 90cm x H 84cm",
    materials: "Polyester blend fabric, hardwood frame",
    delivery: "Delivery in 5-10 days",
    images: [media.sofaA, media.sofaB, media.showroomA],
    offer: true,
    room: "Living Room"
  },
  {
    slug: "otley-motion-recliner-corner",
    name: "Otley Motion Recliner Corner",
    category: "recliner-sofas",
    price: 1999,
    shortDescription: "Modular corner recliner with electric headrests.",
    description: "Premium recliner corner built for family movie nights and daily lounging.",
    dimensions: "W 298cm x D 232cm x H 102cm",
    materials: "Performance leather-look upholstery, electric motion system",
    delivery: "Delivery in 14-28 days",
    images: [media.reclinerA, media.cornerA, media.showroomB],
    featured: true,
    bestSeller: true,
    room: "Living Room"
  },
  {
    slug: "thirsk-compact-dining-bench-set",
    name: "Thirsk Compact Dining Bench Set",
    category: "dining",
    price: 749,
    shortDescription: "Compact table with two benches for family kitchens.",
    description: "Space-smart dining with soft industrial character and easy everyday durability.",
    dimensions: "Table: W 160cm x D 85cm x H 76cm",
    materials: "Oak finish top, powder-coated steel base",
    delivery: "Delivery in 5-10 days",
    images: [media.diningA, media.showroomA, media.decorA],
    room: "Dining Room"
  },
  {
    slug: "bingley-boucle-lounge-chair",
    name: "Bingley Boucle Lounge Chair",
    category: "chairs",
    price: 469,
    shortDescription: "Soft boucle lounge chair with walnut legs.",
    description: "A modern lounge chair designed for reading corners and statement seating moments.",
    dimensions: "W 79cm x D 82cm x H 86cm",
    materials: "Boucle upholstery, walnut stain legs",
    delivery: "Delivery in 7-14 days",
    images: [media.chairA, media.decorB, media.showroomA],
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "selby-fluted-coffee-table",
    name: "Selby Fluted Coffee Table",
    category: "coffee-tables",
    price: 339,
    shortDescription: "Fluted wood coffee table with hidden shelf.",
    description: "Statement table styling with useful storage for remotes, books and accessories.",
    dimensions: "W 110cm x D 60cm x H 38cm",
    materials: "Engineered wood, oak veneer finish",
    delivery: "Delivery in 3-7 days",
    images: [media.coffeeA, media.showroomB, media.decorA],
    bestSeller: true,
    room: "Living Room"
  },
  {
    slug: "leyburn-mirrored-wardrobe",
    name: "Leyburn Mirrored Wardrobe",
    category: "wardrobes",
    price: 1099,
    shortDescription: "Mirror-front wardrobe for brighter bedrooms.",
    description: "A storage-focused wardrobe that visually expands the room with full-height mirror panels.",
    dimensions: "W 200cm x D 64cm x H 212cm",
    materials: "Premium board carcass, mirror sliding fronts",
    delivery: "Delivery in 10-21 days",
    images: [media.wardrobeA, media.bedA, media.showroomB],
    room: "Bedroom"
  },
  {
    slug: "farsley-textured-cushion-set",
    name: "Farsley Textured Cushion Set",
    category: "decor",
    price: 59,
    shortDescription: "Set of 3 textured cushions in warm neutrals.",
    description: "Quick styling uplift for sofas and beds with layered neutral texture.",
    dimensions: "3 x 45cm x 45cm",
    materials: "Cotton blend covers, recycled fiber fill",
    delivery: "Delivery in 2-5 days",
    images: [media.decorA, media.sofaC, media.showroomA],
    offer: true,
    room: "Living Room"
  }
];

export const promoBanners = [
  "Quality craftsmanship guaranteed · handpicked furniture for Yorkshire homes",
  "0% interest finance available on orders over £500 · flexible monthly plans",
  "Free Sheffield delivery on selected lines · open 7 days a week",
  "Bundle and save when you furnish multiple rooms · visit our Queens Road showroom",
];

export const roomShop = [
  { name: "Living Room", image: media.showroomA, href: "/shop?room=Living%20Room" },
  { name: "Bedroom", image: media.bedA, href: "/shop?room=Bedroom" },
  { name: "Dining Room", image: media.diningA, href: "/shop?room=Dining%20Room" },
  { name: "Home Office", image: media.decorA, href: "/shop?room=Home%20Office" }
];

export function currency(value: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug);
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);
}
