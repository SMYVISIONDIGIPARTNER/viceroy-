import React from "react";
import { Routes, Route } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import About from "./components/About";
import OurCollections from "./components/OurCollections";
import Contact from "./components/Contact";

function App() {
  // WhatsApp / Call Number: +1 224-390-9829
  const phoneNumber = "12243909829";

  const styles = `
    /* ================================
       FLOATING CONTACT BUTTONS
    ================================= */

    .floating-contact-buttons {
      position: fixed;
      right: 20px;
      bottom: 25px;
      z-index: 99999;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .floating-contact-btn {
      width: 56px;
      height: 56px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      color: #ffffff;
      font-size: 25px;
      text-decoration: none;

      box-shadow:
        0 6px 18px rgba(0, 0, 0, 0.18),
        0 2px 5px rgba(0, 0, 0, 0.12);

      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

      cursor: pointer;
    }

    /* Call Button */
    .floating-call-btn {
      background: #1565c0;
    }

    /* WhatsApp Button */
    .floating-whatsapp-btn {
      background: #25d366;
    }

    /* Hover */
    .floating-contact-btn:hover {
      transform: translateY(-4px) scale(1.06);

      box-shadow:
        0 10px 25px rgba(0, 0, 0, 0.24),
        0 4px 8px rgba(0, 0, 0, 0.14);

      color: #ffffff;
    }

    .floating-call-btn:hover {
      background: #0d47a1;
    }

    .floating-whatsapp-btn:hover {
      background: #1ebe5d;
    }

    /* Pulse Animation */
    .floating-whatsapp-btn::before {
      content: "";
      position: absolute;

      width: 100%;
      height: 100%;

      border-radius: 50%;
      background: rgba(37, 211, 102, 0.35);

      z-index: -1;

      animation: whatsappPulse 2s infinite;
    }

    .floating-whatsapp-btn {
      position: relative;
    }

    @keyframes whatsappPulse {
      0% {
        transform: scale(1);
        opacity: 0.7;
      }

      70% {
        transform: scale(1.4);
        opacity: 0;
      }

      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }

    /* ================================
       MOBILE RESPONSIVE
    ================================= */

    @media (max-width: 768px) {
      .floating-contact-buttons {
        right: 15px;
        bottom: 20px;
        gap: 10px;
      }

      .floating-contact-btn {
        width: 50px;
        height: 50px;
        font-size: 22px;
      }
    }

    @media (max-width: 480px) {
      .floating-contact-buttons {
        right: 14px;
        bottom: 18px;
      }

      .floating-contact-btn {
        width: 48px;
        height: 48px;
        font-size: 21px;
      }
    }
  `;

  return (
    <>
      {/* CSS inside App.js */}
      <style>{styles}</style>

      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about-us"
            element={<About />}
          />

          <Route
            path="/our-collections"
            element={<OurCollections />}
          />

          <Route
            path="/contact-us"
            element={<Contact />}
          />
        </Routes>
      </main>

      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <div className="floating-contact-buttons">

        {/* Call Button */}
        <a
          href={`tel:+${phoneNumber}`}
          className="floating-contact-btn floating-call-btn"
          aria-label="Call Us"
          title="Call Us"
        >
          <FaPhoneAlt />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-btn floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>

      </div>
    </>
  );
}

export default App;