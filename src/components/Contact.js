import React, { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "12243909829";

const FALLBACK_HERO =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1900&q=90";

const FALLBACK_CONTACT =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

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
            entry.target.classList.add("vc-contact-visible");
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

    elements.forEach((element) => {
      observer.observe(element);
    });

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `Hello The Viceroy Collection,

I would like to make an enquiry.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Subject: ${form.subject || "General Enquiry"}

Message:
${form.message}

Thank you.`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const generalWhatsAppMessage = `Hello The Viceroy Collection,

I am interested in your handcrafted furniture, doors and architectural collections.

I would like to know more details.

Thank you.`;

  const generalWhatsAppURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    generalWhatsAppMessage
  )}`;

  return (
    <>
      <main className="vc-contact-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="vc-contact-hero">

          <img
            src="/images/hero.webp"
            alt="Contact The Viceroy Collection"
            className="vc-contact-hero-image"
            onError={(e) =>
              handleImageError(e, FALLBACK_HERO)
            }
          />

          <div className="vc-contact-hero-overlay"></div>
          <div className="vc-contact-hero-glow"></div>

          <div className="vc-contact-hero-content">

            <span className="vc-contact-hero-label">
              The Viceroy Collection
            </span>

            <h1>
              Begin Your
              <em> Enquiry</em>
            </h1>

            <div className="vc-contact-hero-line">
              <span></span>
              <i></i>
            </div>

            <p>
              Discover handcrafted furniture, doors and
              architectural elements created from fine hardwoods
              with timeless character.
            </p>

            <a
              href={generalWhatsAppURL}
              target="_blank"
              rel="noopener noreferrer"
              className="vc-contact-hero-whatsapp"
            >
              <i className="fa-brands fa-whatsapp"></i>

              <span>
                Enquire On WhatsApp
              </span>

              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

          </div>

          <div className="vc-contact-hero-bottom">

            <span>
              Furniture
            </span>

            <i></i>

            <span>
              Doors
            </span>

            <i></i>

            <span>
              Architectural Elements
            </span>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="vc-contact-intro">

          <div className="vc-contact-container">

            <div
              className="vc-contact-intro-heading vc-contact-reveal"
              ref={addRevealRef}
            >

              <span className="vc-contact-section-label">
                We Would Love To Hear From You
              </span>

              <h2>
                Contact
                <em> The Viceroy Collection</em>
              </h2>

              <div className="vc-contact-decoration">
                <span></span>
                <i></i>
              </div>

              <p>
                Whether you are interested in a handcrafted door,
                fine hardwood furniture or a distinctive
                architectural piece, send us your enquiry and our
                team will be happy to assist you.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT INFORMATION
        ===================================================== */}

        <section className="vc-contact-information">

          <div className="vc-contact-container">

            <div className="vc-contact-info-grid">

              {/* PHONE */}

              <a
                href="tel:+1224-390-9829"
                className="vc-contact-info-card vc-contact-reveal"
                ref={addRevealRef}
              >

                <span className="vc-info-number">
                  01
                </span>

                <div className="vc-info-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <small>
                  Call Us
                </small>

                <h3>
                  +1224-390-9829
                </h3>

                <p>
                  Speak directly with us about our furniture,
                  doors and collections.
                </p>

                <div className="vc-info-action">
                  Call Now

                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:info@theviceroycollection.com"
                className="vc-contact-info-card vc-contact-reveal"
                ref={addRevealRef}
              >

                <span className="vc-info-number">
                  02
                </span>

                <div className="vc-info-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>

                <small>
                  Email Us
                </small>

                <h3 className="vc-email-heading">
                  info@theviceroycollection.com
                </h3>

                <p>
                  Send your enquiry and tell us more about the
                  piece you are interested in.
                </p>

                <div className="vc-info-action">
                  Send Email

                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>

              </a>


              {/* WHATSAPP */}

              <a
                href={generalWhatsAppURL}
                target="_blank"
                rel="noopener noreferrer"
                className="vc-contact-info-card vc-contact-reveal"
                ref={addRevealRef}
              >

                <span className="vc-info-number">
                  03
                </span>

                <div className="vc-info-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>

                <small>
                  WhatsApp
                </small>

                <h3>
                  Message Us
                </h3>

                <p>
                  Start a WhatsApp conversation for a quick and
                  convenient enquiry.
                </p>

                <div className="vc-info-action">
                  Open WhatsApp

                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>

              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            FORM + IMAGE
        ===================================================== */}

        <section className="vc-contact-main">

          <div className="vc-contact-container">

            <div className="vc-contact-main-grid">

              {/* IMAGE SIDE */}

              <div
                className="vc-contact-image-side vc-contact-reveal vc-contact-reveal-left"
                ref={addRevealRef}
              >

                <img
                  src="/images/rd.webp"
                  alt="The Viceroy Collection luxury hardwood furniture"
                  onError={(e) =>
                    handleImageError(
                      e,
                      FALLBACK_CONTACT
                    )
                  }
                />

                <div className="vc-contact-image-overlay"></div>

                <div className="vc-contact-image-border"></div>


                <div className="vc-contact-image-content">

                  <span>
                    The Viceroy Collection
                  </span>

                  <h3>
                    Extraordinary
                    <em> Craftsmanship</em>
                  </h3>

                  <p>
                    Handmade. Hand-carved. Solid wood.
                    Created with generations in mind.
                  </p>

                </div>


                <div className="vc-contact-image-badge">

                  <i className="fa-solid fa-tree"></i>

                  <span>
                    Fine
                    <strong>Hardwoods</strong>
                  </span>

                </div>

              </div>


              {/* FORM */}

              <div
                className="vc-contact-form-side vc-contact-reveal vc-contact-reveal-right"
                ref={addRevealRef}
              >

                <span className="vc-contact-section-label">
                  Send An Enquiry
                </span>

                <h2>
                  Tell Us What
                  <em> You're Looking For</em>
                </h2>

                <p className="vc-form-intro">
                  Fill out your details below and click
                  <strong> Send Enquiry</strong>. Your enquiry will
                  open directly in WhatsApp.
                </p>


                <form
                  className="vc-contact-form"
                  onSubmit={handleSubmit}
                >

                  {/* NAME + PHONE */}

                  <div className="vc-form-row">

                    <div className="vc-form-group">

                      <label htmlFor="contact-name">
                        Your Name
                        <span>*</span>
                      </label>

                      <div className="vc-input-wrap">

                        <i className="fa-regular fa-user"></i>

                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          autoComplete="name"
                          required
                        />

                      </div>

                    </div>


                    <div className="vc-form-group">

                      <label htmlFor="contact-phone">
                        Phone Number
                        <span>*</span>
                      </label>

                      <div className="vc-input-wrap">

                        <i className="fa-solid fa-phone"></i>

                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          autoComplete="tel"
                          required
                        />

                      </div>

                    </div>

                  </div>


                  {/* EMAIL */}

                  <div className="vc-form-group">

                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <div className="vc-input-wrap">

                      <i className="fa-regular fa-envelope"></i>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                      />

                    </div>

                  </div>


                  {/* SUBJECT */}

                  <div className="vc-form-group">

                    <label htmlFor="contact-subject">
                      What Are You Interested In?
                    </label>

                    <div className="vc-input-wrap vc-select-wrap">

                      <i className="fa-solid fa-layer-group"></i>

                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                      >

                        <option value="">
                          Select an option
                        </option>

                        <option value="Teak Carved Arch Double Door">
                          Teak Carved Arch Double Door
                        </option>

                        <option value="Teak Carved Square Double Door">
                          Teak Carved Square Double Door
                        </option>

                        <option value="Teak Single Doors">
                          Teak Single Doors
                        </option>

                        <option value="Teak Single Door,Carved Panels">
                          Teak Single Door,Carved Panels
                        </option>

                        <option value="Teak Single Door,Carved Panels">
                          Teak Single Door,Carved Panels
                        </option>

                        <option value="Rosewood King Cot">
                          Rosewood King Cot
                        </option>

                        <option value="Rosewood Queen Cot">
                          Rosewood Queen Cot
                        </option>

                        <option value="Mahogany King Cot">
                          Mahogany King Cot
                        </option>

                        <option value="Mahogany King Cot">
                          Mahogany King Cot
                        </option>

                        <option value="Headboard">
                          Headboard
                        </option>

                        <option value="Footboard">
                          Footboard
                        </option>

                        <option value="Mahogany Queen Size Cot">
                          Mahogany Queen Size Cot
                        </option>

                        <option value="Mahogany Night Stands">
                          Mahogany Night Stands
                        </option>

                        <option value="Rosewood Night Stands">
                          Rosewood Night Stands
                        </option>

                        <option value="Rosewood Almirah">
                          Rosewood Almirah
                        </option>

                        <option value="Rosewood Almirah">
                          Rosewood Almirah
                        </option>

                        <option value="Mahogany Almirah">
                          Mahogany Almirah
                        </option>

                        <option value="Mahogany Almirah">
                          Mahogany Almirah
                        </option>

                        <option value="Teak Almirah">
                          Teak Almirah
                        </option>

                        <option value="Teak Almirah">
                          Teak Almirah
                        </option>

                        <option value="Rosewood Console with Mirror">
                          Rosewood Console with Mirror
                        </option>

                        <option value="Mahogany Console">
                          Mahogany Console
                        </option>

                        <option value="Teak Console with Mirror">
                          Teak Console with Mirror
                        </option>

                        <option value="Rosewood Console">
                          Rosewood Console
                        </option>

                        <option value="Rosewood Console Closeup">
                          Rosewood Console Closeup
                        </option>

                        <option value="Rosewood Divan">
                          Rosewood Divan
                        </option>

                        <option value="Rosewood Divan">
                          Rosewood Divan
                        </option>

                        <option value="Teak Divan With Brass Inlay">
                          Teak Divan With Brass Inlay
                        </option>

                        <option value="Rosewood Divan">
                          Rosewood Divan
                        </option>

                        <option value="Mahogany Divan">
                          Mahogany Divan
                        </option>

                        <option value="Teak Divan">
                          Teak Divan
                        </option>

                        <option value="Teak Coffee Table">
                          Teak Coffee Table
                        </option>

                        <option value="Rosewood Coffee Tables">
                          Rosewood Coffee Tables
                        </option>

                        <option value="Rosewood Coffee Tables">
                          Rosewood Coffee Tables
                        </option>

                        <option value="Velvet Bolsters">
                          Velvet Bolsters
                        </option>

                        <option value="Velvet Cushions">
                          Velvet Cushions
                        </option>

                        <option value="Velvet & Silk Cushions">
                          Velvet & Silk Cushions
                        </option>

                        <option value="Velvet Bolsters">
                          Velvet Bolsters
                        </option>

                        <option value="Silk & Velvet Cushions">
                          Silk & Velvet Cushions
                        </option>

                        <option value="Velvet Cushions with Silk Fringe">
                          Velvet Cushions with Silk Fringe
                        </option>

                        <option value="General Enquiry">
                          General Enquiry
                        </option>

                      </select>

                      <i className="fa-solid fa-chevron-down vc-select-arrow"></i>

                    </div>

                  </div>


                  {/* MESSAGE */}

                  <div className="vc-form-group">

                    <label htmlFor="contact-message">
                      Write A Note
                      <span>*</span>
                    </label>

                    <div className="vc-input-wrap vc-textarea-wrap">

                      <i className="fa-regular fa-message"></i>

                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about the furniture, door or architectural piece you are interested in..."
                        rows="6"
                        required
                      ></textarea>

                    </div>

                  </div>


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="vc-contact-submit"
                  >

                    <i className="fa-brands fa-whatsapp"></i>

                    <span>
                      Send Enquiry On WhatsApp
                    </span>

                    <i className="fa-solid fa-arrow-right-long"></i>

                  </button>


                  <div className="vc-form-note">

                    <i className="fa-brands fa-whatsapp"></i>

                    <p>
                      Your details will be prepared as a WhatsApp
                      message and sent to
                      <strong> +1224-390-9829</strong>.
                    </p>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ADDRESS
        ===================================================== */}

        <section className="vc-contact-location">

          <div className="vc-contact-container">

            <div className="vc-contact-location-grid">

              <div
                className="vc-location-heading vc-contact-reveal"
                ref={addRevealRef}
              >

                <span className="vc-contact-section-label">
                  Our Location
                </span>

                <h2>
                  Visit
                  <em> The Viceroy Collection</em>
                </h2>

              </div>


              <div
                className="vc-location-address vc-contact-reveal"
                ref={addRevealRef}
              >

                <div className="vc-location-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <small>
                    Address
                  </small>

                  <address>
                    4119  W. Orleans
                    <br />
                    McHenry,  IL 60050
                  </address>
                </div>

              </div>


              <div
                className="vc-location-contact vc-contact-reveal"
                ref={addRevealRef}
              >

                <a href="tel:+1224-390-9829">

                  <i className="fa-solid fa-phone"></i>

                  <span>
                    <small>
                      Phone
                    </small>

                    +1224-390-9829
                  </span>

                </a>


                <a href="mailto:info@theviceroycollection.com">

                  <i className="fa-regular fa-envelope"></i>

                  <span>
                    <small>
                      Email
                    </small>

                    info@theviceroycollection.com
                  </span>

                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL WHATSAPP CTA
        ===================================================== */}

        <section className="vc-contact-final">

          <img
            src="/images/hero.webp"
            alt="Handcrafted hardwood furniture and doors"
            onError={(e) =>
              handleImageError(
                e,
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1900&q=90"
              )
            }
          />

          <div className="vc-contact-final-overlay"></div>


          <div
            className="vc-contact-final-content vc-contact-reveal"
            ref={addRevealRef}
          >

            <div className="vc-contact-monogram">
              VC
            </div>

            <span>
              Have Something In Mind?
            </span>

            <h2>
              Start The
              <em> Conversation.</em>
            </h2>

            <p>
              Contact The Viceroy Collection to enquire about
              handcrafted furniture, doors and architectural
              elements.
            </p>

            <a
              href={generalWhatsAppURL}
              target="_blank"
              rel="noopener noreferrer"
              className="vc-contact-final-button"
            >

              <i className="fa-brands fa-whatsapp"></i>

              <span>
                WhatsApp Us
              </span>

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

        .vc-contact-page,
        .vc-contact-page *,
        .vc-contact-page *::before,
        .vc-contact-page *::after {
          box-sizing: border-box;
        }

        .vc-contact-page {
          width: 100%;
          max-width: 100%;

          overflow-x: hidden;

          background: #f8f5ef;

          color: #2a1d15;

          font-family:
            "Montserrat",
            Arial,
            sans-serif;
        }

        .vc-contact-page a {
          text-decoration: none;
        }

        .vc-contact-container {
          width:
            min(
              1320px,
              calc(100% - 60px)
            );

          max-width: 100%;

          margin: 0 auto;
        }


        /* =====================================================
           REVEAL
        ===================================================== */

        .vc-contact-reveal {
          opacity: 0;

          transform:
            translateY(45px);

          transition:
            opacity .85s
            cubic-bezier(.2,.7,.2,1),
            transform .85s
            cubic-bezier(.2,.7,.2,1);
        }

        .vc-contact-reveal-left {
          transform:
            translateX(-55px);
        }

        .vc-contact-reveal-right {
          transform:
            translateX(55px);
        }

        .vc-contact-reveal.vc-contact-visible {
          opacity: 1;

          transform:
            translate(0,0);
        }


        /* =====================================================
           HERO
        ===================================================== */

        .vc-contact-hero {
          position: relative;

          width: 100%;

          min-height:
            calc(100vh - 105px);

          min-height:
            calc(100svh - 105px);

          overflow: hidden;

          display: flex;
          align-items: center;

          background: #21140c;
        }

        .vc-contact-hero-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          animation:
            vcContactHeroZoom
            15s
            ease-out
            forwards;
        }

        @keyframes vcContactHeroZoom {

          from {
            transform:
              scale(1.08);
          }

          to {
            transform:
              scale(1);
          }

        }

        .vc-contact-hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(25,14,8,.95) 0%,
              rgba(25,14,8,.79) 42%,
              rgba(25,14,8,.34) 75%,
              rgba(25,14,8,.2)
            );
        }

        .vc-contact-hero-glow {
          position: absolute;

          left: 8%;
          top: 15%;

          width: 600px;
          height: 600px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(202,147,82,.15),
              transparent 68%
            );

          filter:
            blur(20px);
        }

        .vc-contact-hero-content {
          position: relative;

          z-index: 4;

          width:
            min(
              1320px,
              calc(100% - 60px)
            );

          margin: 0 auto;

          padding-right: 35%;
        }

        .vc-contact-hero-label {
          display: block;

          margin-bottom: 18px;

          color: #d6a66d;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 4px;

          text-transform: uppercase;

          opacity: 0;

          transform:
            translateY(25px);

          animation:
            vcContactHeroText
            .8s
            .15s
            ease
            forwards;
        }

        .vc-contact-hero h1 {
          max-width: 850px;

          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              72px,
              8vw,
              116px
            );

          font-weight: 500;

          line-height: .84;

          letter-spacing: -2px;

          opacity: 0;

          transform:
            translateY(30px);

          animation:
            vcContactHeroText
            .9s
            .3s
            ease
            forwards;
        }

        .vc-contact-hero h1 em {
          display: block;

          margin-top: 12px;

          color: #e2b982;

          font-weight: 500;
        }

        .vc-contact-hero-line {
          margin:
            34px
            0
            25px;

          display: flex;
          align-items: center;

          gap: 8px;

          opacity: 0;

          animation:
            vcContactHeroText
            .8s
            .48s
            ease
            forwards;
        }

        .vc-contact-hero-line span {
          width: 75px;
          height: 1px;

          background: #c79154;
        }

        .vc-contact-hero-line i {
          width: 5px;
          height: 5px;

          display: block;

          border-radius: 50%;

          background: #e0b47a;
        }

        .vc-contact-hero-content > p {
          max-width: 600px;

          margin: 0;

          color: #eee2d8;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 23px;
          font-weight: 500;

          line-height: 1.55;

          opacity: 0;

          transform:
            translateY(25px);

          animation:
            vcContactHeroText
            .8s
            .58s
            ease
            forwards;
        }

        @keyframes vcContactHeroText {

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        /* HERO WHATSAPP */

        .vc-contact-hero-whatsapp {
          min-height: 62px;

          margin-top: 34px;

          padding:
            0
            25px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          background:
            linear-gradient(
              135deg,
              #946132,
              #b68149
            );

          color: #fff;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          opacity: 0;

          transform:
            translateY(25px);

          animation:
            vcContactHeroText
            .8s
            .7s
            ease
            forwards;

          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .vc-contact-hero-whatsapp
        .fa-whatsapp {
          font-size: 21px;
        }

        .vc-contact-hero-whatsapp:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 15px 40px
            rgba(0,0,0,.25);
        }

        .vc-contact-hero-bottom {
          position: absolute;

          z-index: 4;

          right: 40px;
          bottom: 35px;

          display: flex;
          align-items: center;

          gap: 14px;
        }

        .vc-contact-hero-bottom span {
          color:
            rgba(255,255,255,.7);

          font-size: 7px;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .vc-contact-hero-bottom i {
          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: #d0a067;
        }


        /* =====================================================
           COMMON
        ===================================================== */

        .vc-contact-section-label {
          display: block;

          margin-bottom: 13px;

          color: #a46e36;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 3px;

          text-transform: uppercase;
        }

        .vc-contact-decoration {
          margin:
            28px
            0;

          display: flex;
          align-items: center;

          gap: 7px;
        }

        .vc-contact-decoration span {
          width: 65px;
          height: 1px;

          background: #a8733b;
        }

        .vc-contact-decoration i {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #c89457;
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .vc-contact-intro {
          padding:
            110px
            0
            80px;

          background: #f8f5ef;
        }

        .vc-contact-intro-heading {
          max-width: 820px;
        }

        .vc-contact-intro-heading h2 {
          margin: 0;

          color: #2c1e16;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              55px,
              6vw,
              82px
            );

          font-weight: 500;

          line-height: .92;
        }

        .vc-contact-intro-heading h2 em {
          display: block;

          color: #a46e36;

          font-weight: 500;
        }

        .vc-contact-intro-heading > p {
          max-width: 700px;

          margin: 0;

          color: #67564a;

          font-size: 13px;

          line-height: 1.95;
        }


        /* =====================================================
           INFO CARDS
        ===================================================== */

        .vc-contact-information {
          padding-bottom: 110px;

          background: #f8f5ef;
        }

        .vc-contact-info-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          gap: 20px;
        }

        .vc-contact-info-card {
          position: relative;

          min-width: 0;
          min-height: 360px;

          padding:
            45px
            35px;

          overflow: hidden;

          background: #eee7dd;

          border:
            1px solid
            rgba(124,86,51,.13);

          color: #2c1e16;

          transition:
            transform .4s ease,
            background .4s ease,
            box-shadow .4s ease;
        }

        .vc-contact-info-card::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 0;
          height: 3px;

          background: #a46e36;

          transition:
            width .45s ease;
        }

        .vc-contact-info-card:hover {
          background: #fff;

          transform:
            translateY(-7px);

          box-shadow:
            0 25px 55px
            rgba(56,37,23,.1);
        }

        .vc-contact-info-card:hover::after {
          width: 100%;
        }

        .vc-info-number {
          position: absolute;

          top: 25px;
          right: 25px;

          color:
            rgba(151,100,50,.25);

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 34px;
        }

        .vc-info-icon {
          width: 58px;
          height: 58px;

          margin-bottom: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(164,110,54,.35);

          color: #a46e36;

          font-size: 20px;

          transition:
            background .35s ease,
            color .35s ease;
        }

        .vc-contact-info-card:hover
        .vc-info-icon {
          background: #a46e36;

          color: #fff;
        }

        .vc-contact-info-card small {
          display: block;

          margin-bottom: 8px;

          color: #a46e36;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .vc-contact-info-card h3 {
          margin:
            0
            0
            15px;

          color: #302117;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 28px;
          font-weight: 600;

          line-height: 1.15;

          overflow-wrap: anywhere;
        }

        .vc-contact-info-card
        .vc-email-heading {
          font-size: 23px;
        }

        .vc-contact-info-card > p {
          margin: 0;

          color: #6c5b4f;

          font-size: 12px;

          line-height: 1.85;
        }

        .vc-info-action {
          position: absolute;

          left: 35px;
          bottom: 35px;

          display: flex;
          align-items: center;

          gap: 13px;

          color: #6b4727;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 1.7px;

          text-transform: uppercase;
        }

        .vc-info-action i {
          transition:
            transform .3s ease;
        }

        .vc-contact-info-card:hover
        .vc-info-action i {
          transform:
            translateX(6px);
        }


        /* =====================================================
           MAIN FORM SECTION
        ===================================================== */

        .vc-contact-main {
          padding:
            120px
            0;

          background: #eee7dd;
        }

        .vc-contact-main-grid {
          display: grid;

          grid-template-columns:
            .88fr
            1.12fr;

          align-items: stretch;

          gap:
            clamp(
              60px,
              8vw,
              110px
            );
        }


        /* IMAGE */

        .vc-contact-image-side {
          position: relative;

          min-height: 850px;

          overflow: hidden;

          background: #291a11;
        }

        .vc-contact-image-side > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 1.3s ease;
        }

        .vc-contact-image-side:hover > img {
          transform:
            scale(1.04);
        }

        .vc-contact-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(25,14,8,.87),
              rgba(25,14,8,.1) 65%
            );
        }

        .vc-contact-image-border {
          position: absolute;

          inset: 17px;

          border:
            1px solid
            rgba(255,255,255,.38);
        }

        .vc-contact-image-content {
          position: absolute;

          z-index: 3;

          left: 45px;
          right: 45px;
          bottom: 55px;
        }

        .vc-contact-image-content > span {
          display: block;

          margin-bottom: 12px;

          color: #d6a76e;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 2.8px;

          text-transform: uppercase;
        }

        .vc-contact-image-content h3 {
          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              45px,
              4.5vw,
              65px
            );

          font-weight: 500;

          line-height: .95;
        }

        .vc-contact-image-content h3 em {
          display: block;

          color: #dfb47e;

          font-weight: 500;
        }

        .vc-contact-image-content p {
          max-width: 410px;

          margin:
            20px
            0
            0;

          color: #e2d6cd;

          font-size: 11px;

          line-height: 1.8;
        }

        .vc-contact-image-badge {
          position: absolute;

          z-index: 4;

          top: 45px;
          right: 0;

          min-width: 175px;

          padding:
            19px
            22px;

          display: flex;
          align-items: center;

          gap: 13px;

          background: #2a1a11;

          color: #fff;
        }

        .vc-contact-image-badge i {
          color: #d1a16a;

          font-size: 21px;
        }

        .vc-contact-image-badge span {
          color: #a99484;

          font-size: 7px;

          letter-spacing: 1.5px;

          text-transform: uppercase;
        }

        .vc-contact-image-badge strong {
          display: block;

          margin-top: 3px;

          color: #f4e7dc;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 17px;
          font-weight: 500;

          letter-spacing: 0;

          text-transform: none;
        }


        /* FORM SIDE */

        .vc-contact-form-side {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .vc-contact-form-side h2 {
          margin: 0;

          color: #2d1f16;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              50px,
              5vw,
              74px
            );

          font-weight: 500;

          line-height: .93;
        }

        .vc-contact-form-side h2 em {
          display: block;

          color: #a46e36;

          font-weight: 500;
        }

        .vc-form-intro {
          max-width: 600px;

          margin:
            24px
            0
            35px;

          color: #69584c;

          font-size: 12px;

          line-height: 1.9;
        }

        .vc-form-intro strong {
          color: #38271c;
        }

        .vc-contact-form {
          width: 100%;
        }

        .vc-form-row {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

          gap: 18px;
        }

        .vc-form-group {
          margin-bottom: 20px;
        }

        .vc-form-group label {
          display: block;

          margin-bottom: 9px;

          color: #49362a;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 1.5px;

          text-transform: uppercase;
        }

        .vc-form-group label span {
          margin-left: 3px;

          color: #a46e36;
        }

        .vc-input-wrap {
          position: relative;

          width: 100%;
        }

        .vc-input-wrap >
        i:first-child {
          position: absolute;

          z-index: 2;

          left: 18px;
          top: 50%;

          transform:
            translateY(-50%);

          color: #a46e36;

          font-size: 13px;

          pointer-events: none;
        }

        .vc-input-wrap input,
        .vc-input-wrap select,
        .vc-input-wrap textarea {
          width: 100%;

          outline: none;

          border:
            1px solid
            rgba(109,76,46,.2);

          border-radius: 0;

          background:
            rgba(255,255,255,.7);

          color: #322218;

          font-family:
            "Montserrat",
            Arial,
            sans-serif;

          font-size: 12px;

          transition:
            border-color .3s ease,
            background .3s ease,
            box-shadow .3s ease;
        }

        .vc-input-wrap input,
        .vc-input-wrap select {
          height: 60px;

          padding:
            0
            48px;
        }

        .vc-input-wrap textarea {
          min-height: 150px;

          padding:
            19px
            20px
            19px
            48px;

          resize: vertical;

          line-height: 1.7;
        }

        .vc-input-wrap input::placeholder,
        .vc-input-wrap textarea::placeholder {
          color: #9b8d82;
        }

        .vc-input-wrap input:focus,
        .vc-input-wrap select:focus,
        .vc-input-wrap textarea:focus {
          border-color:
            rgba(164,110,54,.7);

          background: #fff;

          box-shadow:
            0 0 0 3px
            rgba(164,110,54,.06);
        }

        .vc-input-wrap select {
          appearance: none;
          -webkit-appearance: none;

          cursor: pointer;
        }

        .vc-select-arrow {
          position: absolute;

          right: 18px;
          top: 50%;

          transform:
            translateY(-50%);

          color: #8c6744;

          font-size: 10px;

          pointer-events: none;
        }

        .vc-textarea-wrap >
        i:first-child {
          top: 22px;

          transform: none;
        }


        /* SUBMIT */

        .vc-contact-submit {
          position: relative;

          width: 100%;

          min-height: 66px;

          margin-top: 5px;

          padding:
            0
            25px;

          border: 0;

          cursor: pointer;

          overflow: hidden;

          display: grid;

          grid-template-columns:
            35px
            minmax(0,1fr)
            25px;

          align-items: center;

          background:
            linear-gradient(
              135deg,
              #875728,
              #ad7740
            );

          color: #fff;

          font-family:
            "Montserrat",
            sans-serif;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .vc-contact-submit::before {
          content: "";

          position: absolute;

          top: -150%;
          left: -80px;

          width: 40px;
          height: 400%;

          transform:
            rotate(30deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.32),
              transparent
            );

          transition:
            left .8s ease;
        }

        .vc-contact-submit:hover::before {
          left: 120%;
        }

        .vc-contact-submit:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 15px 35px
            rgba(62,38,21,.2);
        }

        .vc-contact-submit
        .fa-whatsapp {
          font-size: 22px;

          justify-self: start;
        }

        .vc-contact-submit
        .fa-arrow-right-long {
          justify-self: end;
        }


        /* FORM NOTE */

        .vc-form-note {
          margin-top: 18px;

          padding:
            14px
            16px;

          display: flex;
          align-items: center;

          gap: 12px;

          background:
            rgba(255,255,255,.45);

          border-left:
            2px solid #a46e36;
        }

        .vc-form-note > i {
          flex: 0 0 auto;

          color: #91602f;

          font-size: 18px;
        }

        .vc-form-note p {
          margin: 0;

          color: #756459;

          font-size: 9px;

          line-height: 1.7;
        }

        .vc-form-note strong {
          color: #443025;
        }


        /* =====================================================
           LOCATION
        ===================================================== */

        .vc-contact-location {
          padding:
            95px
            0;

          background: #2a1a11;
        }

        .vc-contact-location-grid {
          display: grid;

          grid-template-columns:
            1.2fr
            .9fr
            .9fr;

          align-items: center;

          gap: 60px;
        }

        .vc-location-heading
        .vc-contact-section-label {
          color: #d0a16a;
        }

        .vc-location-heading h2 {
          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              46px,
              4.5vw,
              65px
            );

          font-weight: 500;

          line-height: .95;
        }

        .vc-location-heading h2 em {
          display: block;

          color: #dfb47c;

          font-weight: 500;
        }

        .vc-location-address {
          display: flex;
          align-items: flex-start;

          gap: 20px;
        }

        .vc-location-icon {
          width: 52px;
          height: 52px;

          flex:
            0
            0
            52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(209,161,106,.35);

          color: #d1a16a;
        }

        .vc-location-address small,
        .vc-location-contact small {
          display: block;

          margin-bottom: 7px;

          color: #aa8058;

          font-size: 7px;
          font-weight: 600;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .vc-location-address address {
          margin: 0;

          color: #eee2d8;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 19px;
          font-style: normal;

          line-height: 1.5;
        }

        .vc-location-contact {
          display: flex;
          flex-direction: column;

          gap: 15px;
        }

        .vc-location-contact > a {
          min-width: 0;

          display: flex;
          align-items: center;

          gap: 14px;

          color: #f0e4da;

          font-size: 11px;

          overflow-wrap: anywhere;
        }

        .vc-location-contact > a > i {
          width: 38px;
          height: 38px;

          flex:
            0
            0
            38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(209,161,106,.3);

          color: #d1a16a;

          font-size: 12px;
        }


        /* =====================================================
           FINAL CTA
        ===================================================== */

        .vc-contact-final {
          position: relative;

          min-height: 700px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          background: #20130c;
        }

        .vc-contact-final > img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .vc-contact-final-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              rgba(25,14,8,.53),
              rgba(25,14,8,.9)
            );
        }

        .vc-contact-final-content {
          position: relative;

          z-index: 3;

          width:
            min(
              820px,
              calc(100% - 40px)
            );
        }

        .vc-contact-monogram {
          width: 68px;
          height: 68px;

          margin:
            0
            auto
            23px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(216,168,108,.5);

          color: #dfb17a;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size: 25px;
        }

        .vc-contact-final-content > span {
          display: block;

          margin-bottom: 15px;

          color: #d5a56b;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 3.5px;

          text-transform: uppercase;
        }

        .vc-contact-final h2 {
          margin: 0;

          color: #fff;

          font-family:
            "Cormorant Garamond",
            serif;

          font-size:
            clamp(
              55px,
              6.5vw,
              88px
            );

          font-weight: 500;

          line-height: .9;
        }

        .vc-contact-final h2 em {
          display: block;

          color: #e2b983;

          font-weight: 500;
        }

        .vc-contact-final-content > p {
          max-width: 620px;

          margin:
            27px
            auto
            0;

          color: #e2d6ce;

          font-size: 13px;

          line-height: 1.9;
        }

        .vc-contact-final-button {
          min-height: 64px;

          margin-top: 35px;

          padding:
            0
            28px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          background:
            linear-gradient(
              135deg,
              #8c5a2d,
              #b27c43
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

        .vc-contact-final-button
        .fa-whatsapp {
          font-size: 21px;
        }

        .vc-contact-final-button:hover {
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

          .vc-contact-container {
            width:
              calc(100% - 40px);
          }

          .vc-contact-hero-content {
            width:
              calc(100% - 40px);

            padding-right: 20%;
          }

          .vc-contact-main-grid {
            grid-template-columns:
              .9fr
              1.1fr;

            gap: 50px;
          }

          .vc-contact-image-side {
            min-height: 800px;
          }

          .vc-contact-location-grid {
            gap: 35px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .vc-contact-container {
            width:
              calc(100% - 30px);
          }


          /* HERO */

          .vc-contact-hero {
            min-height:
              calc(100svh - 72px);

            align-items: flex-end;
          }

          .vc-contact-hero-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(25,14,8,.18),
                rgba(25,14,8,.55) 40%,
                rgba(25,14,8,.95)
              );
          }

          .vc-contact-hero-content {
            width:
              calc(100% - 30px);

            padding:
              100px
              0
              65px;
          }

          .vc-contact-hero h1 {
            font-size:
              clamp(
                55px,
                16vw,
                76px
              );

            letter-spacing: -1px;
          }

          .vc-contact-hero-content > p {
            font-size: 19px;
          }

          .vc-contact-hero-whatsapp {
            width: 100%;
          }

          .vc-contact-hero-bottom {
            display: none;
          }


          /* INTRO */

          .vc-contact-intro {
            padding:
              75px
              0
              55px;
          }

          .vc-contact-intro-heading h2 {
            font-size:
              clamp(
                48px,
                13vw,
                63px
              );
          }


          /* CARDS */

          .vc-contact-information {
            padding-bottom: 75px;
          }

          .vc-contact-info-grid {
            grid-template-columns: 1fr;
          }

          .vc-contact-info-card {
            min-height: 320px;

            padding:
              38px
              27px;
          }

          .vc-info-action {
            left: 27px;
            bottom: 30px;
          }


          /* MAIN */

          .vc-contact-main {
            padding:
              75px
              0;
          }

          .vc-contact-main-grid {
            grid-template-columns: 1fr;

            gap: 60px;
          }

          .vc-contact-image-side {
            min-height:
              min(
                130vw,
                650px
              );
          }

          .vc-contact-image-content {
            left: 28px;
            right: 28px;
            bottom: 35px;
          }

          .vc-contact-image-badge {
            top: 35px;

            min-width: 160px;
          }

          .vc-contact-form-side h2 {
            font-size:
              clamp(
                47px,
                13vw,
                62px
              );
          }

          .vc-form-row {
            grid-template-columns: 1fr;

            gap: 0;
          }

          .vc-input-wrap input,
          .vc-input-wrap select {
            height: 58px;
          }


          /* LOCATION */

          .vc-contact-location {
            padding:
              70px
              0;
          }

          .vc-contact-location-grid {
            grid-template-columns: 1fr;

            gap: 40px;
          }


          /* FINAL */

          .vc-contact-final {
            min-height: 650px;
          }

          .vc-contact-final-content {
            width:
              calc(100% - 30px);
          }

          .vc-contact-final-button {
            width: 100%;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .vc-contact-container,
          .vc-contact-hero-content,
          .vc-contact-final-content {
            width:
              calc(100% - 24px);
          }

          .vc-contact-info-card {
            padding:
              34px
              22px;
          }

          .vc-contact-info-card h3 {
            font-size: 25px;
          }

          .vc-contact-info-card
          .vc-email-heading {
            font-size: 19px;
          }

          .vc-info-action {
            left: 22px;
          }

          .vc-contact-image-content {
            left: 23px;
            right: 23px;
          }

          .vc-contact-submit {
            padding:
              0
              17px;

            grid-template-columns:
              30px
              minmax(0,1fr)
              20px;

            font-size: 8px;

            letter-spacing: 1.2px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .vc-contact-reveal,
          .vc-contact-hero-label,
          .vc-contact-hero h1,
          .vc-contact-hero-line,
          .vc-contact-hero-content > p,
          .vc-contact-hero-whatsapp {
            opacity: 1 !important;

            transform: none !important;

            animation: none !important;

            transition: none !important;
          }

          .vc-contact-hero-image {
            animation: none !important;
          }

        }

      `}</style>
    </>
  );
}

export default Contact;