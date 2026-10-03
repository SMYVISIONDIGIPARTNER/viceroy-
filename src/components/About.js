import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "17739919360";

const fallbackImages = {
  hero:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",

  story:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88",

  timber:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=88",

  craft:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=88",

  legacy:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90",
};

function About() {
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

  const addReveal = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  useEffect(() => {
    const elements = revealRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vc-about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="vc-about-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="vc-about-hero">

          <img
            src="/images/hero.webp"
            alt="The Viceroy Collection handcrafted hardwood furniture"
            className="vc-about-hero-image"
            onError={(e) =>
              handleImageError(e, fallbackImages.hero)
            }
          />

          <div className="vc-about-hero-overlay"></div>
          <div className="vc-about-hero-glow"></div>

          <div className="vc-about-hero-content">

            <p className="vc-about-eyebrow vc-about-hero-animate delay-one">
              The Viceroy Collection
            </p>

            <h1 className="vc-about-hero-title vc-about-hero-animate delay-two">
              A Legacy Of
              <em> Craftsmanship</em>
            </h1>

            <div className="vc-about-hero-line vc-about-hero-animate delay-three">
              <span></span>
              <i></i>
            </div>

            <p className="vc-about-hero-description vc-about-hero-animate delay-three">
              Fine hardwoods. Traditional craftsmanship.
              Extraordinary pieces created to endure for generations.
            </p>

            <div className="vc-about-hero-buttons vc-about-hero-animate delay-four">

              <Link
                to="/our-collections"
                className="vc-about-button vc-about-button-gold"
              >
                Explore Our Collections

                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>

              <a
                href={whatsappLink(
                  "Hello, I am interested in The Viceroy Collection and would like to know more about your handcrafted furniture and doors."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="vc-about-button vc-about-button-outline"
              >
                <i className="fa-brands fa-whatsapp"></i>

                Enquire Now
              </a>

            </div>

          </div>


          <div className="vc-about-hero-side">

            <span>
              Since Nature Began The Story
            </span>

            <div></div>

            <small>
              Crafted To Last
            </small>

          </div>

        </section>


        {/* =====================================================
            INTRO / STORY
        ===================================================== */}

        <section className="vc-about-story">

          <div className="vc-about-container vc-about-story-grid">

            {/* IMAGE */}

            <div
              className="vc-about-story-visual vc-about-reveal vc-about-reveal-left"
              ref={addReveal}
            >

              <div className="vc-about-story-image">

                <img
                  src="/images/about.webp"
                  alt="Premium hardwood furniture craftsmanship"
                  onError={(e) =>
                    handleImageError(e, fallbackImages.story)
                  }
                />

                <div className="vc-about-image-border"></div>

              </div>


              <div className="vc-about-age-card">

                <strong>
                  65+
                </strong>

                <span>
                  Years Mature
                  <br />
                  Timber
                </span>

              </div>


              <div className="vc-about-corner-line"></div>

            </div>


            {/* CONTENT */}

            <div
              className="vc-about-story-content vc-about-reveal vc-about-reveal-right"
              ref={addReveal}
            >

              <span className="vc-about-section-label">
                You Are Welcome
              </span>

              <h2 className="vc-about-section-title">
                The Viceroy
                <em> Collection</em>
              </h2>

              <div className="vc-about-title-decoration">
                <span></span>
                <i></i>
              </div>

              <p className="vc-about-lead">
                We create fine furniture, doors and architectural
                elements for those who expect enduring quality,
                distinctive character and timeless craftsmanship.
              </p>

              <p className="vc-about-text">
                The Viceroy Collection uses only the finest of
                hardwoods for furniture, doors and various
                architectural elements; mainly teak, mahogany and
                rosewood. All of the timber is from mature trees
                dating at least 65 years in age, thereby assuring
                rich grain and color.
              </p>

              <p className="vc-about-text">
                These logs await processing at our timber mill yard.
                Once the logs are cut into predetermined size boards,
                they are carefully prepared for the next stage of
                production.
              </p>

              <p className="vc-about-text">
                Our furniture products are made to last and are
                intended to become heirloom pieces for generations
                to come. Handmade, hand-carved and solid wood
                products define the character of The Viceroy
                Collection.
              </p>


              <div className="vc-about-signature">

                <div className="vc-about-signature-mark">
                  VC
                </div>

                <div>
                  <small>
                    OUR PHILOSOPHY
                  </small>

                  <strong>
                    Made With Character.
                    <br />
                    Created For Generations.
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            NUMBERS
        ===================================================== */}

        <section className="vc-about-stats">

          <div className="vc-about-container">

            <div className="vc-about-stats-grid">

              <div
                className="vc-about-stat vc-about-reveal"
                ref={addReveal}
              >
                <strong>
                  65+
                </strong>

                <span>
                  Years Mature Timber
                </span>
              </div>


              <div
                className="vc-about-stat vc-about-reveal"
                ref={addReveal}
              >
                <strong>
                  3–4
                </strong>

                <span>
                  Weeks Kiln Drying
                </span>
              </div>


              <div
                className="vc-about-stat vc-about-reveal"
                ref={addReveal}
              >
                <strong>
                  8–12%
                </strong>

                <span>
                  Target Wood Moisture
                </span>
              </div>


              <div
                className="vc-about-stat vc-about-reveal"
                ref={addReveal}
              >
                <strong>
                  3
                </strong>

                <span>
                  Signature Hardwoods
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINEST HARDWOODS
        ===================================================== */}

        <section className="vc-about-hardwoods">

          <div className="vc-about-container vc-about-hardwoods-grid">

            <div
              className="vc-about-hardwood-content vc-about-reveal vc-about-reveal-left"
              ref={addReveal}
            >

              <span className="vc-about-section-label">
                Nature's Finest Materials
              </span>

              <h2 className="vc-about-section-title">
                The Finest
                <em> Hardwoods</em>
              </h2>

              <div className="vc-about-title-decoration">
                <span></span>
                <i></i>
              </div>

              <p className="vc-about-lead">
                Exceptional craftsmanship begins with exceptional
                material.
              </p>

              <p className="vc-about-text">
                Mature hardwood is valued for its beautiful grain,
                natural color and distinctive character. The Viceroy
                Collection works principally with teak, mahogany and
                rosewood to create furniture, doors and architectural
                elements with an enduring presence.
              </p>


              <div className="vc-about-wood-list">

                <div>
                  <span>01</span>

                  <div>
                    <h3>
                      Teak
                    </h3>

                    <p>
                      Valued for strength, durability and naturally
                      beautiful grain.
                    </p>
                  </div>
                </div>


                <div>
                  <span>02</span>

                  <div>
                    <h3>
                      Mahogany
                    </h3>

                    <p>
                      Distinguished by its rich character, warm tones
                      and elegant appearance.
                    </p>
                  </div>
                </div>


                <div>
                  <span>03</span>

                  <div>
                    <h3>
                      Rosewood
                    </h3>

                    <p>
                      An exotic hardwood admired for deep color,
                      distinctive grain and luxurious presence.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            <div
              className="vc-about-hardwood-image vc-about-reveal vc-about-reveal-right"
              ref={addReveal}
            >

              <img
                src="/images/abt2.webp"
                alt="Premium teak mahogany and rosewood"
                onError={(e) =>
                  handleImageError(e, fallbackImages.timber)
                }
              />

              <div className="vc-about-hardwood-overlay"></div>

              <div className="vc-about-hardwood-caption">

                <span>
                  Selected For
                </span>

                <strong>
                  Rich Grain
                  <br />
                  & Natural Color
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            KILN PROCESS
        ===================================================== */}

        <section className="vc-about-process">

          <div className="vc-about-container">

            <div
              className="vc-about-center-heading vc-about-reveal"
              ref={addReveal}
            >

              <span className="vc-about-section-label">
                Prepared With Precision
              </span>

              <h2>
                From Timber
                <em> To Heirloom</em>
              </h2>

              <p>
                Each stage is approached with care, helping prepare
                solid hardwood for furniture and architectural
                pieces designed for lasting use.
              </p>

            </div>


            <div className="vc-about-process-grid">

              <article
                className="vc-about-process-card vc-about-reveal"
                ref={addReveal}
              >

                <span className="vc-process-index">
                  01
                </span>

                <div className="vc-process-icon">
                  <i className="fa-solid fa-tree"></i>
                </div>

                <h3>
                  Timber Selection
                </h3>

                <p>
                  Mature hardwoods are selected for their grain,
                  natural color and distinctive character.
                </p>

              </article>


              <article
                className="vc-about-process-card vc-about-reveal"
                ref={addReveal}
              >

                <span className="vc-process-index">
                  02
                </span>

                <div className="vc-process-icon">
                  <i className="fa-solid fa-ruler-combined"></i>
                </div>

                <h3>
                  Precision Cutting
                </h3>

                <p>
                  Logs are processed and cut into predetermined board
                  sizes in preparation for controlled drying.
                </p>

              </article>


              <article
                className="vc-about-process-card vc-about-reveal"
                ref={addReveal}
              >

                <span className="vc-process-index">
                  03
                </span>

                <div className="vc-process-icon">
                  <i className="fa-solid fa-temperature-half"></i>
                </div>

                <h3>
                  Kiln Drying
                </h3>

                <p>
                  Boards remain in the kiln dryer for approximately
                  three to four weeks.
                </p>

              </article>


              <article
                className="vc-about-process-card vc-about-reveal"
                ref={addReveal}
              >

                <span className="vc-process-index">
                  04
                </span>

                <div className="vc-process-icon">
                  <i className="fa-solid fa-droplet"></i>
                </div>

                <h3>
                  Moisture Control
                </h3>

                <p>
                  Calibrated meters measure moisture, targeting the
                  stated international standard of 8 to 12 percent.
                </p>

              </article>


              <article
                className="vc-about-process-card vc-about-reveal"
                ref={addReveal}
              >

                <span className="vc-process-index">
                  05
                </span>

                <div className="vc-process-icon">
                  <i className="fa-solid fa-hammer"></i>
                </div>

                <h3>
                  Hand Crafting
                </h3>

                <p>
                  Skilled craftsmanship and hand carving transform
                  prepared hardwood into distinctive pieces.
                </p>

              </article>


              <article
                className="vc-about-process-card vc-about-reveal"
                ref={addReveal}
              >

                <span className="vc-process-index">
                  06
                </span>

                <div className="vc-process-icon">
                  <i className="fa-regular fa-gem"></i>
                </div>

                <h3>
                  Heirloom Piece
                </h3>

                <p>
                  The result is solid wood furniture and
                  architectural work created with generations in
                  mind.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            HERITAGE / CRAFT
        ===================================================== */}

        <section className="vc-about-heritage">

          <img
            src="/images/hero.webp"
            alt="Traditional handcrafted Indian hardwood furniture"
            onError={(e) =>
              handleImageError(e, fallbackImages.craft)
            }
          />

          <div className="vc-about-heritage-overlay"></div>

          <div className="vc-about-container vc-about-heritage-inner">

            <div
              className="vc-about-heritage-content vc-about-reveal"
              ref={addReveal}
            >

              <span className="vc-about-section-label">
                Centuries Of Inspiration
              </span>

              <h2>
                Rooted In A Rich
                <em> Craft Tradition</em>
              </h2>

              <p>
                Over centuries, India created some of the world's
                most exotic and beautiful furniture, doors and
                architectural structures. Great pride was taken in
                building magnificent palaces and temples with
                distinctive designs.
              </p>

              <p>
                During Dutch, Portuguese and British colonialism,
                Indian woodworkers and artisans developed distinctive
                styles of doors and furniture. The Viceroy
                Collection recreates museum-quality pieces through
                hand-carved exotic hardwoods and traditional
                craftsmanship.
              </p>

              <Link
                to="/our-collections"
                className="vc-about-button vc-about-button-gold"
              >
                View Our Collections

                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            VALUES
        ===================================================== */}

        <section className="vc-about-values">

          <div className="vc-about-container">

            <div
              className="vc-about-center-heading dark-heading vc-about-reveal"
              ref={addReveal}
            >

              <span className="vc-about-section-label">
                The Viceroy Standard
              </span>

              <h2>
                Crafted Without
                <em> Compromise</em>
              </h2>

            </div>


            <div className="vc-about-values-grid">

              <article
                className="vc-about-value vc-about-reveal"
                ref={addReveal}
              >
                <span>
                  01
                </span>

                <i className="fa-solid fa-leaf"></i>

                <h3>
                  Natural Beauty
                </h3>

                <p>
                  Every hardwood has its own grain, tone and
                  individual character.
                </p>
              </article>


              <article
                className="vc-about-value vc-about-reveal"
                ref={addReveal}
              >
                <span>
                  02
                </span>

                <i className="fa-solid fa-hammer"></i>

                <h3>
                  Handmade Detail
                </h3>

                <p>
                  Hand-carved details give each creation the
                  character of genuine craftsmanship.
                </p>
              </article>


              <article
                className="vc-about-value vc-about-reveal"
                ref={addReveal}
              >
                <span>
                  03
                </span>

                <i className="fa-solid fa-shield-halved"></i>

                <h3>
                  Lasting Strength
                </h3>

                <p>
                  Solid hardwood construction is chosen with
                  longevity and enduring use in mind.
                </p>
              </article>


              <article
                className="vc-about-value vc-about-reveal"
                ref={addReveal}
              >
                <span>
                  04
                </span>

                <i className="fa-regular fa-gem"></i>

                <h3>
                  Timeless Elegance
                </h3>

                <p>
                  Designs inspired by enduring traditions rather
                  than temporary trends.
                </p>
              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="vc-about-final">

          <img
            src="/images/hero.webp"
            alt="Luxury vintage hardwood furniture by The Viceroy Collection"
            onError={(e) =>
              handleImageError(e, fallbackImages.legacy)
            }
          />

          <div className="vc-about-final-overlay"></div>

          <div
            className="vc-about-final-content vc-about-reveal"
            ref={addReveal}
          >

            <div className="vc-about-final-monogram">
              VC
            </div>

            <span>
              The Viceroy Collection
            </span>

            <h2>
              Discover Furniture
              <br />
              <em>Made To Last Forever.</em>
            </h2>

            <p>
              Handmade, hand-carved and solid wood pieces created
              for those who expect the best in home furnishings.
            </p>


            <div className="vc-about-final-buttons">

              <Link
                to="/our-collections"
                className="vc-about-button vc-about-button-gold"
              >
                Explore The Collection

                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>


              <a
                href={whatsappLink(
                  "Hello, I would like to enquire about furniture, doors and architectural pieces from The Viceroy Collection."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="vc-about-button vc-about-button-outline"
              >
                <i className="fa-brands fa-whatsapp"></i>

                WhatsApp Us
              </a>

            </div>

          </div>

        </section>

      </main>


      <style>{`

        @import url(
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
        );


        /* =====================================================
           BASE
        ===================================================== */

        .vc-about-page,
        .vc-about-page *,
        .vc-about-page *::before,
        .vc-about-page *::after {
          box-sizing: border-box;
        }

        .vc-about-page {
          width: 100%;
          max-width: 100%;

          overflow-x: hidden;

          background: #f8f5ef;

          color: #271b14;

          font-family:
            "Montserrat",
            Arial,
            sans-serif;
        }

        .vc-about-container {
          width:
            min(
              1280px,
              calc(100% - 60px)
            );

          max-width: 100%;

          margin: 0 auto;
        }


        /* =====================================================
           SCROLL REVEALS
        ===================================================== */

        .vc-about-reveal {
          opacity: 0;

          transform:
            translateY(45px);

          transition:
            opacity .9s
            cubic-bezier(.2,.7,.2,1),
            transform .9s
            cubic-bezier(.2,.7,.2,1);
        }

        .vc-about-reveal-left {
          transform:
            translateX(-55px);
        }

        .vc-about-reveal-right {
          transform:
            translateX(55px);
        }

        .vc-about-reveal.vc-about-visible {
          opacity: 1;

          transform:
            translate(0,0);
        }


        /* =====================================================
           HERO
        ===================================================== */

        .vc-about-hero {
          position: relative;

          width: 100%;

          min-height:
            calc(100vh - 105px);

          min-height:
            calc(100svh - 105px);

          overflow: hidden;

          display: flex;
          align-items: center;

          background: #1e120b;
        }

        .vc-about-hero-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          animation:
            vcAboutHeroZoom
            15s
            ease-out
            forwards;
        }

        @keyframes vcAboutHeroZoom {
          from {
            transform: scale(1.08);
          }

          to {
            transform: scale(1);
          }
        }

        .vc-about-hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(24,14,8,.91) 0%,
              rgba(24,14,8,.74) 40%,
              rgba(24,14,8,.30) 75%,
              rgba(24,14,8,.18) 100%
            );
        }

        .vc-about-hero-glow {
          position: absolute;

          left: 15%;
          top: 15%;

          width: 550px;
          height: 550px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(197,145,83,.15),
              transparent 68%
            );

          filter: blur(20px);
        }

        .vc-about-hero-content {
          position: relative;

          z-index: 5;

          width:
            min(
              1280px,
              calc(100% - 60px)
            );

          margin: 0 auto;

          padding-right: 200px;
        }

        .vc-about-eyebrow {
          margin: 0 0 20px;

          color: #d5a76d;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 4px;

          text-transform: uppercase;
        }

        .vc-about-hero-title {
          max-width: 850px;

          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              65px,
              7vw,
              108px
            );

          font-weight: 500;

          line-height: .88;

          letter-spacing: -1px;
        }

        .vc-about-hero-title em {
          display: block;

          margin-top: 12px;

          color: #e4bf8c;

          font-weight: 500;
        }

        .vc-about-hero-line {
          margin: 32px 0 25px;

          display: flex;
          align-items: center;

          gap: 8px;
        }

        .vc-about-hero-line span {
          width: 75px;
          height: 1px;

          background: #c38e50;
        }

        .vc-about-hero-line i {
          width: 5px;
          height: 5px;

          display: block;

          border-radius: 50%;

          background: #deb278;
        }

        .vc-about-hero-description {
          max-width: 590px;

          margin: 0;

          color: rgba(255,255,255,.86);

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 23px;
          font-weight: 500;

          line-height: 1.55;
        }

        .vc-about-hero-buttons {
          margin-top: 34px;

          display: flex;
          flex-wrap: wrap;

          gap: 14px;
        }


        /* HERO ANIMATIONS */

        .vc-about-hero-animate {
          opacity: 0;

          transform:
            translateY(30px);

          animation:
            vcAboutHeroReveal
            .85s
            cubic-bezier(.2,.7,.2,1)
            forwards;
        }

        .delay-one {
          animation-delay: .12s;
        }

        .delay-two {
          animation-delay: .28s;
        }

        .delay-three {
          animation-delay: .48s;
        }

        .delay-four {
          animation-delay: .68s;
        }

        @keyframes vcAboutHeroReveal {
          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }


        /* HERO SIDE */

        .vc-about-hero-side {
          position: absolute;

          z-index: 6;

          right: 32px;
          top: 50%;

          display: flex;
          align-items: center;

          gap: 20px;

          transform:
            translateY(-50%)
            rotate(90deg);

          transform-origin: center;
        }

        .vc-about-hero-side span,
        .vc-about-hero-side small {
          color: rgba(255,255,255,.7);

          font-size: 8px;

          letter-spacing: 3px;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .vc-about-hero-side div {
          width: 70px;
          height: 1px;

          background: #bd8950;
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .vc-about-button {
          position: relative;

          min-height: 60px;

          padding:
            0
            28px;

          overflow: hidden;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 14px;

          border:
            1px solid transparent;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          transition:
            transform .35s ease,
            background .35s ease,
            color .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .vc-about-button::before {
          content: "";

          position: absolute;

          top: -130%;
          left: -80px;

          width: 40px;
          height: 350%;

          transform: rotate(30deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.35),
              transparent
            );

          transition:
            left .75s ease;
        }

        .vc-about-button:hover::before {
          left: 130%;
        }

        .vc-about-button:hover {
          transform:
            translateY(-3px);
        }

        .vc-about-button-gold {
          background:
            linear-gradient(
              135deg,
              #936131,
              #b9864e
            );

          border-color: #b9864e;

          color: #fff;
        }

        .vc-about-button-gold:hover {
          box-shadow:
            0 15px 35px
            rgba(0,0,0,.2);
        }

        .vc-about-button-outline {
          border-color:
            rgba(255,255,255,.55);

          background:
            rgba(255,255,255,.03);

          color: #fff;

          backdrop-filter: blur(8px);
        }

        .vc-about-button-outline:hover {
          background: #fff;

          color: #26170e;
        }


        /* =====================================================
           COMMON TYPOGRAPHY
        ===================================================== */

        .vc-about-section-label {
          display: block;

          margin-bottom: 14px;

          color: #a46e36;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 3px;

          text-transform: uppercase;
        }

        .vc-about-section-title {
          margin: 0;

          color: #291d16;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              48px,
              5.5vw,
              76px
            );

          font-weight: 500;

          line-height: .95;
        }

        .vc-about-section-title em {
          display: block;

          color: #a46e36;

          font-weight: 500;
        }

        .vc-about-title-decoration {
          margin:
            28px
            0;

          display: flex;
          align-items: center;

          gap: 7px;
        }

        .vc-about-title-decoration span {
          width: 62px;
          height: 1px;

          background: #ac783e;
        }

        .vc-about-title-decoration i {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #c89457;
        }

        .vc-about-lead {
          max-width: 630px;

          margin:
            0
            0
            24px;

          color: #49362a;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 25px;
          font-weight: 600;

          line-height: 1.5;
        }

        .vc-about-text {
          max-width: 650px;

          margin:
            0
            0
            18px;

          color: #68584c;

          font-size: 13px;

          line-height: 1.95;
        }


        /* =====================================================
           STORY
        ===================================================== */

        .vc-about-story {
          padding:
            125px
            0;

          background: #f8f5ef;
        }

        .vc-about-story-grid {
          display: grid;

          grid-template-columns:
            minmax(0,.92fr)
            minmax(0,1.08fr);

          align-items: center;

          gap:
            clamp(
              65px,
              8vw,
              125px
            );
        }

        .vc-about-story-visual {
          position: relative;

          padding:
            0
            0
            40px
            35px;
        }

        .vc-about-story-image {
          position: relative;

          height: 690px;

          overflow: hidden;

          background: #342218;
        }

        .vc-about-story-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform
            1.2s
            cubic-bezier(.2,.7,.2,1);
        }

        .vc-about-story-image:hover img {
          transform:
            scale(1.045);
        }

        .vc-about-image-border {
          position: absolute;

          inset: 16px;

          border:
            1px solid
            rgba(255,255,255,.4);

          pointer-events: none;
        }

        .vc-about-age-card {
          position: absolute;

          right: -30px;
          bottom: 0;

          width: 180px;
          height: 160px;

          padding: 25px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          background: #291a11;

          color: #fff;

          box-shadow:
            0 20px 50px
            rgba(38,24,15,.18);
        }

        .vc-about-age-card strong {
          color: #ddb27a;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 50px;
          font-weight: 500;

          line-height: 1;
        }

        .vc-about-age-card span {
          margin-top: 7px;

          color: #eee2d8;

          font-size: 9px;

          line-height: 1.6;

          letter-spacing: 1.6px;

          text-transform: uppercase;
        }

        .vc-about-corner-line {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 150px;
          height: 180px;

          border-left:
            1px solid #b68044;

          border-bottom:
            1px solid #b68044;

          z-index: -1;
        }


        /* SIGNATURE */

        .vc-about-signature {
          margin-top: 35px;

          padding-top: 30px;

          display: flex;
          align-items: center;

          gap: 18px;

          border-top:
            1px solid
            rgba(122,88,53,.18);
        }

        .vc-about-signature-mark {
          width: 58px;
          height: 58px;

          flex: 0 0 58px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(167,112,57,.45);

          color: #a46e36;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 22px;
        }

        .vc-about-signature small {
          display: block;

          margin-bottom: 5px;

          color: #a46e36;

          font-size: 8px;

          letter-spacing: 2px;
        }

        .vc-about-signature strong {
          color: #49372b;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 18px;
          font-weight: 600;

          line-height: 1.4;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .vc-about-stats {
          background: #281a11;
        }

        .vc-about-stats-grid {
          display: grid;

          grid-template-columns:
            repeat(4,minmax(0,1fr));
        }

        .vc-about-stat {
          min-height: 210px;

          padding: 40px 25px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;

          border-right:
            1px solid
            rgba(213,164,103,.22);
        }

        .vc-about-stat:last-child {
          border-right: 0;
        }

        .vc-about-stat strong {
          color: #dfb27a;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 58px;
          font-weight: 500;

          line-height: 1;
        }

        .vc-about-stat span {
          margin-top: 13px;

          color: #f0e6dd;

          font-size: 9px;
          font-weight: 500;

          letter-spacing: 2px;

          text-transform: uppercase;
        }


        /* =====================================================
           HARDWOODS
        ===================================================== */

        .vc-about-hardwoods {
          padding:
            125px
            0;

          background: #eee7dd;
        }

        .vc-about-hardwoods-grid {
          display: grid;

          grid-template-columns:
            minmax(0,1fr)
            minmax(0,.9fr);

          align-items: center;

          gap:
            clamp(
              65px,
              8vw,
              120px
            );
        }

        .vc-about-wood-list {
          margin-top: 40px;

          border-top:
            1px solid
            rgba(102,72,48,.18);
        }

        .vc-about-wood-list > div {
          padding:
            23px
            0;

          display: grid;

          grid-template-columns:
            45px
            1fr;

          gap: 18px;

          border-bottom:
            1px solid
            rgba(102,72,48,.18);
        }

        .vc-about-wood-list > div > span {
          padding-top: 4px;

          color: #a8753e;

          font-size: 9px;

          letter-spacing: 1px;
        }

        .vc-about-wood-list h3 {
          margin:
            0
            0
            5px;

          color: #302118;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 24px;
          font-weight: 600;
        }

        .vc-about-wood-list p {
          margin: 0;

          color: #6c5a4c;

          font-size: 12px;

          line-height: 1.7;
        }

        .vc-about-hardwood-image {
          position: relative;

          height: 700px;

          overflow: hidden;
        }

        .vc-about-hardwood-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 1.2s ease;
        }

        .vc-about-hardwood-image:hover img {
          transform: scale(1.045);
        }

        .vc-about-hardwood-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(29,17,10,.75),
              transparent 55%
            );
        }

        .vc-about-hardwood-caption {
          position: absolute;

          left: 35px;
          bottom: 35px;

          padding-left: 20px;

          border-left:
            2px solid #d1a16a;
        }

        .vc-about-hardwood-caption span {
          display: block;

          margin-bottom: 7px;

          color: #d8aa74;

          font-size: 8px;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .vc-about-hardwood-caption strong {
          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 29px;
          font-weight: 500;

          line-height: 1.05;
        }


        /* =====================================================
           PROCESS
        ===================================================== */

        .vc-about-process {
          padding:
            120px
            0;

          background: #f8f5ef;
        }

        .vc-about-center-heading {
          max-width: 760px;

          margin:
            0
            auto
            65px;

          text-align: center;
        }

        .vc-about-center-heading h2 {
          margin: 0;

          color: #2a1d15;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              48px,
              5.5vw,
              76px
            );

          font-weight: 500;

          line-height: .95;
        }

        .vc-about-center-heading h2 em {
          color: #a46e36;

          font-weight: 500;
        }

        .vc-about-center-heading > p {
          max-width: 650px;

          margin:
            25px
            auto
            0;

          color: #68584d;

          font-size: 13px;

          line-height: 1.9;
        }

        .vc-about-process-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          border-top:
            1px solid
            rgba(127,91,55,.2);

          border-left:
            1px solid
            rgba(127,91,55,.2);
        }

        .vc-about-process-card {
          position: relative;

          min-height: 310px;

          padding: 45px 35px;

          border-right:
            1px solid
            rgba(127,91,55,.2);

          border-bottom:
            1px solid
            rgba(127,91,55,.2);

          transition:
            background .4s ease,
            transform .4s ease,
            box-shadow .4s ease;
        }

        .vc-about-process-card:hover {
          z-index: 2;

          background: #fff;

          transform:
            translateY(-6px);

          box-shadow:
            0 20px 50px
            rgba(55,36,23,.08);
        }

        .vc-process-index {
          position: absolute;

          top: 25px;
          right: 25px;

          color:
            rgba(151,100,50,.25);

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 33px;
        }

        .vc-process-icon {
          width: 55px;
          height: 55px;

          margin-bottom: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(163,109,54,.35);

          color: #a46e36;

          font-size: 20px;

          transition:
            background .35s ease,
            color .35s ease;
        }

        .vc-about-process-card:hover
        .vc-process-icon {
          background: #a46e36;

          color: #fff;
        }

        .vc-about-process-card h3 {
          margin:
            0
            0
            13px;

          color: #302219;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 25px;
          font-weight: 600;
        }

        .vc-about-process-card p {
          margin: 0;

          color: #706056;

          font-size: 12px;

          line-height: 1.85;
        }


        /* =====================================================
           HERITAGE
        ===================================================== */

        .vc-about-heritage {
          position: relative;

          min-height: 760px;

          overflow: hidden;

          display: flex;
          align-items: center;

          background: #21140c;
        }

        .vc-about-heritage > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 1.5s ease;
        }

        .vc-about-heritage:hover > img {
          transform: scale(1.035);
        }

        .vc-about-heritage-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(26,15,9,.93),
              rgba(26,15,9,.78) 48%,
              rgba(26,15,9,.24)
            );
        }

        .vc-about-heritage-inner {
          position: relative;

          z-index: 3;
        }

        .vc-about-heritage-content {
          max-width: 650px;
        }

        .vc-about-heritage-content
        .vc-about-section-label {
          color: #d1a26a;
        }

        .vc-about-heritage-content h2 {
          margin:
            0
            0
            30px;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              50px,
              5.5vw,
              78px
            );

          font-weight: 500;

          line-height: .95;
        }

        .vc-about-heritage-content h2 em {
          display: block;

          color: #e2bb87;

          font-weight: 500;
        }

        .vc-about-heritage-content > p {
          margin:
            0
            0
            18px;

          color: #e1d5cb;

          font-size: 13px;

          line-height: 1.95;
        }

        .vc-about-heritage-content
        .vc-about-button {
          margin-top: 18px;
        }


        /* =====================================================
           VALUES
        ===================================================== */

        .vc-about-values {
          padding:
            120px
            0;

          background: #eee7dd;
        }

        .vc-about-values-grid {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0,1fr)
            );

          gap: 18px;
        }

        .vc-about-value {
          position: relative;

          min-height: 310px;

          padding:
            42px
            28px;

          background:
            rgba(255,255,255,.48);

          border:
            1px solid
            rgba(123,87,52,.13);

          transition:
            background .4s ease,
            transform .4s ease,
            box-shadow .4s ease;
        }

        .vc-about-value:hover {
          background: #fff;

          transform:
            translateY(-7px);

          box-shadow:
            0 20px 45px
            rgba(54,36,23,.08);
        }

        .vc-about-value > span {
          position: absolute;

          top: 22px;
          right: 22px;

          color:
            rgba(150,100,51,.28);

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 30px;
        }

        .vc-about-value > i {
          margin-bottom: 30px;

          color: #a46e36;

          font-size: 29px;
        }

        .vc-about-value h3 {
          margin:
            0
            0
            14px;

          color: #312219;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 26px;
          font-weight: 600;
        }

        .vc-about-value p {
          margin: 0;

          color: #6c5a4e;

          font-size: 12px;

          line-height: 1.85;
        }


        /* =====================================================
           FINAL CTA
        ===================================================== */

        .vc-about-final {
          position: relative;

          min-height: 700px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          background: #20130c;
        }

        .vc-about-final > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .vc-about-final-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              rgba(25,14,8,.55),
              rgba(25,14,8,.86)
            );
        }

        .vc-about-final-content {
          position: relative;

          z-index: 3;

          width:
            min(
              850px,
              calc(100% - 40px)
            );
        }

        .vc-about-final-monogram {
          width: 70px;
          height: 70px;

          margin:
            0
            auto
            22px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(215,168,108,.55);

          color: #dfb17a;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 26px;
        }

        .vc-about-final-content > span {
          display: block;

          margin-bottom: 15px;

          color: #d5a66c;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 4px;

          text-transform: uppercase;
        }

        .vc-about-final-content h2 {
          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              50px,
              6vw,
              82px
            );

          font-weight: 500;

          line-height: .93;
        }

        .vc-about-final-content h2 em {
          color: #e1b984;

          font-weight: 500;
        }

        .vc-about-final-content > p {
          max-width: 620px;

          margin:
            27px
            auto
            0;

          color: #e1d7cf;

          font-size: 13px;

          line-height: 1.9;
        }

        .vc-about-final-buttons {
          margin-top: 35px;

          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          gap: 14px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {

          .vc-about-container {
            width:
              calc(100% - 40px);
          }

          .vc-about-hero {
            min-height:
              calc(100svh - 80px);
          }

          .vc-about-hero-content {
            width:
              calc(100% - 40px);

            padding-right: 100px;
          }

          .vc-about-hero-side {
            right: -30px;
          }

          .vc-about-story,
          .vc-about-hardwoods,
          .vc-about-process,
          .vc-about-values {
            padding:
              95px
              0;
          }

          .vc-about-story-grid,
          .vc-about-hardwoods-grid {
            gap: 65px;
          }

          .vc-about-story-image {
            height: 580px;
          }

          .vc-about-age-card {
            right: -15px;

            width: 150px;
            height: 135px;
          }

          .vc-about-hardwood-image {
            height: 600px;
          }

          .vc-about-process-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }

          .vc-about-values-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .vc-about-container {
            width:
              calc(100% - 30px);
          }


          /* HERO */

          .vc-about-hero {
            min-height:
              calc(100svh - 72px);

            align-items: flex-end;
          }

          .vc-about-hero-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(24,14,8,.22),
                rgba(24,14,8,.55) 38%,
                rgba(24,14,8,.94)
              );
          }

          .vc-about-hero-content {
            width:
              calc(100% - 30px);

            padding:
              110px
              0
              60px;
          }

          .vc-about-eyebrow {
            font-size: 8px;

            letter-spacing: 2.7px;
          }

          .vc-about-hero-title {
            font-size:
              clamp(
                52px,
                15vw,
                72px
              );
          }

          .vc-about-hero-description {
            font-size: 19px;
          }

          .vc-about-hero-buttons {
            flex-direction: column;
          }

          .vc-about-hero-buttons
          .vc-about-button {
            width: 100%;
          }

          .vc-about-hero-side {
            display: none;
          }


          /* STORY */

          .vc-about-story {
            padding:
              75px
              0;
          }

          .vc-about-story-grid {
            grid-template-columns: 1fr;

            gap: 65px;
          }

          .vc-about-story-visual {
            padding:
              0
              15px
              25px
              0;
          }

          .vc-about-story-image {
            height:
              min(
                125vw,
                590px
              );
          }

          .vc-about-age-card {
            right: 0;

            width: 140px;
            height: 120px;

            padding: 19px;
          }

          .vc-about-age-card strong {
            font-size: 40px;
          }

          .vc-about-corner-line {
            display: none;
          }

          .vc-about-lead {
            font-size: 22px;
          }


          /* STATS */

          .vc-about-stats-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }

          .vc-about-stat {
            min-height: 170px;

            border-bottom:
              1px solid
              rgba(213,164,103,.22);
          }

          .vc-about-stat:nth-child(2) {
            border-right: 0;
          }

          .vc-about-stat:nth-child(3),
          .vc-about-stat:nth-child(4) {
            border-bottom: 0;
          }

          .vc-about-stat strong {
            font-size: 47px;
          }


          /* HARDWOODS */

          .vc-about-hardwoods {
            padding:
              75px
              0;
          }

          .vc-about-hardwoods-grid {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .vc-about-hardwood-image {
            height:
              min(
                125vw,
                600px
              );
          }


          /* PROCESS */

          .vc-about-process {
            padding:
              75px
              0;
          }

          .vc-about-center-heading {
            margin-bottom: 45px;
          }

          .vc-about-process-grid {
            grid-template-columns: 1fr;
          }

          .vc-about-process-card {
            min-height: auto;

            padding:
              38px
              26px;
          }


          /* HERITAGE */

          .vc-about-heritage {
            min-height: 720px;

            align-items: flex-end;
          }

          .vc-about-heritage-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(26,15,9,.25),
                rgba(26,15,9,.94)
              );
          }

          .vc-about-heritage-inner {
            padding-bottom: 60px;
          }

          .vc-about-heritage-content h2 {
            font-size:
              clamp(
                48px,
                13vw,
                65px
              );
          }


          /* VALUES */

          .vc-about-values {
            padding:
              75px
              0;
          }

          .vc-about-values-grid {
            grid-template-columns: 1fr;
          }

          .vc-about-value {
            min-height: auto;

            padding:
              38px
              27px;
          }


          /* FINAL */

          .vc-about-final {
            min-height: 650px;
          }

          .vc-about-final-content {
            width:
              calc(100% - 30px);
          }

          .vc-about-final-buttons {
            flex-direction: column;
          }

          .vc-about-final-buttons
          .vc-about-button {
            width: 100%;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .vc-about-container,
          .vc-about-hero-content,
          .vc-about-final-content {
            width:
              calc(100% - 24px);
          }

          .vc-about-section-title {
            font-size: 45px;
          }

          .vc-about-stat {
            padding:
              30px
              12px;
          }

          .vc-about-stat strong {
            font-size: 41px;
          }

          .vc-about-stat span {
            font-size: 7px;

            letter-spacing: 1.4px;
          }

          .vc-about-hardwood-caption {
            left: 22px;
            bottom: 22px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .vc-about-reveal,
          .vc-about-hero-animate {
            opacity: 1 !important;

            transform: none !important;

            animation: none !important;

            transition: none !important;
          }

          .vc-about-hero-image {
            animation: none !important;
          }

        }

      `}</style>
    </>
  );
}

export default About;