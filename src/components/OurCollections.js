import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

const WHATSAPP_NUMBER = "12243909829";

const SITE_URL = "https://www.theviceroycollection.com";
const PAGE_URL = `${SITE_URL}/our-collections`;
const LOGO_URL = `${SITE_URL}/logo.png`;
const SEO_TITLE =
  "Handcrafted Teak Doors & Rosewood Furniture | The Viceroy Collection";
const SEO_DESCRIPTION =
  "Explore The Viceroy Collection of handcrafted teak doors, rosewood furniture, mahogany furniture, solid wood furniture, almirahs, consoles, divans, coffee tables and soft furnishings crafted with heirloom quality.";


const collections = [
  {
    title: "Teak Carved Arch Double Door",
    category: "Handcrafted Doors",
    image: "images/Teak.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/Door22.webp",
    description: "VCD-9000 Teak Carved Arch Double Door with solid teak Arch Frame. 10’7” H, 6’7” W",
  },
  {
    title: "Teak Carved Square Double Door",
    category: "Handcrafted Doors",
    image: "images/square.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/doorrr2.webp",
    description: "VCD-9001 Teak Carved Double Door with solid teak frame. 8’5” H, 6’5” W",
  },
  {
    title: "Teak Single Doors",
    category: "Handcrafted Doors",
    image: "images/Single.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/door33.webp",
    description: "VCD-9002 Teak Single Door, Carved Rails, Stiles, with Rosewood Matte Stain. 7′ H, 3′ W",
  },
  {
    title: "Teak Single Door,Carved Panels",
    category: "Handcrafted Doors",
    image: "images/Singlecarved.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/doorr4.webp",
    description: "VCD-9004 Teak Single Door,Carved Panels,Rails,Stiles,with Natural Clear Stain.7’H, 3’W",
  },
  {
    title: "Teak Single Door,Carved Panels",
    category: "Handcrafted Doors",
    image: "images/Singlecarved1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pd1.webp",
    description: "VCD-9006 Teak Single Door,Carved Panel,Rails,Stiles, with Natural Clear Stain.7′ H, 3′ W",
  },
  {
    title: "Rosewood King Cot",
    category: "Bedroom Furniture",
    image: "images/Rosewood.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pd3.webp",
    description: "VCF-3005 Rosewood King Cot with solid rosewood mattress frame. 48 ”H, 63” W, 81” L",
  },
  {
    title: "Rosewood Queen Cot",
    category: "Bedroom Furniture",
    image: "images/queen.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pd4.webp",
    description: "VCF-3003 Rosewood Queen Cot with solid Rosewood mattress frame. 75 ”H, 66”W, 90” L",
  },
  {
    title: "Mahogany King Cot",
    category: "Bedroom Furniture",
    image: "images/Mahogany1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pd2.webp",
    description: "VCF-3004 Mahogany King Cot with solid mahogany mattress frame. 75 ”H, 83”W, 85”L",
  },
  {
    title: "Mahogany King Cot",
    category: "Bedroom Furniture",
    image: "images/Mahogany2.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch2.webp",
    description: "VCF-3000 Mahogany King Cot with solid mahogany mattress frame. 65 ”H, 83” W, 85” L",
  },
  {
    title: "Headboard",
    category: "Bedroom Furniture",
    image: "images/head.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch3.webp",
    description: "VCF-3000 Headboard Carving Closeup",
  },
  {
    title: "Footboard",
    category: "Bedroom Furniture",
    image: "images/foot.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/cott12.webp",
    description: "VCF-3000 Footboard Carving Closeup",
  },
  {
    title: "Mahogany Queen Size Cot",
    category: "Bedroom Furniture",
    image: "images/mqueen.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch8.webp",
    description: "VCF-3006 Mahogany Queen Cot with Mahogany mattress frame.48”H,63”W,81”L",
  },
  {
    title: "Mahogany Night Stands",
    category: "Night Stands",
    image: "images/mahognynight.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch9.webp",
    description: "VCF-3007 Mahogany Night Stands",
  },
  {
    title: "Rosewood Night Stands",
    category: "Night Stands",
    image: "images/rnight.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/Pnew1.webp",
    description: "VCF-3008 Rosewood Night Stands",
  },
  {
    title: "Rosewood Almirah",
    category: "Almirahs",
    image: "images/ralmirah.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/Pnew2.webp",
    description: "VCF-2000 Rosewood Almirah. 84” H, 24”D, 57” wide",
  },
  {
    title: "Rosewood Almirah",
    category: "Almirahs",
    image: "images/ralim1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/Pnew3.webp",
    description: "VCF-2000 Rosewood Almirah Interior",
  },
  {
    title: "Mahogany Almirah",
    category: "Almirahs",
    image: "images/malm.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/Pnew4.webp",
    description: "VCF-2002 Mahogany Almirah. 85” H, 24” D, 48” wid",
  },
  {
    title: "Mahogany Almirah",
    category: "Almirahs",
    image: "images/malm1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/Pnew5.webp",
    description: "VCF-2002 Mahogany Almirah Interior",
  },
  {
    title: "Teak Almirah",
    category: "Almirahs",
    image: "images/talm.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/Pnew6.webp",
    description: "VCF-2004 Teak Almirah. 85” H, 24 ”D, 58” wide",
  },
  {
    title: "Teak Almirah",
    category: "Almirahs",
    image: "images/talm1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch20.webp",
    description: "VCF-2004 Teak Almirah Interior",
  },
  {
    title: "Rosewood Console with Mirror",
    category: "Console Furniture",
    image: "images/rmirror.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch24.webp",
    description: "VCF-6000 Rosewood Console with Mirror. 85” H, 23” D, 43” W",
  },
  {
    title: "Mahogany Console",
    category: "Console Furniture",
    image: "images/mconsole.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch23.webp",
    description: "VCF-6004 Mahogany Console. 30″H, 23″D, 43″W",
  },
  {
    title: "Teak Console with Mirror",
    category: "Console Furniture",
    image: "images/tmirror.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch21.webp",
    description: "VCF-6003 Teak Console with Mirror. 84” H, 23” D, 51”W",
  },
  {
    title: "Rosewood Console",
    category: "Console Furniture",
    image: "images/rw.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch22.webp",
    description: "VCF-6001 Rosewood Console. 30″H, 23″D, 43″W",
  },
  {
    title: "Rosewood Console Closeup",
    category: "Console Furniture",
    image: "images/rwclo.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/v1.webp",
    description: "VCF-6001 Rosewood Console Closeup",
  },
  {
    title: "Rosewood Divan",
    category: "Divans",
    image: "images/rd.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/v2.webp",
    description: "VCF-8000 Rosewood Divan. 36” H, 30” D, 85” L",
  },
  {
    title: "Rosewood Divan",
    category: "Divans",
    image: "images/rd1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/v3.webp",
    description: "VCF-8000 Rosewood Divan",
  },
  {
    title: "Teak Divan With Brass Inlay",
    category: "Divans",
    image: "images/bra1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/v4.webp",
    description: "VCF-8002 Teak Divan with brass inlay. 34”H, 34”D, 90”L",
  },
  {
    title: "Rosewood Divan",
    category: "Divans",
    image: "images/rd2.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/v5.webp",
    description: "VCF-8003 Rosewood Divan. 34”H, 34”D, 90” L",
  },
  {
    title: "Mahogany Divan",
    category: "Divans",
    image: "images/aw.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/v6.webp",
    description: "VCF-8004 Mahogany Divan. 34”H, 34”D, 90”L",
  },
  {
    title: "Teak Divan",
    category: "Divans",
    image: "images/ad1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch10.webp",
    description: "VCF-8005 Teak Divan. 34” H, 34 ”D, 90” L",
  },
  {
    title: "Teak Coffee Table",
    category: "Coffee Tables",
    image: "images/tcofee.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch11.webp",
    description: "VCF-5000 Teak Coffee Table. 18 ” H, 20” W, 43” L",
  },
  {
    title: "Rosewood Coffee Tables",
    category: "Coffee Tables",
    image: "images/rcofee.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/pdmarch12.webp",
    description: "VCF-5001, 5002 Rosewood Coffee Tables. 18 ” H, 20” W, 43” L",
  },
  {
    title: "Rosewood Coffee Tables",
    category: "Coffee Tables",
    image: "images/rcofee1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/c1.webp",
    description: "VCF-5003, 5004 Rosewood Coffee Tables Marble Tops. 18 ” H, 20” W, 43” L",
  },
  {
    title: "Velvet Bolsters",
    category: "Soft Furnishings",
    image: "images/v1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/c2.webp",
    description: "VCC- 7000 Velvet Bolsters with Silk Tassels",
  },
  {
    title: "Velvet Cushions",
    category: "Soft Furnishings",
    image: "images/v2.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/c3.webp",
    description: "VCC-7001 Velvet Cushions wtih Silk Tassels",
  },
  {
    title: "Velvet & Silk Cushions",
    category: "Soft Furnishings",
    image: "images/v3.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/c4.webp",
    description: "VCC-7002, 7003 Velvet & Silk Cushions, with Silk Tassels & Fringe",
  },
  {
    title: "Velvet Bolsters",
    category: "Soft Furnishings",
    image: "images/v4.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/c5.webp",
    description: "VCC-7004 Velvet Bolsters wtih Silk Tassels",
  },
  {
    title: "Silk & Velvet Cushions",
    category: "Soft Furnishings",
    image: "images/av1.webp",
    fallback: "https://www.theviceroycollection.com/wp-content/uploads/2022/02/c6.webp",
    description: "VCC-7005, 7006 Silk & Velvet Cushions, wtih Silk Tassels & Fringe",
  },
  {
    title: "Velvet Cushions with Silk Fringe",
    category: "Soft Furnishings",
    image: "images/av2.webp",
    fallback: "",
    description: "VCC-7007, 7008, 7009 Velvet Cushions with Silk Fringe",
  }
];

