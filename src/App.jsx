import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Flame,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Star,
  X,
} from 'lucide-react'

const WHATSAPP_NUMBER = '212781632100'

const categories = [
  { id: 'burgers', label: 'Burgers' },
  { id: 'sides', label: 'Sides' },
  { id: 'boissons', label: 'Boissons' },
]

const menuItems = [
  {
    name: 'Classic Smash & Fries',
    price: 60,
    category: 'burgers',
    description: 'Potato bun, steak smashé, cheese, sauce maison, pickles & laitue.',
    image: '/images/hero-smash.webp',
    alt: 'Classic Smash burger avec cheese fondant, pickles et laitue sur potato bun',
    imageClass: 'transparent',
  },
  {
    name: 'Double Smash & Fries',
    price: 75,
    category: 'burgers',
    description: 'Deux steaks smashés, double cheese, sauce maison, pickles & laitue.',
    image: '/images/hero-smash.webp',
    alt: 'Double Smash burger avec deux steaks smashés et double cheese',
    imageClass: 'transparent',
    popular: true,
  },
  {
    name: 'Triple Smash & Fries',
    price: 90,
    category: 'burgers',
    description: 'Trois steaks smashés, triple cheese, sauce maison, pickles & laitue.',
    image: '/images/hero-smash.webp',
    alt: 'Triple Smash burger avec trois steaks smashés et triple cheese',
    imageClass: 'transparent',
  },
  {
    name: 'The OG Smash & Fries',
    price: 75,
    category: 'burgers',
    description: 'Double smash, cheese, oignons frais, pickles, ketchup & moutarde américaine.',
    image: '/images/hero-smash.webp',
    alt: 'OG Smash burger classique avec ketchup et moutarde américaine',
    imageClass: 'transparent',
  },
  {
    name: 'Chicken Burger & Fries',
    price: 75,
    category: 'burgers',
    description: 'Deux tenders croustillants, cheese, sauce maison, pickles & laitue.',
    image: '/images/chicken-burger.webp',
    alt: 'Chicken burger avec tenders croustillants, cheese et sauce maison',
  },
  {
    name: 'Shroom Burger & Fries',
    price: 105,
    category: 'burgers',
    description: 'Double smash, double cheese, champignons crémeux, sauce poivre & oignons crispy.',
    image: '/images/shroom-burger.webp',
    alt: 'Shroom Burger avec champignons crémeux, sauce poivre et oignons crispy',
    signature: true,
  },
  {
    name: 'Cheesy Crazy & Fries',
    price: 105,
    category: 'burgers',
    description: 'Double smash avec cheese, cheddar sauce et mozzarella frite.',
    image: '/images/hero-smash.webp',
    alt: 'Cheesy Crazy burger avec cheddar sauce et mozzarella frite',
    imageClass: 'transparent',
  },
  {
    name: 'Beef Loaded Fries',
    price: 45,
    category: 'sides',
    description: 'Frites fraîches, bœuf smashé, cheese & smash sauce.',
    image: '/images/loaded-fries.webp',
    alt: 'Frites chargées au bœuf smashé, cheese fondant et smash sauce',
    popular: true,
  },
  {
    name: 'Chicken Loaded Fries',
    price: 45,
    category: 'sides',
    description: 'Frites fraîches, poulet croustillant & sauce tartare.',
    image: '/images/loaded-fries.webp',
    alt: 'Frites chargées au poulet croustillant et sauce tartare',
  },
  {
    name: 'Cheesy Fries',
    price: 45,
    category: 'sides',
    description: 'Frites fraîches, cheddar sauce, oignons crispy & jalapeños.',
    image: '/images/loaded-fries.webp',
    alt: 'Frites au cheddar fondant, oignons crispy et jalapeños',
  },
  {
    name: 'Fresh Cut Fries',
    price: 15,
    category: 'sides',
    description: 'Nos frites fraîches, coupées maison chaque jour.',
    image: '/images/loaded-fries.webp',
    alt: 'Portion de frites fraîches coupées maison',
  },
  {
    name: '2× Chicken Tenders',
    price: 40,
    category: 'sides',
    description: 'Deux tenders croustillants servis avec sauce tartare.',
    image: '/images/chicken-burger.webp',
    alt: 'Deux tenders de poulet croustillants avec sauce tartare',
  },
  {
    name: '4× Chicken Tenders',
    price: 80,
    category: 'sides',
    description: 'Quatre tenders croustillants servis avec sauce tartare.',
    image: '/images/chicken-burger.webp',
    alt: 'Quatre tenders de poulet croustillants avec sauce tartare',
  },
  {
    name: 'Chili Cheese Bites',
    price: 40,
    category: 'sides',
    description: 'Cinq bouchées fondantes et légèrement relevées.',
    image: '/images/loaded-fries.webp',
    alt: 'Cinq bouchées chili cheese fondantes et dorées',
  },
  {
    name: 'Mozza Sticks',
    price: 40,
    category: 'sides',
    description: 'Cinq sticks de mozzarella dorés et croustillants.',
    image: '/images/loaded-fries.webp',
    alt: 'Cinq sticks de mozzarella dorés et croustillants',
  },
  {
    name: 'Onion Rings',
    price: 40,
    category: 'sides',
    description: 'Cinq onion rings généreux et croustillants.',
    image: '/images/loaded-fries.webp',
    alt: 'Cinq onion rings dorés et croustillants',
  },
  {
    name: '2× Chicken Wings',
    price: 40,
    category: 'sides',
    description: 'Deux wings croustillantes avec sauce tartare.',
    image: '/images/chicken-burger.webp',
    alt: 'Deux ailes de poulet croustillantes avec sauce tartare',
  },
  {
    name: 'Sodas 45 cl',
    price: 15,
    category: 'boissons',
    description: 'Coca-Cola, Coca-Cola Zero, Sprite, Hawaï, Poms ou Schweppes Citron.',
    image: '/images/drinks.webp',
    alt: 'Sélection de sodas : Coca-Cola, Sprite, Hawaï et plus',
  },
  {
    name: 'Eau Ciel 50 cl',
    price: 10,
    category: 'boissons',
    description: 'Eau de table fraîche.',
    image: '/images/drinks.webp',
    alt: 'Bouteille d\u2019eau Ciel 50 cl',
  },
]

