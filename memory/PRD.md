# Product Requirements Document (PRD)
## General Fresh Cleaning - Website de Prezentare

**Data Creare:** 19 Decembrie 2024  
**Status:** Frontend MVP Complet ✅

---

## 1. Prezentare Generală

### Despre Proiect
Site de prezentare pentru **General Fresh Cleaning**, firmă de curățenie profesională din Târgu Mureș. Site-ul promovează serviciile companiei, prezintă portofoliul și facilitează contactul cu clienții potențiali.

### Informații Companie
- **Nume:** General Fresh Cleaning Servicii Profesionale de Curățenie
- **Locație:** Târgu Mureș, Județul Mureș
- **Telefon:** +40 745 525 426
- **Email:** contact@generalfreshcleaning.ro
- **Program:** Deschis zilnic până la ora 20:00
- **Rating:** 5.0/5 (4 recenzii)
- **Experiență:** 5+ ani

---

## 2. User Personas

### Persoană Fizică (Ana, 35 ani)
- **Nevoie:** Curățenie profesională pentru apartament
- **Motivație:** Lipsă timp, dorește un spațiu curat fără efort
- **Comportament:** Caută recenzii, prețuri clare, rapiditate

### Manager Birou (Mihai, 42 ani)
- **Nevoie:** Curățenie regulată pentru spații comerciale
- **Motivație:** Menținere imagine profesională, contract pe termen lung
- **Comportament:** Evaluează profesionalismul, punctualitatea, consistența

### Președinte Asociație Proprietari (Elena, 50 ani)
- **Nevoie:** Curățenie scări de bloc, spații comune
- **Motivație:** Menținere igiena blocului, buget optim
- **Comportament:** Caută oferte cu raport calitate-preț bun, flexibilitate program

---

## 3. Arhitectură Tehnică

### Stack Tehnologic
- **Frontend:** React 19.0.0 + Tailwind CSS
- **UI Components:** Shadcn/UI (Radix UI)
- **Routing:** React Router DOM v7.5.1
- **Fonts:** Inter (Google Fonts)
- **Icons:** Lucide React
- **Animații:** Tailwind Animate + CSS Transitions

### Culori Design
- **Primare:** Emerald/Verde (Prospețime, Curățenie)
  - `emerald-400` până la `emerald-700`
- **Secundare:** Teal/Cyan (Profesionalism)
  - `teal-400` până la `teal-700`
- **Gradient Hero:** `from-emerald-900 via-teal-900 to-cyan-900`

---

## 4. Funcționalități Implementate

### ✅ Componente Create (Frontend Only - Mock Data)

#### Header Component
- Navigare smooth scroll către secțiuni
- Meniu responsive mobile
- Buton CTA telefon vizibil
- Logo și branding consistent

#### Hero Section
- Titlu impact: "Curățenie Profesională în Târgu Mureș"
- Badge rating 5.0/5
- 2 CTA-uri: "Sună Acum" + "Solicită Ofertă"
- Trust badges: Experiență, Proiecte, Satisfacție
- Background image cu gradient overlay
- Grid features cards (desktop)

#### Services Section
- 6 servicii complete:
  1. Curățenie Case și Apartamente
  2. Curățenie Birouri
  3. Curățenie Scări de Bloc
  4. Întreținere Grădini
  5. Cosit Iarbă
  6. Tuns Gard Viu
- Fiecare serviciu include: imagine, icon, descriere, features list, target audience
- Hover effects și animații smooth
- CTA pentru ofertă personalizată

#### About Section
- Prezentare companie cu 5+ ani experiență
- Grid imagini 2x2 cu efecte hover
- Statistici: 500+ clienți, 5.0 rating, 5+ ani
- Valorile companiei în box destacat

#### Benefits Section
- 6 avantaje competitive:
  - Servicii Profesionale
  - Personal Calificat
  - Calitate Garantată
  - Flexibilitate Program
  - Intervenții Rapide
  - Produse Profesionale
- Stats bar cu gradient: 500+ clienți, 5.0 rating, 23+ proiecte, 7/7 disponibilitate

#### Reviews Section
- 4 recenzii reale cu rating 5.0
- Fiecare review: text, serviciu, nume, dată
- Card overall rating destacat
- Design modern cu quote icons

#### Gallery Section
- 17 imagini din portofoliu
- Sistem filtrare: Toate, Curățenie case, Birouri, Grădină, Echipă
- Lightbox modal pentru vizualizare mărită
- Hover overlay cu titlu și categorie
- Grid responsive 3 coloane (desktop)

#### Coverage Section
- Lista 10+ localități deservite
- Design map placeholder
- CTA pentru verificare disponibilitate
- Highlight Târgu Mureș + Județul Mureș

