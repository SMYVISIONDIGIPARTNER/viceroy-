import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "12243909829";

/* SEO + GEO (Generative Engine Optimization) */
const SITE_URL = "https://www.theviceroycollection.com";
const PAGE_TITLE = "The Viceroy Collection | Handcrafted Teak, Rosewood & Solid Wood Furniture";
const PAGE_DESCRIPTION =
  "Discover The Viceroy Collection: handcrafted teak doors, rosewood furniture, vintage solid wood pieces and architectural elements made from carefully selected mature hardwoods.";
const PAGE_KEYWORDS =
  "The Viceroy Collection, handcrafted furniture, teak doors, rosewood furniture, solid wood furniture, vintage furniture, carved doors, hardwood furniture, architectural woodwork, luxury furniture";

const fallbackImages = {
  hero:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",

  welcome:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88",

  explore:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=88",

  door1:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",

  almirah:
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85",

  door2:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",

  door3:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",

  door4:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",

  nightstand:
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=85",

  vintage:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=90",
};

const collections = [
  {
    title: "Teak Carved Arch Double Door",
    category: "Hand-Carved Teak",
    image: "/images/Teak.webp",
    fallback: fallbackImages.door1,
  },
  {
    title: "Rosewood Almirah",
    category: "Exotic Rosewood",
    image: "/images/ralmirah.webp",
    fallback: fallbackImages.almirah,
  },
  {
    title: "Teak Carved Square Double Door",
    category: "Architectural Collection",
    image: "/images/square.webp",
    fallback: fallbackImages.door2,
  },
  {
    title: "Teak Single Doors",
    category: "Solid Teak",
    image: "/images/Single.webp",
    fallback: fallbackImages.door3,
  },
   {
    title: "Rosewood King Cot",
    category: "Bedroom Furniture",
    image: "images/Rosewood.webp",
    fallback:fallbackImages.door3,
  },
  {
    title: "Rosewood Night Stands",
    category: "Fine Furniture",
    image: "/images/rnight.webp",
    fallback: fallbackImages.nightstand,
  },
];

