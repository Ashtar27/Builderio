import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import PlatForm from "./assets/platform.mp4";
import Webinar from "./assets/webinar.webp";
import AuthForm from "./AuthForm";
import Footer from "./Foot";
import Guide from "./assets/guide.mp4";
import Redeem from "./assets/redeem.mp4";
import Customer from "./assets/customer.webp";
import Explainer from "./assets/explainer.webp";
import jcrewImg from "./assets/jcrew.jpeg";
import Web from "./assets/web.webp";
import harrysImg from "./assets/harrys.png";
import experianImg from "./assets/experian.png";
import faireImg from "./assets/faire.png";
import vistaprintImg from "./assets/vistaprint.png";

export default function BuilderIOClone() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const dropdowns = [
    {
      key: "platform",
      label: "Platform",
      columns: [
        {
          title: "DEVELOP",
          links: [
            { text: "Convert designs to clean code", href: "/designs" },
            { text: "Leverage your components", href: "/components" },
            { text: "Use your framework", href: "/framework" },
          ],
        },
        {
          title: "PUBLISH",
          links: [
            { text: "Visually edit", href: "/visually" },
            { text: "Manage headless content", href: "/manage" },
            { text: "Optimize experiences", href: "/experiences" },
            { text: "Integrate with your stack", href: "/stack" },
          ],
        },
      ],
    },
    {
      key: "solutions",
      label: "Solutions",
      columns: [
        {
          title: "USE CASES",
          links: [
            { text: "Headless Commerce", href: "/headless" },
            { text: "Design to Code", href: "/design" },
            { text: "Marketing Sites", href: "/marketing" },
            { text: "Landing Pages", href: "/landing" },
            { text: "Mobile Apps", href: "/mobile" },
            { text: "Multi-Brand", href: "/multi" },
          ],
        },
        {
          title: "INTEGRATIONS",
          links: [
            { text: "Vercel", href: "/vercel" },
            { text: "Netlify", href: "/netlify" },
            { text: "Shopify", href: "/shopify" },
            { text: "Cloudinary", href: "/cloudinary" },
            { text: "Salesforce", href: "/salesforce" },
            { text: "Figma", href: "/figma" },
            { text: "Algolia", href: "/algolia" },
            { text: "Phrase", href: "/phrase" },
            { text: "See All", href: "/see-all" },
          ],
        },
      ],
    },
    {
      key: "developers",
      label: "Developers",
      columns: [
        {
          title: "OVERVIEW",
          links: [
            { text: "Documentation", href: "/documentation" },
            { text: "Devtools", href: "/devtools" },
            { text: "Builder Blueprints", href: "/builder-blueprints" },
          ],
        },
        {
          title: "FRAMEWORKS",
          links: [
            { text: "React", href: "/react" },
            { text: "Next.js", href: "/next" },
            { text: "Qwik", href: "/qwik" },
            { text: "Gatsby", href: "/gatsby" },
            { text: "Angular", href: "/angular" },
            { text: "Vue", href: "/vue" },
            { text: "Svelte", href: "/svelte" },
            { text: "Remix", href: "/remix" },
            { text: "Nuxt", href: "/nuxt" },
            { text: "Astro", href: "/astro" },
            { text: "See All", href: "/see-all" },
          ],
        },
      ],
    },
    {
      key: "pricing",
      label: "Pricing",
    },
    {
      key: "resources",
      label: "Resources",
      columns: [
        {
          title: "EXPLORE",
          links: [
            { text: "Blog", href: "/blog" },
            { text: "Product Updates", href: "/updates" },
            { text: "Glossary", href: "/glossary" },
            { text: "Community Forum", href: "/forum" },
            { text: "Developer Docs", href: "/docs" },
            { text: "Knowledge Base", href: "/knowledge" },
            { text: "Partners", href: "/partners" },
          ],
        },
        {
          title: "RESOURCE CENTER",
          links: [
            { text: "Product Demos", href: "/demos" },
            { text: "Guides", href: "/guides" },
            { text: "Webinars", href: "/webinars" },
            { text: "Explainers", href: "/explainers" },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "black" }}>
      hiii
      <nav className="navbar">
        <div className="navbar-header">
          <button
            className="menu-btn"
            onClick={() => toggleDropdown("menu")}
          >
            ☰
          </button>
          <h1 className="brand-title">Builder.io</h1>
        </div>

        <ul className={`nav-links ${isDropdownOpen["menu"] ? "open" : ""}`}>
          {dropdowns.map((dropdown) => (
            <li
              key={dropdown.key}
              className="dropdown-wrapper"
              onClick={() => toggleDropdown(dropdown.key)}
            >
              <Link to={`#${dropdown.key}`} className="dropdown-toggle">
                {dropdown.label}
                <span
                  className={`arrow ${isDropdownOpen[dropdown.key] ? "rotate" : ""}`}
                >
                  &#8659;
                </span>
              </Link>
              {isDropdownOpen[dropdown.key] && (
                <div className="dropdown-menu">
                  {dropdown.columns.map((column, index) => (
                    <div key={index} className="dropdown-column">
                      <h4>{column.title}</h4>
                      {column.links.map((link, idx) => (
                        <Link key={idx} to={link.href}>
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="app-container">
          <div className="btn-group">
            <button
              className="btn btn-sales"
              onClick={() => {
                setShowForm(true);
                setIsLogin(true);
              }}
            >
              Contact Sales
            </button>
            <button
              className="btn btn-app"
              onClick={() => setShowForm(false)}
            >
              Go to App
            </button>
          </div>

          {showForm && (
            <div className="overlay">
              <div className="modal">
                <AuthForm
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  closeForm={() => setShowForm(false)}
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="hero">
        <h2>Take Ideas to Production</h2>
        <h2>in Seconds, Not Sprints</h2>
        <h3>
          Accelerate your digital teams with AI-powered design-to-code, visual
          editing, and enterprise CMS, all in our Visual Development Platform.
        </h3>
        <div className="btn-group">
          <button className="btn btn-primary">Get started free</button>
          <button style={{ color: "white" }} className="btn btn-secondary">
            Contact sales
          </button>
        </div>
      </section>

      <section className="video-section">
        <video
          className="promo-video"
          src={PlatForm}
          autoPlay
          muted
          loop
          controls
        ></video>
        <div className="scrolling-brands">
          <div className="brands">
            {[
              { src: jcrewImg, alt: "JCREW", label: "JCREW" },
              { src: harrysImg, alt: "Harry's", label: "Harry's" },
              { src: experianImg, alt: "Experian", label: "Experian" },
              { src: faireImg, alt: "Faire", label: "Faire" },
              { src: vistaprintImg, alt: "Vistaprint", label: "Vistaprint" },
            ].map((brand, index) => (
              <div key={index} className="brand">
                <img src={brand.src} alt={brand.alt} />
                <span>{brand.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cards-section">
        <h4>Resources</h4>
        <h2>Learn about the future of digital experience delivery</h2>
        <div className="cards-container">
          <div className="card">
            <img src={Webinar} alt="WEBINAR" />
            <h5>WEBINAR</h5>
            <p>
              Accelerating Idea to Production: Using Visual Development + AI to
              Ship 10x Faster
            </p>
          </div>
          <div className="card">
            <img src={Web} alt="GUIDE" />
            <h5>GUIDE</h5>
            <p>
              How AI and visual development are redefining enterprise digital
              experience delivery
            </p>
          </div>
          <div className="card">
            <img src={Customer} alt="CUSTOMER STORY" />
            <h5>CUSTOMER STORY</h5>
            <p>
              Skin Laundry's digital team's efficiency improved by over 100% with
              Builder
            </p>
          </div>
          <div className="card">
            <img src={Explainer} alt="EXPLAINER" />
            <h5>EXPLAINER</h5>
            <p>What is Design to code: an automated approach</p>
          </div>
        </div>
      </section>
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>Get the latest from Builder.io</h2>
          <p>Dev Drop Newsletter</p>
          <p>News, tips, and tricks from Builder, for frontend developers.</p>

          <p>Product Newsletter</p>
          <p>Latest features and updates on the Builder.io platform</p>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email*" required />
            <button type="submit">Go</button>
          </form>
          <p className="privacy-policy">
            By submitting, you agree to our{" "}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