#### FAQ Section
- 5 întrebări frecvente cu răspunsuri
- Shadcn Accordion component
- Smooth expand/collapse animation
- CTA pentru întrebări suplimentare

#### Contact Section
- Formular contact funcțional (mock submission):
  - Nume complet
  - Email
  - Telefon
  - Serviciu dorit (dropdown)
  - Mesaj
- Success state după trimitere
- Contact info cards:
  - Telefon cu link direct
  - Email clickabil
  - Locație
  - Program
- CTA Box "Consultație Gratuită"

#### Footer
- Info companie + logo
- Link-uri rapide cu smooth scroll
- Contact complet
- Social media placeholders
- CTA "Solicită Ofertă"
- Copyright © 2024

---

## 5. Mock Data Structure (mock.js)

### Conținut Mock
- `companyInfo`: Date companie, contact, rating
- `services`: Array 6 servicii cu detalii complete
- `benefits`: Array 6 avantaje competitive
- `reviews`: Array 4 recenzii clienți
- `gallery`: Array 17 imagini portofoliu
- `coverageAreas`: Array 10 localități
- `faqs`: Array 5 întrebări frecvente

### Imagini Utilizate
- **17 imagini profesionale** de la Unsplash și Pexels
- Categorii: curățenie case, birouri, echipă, grădini, comercial
- Imagini hero, servicii, galerie, about

---

## 6. Features În Dezvoltare (Post-MVP)

### Backend Development (Următoarea Fază)
- [ ] API endpoints pentru servicii
- [ ] Database MongoDB pentru stocare date
- [ ] Contact form submission (email notification)
- [ ] Gallery management system
- [ ] Reviews management
- [ ] Testimonials admin panel

### Integrări Planificate
- [ ] Google Maps pentru locație
- [ ] Email service (SendGrid/Mailgun) pentru formulare
- [ ] Google Analytics pentru tracking
- [ ] Facebook Pixel pentru remarketing
- [ ] WhatsApp Business integration

### Features Suplimentare
- [ ] Booking system pentru programări
- [ ] Live chat support
- [ ] Calculator preț estimativ
- [ ] Blog/Articole SEO
- [ ] Newsletter subscription
- [ ] Multi-language (Română + Maghiară pentru TG Mureș)

---

## 7. SEO & Marketing

### Target Keywords
- "firmă curățenie Târgu Mureș"
- "servicii curățenie Mureș"
- "curățenie birouri Târgu Mureș"
- "curățenie profesională TG Mureș"
- "întreținere grădini Mureș"

### Optimizări Viitoare
- Meta tags și descriptions
- Schema.org markup pentru LocalBusiness
- OpenGraph pentru social sharing
- Sitemap XML
- robots.txt
- Optimizare imagini (WebP format)
- Lazy loading imagini

---

## 8. Prioritizare Features

### P0 - Critical (MVP Complet ✅)
- ✅ Header cu navigare
- ✅ Hero section
- ✅ Servicii prezentare
- ✅ About section
- ✅ Contact form (mock)
- ✅ Footer
- ✅ Responsive design

### P1 - High Priority (Next Sprint)
- [ ] Backend API pentru contact form
- [ ] Email notifications
- [ ] Google Maps integration
- [ ] Analytics tracking

### P2 - Medium Priority
- [ ] Booking system
- [ ] Blog system
- [ ] Admin panel pentru reviews
- [ ] Multi-language

---

## 9. Timeline

### Sprint 1 - COMPLET ✅ (19 Dec 2024)
- Design și implementare frontend complet
- Toate secțiunile UI funcționale
- Mock data integrat
- Responsive design testat

### Sprint 2 - Planning (22-26 Dec 2024)
- Backend API development
- MongoDB schema design
- Contact form backend
- Testing integration

### Sprint 3 - Planning (29 Dec - 2 Jan 2025)
- Email service integration
- Google Maps integration
- Analytics setup
- SEO optimization

---

## 10. Next Action Items

1. **User Confirmation**: Aștept feedback de la client pe design frontend
2. **Backend Development**: 
   - Creez API endpoints pentru contact form
   - Setup email service (SendGrid sau alternativă)
   - Database models pentru servicii, reviews, contacte
3. **Integration**:
   - Connect frontend cu backend API
   - Remove mock data, replace cu real API calls
4. **Testing**: 
   - End-to-end testing cu testing_agent_v3
   - Form validation și error handling
5. **Deployment Preparation**:
   - Environment variables check
   - Production build optimization

---

## Contact Development Team
Pentru modificări sau întrebări despre implementare, contactați echipa de dezvoltare.

**Status Document:** Activ  
**Ultima Actualizare:** 19 Decembrie 2024  
**Versiune:** 1.0 - Frontend MVP