function Home() {
  const revealRefs = useRef([]);

  const whatsappLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

  const handleImageError = (event, fallback) => {
    const image = event.currentTarget;

    if (image.dataset.fallbackApplied === "true") return;

    image.dataset.fallbackApplied = "true";
    image.src = fallback;
  };

  useEffect(() => {
    // SEO metadata without changing any visible page content or design.
    document.title = PAGE_TITLE;

    const setMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) =>
        element.setAttribute(key, value)
      );
    };

    setMeta('meta[name="description"]', {
      name: "description",
      content: PAGE_DESCRIPTION,
    });
    setMeta('meta[name="keywords"]', {
      name: "keywords",
      content: PAGE_KEYWORDS,
    });
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
    setMeta('meta[name="author"]', {
      name: "author",
      content: "The Viceroy Collection",
    });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "The Viceroy Collection" });
    setMeta('meta[property="og:title"]', { property: "og:title", content: PAGE_TITLE });
    setMeta('meta[property="og:description"]', { property: "og:description", content: PAGE_DESCRIPTION });
    setMeta('meta[property="og:url"]', { property: "og:url", content: `${SITE_URL}/` });
    setMeta('meta[property="og:image"]', { property: "og:image", content: `${SITE_URL}/images/hero.webp` });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: PAGE_TITLE });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: PAGE_DESCRIPTION });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: `${SITE_URL}/images/hero.webp` });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}/`);

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "The Viceroy Collection",
          description: PAGE_DESCRIPTION,
          inLanguage: "en",
        },
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "The Viceroy Collection",
          url: `${SITE_URL}/`,
          telephone: "+1-224-390-9829",
          logo: `${SITE_URL}/images/logo.png`,
          description: PAGE_DESCRIPTION,
        },
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/hero.webp`,
          },
          inLanguage: "en",
        },
        {
          "@type": "ItemList",
          name: "The Viceroy Collection Products",
          itemListElement: collections.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: item.title,
              category: item.category,
              image: `${SITE_URL}${item.image}`,
              brand: { "@type": "Brand", name: "The Viceroy Collection" },
              url: `${SITE_URL}/our-collections`,
            },
          })),
        },
      ],
    };

    let schemaScript = document.head.querySelector('#viceroy-seo-schema');
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = "viceroy-seo-schema";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, []);

  useEffect(() => {
    const elements = revealRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vc-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const addReveal = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  return (
    <>
      <main className="vc-home">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="vc-hero">
          <img
            src="/images/hero.webp"
            alt="Luxury handcrafted teak doors, rosewood furniture and solid hardwood pieces by The Viceroy Collection"
            title="The Viceroy Collection - Handcrafted Hardwood Furniture and Doors"
            decoding="async"
            fetchPriority="high"
            className="vc-hero-image"
            onError={(e) => handleImageError(e, fallbackImages.hero)}
          />

          <div className="vc-hero-overlay"></div>
          <div className="vc-hero-glow"></div>

          <div className="vc-hero-content">
            <div className="vc-hero-copy">

              <p className="vc-eyebrow vc-hero-animate vc-delay-1">
                Natural Wood
                <span></span>
                Timeless Craftsmanship
                <span></span>
                Lasting Legacy
              </p>

              <h1 className="vc-hero-title vc-hero-animate vc-delay-2">
                <span>Timeless</span>

                <strong>
                  Woodcraft
                </strong>

                <small>
                  For Generations
                </small>
              </h1>

              <div className="vc-gold-line vc-hero-animate vc-delay-3"></div>

              <p className="vc-hero-description vc-hero-animate vc-delay-3">
                Fine furniture, doors and architectural elements
                crafted from the world's finest hardwoods.
              </p>

              <div className="vc-hero-buttons vc-hero-animate vc-delay-4">

                <Link
                  to="/our-collections"
                  className="vc-button vc-button-gold"
                >
                  Explore Our Collections

                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>

                <a
                  href={whatsappLink(
                    "Hello, I am interested in The Viceroy Collection. I would like to enquire about your handcrafted furniture and doors."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="vc-button vc-button-outline"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  Enquire Now
                </a>

              </div>
            </div>
          </div>

          <div className="vc-hero-features">

            <div>
              <i className="fa-solid fa-leaf"></i>

              <span>
                Premium
                <strong>Hardwoods</strong>
              </span>
            </div>

            <div>
              <i className="fa-solid fa-compass-drafting"></i>

              <span>
                Handcrafted
                <strong>Excellence</strong>
              </span>
            </div>

            <div>
              <i className="fa-regular fa-gem"></i>

              <span>
                Built For
                <strong>Generations</strong>
              </span>
            </div>

          </div>

          <div className="vc-hero-bottom">
            <span></span>

            <p>
              From Nature
              <br />
              To Extraordinary Spaces
            </p>
          </div>

        </section>


        {/* =====================================================
            WELCOME
        ===================================================== */}

        <section className="vc-welcome vc-section">

          <div className="vc-container vc-welcome-grid">

            <div
              className="vc-welcome-image-wrap vc-reveal vc-reveal-left"
              ref={addReveal}
            >
              <div className="vc-image-frame">

                <img
                  src="/images/about.webp"
                  alt="Fine handcrafted rosewood furniture by The Viceroy Collection"
                  title="Handcrafted Rosewood Furniture | The Viceroy Collection"
                  loading="lazy"
                  decoding="async"
                  onError={(e) =>
                    handleImageError(e, fallbackImages.welcome)
                  }
                />

              </div>

              <div className="vc-image-number">
                <strong>65+</strong>
                <span>Years Mature Timber</span>
              </div>

              <div className="vc-frame-decoration"></div>
            </div>


            <div
              className="vc-welcome-content vc-reveal vc-reveal-right"
              ref={addReveal}
            >

              <p className="vc-section-tag">
                You Are Welcome
              </p>

              <h2 className="vc-section-title">
                The Viceroy
                <br />
                <em>Collection</em>
              </h2>

              <div className="vc-title-line"></div>

              <p className="vc-lead">
                Crafted from the finest hardwoods and created for
                those who expect the very best in home furnishings.
              </p>

              <p className="vc-body-text">
                The Viceroy Collection uses only the finest of
                hardwoods for furniture, doors and various
                architectural elements; mainly teak, mahogany and
                rosewood. All of the timber is from mature trees
                dating at least 65 years in age, thereby assuring
                rich grain and color.
              </p>

              <p className="vc-body-text">
                After the logs are cut into predetermined size
                boards, they are placed into a kiln dryer for
                approximately 3 to 4 weeks. Calibrated meters are
                used to measure the wood's moisture, with an
                international standard of approximately 8 to 12
                percent. This process helps minimize the potential
                for wood shrinking or expansion.
              </p>

              <p className="vc-body-text">
                Handmade, hand-carved and solid wood products are
                created to last for generations and become true
                heirloom pieces.
              </p>

              <Link
                to="/about-us"
                className="vc-text-link"
              >
                Discover Our Story

                <span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            WOOD PROCESS / QUALITY
        ===================================================== */}

        <section className="vc-process">

          <div className="vc-container">

            <div
              className="vc-centered-heading vc-reveal"
              ref={addReveal}
            >
              <p className="vc-section-tag">
                From Nature To Legacy
              </p>

              <h2 className="vc-section-title">
                Crafted With
                <em> Purpose</em>
              </h2>

              <p>
                Every piece begins with carefully selected hardwood
                and passes through a considered process before
                becoming part of your home.
              </p>
            </div>


            <div className="vc-process-grid">

              <article
                className="vc-process-card vc-reveal"
                ref={addReveal}
              >
                <span className="vc-process-number">
                  01
                </span>

                <i className="fa-solid fa-tree"></i>

                <h3>
                  Mature Hardwoods
                </h3>

                <p>
                  Teak, mahogany and rosewood selected for their
                  distinctive grain, character and enduring beauty.
                </p>
              </article>


              <article
                className="vc-process-card vc-reveal"
                ref={addReveal}
              >
                <span className="vc-process-number">
                  02
                </span>

                <i className="fa-solid fa-temperature-half"></i>

                <h3>
                  Kiln Dried
                </h3>

                <p>
                  Timber is carefully kiln dried for approximately
                  three to four weeks to achieve controlled moisture.
                </p>
              </article>


              <article
                className="vc-process-card vc-reveal"
                ref={addReveal}
              >
                <span className="vc-process-number">
                  03
                </span>

                <i className="fa-solid fa-hammer"></i>

                <h3>
                  Hand Crafted
                </h3>

                <p>
                  Traditional artisan methods bring intricate
                  details, carving and character to every piece.
                </p>
              </article>


              <article
                className="vc-process-card vc-reveal"
                ref={addReveal}
              >
                <span className="vc-process-number">
                  04
                </span>

                <i className="fa-regular fa-gem"></i>

                <h3>
                  Heirloom Quality
                </h3>

                <p>
                  Solid hardwood creations designed to become
                  enduring pieces for generations to come.
                </p>
              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            EXPLORE BANNER
        ===================================================== */}

        <section className="vc-explore">

          <img
            src="/images/image-34.webp"
            alt="Explore handcrafted teak, rosewood and solid wood collections by The Viceroy Collection"
            title="Explore The Viceroy Collection"
            loading="lazy"
            decoding="async"
            onError={(e) =>
              handleImageError(e, fallbackImages.explore)
            }
          />

          <div className="vc-explore-overlay"></div>

          <div
            className="vc-explore-content vc-reveal"
            ref={addReveal}
          >

            <p>
              The Viceroy Collection
            </p>

            <h2>
              Explore Our Wide Range
              <br />
              <em>of Collections</em>
            </h2>

            <Link
              to="/our-collections"
              className="vc-button vc-button-light"
            >
              Discover The Collection

              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>

          </div>

        </section>


        {/* =====================================================
            COLLECTION INTRO
        ===================================================== */}

        <section className="vc-collection-intro vc-section">

          <div className="vc-container">

            <div
              className="vc-collection-heading vc-reveal"
              ref={addReveal}
            >
              <div>

                <p className="vc-section-tag">
                  Explore The Craft
                </p>

                <h2 className="vc-section-title">
                  Our
                  <em> Collections</em>
                </h2>

              </div>

              <p>
                Over centuries, India created some of the world's
                most exotic furniture, doors and architectural
                structures. During Dutch, Portuguese and British
                colonialism, Indian woodworkers and artisans created
                a distinctive style of furniture and doors.
                The Viceroy Collection recreates museum-quality
                products through hand-carved exotic hardwoods using
                methods and tools inspired by generations of
                craftsmanship.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRODUCT COLLECTIONS
        ===================================================== */}

        <section className="vc-products">

          <div className="vc-container">

            <div className="vc-product-grid">

              {collections.map((item, index) => (
                <article
                  className="vc-product-card vc-reveal"
                  ref={addReveal}
                  key={item.title}
                  style={{
                    "--delay": `${(index % 3) * 0.08}s`,
                  }}
                >

                  <div className="vc-product-image">

                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.category} | The Viceroy Collection`}
                      title={`${item.title} | The Viceroy Collection`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) =>
                        handleImageError(e, item.fallback)
                      }
                    />

                    <div className="vc-product-image-overlay"></div>

                    <span className="vc-product-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <a
                      href={whatsappLink(
                        `Hello, I am interested in the ${item.title} from The Viceroy Collection. Please share more details.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="vc-product-view"
                      aria-label={`Enquire about ${item.title}`}
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>

                  </div>


                  <div className="vc-product-content">

                    <span className="vc-product-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <a
                      href={whatsappLink(
                        `Hello, I am interested in the ${item.title} from The Viceroy Collection. Please share pricing and more details.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="vc-product-enquire"
                    >
                      Enquire Now

                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>

                  </div>

                </article>
              ))}

            </div>


            <div className="vc-view-more">

              <Link
                to="/our-collections"
                className="vc-button vc-dark-button"
              >
                View More Products

                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            VINTAGE FURNITURE
        ===================================================== */}

        <section className="vc-vintage">

          <img
            src="/images/hero.webp"
            alt="Vintage handcrafted solid wood furniture by The Viceroy Collection"
            title="Vintage Solid Wood Furniture | The Viceroy Collection"
            loading="lazy"
            decoding="async"
            onError={(e) =>
              handleImageError(e, fallbackImages.vintage)
            }
          />

          <div className="vc-vintage-overlay"></div>

          <div
            className="vc-vintage-content vc-reveal"
            ref={addReveal}
          >

            <div className="vc-vintage-mark">
              VC
            </div>

            <p>
              The Viceroy Collection
            </p>

            <h2>
              We Sell
              <em> Vintage Furniture</em>
            </h2>

            <p className="vc-vintage-description">
              Handmade. Hand-carved. Solid wood. Extraordinary
              pieces created for homes that value timeless
              craftsmanship.
            </p>

            <a
              href={whatsappLink(
                "Hello, I am interested in vintage furniture from The Viceroy Collection. Please share the available collection."
              )}
              target="_blank"
              rel="noreferrer"
              className="vc-button vc-button-gold"
            >
              Enquire Now

              <i className="fa-brands fa-whatsapp"></i>
            </a>

          </div>

        </section>


        {/* =====================================================
            CONTACT / WHATSAPP
        ===================================================== */}

        <section className="vc-contact-section">

          <div className="vc-container vc-contact-grid">

            <div
              className="vc-contact-intro vc-reveal vc-reveal-left"
              ref={addReveal}
            >

              <p className="vc-section-tag">
                Private Enquiries
              </p>

              <h2>
                Let's Find A Piece
                <br />
                <em>For Your Home.</em>
              </h2>

              <p>
                Fill out your details below and your enquiry will
                open directly in WhatsApp. Our team can then assist
                you with collections, availability and appointments.
              </p>

              <div className="vc-contact-details">

                <a href="tel:+1224-390-9829">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>

                  <div>
                    <small>Call Us</small>
                    <strong>
                      +1224-390-9829
                    </strong>
                  </div>
                </a>

                <a
                  href={whatsappLink(
                    "Hello, I would like to enquire about The Viceroy Collection."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-whatsapp"></i>
                  </span>

                  <div>
                    <small>WhatsApp</small>
                    <strong>
                      Start A Conversation
                    </strong>
                  </div>
                </a>

              </div>

            </div>


            <ContactForm whatsappLink={whatsappLink} />

          </div>

        </section>


      </main>


      <style>{`

        @import url(
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
        );


        /* ======================================================
           BASE
        ====================================================== */

        .vc-home {
          width: 100%;
          max-width: 100%;

          overflow-x: hidden;

          background: #f8f5ef;

          color: #211914;
        }

        .vc-home *,
        .vc-home *::before,
        .vc-home *::after {
          box-sizing: border-box;
        }

        .vc-container {
          width: min(1280px, calc(100% - 60px));
          max-width: 100%;

          margin: 0 auto;
        }

        .vc-section {
          padding: 120px 0;
        }


        /* ======================================================
           REVEAL ANIMATIONS
        ====================================================== */

        .vc-reveal {
          opacity: 0;

          transform: translateY(45px);

          transition:
            opacity .85s cubic-bezier(.2,.7,.2,1),
            transform .85s cubic-bezier(.2,.7,.2,1);

          transition-delay: var(--delay, 0s);
        }

        .vc-reveal-left {
          transform: translateX(-55px);
        }

        .vc-reveal-right {
          transform: translateX(55px);
        }

        .vc-reveal.vc-visible {
          opacity: 1;
          transform: translate(0, 0);
        }


        /* ======================================================
           HERO
        ====================================================== */

        .vc-hero {
          position: relative;

          width: 100%;
          min-height: calc(100vh - 105px);
          min-height: calc(100svh - 105px);

          overflow: hidden;

          display: flex;
          align-items: center;

          background: #21140c;
        }

        .vc-hero-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          animation:
            vcHeroZoom 14s ease-out forwards;
        }

        @keyframes vcHeroZoom {
          from {
            transform: scale(1.08);
          }

          to {
            transform: scale(1);
          }
        }

        .vc-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(20,12,7,.88) 0%,
              rgba(20,12,7,.72) 31%,
              rgba(20,12,7,.36) 59%,
              rgba(20,12,7,.16) 100%
            );
        }

        .vc-hero-glow {
          position: absolute;

          left: 20%;
          top: 18%;

          width: 500px;
          height: 500px;

          background:
            radial-gradient(
              circle,
              rgba(185,132,70,.15),
              transparent 68%
            );

          filter: blur(15px);

          pointer-events: none;
        }

        .vc-hero-content {
          position: relative;

          z-index: 5;

          width: min(1280px, calc(100% - 60px));

          margin: 0 auto;

          padding:
            100px
            260px
            100px
            0;
        }

        .vc-hero-copy {
          width: min(720px, 100%);
        }

        .vc-eyebrow {
          margin: 0 0 28px;

          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 13px;

          color: #e7d8c5;

          font-family: "Montserrat", sans-serif;

          font-size: 10px;
          font-weight: 500;

          line-height: 1.6;

          letter-spacing: 3px;

          text-transform: uppercase;
        }

        .vc-eyebrow span {
          width: 18px;
          height: 1px;

          display: inline-block;

          background: #c99b61;
        }

        .vc-hero-title {
          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          text-transform: uppercase;
        }

        .vc-hero-title > span {
          display: block;

          font-size:
            clamp(65px, 7vw, 105px);

          font-weight: 500;

          line-height: .8;

          letter-spacing: 1px;
        }

        .vc-hero-title strong {
          display: block;

          margin-top: 12px;

          color: #e9c897;

          font-size:
            clamp(64px, 7.1vw, 108px);

          font-weight: 500;

          line-height: .88;

          letter-spacing: 1px;
        }

        .vc-hero-title small {
          display: block;

          margin-top: 18px;

          color: #fff;

          font-size:
            clamp(23px, 2.7vw, 40px);

          font-weight: 500;

          line-height: 1;

          letter-spacing: 10px;
        }

        .vc-gold-line {
          width: 75px;
          height: 2px;

          margin: 30px 0 22px;

          background: #c3975e;
        }

        .vc-hero-description {
          max-width: 570px;

          margin: 0;

          color: rgba(255,255,255,.86);

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 22px;
          font-weight: 500;

          line-height: 1.5;
        }

        .vc-hero-buttons {
          margin-top: 32px;

          display: flex;
          flex-wrap: wrap;

          gap: 14px;
        }


        /* HERO LOAD ANIMATION */

        .vc-hero-animate {
          opacity: 0;

          transform: translateY(30px);

          animation:
            vcHeroReveal .85s
            cubic-bezier(.2,.7,.2,1)
            forwards;
        }

        .vc-delay-1 {
          animation-delay: .15s;
        }

        .vc-delay-2 {
          animation-delay: .3s;
        }

        .vc-delay-3 {
          animation-delay: .48s;
        }

        .vc-delay-4 {
          animation-delay: .64s;
        }

        @keyframes vcHeroReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ======================================================
           BUTTONS
        ====================================================== */

        .vc-button {
          position: relative;

          min-height: 58px;

          padding: 0 27px;

          overflow: hidden;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          border: 1px solid transparent;

          font-family:
            "Montserrat",
            sans-serif;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          transition:
            transform .35s ease,
            background .35s ease,
            border-color .35s ease,
            color .35s ease,
            box-shadow .35s ease;
        }

        .vc-button::before {
          content: "";

          position: absolute;

          top: -120%;
          left: -80px;

          width: 40px;
          height: 330%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.38),
              transparent
            );

          transform: rotate(30deg);

          transition: left .7s ease;
        }

        .vc-button:hover::before {
          left: 130%;
        }

        .vc-button:hover {
          transform: translateY(-3px);
        }

        .vc-button-gold {
          background:
            linear-gradient(
              135deg,
              #9c6b36,
              #b88b54
            );

          border-color: #b88b54;

          color: #fff;
        }

        .vc-button-gold:hover {
          box-shadow:
            0 15px 35px
            rgba(0,0,0,.2);
        }

        .vc-button-outline {
          border-color:
            rgba(255,255,255,.65);

          color: #fff;

          background:
            rgba(255,255,255,.04);

          backdrop-filter: blur(6px);
        }

        .vc-button-outline:hover {
          background: #fff;
          color: #24160d;
        }

        .vc-button-light {
          border-color:
            rgba(255,255,255,.7);

          color: #fff;

          background: transparent;
        }

        .vc-button-light:hover {
          background: #fff;
          color: #2a1b12;
        }

        .vc-dark-button {
          background: #261911;
          color: #fff;
        }

        .vc-dark-button:hover {
          background: #a8753e;
        }


        /* ======================================================
           HERO FEATURES
        ====================================================== */

        .vc-hero-features {
          position: absolute;

          z-index: 7;

          top: 50%;
          right: 0;

          width: 190px;

          padding: 32px 23px;

          display: flex;
          flex-direction: column;

          transform: translateY(-50%);

          background:
            rgba(26,15,9,.79);

          border-left:
            1px solid
            rgba(207,159,96,.25);

          backdrop-filter: blur(10px);
        }

        .vc-hero-features > div {
          min-height: 125px;

          padding: 20px 5px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;

          border-bottom:
            1px solid
            rgba(203,155,94,.35);
        }

        .vc-hero-features > div:last-child {
          border-bottom: 0;
        }

        .vc-hero-features i {
          margin-bottom: 14px;

          color: #c99a60;

          font-size: 26px;
        }

        .vc-hero-features span {
          color: #e9dfd5;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 12px;

          line-height: 1.5;

          letter-spacing: 1.7px;

          text-transform: uppercase;
        }

        .vc-hero-features strong {
          display: block;

          color: #fff;

          font-weight: 500;
        }

        .vc-hero-bottom {
          position: absolute;

          z-index: 6;

          left: 5%;
          bottom: 28px;

          display: flex;
          align-items: flex-start;

          gap: 18px;
        }

        .vc-hero-bottom > span {
          width: 2px;
          height: 62px;

          background: #c39559;
        }

        .vc-hero-bottom p {
          margin: 3px 0 0;

          color: #d6b17e;

          font-family:
            "Montserrat",
            sans-serif;

          font-size: 9px;

          line-height: 2.5;

          letter-spacing: 4px;

          text-transform: uppercase;
        }


        /* ======================================================
           COMMON TYPOGRAPHY
        ====================================================== */

        .vc-section-tag {
          margin: 0 0 16px;

          color: #a8753e;

          font-family:
            "Montserrat",
            sans-serif;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 3px;

          text-transform: uppercase;
        }

        .vc-section-title {
          margin: 0;

          color: #261b14;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(46px, 5.2vw, 76px);

          font-weight: 500;

          line-height: .95;
        }

        .vc-section-title em {
          color: #a8753e;

          font-style: italic;
          font-weight: 500;
        }

        .vc-title-line {
          width: 65px;
          height: 2px;

          margin: 27px 0;

          background: #ad7b43;
        }


        /* ======================================================
           WELCOME
        ====================================================== */

        .vc-welcome {
          background: #f8f5ef;
        }

        .vc-welcome-grid {
          display: grid;

          grid-template-columns:
            minmax(0, .92fr)
            minmax(0, 1.08fr);

          align-items: center;

          gap: clamp(60px, 8vw, 120px);
        }

        .vc-welcome-image-wrap {
          position: relative;

          padding:
            0
            0
            35px
            35px;
        }

        .vc-image-frame {
          position: relative;

          height: 680px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;
        }

        .vc-image-frame::after {
          content: "";

          position: absolute;

          inset: 15px;

          border:
            1px solid
            rgba(255,255,255,.35);

          pointer-events: none;
        }

        .vc-image-frame img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;
          object-position: center;

          background: #ffffff;

          transition:
            transform 1.2s
            cubic-bezier(.2,.7,.2,1);
        }

        .vc-image-frame:hover img {
          transform: scale(1);
        }

        .vc-image-number {
          position: absolute;

          right: -35px;
          bottom: 0;

          width: 175px;
          height: 155px;

          padding: 25px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          background: #2b1c13;
          color: #fff;

          box-shadow:
            0 20px 50px
            rgba(36,23,15,.18);
        }

        .vc-image-number strong {
          color: #d5aa71;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 47px;
          font-weight: 500;
        }

        .vc-image-number span {
          margin-top: 3px;

          font-size: 9px;

          line-height: 1.6;

          letter-spacing: 1.6px;

          text-transform: uppercase;
        }

        .vc-frame-decoration {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 140px;
          height: 170px;

          border-left:
            1px solid #bd8d54;

          border-bottom:
            1px solid #bd8d54;

          z-index: -1;
        }

        .vc-lead {
          max-width: 600px;

          margin: 30px 0 22px;

          color: #443429;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 25px;
          font-weight: 600;

          line-height: 1.5;
        }

        .vc-body-text {
          max-width: 650px;

          margin: 0 0 17px;

          color: #6c5d53;

          font-size: 13px;

          line-height: 1.95;
        }

        .vc-text-link {
          margin-top: 20px;

          display: inline-flex;
          align-items: center;

          gap: 15px;

          color: #2d2119;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .vc-text-link span {
          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(157,111,56,.45);

          color: #9d6f38;

          transition:
            .35s ease;
        }

        .vc-text-link:hover span {
          background: #9d6f38;
          color: #fff;

          transform: translateX(5px);
        }


        /* ======================================================
           PROCESS
        ====================================================== */

        .vc-process {
          padding: 110px 0;

          background: #251810;

          color: #fff;
        }

        .vc-centered-heading {
          max-width: 720px;

          margin: 0 auto 65px;

          text-align: center;
        }

        .vc-centered-heading .vc-section-title {
          color: #fff;
        }

        .vc-centered-heading > p:last-child {
          max-width: 620px;

          margin: 25px auto 0;

          color: #bcaea3;

          font-size: 13px;

          line-height: 1.9;
        }

        .vc-process-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          border-top:
            1px solid
            rgba(211,166,107,.25);

          border-bottom:
            1px solid
            rgba(211,166,107,.25);
        }

        .vc-process-card {
          position: relative;

          min-height: 310px;

          padding: 48px 32px;

          border-right:
            1px solid
            rgba(211,166,107,.22);

          transition:
            background .4s ease,
            transform .4s ease;
        }

        .vc-process-card:last-child {
          border-right: 0;
        }

        .vc-process-card:hover {
          background:
            rgba(255,255,255,.035);

          transform: translateY(-7px);
        }

        .vc-process-number {
          position: absolute;

          top: 22px;
          right: 22px;

          color:
            rgba(215,173,118,.22);

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 36px;
        }

        .vc-process-card > i {
          margin-bottom: 30px;

          color: #c6985e;

          font-size: 32px;
        }

        .vc-process-card h3 {
          margin: 0 0 15px;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 25px;
          font-weight: 500;
        }

        .vc-process-card p {
          margin: 0;

          color: #ad9f94;

          font-size: 12px;

          line-height: 1.9;
        }


        /* ======================================================
           EXPLORE
        ====================================================== */

        .vc-explore {
          position: relative;

          min-height: 650px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          background: #25180f;
        }

        .vc-explore > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 1.5s ease;
        }

        .vc-explore:hover > img {
          transform: scale(1.035);
        }

        .vc-explore-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              rgba(24,14,8,.45),
              rgba(24,14,8,.72)
            );
        }

        .vc-explore-content {
          position: relative;

          z-index: 3;

          width:
            min(900px, calc(100% - 40px));
        }

        .vc-explore-content > p {
          margin: 0 0 17px;

          color: #d7ad77;

          font-size: 10px;

          letter-spacing: 4px;

          text-transform: uppercase;
        }

        .vc-explore-content h2 {
          margin: 0 0 35px;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(48px, 6vw, 85px);

          font-weight: 500;

          line-height: .95;
        }

        .vc-explore-content h2 em {
          color: #e4c08f;

          font-weight: 500;
        }


        /* ======================================================
           COLLECTION INTRO
        ====================================================== */

        .vc-collection-intro {
          padding-bottom: 65px;
        }

        .vc-collection-heading {
          display: grid;

          grid-template-columns:
            .75fr 1.25fr;

          align-items: end;

          gap: 90px;

          padding-bottom: 55px;

          border-bottom:
            1px solid
            rgba(122,88,53,.18);
        }

        .vc-collection-heading > p {
          margin: 0;

          color: #6b5b50;

          font-size: 13px;

          line-height: 1.95;
        }


        /* ======================================================
           PRODUCTS
        ====================================================== */

        .vc-products {
          padding: 0 0 120px;

          background: #f8f5ef;
        }

        .vc-product-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0,1fr));

          gap: 45px 25px;
        }

        .vc-product-card {
          min-width: 0;
        }

        .vc-product-image {
          position: relative;

          height: 520px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;
        }

        .vc-product-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;
          object-position: center;

          background: #ffffff;

          transition:
            transform .9s
            cubic-bezier(.2,.7,.2,1);
        }

        .vc-product-card:hover
        .vc-product-image img {
          transform: scale(1.015);
        }

        .vc-product-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(28,17,10,.4),
              transparent 48%
            );

          opacity: .55;

          transition: opacity .4s ease;
        }

        .vc-product-card:hover
        .vc-product-image-overlay {
          opacity: 1;
        }

        .vc-product-index {
          position: absolute;

          left: 18px;
          top: 18px;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 16px;

          letter-spacing: 2px;

          text-shadow:
            0 2px 10px rgba(0,0,0,.4);
        }

        .vc-product-view {
          position: absolute;

          right: 20px;
          bottom: 20px;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #f7f3ed;

          color: #906232;

          font-size: 20px;

          opacity: 0;

          transform: translateY(15px);

          transition:
            opacity .35s ease,
            transform .35s ease,
            background .35s ease,
            color .35s ease;
        }

        .vc-product-card:hover
        .vc-product-view {
          opacity: 1;

          transform: translateY(0);
        }

        .vc-product-view:hover {
          background: #9d6f38;
          color: #fff;
        }

        .vc-product-content {
          padding: 22px 4px 0;
        }

        .vc-product-category {
          color: #a8753e;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 2.2px;

          text-transform: uppercase;
        }

        .vc-product-content h3 {
          min-height: 58px;

          margin: 9px 0 12px;

          color: #2a1e17;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 27px;
          font-weight: 600;

          line-height: 1.08;
        }

        .vc-product-enquire {
          display: inline-flex;
          align-items: center;

          gap: 12px;

          color: #5d4b3d;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          transition: color .3s ease;
        }

        .vc-product-enquire i {
          color: #a8753e;

          transition:
            transform .3s ease;
        }

        .vc-product-enquire:hover {
          color: #a8753e;
        }

        .vc-product-enquire:hover i {
          transform: translateX(5px);
        }

        .vc-view-more {
          margin-top: 65px;

          text-align: center;
        }


        /* ======================================================
           VINTAGE
        ====================================================== */

        .vc-vintage {
          position: relative;

          min-height: 650px;

          overflow: hidden;

          display: flex;
          align-items: center;

          background: #261810;
        }

        .vc-vintage > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .vc-vintage-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(25,14,8,.9),
              rgba(25,14,8,.68) 50%,
              rgba(25,14,8,.25)
            );
        }

        .vc-vintage-content {
          position: relative;

          z-index: 3;

          width:
            min(1280px, calc(100% - 60px));

          margin: 0 auto;
        }

        .vc-vintage-mark {
          margin-bottom: 22px;

          color: #d0a36b;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 48px;

          line-height: 1;
        }

        .vc-vintage-content > p:first-of-type {
          color: #d2a56c;

          font-size: 9px;

          letter-spacing: 4px;

          text-transform: uppercase;
        }

        .vc-vintage-content h2 {
          max-width: 650px;

          margin: 15px 0 20px;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(55px, 6vw, 88px);

          font-weight: 500;

          line-height: .9;
        }

        .vc-vintage-content h2 em {
          display: block;

          color: #e2bc88;

          font-weight: 500;
        }

        .vc-vintage-description {
          max-width: 520px;

          margin: 0 0 30px;

          color:
            rgba(255,255,255,.72);

          font-size: 13px;

          line-height: 1.9;
        }


        /* ======================================================
           CONTACT
        ====================================================== */

        .vc-contact-section {
          padding: 120px 0;

          background: #eee8df;
        }

        .vc-contact-grid {
          display: grid;

          grid-template-columns:
            .9fr 1.1fr;

          gap: clamp(60px, 8vw, 120px);

          align-items: center;
        }

        .vc-contact-intro h2 {
          margin: 0;

          color: #291e17;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(48px, 5vw, 70px);

          font-weight: 500;

          line-height: .96;
        }

        .vc-contact-intro h2 em {
          color: #a8753e;

          font-weight: 500;
        }

        .vc-contact-intro > p:not(.vc-section-tag) {
          max-width: 520px;

          margin: 28px 0;

          color: #69594d;

          font-size: 13px;

          line-height: 1.9;
        }

        .vc-contact-details {
          margin-top: 40px;

          display: flex;
          flex-direction: column;

          gap: 17px;
        }

        .vc-contact-details a {
          width: fit-content;

          display: flex;
          align-items: center;

          gap: 15px;
        }

        .vc-contact-details a > span {
          width: 46px;
          height: 46px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(157,111,56,.4);

          color: #9d6f38;
        }

        .vc-contact-details small {
          display: block;

          margin-bottom: 4px;

          color: #9a8778;

          font-size: 8px;

          letter-spacing: 1.7px;

          text-transform: uppercase;
        }

        .vc-contact-details strong {
          color: #35271e;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 18px;
          font-weight: 600;
        }


        /* ======================================================
           FORM
        ====================================================== */

        .vc-contact-form {
          padding: 50px;

          background: #faf8f4;

          box-shadow:
            0 25px 70px
            rgba(57,39,26,.09);
        }

        .vc-form-row {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0,1fr));

          gap: 20px;
        }

        .vc-form-group {
          margin-bottom: 22px;
        }

        .vc-form-group label {
          display: block;

          margin-bottom: 9px;

          color: #705d4e;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;
        }

        .vc-form-group input,
        .vc-form-group textarea {
          width: 100%;

          border: 0;
          border-bottom:
            1px solid
            rgba(91,69,53,.25);

          outline: none;

          background: transparent;

          color: #2b2018;

          font-family:
            "Montserrat",
            sans-serif;

          font-size: 13px;

          border-radius: 0;

          transition:
            border-color .3s ease;
        }

        .vc-form-group input {
          height: 46px;
        }

        .vc-form-group textarea {
          min-height: 105px;

          padding: 13px 0;

          resize: vertical;
        }

        .vc-form-group input:focus,
        .vc-form-group textarea:focus {
          border-color: #a8753e;
        }

        .vc-form-submit {
          width: 100%;

          min-height: 58px;

          margin-top: 10px;

          border: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 14px;

          background:
            linear-gradient(
              135deg,
              #8e6031,
              #b1834d
            );

          color: #fff;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          cursor: pointer;

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .vc-form-submit:hover {
          transform: translateY(-2px);

          box-shadow:
            0 15px 30px
            rgba(86,56,29,.18);
        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 1024px) {

          .vc-section {
            padding: 90px 0;
          }

          .vc-container {
            width:
              calc(100% - 40px);
          }


          /* HERO */

          .vc-hero {
            min-height:
              calc(100svh - 80px);
          }

          .vc-hero-content {
            width:
              calc(100% - 40px);

            padding:
              100px
              180px
              100px
              0;
          }

          .vc-hero-features {
            width: 150px;

            padding:
              20px
              15px;
          }

          .vc-hero-features > div {
            min-height: 110px;
          }

          .vc-hero-bottom {
            display: none;
          }


          /* WELCOME */

          .vc-welcome-grid {
            gap: 65px;
          }

          .vc-image-frame {
            height: 560px;
          }

          .vc-image-number {
            right: -20px;

            width: 150px;
            height: 135px;
          }


          /* PROCESS */

          .vc-process-grid {
            grid-template-columns:
              repeat(2, minmax(0,1fr));
          }

          .vc-process-card:nth-child(2) {
            border-right: 0;
          }

          .vc-process-card:nth-child(-n+2) {
            border-bottom:
              1px solid
              rgba(211,166,107,.22);
          }


          /* PRODUCTS */

          .vc-product-grid {
            grid-template-columns:
              repeat(2, minmax(0,1fr));
          }


          /* CONTACT */

          .vc-contact-grid {
            gap: 55px;
          }

          .vc-contact-form {
            padding: 38px;
          }

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {

          .vc-container {
            width:
              calc(100% - 30px);
          }

          .vc-section {
            padding: 75px 0;
          }


          /* HERO */

          .vc-hero {
            min-height:
              calc(100svh - 72px);

            align-items: flex-end;
          }

          .vc-hero-image {
            object-position: center;
          }

          .vc-hero-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(20,12,7,.22),
                rgba(20,12,7,.55) 35%,
                rgba(20,12,7,.92) 100%
              );
          }

          .vc-hero-content {
            width:
              calc(100% - 30px);

            padding:
              110px
              0
              65px;
          }

          .vc-hero-copy {
            width: 100%;
          }

          .vc-eyebrow {
            margin-bottom: 20px;

            gap: 8px;

            font-size: 8px;

            letter-spacing: 1.7px;
          }

          .vc-eyebrow span {
            width: 11px;
          }

          .vc-hero-title > span {
            display: block;
            font-size: clamp(46px, 14vw, 64px);
            line-height: .92;
            letter-spacing: 0;
            white-space: nowrap;
          }

          .vc-hero-title strong {
            display: block;
            margin-top: 10px;
            font-size: clamp(42px, 12.7vw, 58px);
            line-height: .92;
            letter-spacing: -1px;
            white-space: nowrap;
          }

          .vc-hero-title small {
            display: block;
            margin-top: 18px;
            font-size: clamp(15px, 4.3vw, 21px);
            line-height: 1.15;
            letter-spacing: clamp(3px, 1.3vw, 5px);
            white-space: nowrap;
          }

          .vc-gold-line {
            margin: 22px 0 17px;
          }

          .vc-hero-description {
            max-width: 480px;

            font-size: 18px;
          }

          .vc-hero-buttons {
            width: 100%;

            margin-top: 25px;

            flex-direction: column;
          }

          .vc-hero-buttons .vc-button {
            width: 100%;
          }

          .vc-hero-features {
            display: none;
          }


          /* WELCOME */

          .vc-welcome-grid {
            grid-template-columns: 1fr;

            gap: 65px;
          }

          .vc-welcome-image-wrap {
            padding:
              0
              15px
              25px
              0;
          }

          .vc-image-frame {
            height:
              min(125vw, 570px);
          }

          .vc-image-number {
            right: 0;

            width: 140px;
            height: 120px;

            padding: 20px;
          }

          .vc-image-number strong {
            font-size: 39px;
          }

          .vc-frame-decoration {
            display: none;
          }

          .vc-lead {
            font-size: 22px;
          }


          /* PROCESS */

          .vc-process {
            padding: 75px 0;
          }

          .vc-centered-heading {
            margin-bottom: 45px;
          }

          .vc-process-grid {
            grid-template-columns: 1fr;
          }

          .vc-process-card {
            min-height: auto;

            padding: 38px 25px;

            border-right: 0;

            border-bottom:
              1px solid
              rgba(211,166,107,.22);
          }

          .vc-process-card:last-child {
            border-bottom: 0;
          }


          /* EXPLORE */

          .vc-explore {
            min-height: 520px;
          }

          .vc-explore-content h2 {
            font-size:
              clamp(45px, 13vw, 65px);
          }


          /* COLLECTION */

          .vc-collection-intro {
            padding-bottom: 45px;
          }

          .vc-collection-heading {
            grid-template-columns: 1fr;

            gap: 28px;

            padding-bottom: 40px;
          }


          /* PRODUCTS */

          .vc-products {
            padding-bottom: 80px;
          }

          .vc-product-grid {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .vc-product-image {
            height:
              min(125vw, 560px);
          }

          .vc-product-content h3 {
            min-height: 0;

            font-size: 26px;
          }

          .vc-product-view {
            opacity: 1;

            transform: none;
          }


          /* VINTAGE */

          .vc-vintage {
            min-height: 590px;

            align-items: flex-end;
          }

          .vc-vintage-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(25,14,8,.25),
                rgba(25,14,8,.9)
              );
          }

          .vc-vintage-content {
            width:
              calc(100% - 30px);

            padding-bottom: 60px;
          }


          /* CONTACT */

          .vc-contact-section {
            padding: 75px 0;
          }

          .vc-contact-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .vc-contact-form {
            padding:
              35px
              25px;
          }

          .vc-form-row {
            grid-template-columns: 1fr;

            gap: 0;
          }

        }


        /* ======================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 390px) {

          .vc-container {
            width:
              calc(100% - 24px);
          }

          .vc-hero-content {
            width:
              calc(100% - 24px);
          }

          .vc-hero-title > span {
            font-size: 13.2vw;
          }

          .vc-hero-title strong {
            font-size: 12.2vw;
            letter-spacing: -1px;
          }

          .vc-hero-title small {
            font-size: 4vw;
            letter-spacing: 3px;
          }

          .vc-contact-form {
            padding:
              30px
              19px;
          }

        }


        /* ======================================================
           ACCESSIBILITY
        ====================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .vc-reveal,
          .vc-hero-animate {
            opacity: 1 !important;

            transform: none !important;

            animation: none !important;

            transition: none !important;
          }

          .vc-hero-image {
            animation: none !important;
          }

        }

        /* ======================================================
           PREMIUM READABILITY + CENTERED ENQUIRY BUTTONS
        ====================================================== */

        .vc-home {
          color: #24170f;
        }

        .vc-section-label,
        .vc-product-category,
        .vc-contact-label,
        .vc-eyebrow {
          font-size: 11px;
          font-weight: 700;
        }

        .vc-welcome-copy p,
        .vc-collection-heading p,
        .vc-process-card p,
        .vc-contact-copy p,
        .vc-vintage-content p,
        .vc-explore-content p {
          color: #554338;
          font-size: 16px;
          line-height: 1.9;
        }

        .vc-lead {
          color: #332218;
          font-size: 24px;
          line-height: 1.65;
        }

        .vc-process-card h3 {
          font-size: 27px;
          color: #fff8f0;
        }

        .vc-process-card p {
          color: #e7d8ca;
          font-size: 15px;
        }

        .vc-product-content {
          padding: 28px 15px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .vc-product-category {
          margin-bottom: 10px;
          color: #9b6229;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .vc-product-content h3 {
          min-height: 70px;
          margin: 0 0 22px;
          color: #21150e;
          font-size: 32px;
          font-weight: 600;
          line-height: 1.12;
          text-align: center;
        }

        .vc-product-enquire,
        .vc-product-view {
          min-width: 195px;
          min-height: 56px;
          margin: 0 auto;
          padding: 0 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid #b8874f;
          background: linear-gradient(135deg, #8b5728, #b98247);
          color: #ffffff !important;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          opacity: 1;
          transform: none;
          box-shadow: 0 10px 25px rgba(91, 56, 28, .14);
          transition: transform .3s ease, box-shadow .3s ease, background .3s ease;
        }

        .vc-product-enquire:hover,
        .vc-product-view:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #a46c35, #c7965d);
          box-shadow: 0 16px 32px rgba(91, 56, 28, .22);
        }

        .vc-contact-copy h2,
        .vc-section-title,
        .vc-centered-heading h2,
        .vc-collection-heading h2 {
          color: #24170f;
        }

        .vc-contact-form {
          color: #24170f;
        }

        .vc-form-group label {
          color: #4b392d;
          font-size: 11px;
          font-weight: 700;
        }

        .vc-form-group input,
        .vc-form-group textarea {
          color: #24170f;
          font-size: 15px;
        }

        .vc-form-group input::placeholder,
        .vc-form-group textarea::placeholder {
          color: #77675c;
          opacity: 1;
        }

        .vc-form-submit {
          min-height: 62px;
          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 767px) {
          .vc-welcome-copy p,
          .vc-collection-heading p,
          .vc-process-card p,
          .vc-contact-copy p,
          .vc-vintage-content p,
          .vc-explore-content p {
            font-size: 15px;
          }

          .vc-product-content h3 {
            min-height: 0;
            font-size: 30px;
          }

          .vc-product-enquire,
          .vc-product-view {
            width: min(100%, 240px);
            min-height: 58px;
            font-size: 11px;
          }
        }

      `}</style>
    </>
  );
}


/* ==========================================================
   CONTACT FORM
========================================================== */

function ContactForm({ whatsappLink }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name")?.trim();
    const phone = data.get("phone")?.trim();
    const email = data.get("email")?.trim();
    const note = data.get("note")?.trim();

    const message = `
Hello The Viceroy Collection,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${note}

Please get back to me with more details.
    `.trim();

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form
      className="vc-contact-form"
      onSubmit={handleSubmit}
    >

      <div className="vc-form-row">

        <div className="vc-form-group">
          <label htmlFor="vc-name">
            Your Name
          </label>

          <input
            id="vc-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>


        <div className="vc-form-group">
          <label htmlFor="vc-phone">
            Your Phone
          </label>

          <input
            id="vc-phone"
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
          />
        </div>

      </div>


      <div className="vc-form-group">

        <label htmlFor="vc-email">
          Your Email
        </label>

        <input
          id="vc-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

      </div>


      <div className="vc-form-group">

        <label htmlFor="vc-note">
          Write A Note
        </label>

        <textarea
          id="vc-note"
          name="note"
          placeholder="Tell us what you are looking for..."
          required
        ></textarea>

      </div>


      <button
        type="submit"
        className="vc-form-submit"
      >
        Send Enquiry On WhatsApp

        <i className="fa-brands fa-whatsapp"></i>
      </button>

    </form>
  );
}

export default Home;