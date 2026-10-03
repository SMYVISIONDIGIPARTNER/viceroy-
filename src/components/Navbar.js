import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Close menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent page scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navClass = ({ isActive }) =>
    isActive
      ? "viceroy-nav-link active"
      : "viceroy-nav-link";

  return (
    <>
      <header
        className={`viceroy-navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="viceroy-nav-container">

          {/* =========================
              LOGO
          ========================== */}

          <Link
            to="/"
            className="viceroy-logo-link"
            aria-label="The Viceroy Collection Home"
          >
            <img
              src="/logo.png"
              alt="The Viceroy Collection"
              className="viceroy-logo"
            />
          </Link>


          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <nav
            className={`viceroy-nav-menu ${
              menuOpen ? "menu-open" : ""
            }`}
          >
            <NavLink
              to="/"
              end
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={navClass}
            >
              About Us
            </NavLink>

            <NavLink
              to="/our-collections"
              className={navClass}
            >
              Our Collections
            </NavLink>

            <NavLink
              to="/contact-us"
              className={navClass}
            >
              Contact Us
            </NavLink>


            {/* MOBILE ENQUIRE BUTTON */}

            <Link
              to="/contact-us"
              className="mobile-enquire-button"
            >
              <span>Enquire Now</span>

              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>


            {/* MOBILE BOTTOM DECORATION */}

            <div className="mobile-menu-bottom">
              <span></span>

              <p>
                TIMELESS WOODCRAFT
                <br />
                FOR GENERATIONS
              </p>
            </div>
          </nav>


          {/* =========================
              RIGHT
          ========================== */}

          <div className="viceroy-nav-right">

            {/* DESKTOP ENQUIRE */}

            <Link
              to="/contact-us"
              className="desktop-enquire-button"
            >
              <span>Enquire Now</span>

              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>


            {/* HAMBURGER */}

            <button
              type="button"
              className={`viceroy-hamburger ${
                menuOpen ? "active" : ""
              }`}
              onClick={() => {
                setMenuOpen((previous) => !previous);
              }}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

        </div>
      </header>


      {/* NAVBAR SPACER */}

      <div className="viceroy-navbar-space"></div>


      <style>{`

        @import url(
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
        );


        /* =====================================================
           IMPORTANT GLOBAL FIXES
        ===================================================== */

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          width: 100%;
          max-width: 100%;

          margin: 0;
          padding: 0;

          overflow-x: hidden;

          scroll-behavior: smooth;
        }

        body {
          width: 100%;
          max-width: 100%;

          margin: 0;
          padding: 0;

          overflow-x: hidden;

          background: #f8f5ef;

          color: #211913;

          font-family:
            "Montserrat",
            Arial,
            sans-serif;
        }

        #root {
          width: 100%;
          max-width: 100%;

          overflow-x: hidden;
        }

        img {
          max-width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }


        /* =====================================================
           NAVBAR
        ===================================================== */

        .viceroy-navbar {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          width: 100%;
          max-width: 100%;

          height: 105px;

          z-index: 99999;

          display: flex;
          align-items: center;

          background:
            rgba(250, 249, 247, 0.98);

          border-bottom:
            1px solid rgba(92, 63, 34, 0.09);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          transition:
            height 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }


        .viceroy-navbar.navbar-scrolled {
          height: 82px;

          background:
            rgba(250, 249, 247, 0.99);

          box-shadow:
            0 8px 35px
            rgba(28, 17, 9, 0.08);
        }


        .viceroy-navbar-space {
          width: 100%;
          height: 105px;

          transition: height 0.35s ease;
        }


        /* =====================================================
           NAVBAR INNER
        ===================================================== */

        .viceroy-nav-container {
          width: min(
            1450px,
            calc(100% - 70px)
          );

          max-width: 100%;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(240px, 1fr)
            auto
            minmax(240px, 1fr);

          align-items: center;

          gap: 25px;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .viceroy-logo-link {
          width: fit-content;
          max-width: 100%;

          display: flex;
          align-items: center;

          flex-shrink: 0;
        }


        .viceroy-logo {
          width: 255px;
          height: 88px;

          max-width: 100%;

          display: block;

          object-fit: contain;
          object-position: left center;

          transition:
            width 0.35s ease,
            height 0.35s ease;
        }


        .navbar-scrolled
        .viceroy-logo {
          width: 215px;
          height: 68px;
        }


        /* =====================================================
           NAVIGATION
        ===================================================== */

        .viceroy-nav-menu {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: clamp(
            25px,
            3.3vw,
            58px
          );

          min-width: 0;
        }


        .viceroy-nav-link {
          position: relative;

          flex-shrink: 0;

          padding: 14px 0;

          color: #1d1713;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 20px;
          font-weight: 600;

          line-height: 1;

          white-space: nowrap;

          transition:
            color 0.3s ease;
        }


        /* GOLD UNDERLINE */

        .viceroy-nav-link::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 0;

          width: 0;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              #9b6b35,
              #c49a63
            );

          transform:
            translateX(-50%);

          transition:
            width 0.35s ease;
        }


        .viceroy-nav-link:hover,
        .viceroy-nav-link.active {
          color: #9d703c;
        }


        .viceroy-nav-link:hover::after,
        .viceroy-nav-link.active::after {
          width: 100%;
        }


        /* =====================================================
           RIGHT AREA
        ===================================================== */

        .viceroy-nav-right {
          min-width: 0;

          display: flex;
          align-items: center;
          justify-content: flex-end;

          gap: 15px;
        }


        /* =====================================================
           DESKTOP ENQUIRE BUTTON
        ===================================================== */

        .desktop-enquire-button {
          position: relative;

          width: 215px;
          max-width: 100%;

          height: 58px;

          padding: 0 27px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          background:
            linear-gradient(
              135deg,
              #9c6e38 0%,
              #b48751 100%
            );

          color: #ffffff;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 19px;
          font-weight: 500;

          box-shadow:
            0 7px 20px
            rgba(112, 76, 40, 0.12);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }


        /* BUTTON SHINE */

        .desktop-enquire-button::before {
          content: "";

          position: absolute;

          top: -120%;
          left: -80px;

          width: 42px;
          height: 330%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.38),
              transparent
            );

          transform: rotate(30deg);

          transition:
            left 0.75s ease;
        }


        .desktop-enquire-button:hover::before {
          left: 130%;
        }


        .desktop-enquire-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 13px 30px
            rgba(100, 66, 33, 0.22);
        }


        .desktop-enquire-button i {
          flex-shrink: 0;

          font-size: 17px;

          transition:
            transform 0.3s ease;
        }


        .desktop-enquire-button:hover i {
          transform:
            translateX(5px);
        }


        /* =====================================================
           HAMBURGER
        ===================================================== */

        .viceroy-hamburger {
          position: relative;

          width: 46px;
          height: 46px;

          flex: 0 0 46px;

          padding: 10px 7px;

          display: none;

          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 6px;

          border: none;
          outline: none;

          background: transparent;

          cursor: pointer;

          z-index: 100001;
        }


        .viceroy-hamburger span {
          width: 29px;
          height: 2px;

          flex-shrink: 0;

          display: block;

          background: #2b2018;

          border-radius: 10px;

          transform-origin: center;

          transition:
            transform 0.35s ease,
            opacity 0.25s ease,
            width 0.35s ease;
        }


        .viceroy-hamburger:hover
        span:nth-child(2) {
          width: 21px;
        }


        /* X ANIMATION */

        .viceroy-hamburger.active
        span:nth-child(1) {
          transform:
            translateY(8px)
            rotate(45deg);
        }


        .viceroy-hamburger.active
        span:nth-child(2) {
          opacity: 0;
        }


        .viceroy-hamburger.active
        span:nth-child(3) {
          transform:
            translateY(-8px)
            rotate(-45deg);
        }


        /* =====================================================
           MOBILE-ONLY ELEMENTS
        ===================================================== */

        .mobile-enquire-button,
        .mobile-menu-bottom {
          display: none;
        }


        /* =====================================================
           MEDIUM DESKTOP
        ===================================================== */

        @media (max-width: 1280px) {

          .viceroy-nav-container {
            width:
              calc(100% - 40px);

            grid-template-columns:
              minmax(200px, 1fr)
              auto
              minmax(190px, 1fr);

            gap: 15px;
          }


          .viceroy-logo {
            width: 220px;
          }


          .viceroy-nav-menu {
            gap: 27px;
          }


          .viceroy-nav-link {
            font-size: 18px;
          }


          .desktop-enquire-button {
            width: 185px;

            height: 55px;

            padding: 0 20px;

            font-size: 17px;
          }

        }


        /* =====================================================
           TABLET + MOBILE
        ===================================================== */

        @media (max-width: 1024px) {

          .viceroy-navbar,
          .viceroy-navbar.navbar-scrolled {
            height: 80px;
          }


          .viceroy-navbar-space {
            height: 80px;
          }


          .viceroy-nav-container {
            width:
              calc(100% - 30px);

            max-width:
              calc(100% - 30px);

            margin:
              0 auto;

            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 15px;
          }


          .viceroy-logo-link {
            min-width: 0;
            max-width:
              calc(100% - 65px);
          }


          .viceroy-logo,
          .navbar-scrolled
          .viceroy-logo {
            width: 190px;
            height: 64px;

            max-width: 100%;
          }


          /* HIDE DESKTOP BUTTON */

          .desktop-enquire-button {
            display: none;
          }


          /* SHOW HAMBURGER */

          .viceroy-hamburger {
            display: flex !important;
          }


          /* =========================
             MOBILE MENU
          ========================== */

          .viceroy-nav-menu {
            position: fixed;

            top: 80px;
            left: 0;
            right: 0;

            width: 100%;
            max-width: 100%;

            height:
              calc(100vh - 80px);

            height:
              calc(100dvh - 80px);

            margin: 0;

            padding:
              32px
              25px
              35px;

            display: flex;

            flex-direction: column;

            align-items: stretch;
            justify-content: flex-start;

            gap: 0;

            overflow-x: hidden;
            overflow-y: auto;

            background:
              rgba(
                249,
                247,
                242,
                0.995
              );

            backdrop-filter:
              blur(22px);

            -webkit-backdrop-filter:
              blur(22px);

            box-shadow:
              0 20px 50px
              rgba(27,17,10,.08);

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transform:
              translateY(-15px);

            transition:
              opacity 0.35s ease,
              visibility 0.35s ease,
              transform 0.35s ease;

            z-index: 99998;
          }


          .viceroy-nav-menu.menu-open {
            opacity: 1;

            visibility: visible;

            pointer-events: auto;

            transform:
              translateY(0);
          }


          /* MOBILE LINKS */

          .viceroy-nav-link {
            width: 100%;

            flex: none;

            padding:
              21px 3px;

            border-bottom:
              1px solid
              rgba(
                157,
                111,
                56,
                0.16
              );

            color: #241a14;

            font-size:
              clamp(
                25px,
                7vw,
                32px
              );

            line-height: 1.1;

            white-space: normal;

            opacity: 0;

            transform:
              translateY(-14px);

            transition:
              color 0.3s ease,
              opacity 0.4s ease,
              transform 0.4s ease;
          }


          .viceroy-nav-link::after {
            display: none;
          }


          .menu-open
          .viceroy-nav-link {
            opacity: 1;

            transform:
              translateY(0);
          }


          .menu-open
          .viceroy-nav-link:nth-child(1) {
            transition-delay:
              0.04s;
          }


          .menu-open
          .viceroy-nav-link:nth-child(2) {
            transition-delay:
              0.08s;
          }


          .menu-open
          .viceroy-nav-link:nth-child(3) {
            transition-delay:
              0.12s;
          }


          .menu-open
          .viceroy-nav-link:nth-child(4) {
            transition-delay:
              0.16s;
          }


          /* MOBILE ENQUIRE */

          .mobile-enquire-button {
            width: 100%;

            min-height: 60px;

            margin-top: 28px;

            padding: 0 23px;

            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 20px;

            background:
              linear-gradient(
                135deg,
                #966735,
                #b58954
              );

            color: #ffffff;

            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;

            font-size: 20px;

            opacity: 0;

            transform:
              translateY(-12px);

            transition:
              opacity 0.4s ease,
              transform 0.4s ease;

            transition-delay:
              0.2s;
          }


          .menu-open
          .mobile-enquire-button {
            opacity: 1;

            transform:
              translateY(0);
          }


          /* MOBILE DECORATION */

          .mobile-menu-bottom {
            margin-top: auto;

            padding-top: 35px;

            display: block;

            opacity: 0;

            transition:
              opacity 0.5s ease;

            transition-delay:
              0.3s;
          }


          .menu-open
          .mobile-menu-bottom {
            opacity: 1;
          }


          .mobile-menu-bottom span {
            width: 42px;
            height: 1px;

            display: block;

            margin-bottom: 13px;

            background:
              #aa7c43;
          }


          .mobile-menu-bottom p {
            margin: 0;

            color: #9d703c;

            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;

            font-size: 12px;

            line-height: 1.7;

            letter-spacing: 3px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .viceroy-navbar,
          .viceroy-navbar.navbar-scrolled {
            height: 72px;
          }


          .viceroy-navbar-space {
            height: 72px;
          }


          .viceroy-nav-container {
            width:
              calc(100% - 20px);

            max-width:
              calc(100% - 20px);
          }


          .viceroy-logo-link {
            max-width:
              calc(100% - 60px);
          }


          .viceroy-logo,
          .navbar-scrolled
          .viceroy-logo {
            width: 165px;
            height: 55px;
          }


          .viceroy-hamburger {
            width: 44px;
            height: 44px;

            flex-basis: 44px;

            padding: 8px 6px;
          }


          .viceroy-hamburger span {
            width: 27px;
          }


          .viceroy-nav-menu {
            top: 72px;

            height:
              calc(100vh - 72px);

            height:
              calc(100dvh - 72px);

            padding:
              23px
              19px
              30px;
          }


          .viceroy-nav-link {
            padding:
              18px
              2px;

            font-size: 27px;
          }


          .mobile-enquire-button {
            min-height: 57px;

            margin-top: 24px;

            font-size: 19px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .viceroy-logo,
          .navbar-scrolled
          .viceroy-logo {
            width: 145px;
          }


          .viceroy-nav-link {
            font-size: 25px;
          }

        }


        /* =====================================================
           VERY SMALL DEVICES
        ===================================================== */

        @media (max-width: 330px) {

          .viceroy-logo,
          .navbar-scrolled
          .viceroy-logo {
            width: 125px;
          }


          .viceroy-nav-container {
            width:
              calc(100% - 16px);

            max-width:
              calc(100% - 16px);
          }


          .viceroy-nav-menu {
            padding-left: 15px;
            padding-right: 15px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;

            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;
          }

        }

      `}</style>
    </>
  );
}

export default Navbar;