const buildWhatsAppUrl = (itemName) => {
  const message = itemName
    ? `Bonjour Smash Brothers Joint ! Je souhaite commander : ${itemName}.`
    : 'Bonjour Smash Brothers Joint ! Je souhaite passer une commande.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function OrderButton({ item, className = '' }) {
  return (
    <a
      className={`order-button ${className}`}
      href={buildWhatsAppUrl(item)}
      target="_blank"
      rel="noreferrer"
      aria-label={item ? `Commander ${item} sur WhatsApp` : 'Commander sur WhatsApp'}
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span>{item ? 'Commander' : 'Commander sur WhatsApp'}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('burgers')
  const [menuOpen, setMenuOpen] = useState(false)
  const heroVisual = useRef(null)
  const headerRef = useRef(null)

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const node = heroVisual.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const handlePointerMove = (event) => {
      const rect = node.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      node.style.setProperty('--tilt-x', `${y * -8}deg`)
      node.style.setProperty('--tilt-y', `${x * 10}deg`)
      node.style.setProperty('--shift-x', `${x * 16}px`)
      node.style.setProperty('--shift-y', `${y * 12}px`)
    }

    const reset = () => {
      node.style.setProperty('--tilt-x', '0deg')
      node.style.setProperty('--tilt-y', '0deg')
      node.style.setProperty('--shift-x', '0px')
      node.style.setProperty('--shift-y', '0px')
    }

    node.addEventListener('pointermove', handlePointerMove)
    node.addEventListener('pointerleave', reset)
    return () => {
      node.removeEventListener('pointermove', handlePointerMove)
      node.removeEventListener('pointerleave', reset)
    }
  }, [])

  /* Close mobile nav on outside click or Escape key */
  useEffect(() => {
    if (!menuOpen) return undefined

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen, closeMenu])

  return (
    <div className="site-shell">
      <header className="site-header" ref={headerRef}>
        <a className="brand" href="#top" aria-label="Smash Brothers Joint, accueil">
          <span className="brand-main">smash.</span>
          <span className="brand-sub">Brothers Joint</span>
        </a>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          <a href="#menu" onClick={closeMenu}>La carte</a>
          <a href="#concept" onClick={closeMenu}>Notre smash</a>
          <a href="#adresse" onClick={closeMenu}>Nous trouver</a>
          <OrderButton className="nav-order" />
        </nav>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><Flame size={17} aria-hidden="true" /> Smashé à la minute · Talborjt</p>
            <h1>
              Pas juste un burger.
              <span>C’est un smash.</span>
            </h1>
            <p className="hero-lead">
              Une croûte caramélisée, du cheese qui fond, un potato bun toasté et notre sauce secrète. Du frais, chaque jour. Zéro compromis.
            </p>
            <div className="hero-actions">
              <OrderButton />
              <a className="text-link" href="#menu">Voir la carte <ArrowDown size={18} aria-hidden="true" /></a>
            </div>
            <div className="hero-proof" aria-label="Avis et disponibilité">
              <div className="rating-stars" aria-label="Note Google 4,8 sur 5">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={17} fill="currentColor" aria-hidden="true" />)}
              </div>
              <span><strong>4,8/5</strong> sur Google</span>
              <span className="proof-divider" aria-hidden="true" />
              <span>Sur place · À emporter · Livraison</span>
            </div>
          </div>

          <div className="hero-stage" ref={heroVisual} aria-label="Double smash burger aux ingrédients en suspension">
            <div className="hero-orbit orbit-one" aria-hidden="true">100% frais</div>
            <div className="hero-orbit orbit-two" aria-hidden="true">Double cheese</div>
            <div className="hero-glow" aria-hidden="true" />
            <img className="hero-burger" src="/images/hero.webp" alt="Image d'accueil du Smash Brothers Joint" />
            <div className="hero-price" aria-label="Classic Smash à partir de 60 dirhams">
              <span>Dès</span>
              <strong>60</strong>
              <span>MAD</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>SMASHÉ À LA MINUTE</span><i />
            <span>FRITES FRAÎCHES</span><i />
            <span>POTATO BUN TOASTÉ</span><i />
            <span>SAUCE MAISON</span><i />
            <span>SMASHÉ À LA MINUTE</span><i />
            <span>FRITES FRAÎCHES</span><i />
            <span>POTATO BUN TOASTÉ</span><i />
          </div>
        </div>

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <div>
              <p className="eyebrow">La carte</p>
              <h2>Choisis ton smash.</h2>
            </div>
            <p>Chaque burger est préparé à la commande et servi avec nos frites fraîches.</p>
          </div>

          <div className="category-tabs" role="tablist" aria-label="Catégories du menu">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
                <span>{menuItems.filter((item) => item.category === category.id).length}</span>
              </button>
            ))}
          </div>

          <div className="menu-grid" role="tabpanel">
            {filteredItems.map((item, index) => (
              <article className="menu-card" key={item.name} style={{ '--item-index': index }}>
                <div className={`menu-card-media ${item.imageClass || ''}`}>
                  <img src={item.image} alt={item.alt} loading={index > 2 ? 'lazy' : 'eager'} />
                  {item.popular && <span className="card-badge">Best-seller</span>}
                  {item.signature && <span className="card-badge">Signature</span>}
                  <span className="card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-title">
                    <h3>{item.name}</h3>
                    <p className="price"><strong>{item.price}</strong> MAD</p>
                  </div>
                  <p>{item.description}</p>
                  <a href={buildWhatsAppUrl(item.name)} target="_blank" rel="noreferrer">
                    Ajouter à ma commande <ChevronRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="menu-note">Prix et disponibilités susceptibles d’évoluer. Commande confirmée directement sur WhatsApp.</p>
        </section>

        <section className="concept-section" id="concept">
          <div className="concept-visual">
            <div className="concept-image-wrap">
              <img src="/images/shroom-burger.webp" alt="Shroom Burger avec double smash, champignons crémeux et oignons crispy" loading="lazy" />
            </div>
            <div className="concept-stamp" aria-hidden="true">
              <span>FRAIS · CHAUD · SMASHÉ ·</span>
              <strong>S.</strong>
            </div>
          </div>
          <div className="concept-copy">
            <p className="eyebrow">Le vrai smash</p>
            <h2>Le croustillant commence sur la plancha.</h2>
            <p>
              Nos steaks de bœuf sont pressés sur une plancha brûlante pour créer cette fine croûte caramélisée qui change tout. Le reste est simple : du frais, du généreux, du fait minute.
            </p>
            <ul>
              <li><span>01</span><div><strong>Smashé à la commande</strong><p>Une cuisson vive pour une croûte parfaitement caramélisée.</p></div></li>
              <li><span>02</span><div><strong>Préparé frais</strong><p>Des ingrédients frais et des frites coupées maison.</p></div></li>
              <li><span>03</span><div><strong>Servi généreux</strong><p>Des recettes franches, gourmandes et sans raccourci.</p></div></li>
            </ul>
          </div>
        </section>

        <section className="location-section" id="adresse">
          <div className="location-card">
            <p className="eyebrow">Talborjt · Agadir</p>
            <h2>Viens le goûter en vrai.</h2>
            <p>Au cœur de Talborjt, pour déjeuner, dîner, emporter ou te faire livrer.</p>
            <div className="location-details">
              <div><MapPin aria-hidden="true" /><span><small>Adresse</small>21 bis, Rue Changuit<br />Talborjt, Agadir 80000</span></div>
              <div><Clock3 aria-hidden="true" /><span><small>Horaires affichés</small>Tous les jours<br />12:00 — 00:30</span></div>
            </div>
            <div className="location-actions">
              <a className="outline-button" href="https://www.google.com/maps/search/?api=1&query=Smash+Brothers+Joint+Agadir" target="_blank" rel="noreferrer">
                Itinéraire <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <OrderButton />
            </div>
          </div>
          <div className="location-art" aria-hidden="true">
            <span className="map-label label-one">TALBORJT</span>
            <span className="map-label label-two">AGADIR</span>
            <div className="map-line line-one" />
            <div className="map-line line-two" />
            <div className="map-line line-three" />
            <div className="map-pin"><MapPin /></div>
          </div>
        </section>

        <section className="final-cta">
          <div>
            <p className="eyebrow">Tu as faim ?</p>
            <h2>Ton prochain smash est à un message.</h2>
          </div>
          <OrderButton />
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-main">smash.</span>
          <span className="brand-sub">Brothers Joint</span>
        </a>
        <p>Smash burgers & fresh cut fries.<br />Faits avec sérieux à Agadir.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/smash.agadir/" target="_blank" rel="noreferrer"><Instagram size={18} aria-hidden="true" /> @smash.agadir</a>
          <a href="tel:+212781632100">+212 781 632 100</a>
          <a href="mailto:smashagadir@gmail.com">smashagadir@gmail.com</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Smash Brothers Joint</p>
      </footer>

      <a className="floating-whatsapp" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Commander sur WhatsApp">
        <MessageCircle aria-hidden="true" />
      </a>
    </div>
  )
}

export default App
