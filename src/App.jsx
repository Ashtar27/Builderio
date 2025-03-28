import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import "./styles.css";
import Footer from "./Footer";
// import AuthForm from "./AuthForm";
import PlatForm from "./assets/platform.mp4"
// import Redeem from "./assets/redeem.mp4"
import Webinar from "./assets/webinar.webp"
// import Guide from "./assets/guide.mp4"
import Customer from "./assets/customer.webp"
import Explainer from "./assets/explainer.webp" 
// import jcrewImg from "./assets/jcrew.jpeg";
import Web from "./assets/guide.webp"
import harrysImg from "./assets/harrys.svg";
import experianImg from "./assets/experian.svg";
import faireImg from "./assets/faire.svg";
import vistaprintImg from "./assets/vistaprint.svg";
import aloyogaImg from "./assets/aloyoga.webp";
import afterpayImg from "./assets/afterpay.webp";
import fableticsImg from "/src/assets/fabletics.svg";
import vimeoImg from "./assets/vimeo.svg";

//import { label, text, title } from "framer-motion/client";//
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
  //const [menuOpen, setMenuOpen] = useState(false);//
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (key) => (isOpen) => {
    setDropdownStates((prev) => ({ ...prev, [key]: isOpen }));
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
            { text: "See All", href: "/see all" },
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
            { text: "Builder Blueprints", href: "/builder blueprints" },
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
            { text: "See All", href: "/see all" },
          ],
        },
        {
          title: "OPEN SOURCE",
          links: [
            { text: "Builder", href: "/builder" },
            { text: "Mitosis", href: "/mitosis" },
            { text: "AI Shell", href: "/aishell" },
            { text: "Micro Agent", href: "/microagent" },
            { text: "GPT Crawler", href: "/gptcrawler" },
            { text: "Qwik", href: "/qwikopensource" },
            { text: "Partytown", href: "/partytown" },
          ],
        },
        {
          title: "EXPLORE",
          links: [
            { text: "Best of Web", href: "/best of web" },
            { text: "Performance Insights", href: "/performance insights" },
          ]
        }
      ],
    },
    
  //  {
  //     key: "pricing",
  //     label: "Pricing",
  //   },
 
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
      <nav className="navbar">
        <div className="navbar-header">
          
          <button
            className ="menu-btn"
        
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ☰
          </button>
          <h1 className="brand-title">Builder.io</h1>
        </div>

        <ul className={`nav-links ${isDropdownOpen ? "open" : ""}`}>
          {dropdowns.map((dropdown) => (
            <li
            key={dropdown.key}
            className="dropdown-wrapper"
            onMouseEnter={() => toggleDropdown(dropdown.key)(!dropdownStates[dropdown.key])}
          >          
              <Link to={`#${dropdown.key}`} className="dropdown-toggle">
                {dropdown.label}
                <span
                  className={`arrow ${dropdownStates[dropdown.key] ? "rotate" : ""}`}
                >
                  &#8659;
                </span>
              </Link>
              {dropdownStates[dropdown.key] && (
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
        <h2>in Seconds,Not Sprints</h2>
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
              // { src: jcrewImg, alt: "J.CREW", label: "J.CREW" },
              { src: harrysImg, alt: "Harry's", label: "HARRY'S" },
              { src: experianImg, alt: "serasa experian", label: "serasa experian" },
              { src: faireImg, alt: "FAIRE", label: "FAIRE" },
              { src: vistaprintImg, alt: "Vistaprint", label: "vistaprint" },
              { src: aloyogaImg, alt: "aloyoga", label: "aloyoga" },
            { src: afterpayImg, alt: "afterpay", label: "Afterpay" },
              { src: fableticsImg, alt: "FABLETICS", label: "Fabletics" },
              { src: vimeoImg, alt: "vimeo", label: "Vimeo" },
             // { src: nutsImg, alt: "Nuts.com", label: "Nuts.com" },//
            //  { src: everlane, alt: "EVERLANE", label: "EVERLANE" },
            //  { src: _zapier, alt: "_zapier", label: "_zapier" },

    
            ].map((brand, index) => (
              <div key={index} className="brand">
                <img src={brand.src} alt={brand.alt} />
                <span>{brand.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="visual-dev-section">
  <h5>VISUAL DEVELOPMENT PLATFORM</h5>
  <p>Code, create, iterate, and optimize faster than you thought possible</p>
</section>
      <section className="cards-section">
        <h4>Resources</h4>
  <h2>Learn about the future of digital experience delivery</h2>
  <div className="cards-container">
    <div className="card">
      <img src={Webinar} alt="WEBINAR" />
      <h5>WEBINAR</h5>
      <p>Accelerating Idea to Production: Using Visual Development + AI to Ship 10x Faster</p>
    </div>
    <div className="card">
      <img src={Web} alt="GUIDE" />
      <h5>GUIDE</h5>
      <p>How AI and visual development are redefining enterprise digital experience delivery</p>
    </div>
    <div className="card">
      <img src={Customer} alt="CUSTOMER STORY" />
      <h5>CUSTOMER STORY</h5>
      <p>Skin Laundry's digital team's efficiency improved by over 100% with Builder</p>
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
        By submitting, you agree to our <a href="/privacy">Privacy Policy</a>
        </p>
        </div>
        </section>
      <Footer />
    </div>
  );  
}