// Mock data for General Fresh Cleaning website

export const companyInfo = {
  name: "General Fresh Cleaning",
  fullName: "General Fresh Cleaning Servicii Profesionale de Curățenie",
  tagline: "Servicii Profesionale de Curățenie",
  phone: "+40 745 525 426",
  email: "contact@generalfreshcleaning.ro",
  location: "Târgu Mureș, Județul Mureș",
  schedule: "Deschis zilnic până la ora 20:00",
  rating: 5.0,
  reviewCount: 4,
  photoCount: 23,
  experience: "5+ ani experiență"
};

export const services = [
  {
    id: 1,
    title: "Curățenie Case și Apartamente",
    description: "Servicii complete de curățenie pentru locuințe. Curățăm orice tip de spațiu rezidențial cu atenție la detalii și produse profesionale.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwyfHxob3VzZSUyMGNsZWFuaW5nfGVufDB8fHx8MTc3MTQxNzQ0M3ww&ixlib=rb-4.1.0&q=85",
    features: ["Curățenie generală", "Curățenie detaliată", "Dezinfecție", "Geamuri și oglinzi"],
    targetAudience: "Persoane fizice, familii"
  },
  {
    id: 2,
    title: "Curățenie Birouri",
    description: "Menținem biroul dumneavoastră impecabil. Servicii de curățenie profesională pentru spații de lucru și clădiri comerciale.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85",
    features: ["Curățenie zilnică", "Dezinfecție suprafețe", "Curățenie săli conferințe", "Întreținere spații comune"],
    targetAudience: "Companii, afaceri"
  },
  {
    id: 3,
    title: "Curățenie Scări de Bloc",
    description: "Întreținere profesională pentru scările de bloc. Asigurăm un aspect curat și îngrijit al părților comune.",
    icon: "Building",
    image: "https://images.pexels.com/photos/245219/pexels-photo-245219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    features: ["Curățenie săptămânală", "Spălare și dezinfecție", "Curățenie geamuri", "Îndepărtare praf și pete"],
    targetAudience: "Asociații de proprietari"
  },
  {
    id: 4,
    title: "Întreținere Grădini",
    description: "Servicii complete de întreținere și îngrijire grădini. Transformăm spațiile verzi în oaze de relaxare.",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1724556295135-ff92b9aa0a55",
    features: ["Îngrijire plante", "Fertilizare", "Eliminare buruieni", "Design peisagistic"],
    targetAudience: "Proprietari case, vile"
  },
  {
    id: 5,
    title: "Cosit Iarbă",
    description: "Servicii profesionale de cosit iarbă și întreținere gazon. Echipamente moderne pentru rezultate impecabile.",
    icon: "Leaf",
    image: "https://images.pexels.com/photos/4079768/pexels-photo-4079768.jpeg",
    features: ["Cosit regulat", "Tuns margini", "Aerisire gazon", "Colectare resturi"],
    targetAudience: "Rezidențial și comercial"
  },
  {
    id: 6,
    title: "Tuns Gard Viu",
    description: "Tuns și modelare profesională pentru garduri vii și arbuști ornamentali. Precizie și estetică garantate.",
    icon: "Scissors",
    image: "https://images.pexels.com/photos/4920283/pexels-photo-4920283.jpeg",
    features: ["Tuns forma dorită", "Îngrijire arbuști", "Modelare topiary", "Curățare resturi"],
    targetAudience: "Grădini private și comerciale"
  }
];

export const benefits = [
  {
    icon: "Award",
    title: "Servicii Profesionale",
    description: "Echipă expertă cu experiență în curățenie profesională"
  },
  {
    icon: "Users",
    title: "Personal Calificat",
    description: "Angajați instruiți și verificați pentru siguranța dumneavoastră"
  },
  {
    icon: "BadgeCheck",
    title: "Calitate Garantată",
    description: "Standarde înalte și atenție la cele mai mici detalii"
  },
  {
    icon: "Clock",
    title: "Flexibilitate Program",
    description: "Ne adaptăm programului dumneavoastră, inclusiv weekend"
  },
  {
    icon: "Zap",
    title: "Intervenții Rapide",
    description: "Răspundem prompt și rezolvăm eficient orice provocare"
  },
  {
    icon: "Sparkles",
    title: "Produse Profesionale",
    description: "Utilizăm doar produse certificate și echipamente moderne"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Maria Popescu",
    rating: 5,
    date: "2024-11-15",
    text: "Servicii excelente! Echipa a fost foarte profesionistă și atentă la detalii. Apartamentul arată impecabil. Recomand cu încredere!",
    service: "Curățenie apartament"
  },
  {
    id: 2,
    name: "Ion Mureșan",
    rating: 5,
    date: "2024-10-28",
    text: "Colaborăm pentru curățenia biroului de peste 6 luni. Întotdeauna punctuali și eficienți. Prețuri corecte și rezultate impecabile.",
    service: "Curățenie birou"
  },
  {
    id: 3,
    name: "Elena Kovacs",
    rating: 5,
    date: "2024-09-12",
    text: "Am apelat la serviciile lor pentru grădină și sunt foarte mulțumită. Au făcut o treabă excepțională! Grădina arată superb.",
    service: "Întreținere grădină"
  },
  {
    id: 4,
    name: "Andrei Cristea",
    rating: 5,
    date: "2024-08-20",
    text: "Foarte mulțumit de profesionalismul echipei. Curățenia scării de bloc se face impecabil, la timp și la prețuri accesibile.",
    service: "Curățenie scară bloc"
  }
];

