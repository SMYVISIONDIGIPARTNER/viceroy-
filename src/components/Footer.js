import React from "react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "+12243909829";

function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I am visiting The Viceroy Collection website and would like to make an enquiry."
  );

  return (
    <>
      <footer className="vc-footer">

        {/* PREMIUM TOP BORDER */}
        <div className="vc-footer-top-border">
          <span></span>
        </div>

        {/* DECORATIVE BACKGROUND */}
        <div className="vc-footer-glow vc-footer-glow-one"></div>
        <div className="vc-footer-glow vc-footer-glow-two"></div>

        <div className="vc-footer-container">

          {/* =====================================================
              MAIN FOOTER
          ===================================================== */}

          <div className="vc-footer-main">

            {/* ===================================================
                BRAND
            =================================================== */}

            <div className="vc-footer-brand">

              <Link
                to="/"
                className="vc-footer-logo-link"
                aria-label="The Viceroy Collection Home"
              >
                <img
                  src="/logo.png"
                  alt="The Viceroy Collection"
                  className="vc-footer-logo"
                />
              </Link>

              <p className="vc-footer-brand-text">
                Fine furniture, doors and architectural elements
                handcrafted from premium teak, mahogany and rosewood.
                Timeless craftsmanship created to become part of your
                home for generations.
              </p>

              <div className="vc-footer-brand-signature">

                <span className="vc-signature-line"></span>

                <div>
                  <small>
                    THE VICEROY COLLECTION
                  </small>

                  <p>
                    Timeless Woodcraft
                    <br />
                    For Generations
                  </p>
                </div>

              </div>

            </div>


            {/* ===================================================
                QUICK LINKS
            =================================================== */}

            <div className="vc-footer-column">

              <span className="vc-footer-eyebrow">
                Explore
              </span>

              <h3>
                Quick Links
              </h3>

              <div className="vc-heading-line"></div>

              <nav
                className="vc-footer-links"
                aria-label="Footer Navigation"
              >

                <Link to="/">
                  <span>01</span>

                  <strong>
                    Home
                  </strong>
                </Link>

                <Link to="/about-us">
                  <span>02</span>

                  <strong>
                    About Us
                  </strong>
                </Link>

                <Link to="/our-collections">
                  <span>03</span>

                  <strong>
                    Our Collections
                  </strong>
                </Link>

                <Link to="/contact-us">
                  <span>04</span>

                  <strong>
                    Contact Us
                  </strong>
                </Link>

              </nav>

            </div>


            {/* ===================================================
                CONTACT
            =================================================== */}

            <div className="vc-footer-column vc-footer-contact">

              <span className="vc-footer-eyebrow">
                Private Enquiries
              </span>

              <h3>
                Contact Us
              </h3>

              <div className="vc-heading-line"></div>


              <div className="vc-footer-contact-list">

                {/* ADDRESS */}

                <div className="vc-footer-contact-item">

                  <div className="vc-contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div className="vc-contact-content">

                    <small>
                      Visit Our Location
                    </small>

                    <p>
                      4119  W. Orleans
                      <br />
                      McHenry,  IL 60050
                    </p>

                  </div>

                </div>


                {/* PHONE */}

                <a
                  href="tel:+1224-390-9829"
                  className="vc-footer-contact-item vc-contact-link"
                >

                  <div className="vc-contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div className="vc-contact-content">

                    <small>
                      Speak With Us
                    </small>

                    <strong>
                      +1224-390-9829
                    </strong>

                  </div>

                </a>


                {/* EMAIL */}

                <a
                  href="mailto:info@theviceroycollection.com"
                  className="vc-footer-contact-item vc-contact-link"
                >

                  <div className="vc-contact-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>

                  <div className="vc-contact-content">

                    <small>
                      Send An Email
                    </small>

                    <strong className="vc-email-text">
                      info@theviceroycollection.com
                    </strong>

                  </div>

                </a>

              </div>

            </div>


            {/* ===================================================
                ENQUIRY
            =================================================== */}

            <div className="vc-footer-column vc-footer-enquiry">

              <span className="vc-footer-eyebrow">
                Crafted For You
              </span>

              <h3>
                Make An Enquiry
              </h3>

              <div className="vc-heading-line"></div>

              <p className="vc-enquiry-description">
                Looking for handcrafted furniture, carved doors or
                distinctive architectural elements? Connect with
                The Viceroy Collection to discuss your requirements.
              </p>


              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="vc-footer-whatsapp"
              >

                <div className="vc-whatsapp-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>

                <div className="vc-whatsapp-text">

                  <small>
                    WhatsApp
                  </small>

                  <strong>
                    Start An Enquiry
                  </strong>

                </div>

                <i className="fa-solid fa-arrow-right-long vc-whatsapp-arrow"></i>

              </a>


              {/* PHONE BUTTON */}

              <a
                href="tel:+1224-390-9829"
                className="vc-footer-call-button"
              >

                <i className="fa-solid fa-phone"></i>

                <span>
                  Call +1224-390-9829
                </span>

              </a>

            </div>

          </div>


          {/* =====================================================
              PREMIUM DIVIDER
          ===================================================== */}

          <div className="vc-footer-divider">

            <span></span>

            <div className="vc-footer-monogram">
              VC
            </div>

            <span></span>

          </div>


          {/* =====================================================
              BOTTOM FOOTER
          ===================================================== */}

          <div className="vc-footer-bottom">

            <p className="vc-copyright">
              © {new Date().getFullYear()} The Viceroy Collection.
              All Rights Reserved.
            </p>


            <p className="vc-developed">

              <span>
                Developed by
              </span>

              <a
                href="https://smyvisiontechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMYVISION TECHNOLOGIES
              </a>

            </p>

          </div>

        </div>

      </footer>


      <style>{`

        /* ======================================================
           FOOTER BASE
        ====================================================== */

        .vc-footer,
        .vc-footer *,
        .vc-footer *::before,
        .vc-footer *::after {
          box-sizing: border-box;
        }


        .vc-footer {
          position: relative;

          width: 100%;
          max-width: 100%;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(190, 137, 76, 0.11),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(181, 124, 65, 0.08),
              transparent 25%
            ),
            linear-gradient(
              135deg,
              #21150e 0%,
              #160e09 48%,
              #20130c 100%
            );

          color: #ffffff;

          font-family:
            "Montserrat",
            Arial,
            sans-serif;
        }


        /* SUBTLE WOOD TEXTURE */

        .vc-footer::before {
          content: "";

          position: absolute;

          inset: 0;

          opacity: 0.045;

          pointer-events: none;

          background-image:
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 30px,
              rgba(255,255,255,.25) 31px,
              transparent 32px
            );
        }


        /* ======================================================
           GOLD TOP BORDER
        ====================================================== */

        .vc-footer-top-border {
          position: relative;

          z-index: 5;

          width: 100%;
          height: 3px;

          background:
            linear-gradient(
              90deg,
              transparent 0%,
              #85572e 15%,
              #c99a60 50%,
              #85572e 85%,
              transparent 100%
            );
        }


        .vc-footer-top-border span {
          position: absolute;

          left: 50%;
          top: 0;

          width: 100px;
          height: 3px;

          transform: translateX(-50%);

          background: #e0b77e;

          box-shadow:
            0 0 20px
            rgba(224,183,126,.35);
        }


        /* ======================================================
           BACKGROUND GLOWS
        ====================================================== */

        .vc-footer-glow {
          position: absolute;

          width: 500px;
          height: 500px;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(40px);

          background:
            radial-gradient(
              circle,
              rgba(186,132,71,.10),
              transparent 68%
            );
        }


        .vc-footer-glow-one {
          top: -250px;
          left: -220px;
        }


        .vc-footer-glow-two {
          right: -230px;
          bottom: -300px;
        }


        /* ======================================================
           CONTAINER
        ====================================================== */

        .vc-footer-container {
          position: relative;

          z-index: 3;

          width:
            min(1400px, calc(100% - 80px));

          max-width: 100%;

          margin: 0 auto;
        }


        /* ======================================================
           MAIN GRID
        ====================================================== */

        .vc-footer-main {
          padding:
            95px
            0
            75px;

          display: grid;

          grid-template-columns:
            1.35fr
            .72fr
            1.1fr
            1fr;

          align-items: start;

          gap:
            clamp(
              45px,
              5vw,
              85px
            );
        }


        /* ======================================================
           LOGO
        ====================================================== */

        .vc-footer-logo-link {
          width: fit-content;
          max-width: 100%;

          display: block;
        }


        .vc-footer-logo {
          width: 280px;
          height: 110px;

          max-width: 100%;

          display: block;

          object-fit: contain;
          object-position: left center;

          /*
             Creates a brighter premium logo
             on the dark footer.
          */

          filter:
            brightness(0)
            invert(1)
            sepia(.25)
            brightness(1.18);
        }


        /* ======================================================
           BRAND TEXT
        ====================================================== */

        .vc-footer-brand-text {
          max-width: 420px;

          margin:
            28px
            0
            0;

          color: #e0d5cb;

          font-size: 14px;
          font-weight: 400;

          line-height: 2;

          letter-spacing: .15px;
        }


        /* ======================================================
           SIGNATURE
        ====================================================== */

        .vc-footer-brand-signature {
          margin-top: 38px;

          display: flex;
          align-items: center;

          gap: 18px;
        }


        .vc-signature-line {
          width: 2px;
          height: 64px;

          flex-shrink: 0;

          background:
            linear-gradient(
              to bottom,
              #e0b67e,
              #8b5a30
            );
        }


        .vc-footer-brand-signature small {
          display: block;

          margin-bottom: 7px;

          color: #ae7b43;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 2.8px;
        }


        .vc-footer-brand-signature p {
          margin: 0;

          color: #f0d6b3;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 18px;
          font-weight: 500;

          line-height: 1.45;

          letter-spacing: 2.3px;

          text-transform: uppercase;
        }


        /* ======================================================
           COLUMN EYEBROW
        ====================================================== */

        .vc-footer-eyebrow {
          display: block;

          margin-bottom: 9px;

          color: #c38d50;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }


        /* ======================================================
           COLUMN TITLES
        ====================================================== */

        .vc-footer-column h3 {
          margin: 0;

          color: #ffffff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 31px;
          font-weight: 600;

          line-height: 1.1;
        }


        .vc-heading-line {
          position: relative;

          width: 55px;
          height: 1px;

          margin:
            18px
            0
            31px;

          background:
            #a36e39;
        }


        .vc-heading-line::after {
          content: "";

          position: absolute;

          right: -8px;
          top: -2px;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #d7a96f;
        }


        /* ======================================================
           QUICK LINKS
        ====================================================== */

        .vc-footer-links {
          display: flex;
          flex-direction: column;

          gap: 20px;
        }


        .vc-footer-links a {
          width: fit-content;

          display: flex;
          align-items: center;

          gap: 13px;

          color: #e4d9d0;

          transition:
            color .3s ease,
            transform .3s ease;
        }


        .vc-footer-links a > span {
          color: #a8743e;

          font-family:
            "Montserrat",
            sans-serif;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 1px;
        }


        .vc-footer-links a strong {
          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 20px;
          font-weight: 500;

          white-space: nowrap;
        }


        .vc-footer-links a:hover {
          color: #e7bd87;

          transform: translateX(7px);
        }


        /* ======================================================
           CONTACT LIST
        ====================================================== */

        .vc-footer-contact-list {
          display: flex;
          flex-direction: column;

          gap: 24px;
        }


        .vc-footer-contact-item {
          min-width: 0;

          display: flex;
          align-items: flex-start;

          gap: 16px;
        }


        .vc-contact-icon {
          width: 48px;
          height: 48px;

          flex: 0 0 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(210,162,103,.35);

          background:
            rgba(255,255,255,.025);

          color: #d5a36a;

          font-size: 15px;

          transition:
            color .35s ease,
            background .35s ease,
            border-color .35s ease,
            transform .35s ease;
        }


        .vc-contact-content {
          min-width: 0;

          padding-top: 2px;
        }


        .vc-contact-content small {
          display: block;

          margin-bottom: 6px;

          color: #b88a5c;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 1.7px;

          text-transform: uppercase;
        }


        .vc-contact-content p {
          margin: 0;

          color: #eee4dc;

          font-size: 13px;
          font-weight: 400;

          line-height: 1.8;
        }


        .vc-contact-content strong {
          display: block;

          color: #f3e9e1;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 18px;
          font-weight: 500;

          line-height: 1.5;

          transition:
            color .3s ease;
        }


        .vc-email-text {
          overflow-wrap: anywhere;
        }


        .vc-contact-link:hover
        .vc-contact-icon {
          background: #a16d38;

          border-color: #a16d38;

          color: #fff;

          transform: translateY(-3px);
        }


        .vc-contact-link:hover
        .vc-contact-content strong {
          color: #e7bb83;
        }


        /* ======================================================
           ENQUIRY COLUMN
        ====================================================== */

        .vc-enquiry-description {
          max-width: 330px;

          margin: 0;

          color: #ddd1c8;

          font-size: 13px;
          font-weight: 400;

          line-height: 1.9;
        }


        /* ======================================================
           WHATSAPP
        ====================================================== */

        .vc-footer-whatsapp {
          position: relative;

          width: 100%;
          max-width: 330px;

          min-height: 75px;

          margin-top: 27px;

          padding:
            0
            18px;

          overflow: hidden;

          display: grid;

          grid-template-columns:
            43px
            minmax(0,1fr)
            auto;

          align-items: center;

          gap: 13px;

          border:
            1px solid
            rgba(205,155,94,.42);

          background:
            linear-gradient(
              135deg,
              rgba(173,116,58,.15),
              rgba(255,255,255,.025)
            );

          transition:
            transform .35s ease,
            background .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }


        .vc-footer-whatsapp::before {
          content: "";

          position: absolute;

          top: -100%;
          left: -90px;

          width: 40px;
          height: 300%;

          transform: rotate(28deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.2),
              transparent
            );

          transition: left .8s ease;
        }


        .vc-footer-whatsapp:hover::before {
          left: 120%;
        }


        .vc-whatsapp-icon {
          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(214,166,105,.32);

          color: #ddb47f;

          font-size: 23px;
        }


        .vc-whatsapp-text {
          min-width: 0;
        }


        .vc-whatsapp-text small {
          display: block;

          margin-bottom: 4px;

          color: #bc8c59;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 1.5px;

          text-transform: uppercase;
        }


        .vc-whatsapp-text strong {
          display: block;

          color: #ffffff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 19px;
          font-weight: 600;
        }


        .vc-whatsapp-arrow {
          position: relative;

          z-index: 2;

          color: #d0a06b;

          font-size: 14px;

          transition:
            transform .3s ease;
        }


        .vc-footer-whatsapp:hover {
          border-color: #bd874e;

          background:
            rgba(167,111,55,.2);

          transform: translateY(-3px);

          box-shadow:
            0 15px 35px
            rgba(0,0,0,.18);
        }


        .vc-footer-whatsapp:hover
        .vc-whatsapp-arrow {
          transform: translateX(5px);
        }


        /* ======================================================
           CALL BUTTON
        ====================================================== */

        .vc-footer-call-button {
          width: 100%;
          max-width: 330px;

          min-height: 54px;

          margin-top: 12px;

          padding:
            0
            17px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          border:
            1px solid
            rgba(255,255,255,.18);

          color: #e8ddd4;

          font-size: 11px;
          font-weight: 500;

          letter-spacing: .7px;

          transition:
            color .3s ease,
            background .3s ease,
            border-color .3s ease;
        }


        .vc-footer-call-button i {
          color: #c9945c;
        }


        .vc-footer-call-button:hover {
          color: #ffffff;

          border-color:
            rgba(204,154,96,.55);

          background:
            rgba(255,255,255,.04);
        }


        /* ======================================================
           PREMIUM DIVIDER
        ====================================================== */

        .vc-footer-divider {
          width: 100%;

          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items: center;

          gap: 22px;
        }


        .vc-footer-divider > span {
          width: 100%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(207,158,98,.35)
            );
        }


        .vc-footer-divider >
        span:last-child {
          background:
            linear-gradient(
              90deg,
              rgba(207,158,98,.35),
              transparent
            );
        }


        .vc-footer-monogram {
          width: 54px;
          height: 54px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(210,160,99,.38);

          color: #d4a66d;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 21px;
          font-weight: 500;

          transform: rotate(45deg);
        }


        .vc-footer-monogram::first-letter {
          transform: rotate(-45deg);
        }


        /* Keep text visually straight */

        .vc-footer-monogram {
          line-height: 1;
        }


        /* ======================================================
           BOTTOM
        ====================================================== */

        .vc-footer-bottom {
          min-height: 105px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 30px;
        }


        .vc-copyright {
          margin: 0;

          color: #c6b8ad;

          font-size: 11px;
          font-weight: 400;

          line-height: 1.7;

          letter-spacing: .3px;
        }


        /* ======================================================
           DEVELOPED BY
        ====================================================== */

        .vc-developed {
          margin: 0;

          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 8px;

          color: #c6b8ad;

          font-size: 11px;

          line-height: 1.7;
        }


        .vc-developed > span {
          color: #c6b8ad;
        }


        .vc-developed a {
          position: relative;

          padding-bottom: 4px;

          color: #e1b77f;

          font-size: 11px;
          font-weight: 600;

          letter-spacing: 1.2px;

          transition:
            color .3s ease;
        }


        .vc-developed a::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              #9b6837,
              #d4a76e
            );

          transform:
            scaleX(.35);

          transform-origin:
            left center;

          transition:
            transform .35s ease;
        }


        .vc-developed a:hover {
          color: #f2d2a7;
        }


        .vc-developed a:hover::after {
          transform: scaleX(1);
        }


        /* ======================================================
           LARGE TABLET
        ====================================================== */

        @media (max-width: 1200px) {

          .vc-footer-container {
            width:
              calc(100% - 50px);
          }


          .vc-footer-main {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );

            gap:
              65px
              80px;
          }


          .vc-footer-brand-text {
            max-width: 500px;
          }


          .vc-enquiry-description {
            max-width: 450px;
          }


          .vc-footer-whatsapp,
          .vc-footer-call-button {
            max-width: 390px;
          }

        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 800px) {

          .vc-footer-container {
            width:
              calc(100% - 36px);
          }


          .vc-footer-main {
            padding:
              75px
              0
              60px;

            grid-template-columns:
              1fr;

            gap: 55px;
          }


          .vc-footer-logo {
            width: 260px;
          }


          .vc-footer-brand-text {
            max-width: 600px;

            font-size: 14px;
          }


          .vc-footer-column h3 {
            font-size: 30px;
          }


          .vc-enquiry-description {
            max-width: 600px;
          }


          .vc-footer-whatsapp,
          .vc-footer-call-button {
            max-width: 100%;
          }


          .vc-footer-bottom {
            min-height: auto;

            padding:
              32px
              0
              38px;

            flex-direction: column;
            align-items: flex-start;

            gap: 14px;
          }

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 520px) {

          .vc-footer-container {
            width:
              calc(100% - 28px);
          }


          .vc-footer-main {
            padding:
              62px
              0
              50px;

            gap: 48px;
          }


          .vc-footer-logo {
            width: 220px;
            height: 90px;
          }


          .vc-footer-brand-text {
            margin-top: 22px;

            font-size: 13px;

            line-height: 1.9;
          }


          .vc-footer-brand-signature {
            margin-top: 30px;
          }


          .vc-footer-brand-signature p {
            font-size: 15px;

            letter-spacing: 1.7px;
          }


          .vc-footer-column h3 {
            font-size: 28px;
          }


          .vc-footer-links {
            gap: 18px;
          }


          .vc-footer-links a strong {
            font-size: 19px;
          }


          .vc-contact-content p {
            font-size: 12px;
          }


          .vc-contact-content strong {
            font-size: 17px;
          }


          .vc-enquiry-description {
            font-size: 13px;
          }


          .vc-footer-whatsapp {
            min-height: 72px;

            padding:
              0
              14px;

            grid-template-columns:
              40px
              minmax(0,1fr)
              auto;
          }


          .vc-whatsapp-icon {
            width: 40px;
            height: 40px;

            font-size: 21px;
          }


          .vc-whatsapp-text strong {
            font-size: 17px;
          }


          .vc-footer-monogram {
            width: 47px;
            height: 47px;

            font-size: 18px;
          }


          .vc-copyright,
          .vc-developed,
          .vc-developed a {
            font-size: 10px;
          }

        }


        /* ======================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 360px) {

          .vc-footer-container {
            width:
              calc(100% - 22px);
          }


          .vc-footer-logo {
            width: 195px;
          }


          .vc-contact-icon {
            width: 43px;
            height: 43px;

            flex-basis: 43px;
          }


          .vc-footer-whatsapp {
            padding:
              0
              11px;

            gap: 9px;
          }


          .vc-whatsapp-arrow {
            display: none;
          }

        }

      `}</style>
    </>
  );
}

export default Footer;