function OurCollections() {
  const revealRefs = useRef([]);

  const addRevealRef = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vc-collection-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = revealRefs.current.filter(Boolean);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleImageError = (event, fallback) => {
    const image = event.currentTarget;

    if (image.dataset.fallbackApplied === "true") {
      return;
    }

    image.dataset.fallbackApplied = "true";
    image.src = fallback;
  };

  const getWhatsAppLink = (productName) => {
    const message = `Hello The Viceroy Collection,

I am interested in "${productName}".

I would like to know more details about this product, including availability and pricing.

Thank you.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  const generalWhatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello The Viceroy Collection,

I am interested in your handcrafted furniture, doors and architectural collections. I would like to know more about the available products.

Thank you.`
  )}`;

  return (
    <>
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="keywords"
          content="handcrafted teak doors, carved teak doors, rosewood furniture, solid wood furniture, hardwood furniture, architectural doors, hand carved furniture, The Viceroy Collection"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Viceroy Collection" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/hero.webp`} />
        <meta
          property="og:image:alt"
          content="Handcrafted hardwood furniture and carved doors from The Viceroy Collection"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero.webp`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Collections | The Viceroy Collection",
            url: PAGE_URL,
            description: SEO_DESCRIPTION,
            isPartOf: {
              "@type": "WebSite",
              name: "The Viceroy Collection",
              url: SITE_URL,
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: collections.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: product.title,
                url: `${PAGE_URL}#collection-products`,
                image: `${SITE_URL}${product.image}`,
                description: product.description,
              })),
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Viceroy Collection",
            logo: LOGO_URL,
            url: SITE_URL,
            telephone: "+1-224-390-9829",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-224-390-9829",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>

      <main className="vc-collections-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="vc-collections-hero">

          <img
            src="/images/hero.webp"
            alt="The Viceroy Collection handcrafted furniture and doors"
            className="vc-collections-hero-image"
            onError={(e) =>
              handleImageError(
                e,
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1900&q=90"
              )
            }
          />

          <div className="vc-collections-hero-overlay"></div>

          <div className="vc-collections-hero-light"></div>

          <div className="vc-collections-hero-content">

            <span className="vc-collections-eyebrow">
              The Viceroy Collection
            </span>

            <h1>
              Explore Our
              <em> Collections</em>
            </h1>

            <div className="vc-collections-title-line">
              <span></span>
              <i></i>
            </div>

            <p>
              Hand-carved exotic hardwoods transformed into
              distinctive furniture, doors and architectural pieces
              created with timeless craftsmanship.
            </p>

            <a
              href="#collection-products"
              className="vc-collections-hero-button"
            >
              Discover The Collection

              <i className="fa-solid fa-arrow-down-long"></i>
            </a>

          </div>

          <div className="vc-collections-hero-caption">
            <span>
              Handmade
            </span>

            <i></i>

            <span>
              Hand-Carved
            </span>

            <i></i>

            <span>
              Solid Wood
            </span>
          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="vc-collections-intro">

          <div className="vc-collections-container">

            <div className="vc-collections-intro-grid">

              <div
                className="vc-collection-reveal vc-collection-reveal-left"
                ref={addRevealRef}
              >

                <span className="vc-section-label">
                  Our Heritage
                </span>

                <h2 className="vc-section-heading">
                  Centuries Of
                  <em> Inspiration</em>
                </h2>

                <div className="vc-heading-decoration">
                  <span></span>
                  <i></i>
                </div>

              </div>


              <div
                className="vc-collections-intro-copy vc-collection-reveal vc-collection-reveal-right"
                ref={addRevealRef}
              >

                <p className="vc-intro-lead">
                  Inspired by a remarkable tradition of Indian
                  woodworking and architectural craftsmanship.
                </p>

                <p>
                  Over the centuries of time, India has created some
                  of the most exotic and beautiful furniture, doors
                  and architectural structures known in the world.
                  Great pride was taken in building magnificent
                  palaces and temples using unique and unmistakable
                  designs.
                </p>

                <p>
                  During Dutch, Portuguese and British colonialism,
                  Indian woodworkers and artisans created distinctive
                  styles of doors and furniture. These classical
                  Anglo-Indian pieces continue to inspire
                  craftsmanship today.
                </p>

                <p>
                  The Viceroy Collection recreates museum-quality
                  products through hand-carved exotic hardwoods,
                  drawing on methods and tools passed through
                  generations of skilled craftsmen.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MATERIAL STRIP
        ===================================================== */}

        <section className="vc-collection-materials">

          <div className="vc-collections-container">

            <div className="vc-materials-grid">

              <div>
                <span>
                  01
                </span>

                <div>
                  <small>
                    Hardwood
                  </small>

                  <strong>
                    Teak
                  </strong>
                </div>
              </div>


              <div>
                <span>
                  02
                </span>

                <div>
                  <small>
                    Hardwood
                  </small>

                  <strong>
                    Mahogany
                  </strong>
                </div>
              </div>


              <div>
                <span>
                  03
                </span>

                <div>
                  <small>
                    Hardwood
                  </small>

                  <strong>
                    Rosewood
                  </strong>
                </div>
              </div>


              <div>
                <span>
                  04
                </span>

                <div>
                  <small>
                    Craft
                  </small>

                  <strong>
                    Hand Carved
                  </strong>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <section
          className="vc-products-section"
          id="collection-products"
        >

          <div className="vc-collections-container">

            <div
              className="vc-products-heading vc-collection-reveal"
              ref={addRevealRef}
            >

              <span className="vc-section-label">
                Discover Our Work
              </span>

              <h2 className="vc-section-heading">
                Our
                <em> Collections</em>
              </h2>

              <p>
                Explore handcrafted hardwood pieces created with
                attention to material, proportion, detail and
                enduring character.
              </p>

            </div>


            <div className="vc-products-grid">

              {collections.map((product, index) => (

                <article
                  className="vc-product-card vc-collection-reveal"
                  ref={addRevealRef}
                  key={product.title}
                >

                  <div className="vc-product-image">

                    {product.image ? (
                      <img
                      src={product.image}
                      alt={`${product.title} | The Viceroy Collection`}
                      title={`${product.title} | The Viceroy Collection`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) =>
                        handleImageError(
                          e,
                          product.fallback
                        )
                      }
                    />
                    ) : (
                      <div className="vc-product-no-image" aria-label={`${product.title} image not provided`}>
                        <i className="fa-regular fa-image"></i>
                        <span>Image Coming Soon</span>
                      </div>
                    )}

                    <div className="vc-product-image-overlay"></div>


                    <span className="vc-product-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <div className="vc-product-view">

                      <a
                        href={getWhatsAppLink(product.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${product.title} on WhatsApp`}
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>

                    </div>

                  </div>


                  <div className="vc-product-content">

                    <span className="vc-product-category">
                      {product.category}
                    </span>

                    <h3>
                      {product.title}
                    </h3>

                    <p>
                      {product.description}
                    </p>


                    <a
                      href={getWhatsAppLink(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-product-enquire"
                    >

                      <span>
                        Enquire Now
                      </span>

                      <div>
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>

                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CRAFTSMANSHIP
        ===================================================== */}

        <section className="vc-collection-craft">

          <div className="vc-collection-craft-image">

            <img
              src="/images/rw.webp"
              alt="Handcrafted hardwood furniture craftsmanship"
              onError={(e) =>
                handleImageError(
                  e,
                  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=90"
                )
              }
            />

            <div className="vc-collection-craft-image-overlay"></div>

            <div className="vc-craft-image-caption">
              <span>
                Made By Hand
              </span>

              <strong>
                Crafted With
                <br />
                Character
              </strong>
            </div>

          </div>


          <div className="vc-collection-craft-content">

            <div
              className="vc-collection-reveal"
              ref={addRevealRef}
            >

              <span className="vc-section-label">
                The Viceroy Standard
              </span>

              <h2>
                More Than Furniture.
                <em>A Lasting Legacy.</em>
              </h2>

              <div className="vc-heading-decoration light-decoration">
                <span></span>
                <i></i>
              </div>

              <p className="vc-craft-lead">
                Handmade, hand-carved and solid wood pieces created
                to exceed expectations.
              </p>

              <p className="vc-craft-text">
                The Viceroy Collection offers fine furniture and
                door products for those who expect the best in home
                furnishings. Our pieces are created with longevity
                in mind and are intended to become heirloom pieces
                for generations to come.
              </p>


              <div className="vc-craft-features">

                <div>
                  <i className="fa-solid fa-tree"></i>

                  <span>
                    Mature
                    <strong>Hardwoods</strong>
                  </span>
                </div>


                <div>
                  <i className="fa-solid fa-hammer"></i>

                  <span>
                    Traditional
                    <strong>Craftsmanship</strong>
                  </span>
                </div>


                <div>
                  <i className="fa-regular fa-gem"></i>

                  <span>
                    Heirloom
                    <strong>Quality</strong>
                  </span>
                </div>

              </div>


              <a
                href={generalWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="vc-craft-whatsapp"
              >

                <i className="fa-brands fa-whatsapp"></i>

                <span>
                  <small>
                    Have A Question?
                  </small>

                  <strong>
                    Enquire On WhatsApp
                  </strong>
                </span>

                <i className="fa-solid fa-arrow-right-long"></i>

              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="vc-collection-final">

          <img
            src="/images/hero.webp"
            alt="Luxury hardwood furniture by The Viceroy Collection"
            onError={(e) =>
              handleImageError(
                e,
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1900&q=90"
              )
            }
          />

          <div className="vc-collection-final-overlay"></div>

          <div
            className="vc-collection-final-content vc-collection-reveal"
            ref={addRevealRef}
          >

            <div className="vc-final-monogram">
              VC
            </div>

            <span className="vc-final-label">
              The Viceroy Collection
            </span>

            <h2>
              Find A Piece Worth
              <em>Passing Down.</em>
            </h2>

            <p>
              Discover handcrafted furniture, doors and
              architectural elements created from fine hardwoods
              with generations in mind.
            </p>

            <a
              href={generalWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="vc-final-button"
            >
              <i className="fa-brands fa-whatsapp"></i>

              Enquire On WhatsApp

              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

          </div>

        </section>

      </main>


      <style>{`

        @import url(
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
        );


        /* =====================================================
           RESET
        ===================================================== */

        .vc-collections-page,
        .vc-collections-page *,
        .vc-collections-page *::before,
        .vc-collections-page *::after {
          box-sizing: border-box;
        }

        .vc-collections-page {
          width: 100%;
          max-width: 100%;

          overflow-x: hidden;

          background: #fffdf9;

          color: #1f140e;

          font-family:
            "Montserrat",
            Arial,
            sans-serif;
        }

        .vc-collections-page a {
          text-decoration: none;
        }

        .vc-collections-container {
          width:
            min(
              1320px,
              calc(100% - 60px)
            );

          max-width: 100%;

          margin: 0 auto;
        }


        /* =====================================================
           REVEAL ANIMATION
        ===================================================== */

        .vc-collection-reveal {
          opacity: 0;

          transform:
            translateY(45px);

          transition:
            opacity .85s
            cubic-bezier(.2,.7,.2,1),
            transform .85s
            cubic-bezier(.2,.7,.2,1);
        }

        .vc-collection-reveal-left {
          transform:
            translateX(-55px);
        }

        .vc-collection-reveal-right {
          transform:
            translateX(55px);
        }

        .vc-collection-reveal.vc-collection-visible {
          opacity: 1;

          transform:
            translate(0,0);
        }


        /* =====================================================
           HERO
        ===================================================== */

        .vc-collections-hero {
          position: relative;

          width: 100%;

          min-height:
            calc(100vh - 105px);

          min-height:
            calc(100svh - 105px);

          overflow: hidden;

          display: flex;
          align-items: center;

          background: #21140d;
        }

        .vc-collections-hero-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          animation:
            vcCollectionHeroZoom
            15s
            ease-out
            forwards;
        }

        @keyframes vcCollectionHeroZoom {
          from {
            transform: scale(1.08);
          }

          to {
            transform: scale(1);
          }
        }

        .vc-collections-hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(27,16,9,.94) 0%,
              rgba(27,16,9,.78) 42%,
              rgba(27,16,9,.32) 75%,
              rgba(27,16,9,.20) 100%
            );
        }

        .vc-collections-hero-light {
          position: absolute;

          left: 8%;
          top: 10%;

          width: 600px;
          height: 600px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(208,154,91,.14),
              transparent 70%
            );

          filter: blur(25px);
        }

        .vc-collections-hero-content {
          position: relative;

          z-index: 5;

          width:
            min(
              1320px,
              calc(100% - 60px)
            );

          margin: 0 auto;

          padding-right: 30%;
        }

        .vc-collections-eyebrow {
          display: block;

          margin-bottom: 20px;

          color: #d7a76d;

          font-size: 13px;
          font-weight: 700;

          letter-spacing: 4px;

          text-transform: uppercase;

          animation:
            vcHeroText .8s .15s
            ease forwards;

          opacity: 0;

          transform:
            translateY(25px);
        }

        .vc-collections-hero h1 {
          max-width: 850px;

          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              70px,
              8vw,
              118px
            );

          font-weight: 500;

          line-height: .84;

          letter-spacing: -2px;

          opacity: 0;

          transform:
            translateY(30px);

          animation:
            vcHeroText .9s .3s
            ease forwards;
        }

        .vc-collections-hero h1 em {
          display: block;

          margin-top: 13px;

          color: #e4bd88;

          font-weight: 500;
        }

        .vc-collections-title-line {
          margin:
            35px
            0
            25px;

          display: flex;
          align-items: center;

          gap: 8px;

          opacity: 0;

          animation:
            vcHeroText .8s .48s
            ease forwards;
        }

        .vc-collections-title-line span {
          width: 80px;
          height: 1px;

          background: #c79153;
        }

        .vc-collections-title-line i {
          width: 5px;
          height: 5px;

          display: block;

          border-radius: 50%;

          background: #e0b47b;
        }

        .vc-collections-hero-content > p {
          max-width: 620px;

          margin: 0;

          color: #eee3da;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 26px;
          font-weight: 500;

          line-height: 1.55;

          opacity: 0;

          transform:
            translateY(25px);

          animation:
            vcHeroText .8s .58s
            ease forwards;
        }

        .vc-collections-hero-button {
          min-height: 58px;

          margin-top: 34px;

          padding:
            0
            27px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          border:
            1px solid
            rgba(226,185,132,.6);

          color: #fff;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 2px;

          text-transform: uppercase;

          opacity: 0;

          transform:
            translateY(25px);

          animation:
            vcHeroText .8s .7s
            ease forwards;

          transition:
            background .35s ease,
            color .35s ease,
            transform .35s ease;
        }

        .vc-collections-hero-button:hover {
          background: #b27b42;

          border-color: #b27b42;

          transform:
            translateY(-3px);
        }

        @keyframes vcHeroText {
          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        .vc-collections-hero-caption {
          position: absolute;

          z-index: 5;

          right: 40px;
          bottom: 35px;

          display: flex;
          align-items: center;

          gap: 14px;
        }

        .vc-collections-hero-caption span {
          color:
            rgba(255,255,255,.7);

          font-size: 7px;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .vc-collections-hero-caption i {
          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: #cf9b5e;
        }


        /* =====================================================
           COMMON HEADING
        ===================================================== */

        .vc-section-label {
          display: block;

          margin-bottom: 13px;

          color: #a46e36;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 3px;

          text-transform: uppercase;
        }

        .vc-section-heading {
          margin: 0;

          color: #2b1e16;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              50px,
              5.5vw,
              78px
            );

          font-weight: 500;

          line-height: .92;
        }

        .vc-section-heading em {
          display: block;

          color: #a46e36;

          font-weight: 500;
        }

        .vc-heading-decoration {
          margin-top: 28px;

          display: flex;
          align-items: center;

          gap: 7px;
        }

        .vc-heading-decoration span {
          width: 65px;
          height: 1px;

          background: #a8753c;
        }

        .vc-heading-decoration i {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #c79558;
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .vc-collections-intro {
          padding:
            125px
            0;

          background: #fffdf9;
        }

        .vc-collections-intro-grid {
          display: grid;

          grid-template-columns:
            .8fr
            1.2fr;

          gap:
            clamp(
              70px,
              10vw,
              150px
            );

          align-items: start;
        }

        .vc-collections-intro-copy {
          padding-top: 10px;
        }

        .vc-collections-intro-copy
        .vc-intro-lead {
          margin:
            0
            0
            25px;

          color: #443127;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 27px;
          font-weight: 600;

          line-height: 1.5;
        }

        .vc-collections-intro-copy > p:not(.vc-intro-lead) {
          margin:
            0
            0
            18px;

          color: #6b5a4f;

          font-size: 13px;

          line-height: 1.95;
        }


        /* =====================================================
           MATERIALS
        ===================================================== */

        .vc-collection-materials {
          background: #2a1a11;
        }

        .vc-materials-grid {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0,1fr)
            );
        }

        .vc-materials-grid > div {
          min-height: 150px;

          padding: 30px;

          display: flex;
          align-items: center;

          gap: 20px;

          border-right:
            1px solid
            rgba(210,163,103,.2);
        }

        .vc-materials-grid > div:last-child {
          border-right: 0;
        }

        .vc-materials-grid > div > span {
          color:
            rgba(212,165,106,.35);

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 37px;
        }

        .vc-materials-grid small {
          display: block;

          margin-bottom: 5px;

          color: #aa8057;

          font-size: 7px;
          font-weight: 600;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .vc-materials-grid strong {
          color: #f4e9df;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 26px;
          font-weight: 500;
        }


        /* =====================================================
           PRODUCTS
        ===================================================== */

        .vc-products-section {
          padding:
            125px
            0;

          background: #eee8df;

          scroll-margin-top: 100px;
        }

        .vc-products-heading {
          max-width: 680px;

          margin-bottom: 65px;
        }

        .vc-products-heading > p {
          max-width: 570px;

          margin:
            24px
            0
            0;

          color: #6b5a4e;

          font-size: 13px;

          line-height: 1.9;
        }

        .vc-products-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          gap:
            45px
            25px;
        }

        .vc-product-card {
          min-width: 0;

          background: #fffdf9;

          border:
            1px solid
            rgba(114,80,49,.12);

          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .vc-product-card:hover {
          transform:
            translateY(-8px);

          box-shadow:
            0 25px 60px
            rgba(54,35,22,.12);
        }

        .vc-product-image {
          position: relative;

          height: 520px;

          overflow: hidden;

          background: #2a1a11;
        }

        .vc-product-no-image {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #fffdf9;
          color: #6b5140;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: .5px;
        }

        .vc-product-no-image i {
          font-size: 38px;
          color: #b27b42;
        }

        .vc-product-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;
          object-position: center;
          background: #fff;

          transition:
            transform
            .9s
            cubic-bezier(.2,.7,.2,1);
        }

        .vc-product-card:hover
        .vc-product-image img {
          transform: scale(1);
        }

        .vc-product-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(28,16,9,.6),
              transparent 45%
            );

          opacity: .7;

          transition:
            opacity .4s ease;
        }

        .vc-product-card:hover
        .vc-product-image-overlay {
          opacity: 1;
        }

        .vc-product-number {
          position: absolute;

          top: 20px;
          left: 20px;

          min-width: 42px;
          height: 42px;

          padding:
            0
            8px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(255,255,255,.5);

          background:
            rgba(26,15,9,.35);

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 17px;

          backdrop-filter:
            blur(8px);
        }

        .vc-product-view {
          position: absolute;

          right: 20px;
          bottom: 20px;

          transform:
            translateY(15px);

          opacity: 0;

          transition:
            opacity .4s ease,
            transform .4s ease;
        }

        .vc-product-card:hover
        .vc-product-view {
          opacity: 1;

          transform:
            translateY(0);
        }

        .vc-product-view a {
          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #a8733b;

          color: #fff;

          font-size: 21px;

          transition:
            background .3s ease,
            transform .3s ease;
        }

        .vc-product-view a:hover {
          background: #875727;

          transform:
            scale(1.06);
        }

        .vc-product-content {
          padding:
            28px
            28px
            30px;
        }

        .vc-product-category {
          display: block;

          margin-bottom: 9px;

          color: #a46e36;

          font-size: 12px;
          font-weight: 600;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .vc-product-content h3 {
          min-height: 58px;

          margin:
            0
            0
            14px;

          color: #2c1e16;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 27px;
          font-weight: 600;

          line-height: 1.08;
        }

        .vc-product-content > p {
          min-height: 80px;

          margin:
            0
            0
            25px;

          color: #3f3027;

          font-size: 17px;

          line-height: 1.8;
        }


        /* =====================================================
           PRODUCT WHATSAPP BUTTON
        ===================================================== */

        .vc-product-enquire {
          width: 100%;

          min-height: 56px;

          padding-left: 19px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border:
            1px solid
            rgba(153,100,48,.38);

          color: #4a3323;

          transition:
            background .35s ease,
            color .35s ease,
            border-color .35s ease;
        }

        .vc-product-enquire > span {
          font-size: 12px;
          font-weight: 600;

          letter-spacing: 1.7px;

          text-transform: uppercase;
        }

        .vc-product-enquire > div {
          width: 55px;
          height: 54px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-left:
            1px solid
            rgba(153,100,48,.38);

          color: #a46e36;

          font-size: 20px;

          transition:
            background .35s ease,
            color .35s ease;
        }

        .vc-product-enquire:hover {
          background: #2c1b11;

          border-color: #2c1b11;

          color: #fff;
        }

        .vc-product-enquire:hover > div {
          background: #a46e36;

          border-color: #a46e36;

          color: #fff;
        }


        /* =====================================================
           CRAFT SECTION
        ===================================================== */

        .vc-collection-craft {
          min-height: 800px;

          display: grid;

          grid-template-columns:
            1fr
            1fr;

          background: #271810;
        }

        .vc-collection-craft-image {
          position: relative;

          min-height: 800px;

          overflow: hidden;
        }

        .vc-collection-craft-image > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: contain;

          transition:
            transform 1.3s ease;
        }

        .vc-collection-craft:hover
        .vc-collection-craft-image > img {
          transform:
            scale(1.035);
        }

        .vc-collection-craft-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(26,15,9,.72),
              transparent 60%
            );
        }

        .vc-craft-image-caption {
          position: absolute;

          left: 50px;
          bottom: 50px;

          padding-left: 20px;

          border-left:
            2px solid #d1a169;
        }

        .vc-craft-image-caption span {
          display: block;

          margin-bottom: 8px;

          color: #d4a66d;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .vc-craft-image-caption strong {
          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 34px;
          font-weight: 500;

          line-height: 1.05;
        }

        .vc-collection-craft-content {
          padding:
            80px
            clamp(
              45px,
              6vw,
              100px
            );

          display: flex;
          align-items: center;
        }

        .vc-collection-craft-content
        .vc-section-label {
          color: #d0a16a;
        }

        .vc-collection-craft-content h2 {
          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(30px, 2.4vw, 40px);

          font-weight: 500;

          line-height: .94;
        }

        .vc-collection-craft-content h2 em {
          display: block;

          color: #dfb47d;

          font-weight: 500;
        }

        .light-decoration span {
          background: #c89458;
        }

        .vc-craft-lead {
          max-width: 580px;

          margin:
            30px
            0
            18px;

          color: #f1e7de;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 24px;
          font-weight: 500;

          line-height: 1.5;
        }

        .vc-craft-text {
          max-width: 590px;

          margin: 0;

          color: #cdbfb5;

          font-size: 12px;

          line-height: 1.95;
        }

        .vc-craft-features {
          margin:
            35px
            0;

          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          border-top:
            1px solid
            rgba(212,164,104,.2);

          border-bottom:
            1px solid
            rgba(212,164,104,.2);
        }

        .vc-craft-features > div {
          padding:
            25px
            15px;

          display: flex;
          align-items: center;

          gap: 12px;

          border-right:
            1px solid
            rgba(212,164,104,.2);
        }

        .vc-craft-features > div:last-child {
          border-right: 0;
        }

        .vc-craft-features i {
          color: #d1a16a;

          font-size: 18px;
        }

        .vc-craft-features span {
          color: #a9998e;

          font-size: 7px;

          line-height: 1.5;

          letter-spacing: 1px;

          text-transform: uppercase;
        }

        .vc-craft-features strong {
          display: block;

          color: #f2e6dc;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 16px;
          font-weight: 500;

          letter-spacing: 0;

          text-transform: none;
        }

        .vc-craft-whatsapp {
          width: 100%;
          max-width: 380px;

          min-height: 72px;

          padding:
            0
            18px;

          display: grid;

          grid-template-columns:
            42px
            minmax(0,1fr)
            auto;

          align-items: center;

          gap: 13px;

          border:
            1px solid
            rgba(212,164,104,.4);

          color: #fff;

          transition:
            background .35s ease,
            border-color .35s ease,
            transform .35s ease;
        }

        .vc-craft-whatsapp >
        i:first-child {
          color: #d8aa71;

          font-size: 25px;
        }

        .vc-craft-whatsapp small {
          display: block;

          margin-bottom: 3px;

          color: #b78a5a;

          font-size: 7px;

          letter-spacing: 1.5px;

          text-transform: uppercase;
        }

        .vc-craft-whatsapp strong {
          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 18px;
          font-weight: 500;
        }

        .vc-craft-whatsapp >
        i:last-child {
          color: #c99a61;

          font-size: 13px;

          transition:
            transform .3s ease;
        }

        .vc-craft-whatsapp:hover {
          background:
            rgba(173,115,58,.16);

          border-color: #b67d43;

          transform:
            translateY(-3px);
        }

        .vc-craft-whatsapp:hover >
        i:last-child {
          transform:
            translateX(5px);
        }


        /* =====================================================
           FINAL CTA
        ===================================================== */

        .vc-collection-final {
          position: relative;

          min-height: 720px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          background: #1e120b;
        }

        .vc-collection-final > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .vc-collection-final-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              rgba(25,14,8,.52),
              rgba(25,14,8,.89)
            );
        }

        .vc-collection-final-content {
          position: relative;

          z-index: 3;

          width:
            min(
              850px,
              calc(100% - 40px)
            );
        }

        .vc-final-monogram {
          width: 68px;
          height: 68px;

          margin:
            0
            auto
            24px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(218,169,108,.5);

          color: #e0b27a;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 25px;
        }

        .vc-final-label {
          display: block;

          margin-bottom: 15px;

          color: #d5a56b;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 3.5px;

          text-transform: uppercase;
        }

        .vc-collection-final h2 {
          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              52px,
              6.5vw,
              88px
            );

          font-weight: 500;

          line-height: .92;
        }

        .vc-collection-final h2 em {
          display: block;

          color: #e3bb86;

          font-weight: 500;
        }

        .vc-collection-final-content > p {
          max-width: 620px;

          margin:
            27px
            auto
            0;

          color: #e3d8d0;

          font-size: 13px;

          line-height: 1.9;
        }

        .vc-final-button {
          min-height: 62px;

          margin-top: 35px;

          padding:
            0
            27px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          background:
            linear-gradient(
              135deg,
              #946132,
              #b78249
            );

          color: #fff;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .vc-final-button
        .fa-whatsapp {
          font-size: 20px;
        }

        .vc-final-button:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 15px 40px
            rgba(0,0,0,.25);
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .vc-collections-container {
            width:
              calc(100% - 40px);
          }

          .vc-collections-hero-content {
            width:
              calc(100% - 40px);

            padding-right: 20%;
          }

          .vc-products-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }

          .vc-product-image {
            height: 480px;
          }

          .vc-collection-craft {
            grid-template-columns: 1fr;
          }

          .vc-collection-craft-image {
            min-height: 650px;
          }

          .vc-collection-craft-content {
            min-height: 650px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .vc-collections-container {
            width:
              calc(100% - 30px);
          }


          /* HERO */

          .vc-collections-hero {
            min-height:
              calc(100svh - 72px);

            align-items: flex-end;
          }

          .vc-collections-hero-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(27,16,9,.18),
                rgba(27,16,9,.55) 40%,
                rgba(27,16,9,.95)
              );
          }

          .vc-collections-hero-content {
            width:
              calc(100% - 30px);

            padding:
              100px
              0
              75px;
          }

          .vc-collections-hero h1 {
            font-size:
              clamp(
                55px,
                16vw,
                76px
              );

            letter-spacing: -1px;
          }

          .vc-collections-hero-content > p {
            font-size: 19px;
          }

          .vc-collections-hero-button {
            width: 100%;
          }

          .vc-collections-hero-caption {
            display: none;
          }


          /* INTRO */

          .vc-collections-intro {
            padding:
              75px
              0;
          }

          .vc-collections-intro-grid {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .vc-section-heading {
            font-size:
              clamp(
                47px,
                13vw,
                62px
              );
          }

          .vc-collections-intro-copy
          .vc-intro-lead {
            font-size: 23px;
          }


          /* MATERIALS */

          .vc-materials-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }

          .vc-materials-grid > div {
            min-height: 125px;

            padding:
              24px
              17px;

            gap: 13px;

            border-bottom:
              1px solid
              rgba(210,163,103,.2);
          }

          .vc-materials-grid >
          div:nth-child(2) {
            border-right: 0;
          }

          .vc-materials-grid >
          div:nth-child(3),
          .vc-materials-grid >
          div:nth-child(4) {
            border-bottom: 0;
          }

          .vc-materials-grid > div > span {
            font-size: 29px;
          }

          .vc-materials-grid strong {
            font-size: 19px;
          }


          /* PRODUCTS */

          .vc-products-section {
            padding:
              75px
              0;
          }

          .vc-products-heading {
            margin-bottom: 45px;
          }

          .vc-products-grid {
            grid-template-columns: 1fr;

            gap: 28px;
          }

          .vc-product-image {
            height:
              min(
                120vw,
                520px
              );
          }

          .vc-product-content {
            padding:
              25px
              22px
              27px;
          }

          .vc-product-content h3 {
            min-height: 0;

            font-size: 26px;
          }

          .vc-product-content > p {
            min-height: 0;
          }

          .vc-product-view {
            opacity: 1;

            transform: none;
          }


          /* CRAFT */

          .vc-collection-craft-image {
            min-height: 550px;
          }

          .vc-craft-image-caption {
            left: 25px;
            bottom: 25px;
          }

          .vc-collection-craft-content {
            min-height: auto;

            padding:
              70px
              20px;
          }

          .vc-collection-craft-content h2 {
            font-size:
              clamp(
                48px,
                13vw,
                64px
              );
          }

          .vc-craft-features {
            grid-template-columns: 1fr;
          }

          .vc-craft-features > div {
            border-right: 0;

            border-bottom:
              1px solid
              rgba(212,164,104,.2);
          }

          .vc-craft-features >
          div:last-child {
            border-bottom: 0;
          }

          .vc-craft-whatsapp {
            max-width: 100%;
          }


          /* FINAL */

          .vc-collection-final {
            min-height: 650px;
          }

          .vc-collection-final-content {
            width:
              calc(100% - 30px);
          }

          .vc-final-button {
            width: 100%;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .vc-collections-container,
          .vc-collections-hero-content,
          .vc-collection-final-content {
            width:
              calc(100% - 24px);
          }

          .vc-product-image {
            height: 430px;
          }

          .vc-materials-grid > div {
            padding:
              20px
              12px;
          }

          .vc-materials-grid > div > span {
            font-size: 25px;
          }

          .vc-materials-grid strong {
            font-size: 17px;
          }

          .vc-craft-whatsapp {
            padding:
              0
              13px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .vc-collection-reveal,
          .vc-collections-eyebrow,
          .vc-collections-hero h1,
          .vc-collections-title-line,
          .vc-collections-hero-content > p,
          .vc-collections-hero-button {
            opacity: 1 !important;

            transform: none !important;

            animation: none !important;

            transition: none !important;
          }

          .vc-collections-hero-image {
            animation: none !important;
          }

        }

      `}</style>
    </>
  );
}

export default OurCollections;