export const gallery = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwyfHxob3VzZSUyMGNsZWFuaW5nfGVufDB8fHx8MTc3MTQxNzQ0M3ww&ixlib=rb-4.1.0&q=85",
    category: "Curățenie case",
    title: "Living impecabil"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nfGVufDB8fHx8MTc3MTQxNzQ0M3ww&ixlib=rb-4.1.0&q=85",
    category: "Curățenie case",
    title: "Bucătărie curată"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/4108672/pexels-photo-4108672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Curățenie bucătărie",
    title: "Spălare vase profesională"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/4108713/pexels-photo-4108713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Curățenie rezidențială",
    title: "Bucătărie modernă"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2VzfGVufDB8fHx8MTc3MTQxNzQ0MHww&ixlib=rb-4.1.0&q=85",
    category: "Curățenie comercială",
    title: "Curățenie geamuri exterior"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1763026227930-ec2c91d4e7f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2VzfGVufDB8fHx8MTc3MTQxNzQ0MHww&ixlib=rb-4.1.0&q=85",
    category: "Curățenie comercială",
    title: "Spații comerciale"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1738656043825-eccc30bc7873?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2VzfGVufDB8fHx8MTc3MTQxNzQ0MHww&ixlib=rb-4.1.0&q=85",
    category: "Echipă profesională",
    title: "Personal calificat"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1724556295135-ff92b9aa0a55",
    category: "Grădină",
    title: "Întreținere grădini"
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/4920283/pexels-photo-4920283.jpeg",
    category: "Grădină",
    title: "Tuns gard viu"
  },
  {
    id: 10,
    url: "https://images.pexels.com/photos/4079768/pexels-photo-4079768.jpeg",
    category: "Grădină",
    title: "Cosit iarbă profesional"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1690068023694-053da714f95f",
    category: "Curățenie comercială",
    title: "Spații de lucru curate"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1683316924890-6a8c5ab10d29",
    category: "Grădină",
    title: "Cosit gazon rezidențial"
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df",
    category: "Grădină",
    title: "Îngrijire spații verzi"
  },
  {
    id: 14,
    url: "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg",
    category: "Echipă",
    title: "Curățenie profesională"
  },
  {
    id: 15,
    url: "https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg",
    category: "Echipă",
    title: "Echipa noastră"
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85",
    category: "Birouri",
    title: "Birouri moderne"
  },
  {
    id: 17,
    url: "https://images.pexels.com/photos/245219/pexels-photo-245219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Scări",
    title: "Scări de bloc curate"
  }
];

export const coverageAreas = [
  "Târgu Mureș",
  "Ungheni",
  "Sângeorgiu de Mureș",
  "Ernei",
  "Gheorghe Doja",
  "Livezeni",
  "Sântana de Mureș",
  "Pănet",
  "Acățari",
  "Și alte localități din județul Mureș"
];

export const faqs = [
  {
    id: 1,
    question: "Ce tipuri de servicii de curățenie oferiți?",
    answer: "Oferim servicii complete de curățenie pentru case, apartamente, birouri, scări de bloc, precum și servicii de întreținere grădini, cosit iarbă și tuns gard viu. Ne adresăm atât persoanelor fizice cât și juridice."
  },
  {
    id: 2,
    question: "În ce zone activați?",
    answer: "Activăm în Târgu Mureș și în toate localitățile din județul Mureș, precum și în zonele apropiate. Contactați-ne pentru a verifica disponibilitatea în zona dumneavoastră."
  },
  {
    id: 3,
    question: "Care este programul de lucru?",
    answer: "Suntem deschis zilnic până la ora 20:00. Ne adaptăm programului dumneavoastră și oferim servicii și în weekend pentru a vă asigura flexibilitate maximă."
  },
  {
    id: 4,
    question: "Folosiți produse proprii sau trebuie să le asigur eu?",
    answer: "Utilizăm exclusiv produse profesionale certificate și echipamente moderne pe care le aducem noi. Nu este nevoie să asigurați nimic - venim complet echipați."
  },
  {
    id: 5,
    question: "Cum pot solicita o ofertă?",
    answer: "Ne puteți contacta telefonic la +40 745 525 426 sau prin formularul de contact de pe site. Vă vom oferi o evaluare gratuită și o ofertă personalizată în funcție de nevoile dumneavoastră."
  }
];
