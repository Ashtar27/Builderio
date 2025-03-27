import React from "react";
import "./foot.css";
// import { title } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-section">
        {[
      {
            title: "PRODUCT",
            items: [
              "Platform Overview",
              "Integrations",
              "What's New",
            ],
          },
          {
            title: "DEVELOPERS",
            items: [
              "Documentation",
              "Devtools",
              "Builder Blueprints",
              "Best of Web",
              "Performance Insights",
            ],
          },
          {
            title: "CAPABILITIES",
            items: [
              "Design to Code",
              "Visual Editor",
              "Headless CMS",
              "A/B & Personalization",
            ],
          },
          {
            title: "OPEN SOURCE",
            items: [
              "Builder",
              "Mitosis",
              "AI Shell",
              "Micro Agent",
              "GPT Crawler",
              "Qwik",
              "Partytown"
            ],
          },
          {
            title: "COMPANY",
            items: [
              "About",
              "Careers",
            ],
          },
          {
            title: "SOLUTIONS",
            items: [
              "Headless Commerce",
              "Marketing Sites",
              "Landing Pages",
              "Mobile Apps",
              "Multi-brand",
            ],
          },
          {
            title: "POPULAR GUIDES",
            items: [
              "Figma to Code Guide",
              "Composable Commerce Guide",
              "Headless CMS Guide",
              "Headless Commerce Guide",
              "Composable DXP Guide",
              "Design to Code",
            ],
          },
          {
            title: "RESOURCES",
            items: [
              "Blog",
              "Knowledge Base",
              "Community Forum",
              "Partners",
              "Templates",
              "Success Stories",
              "Showcase",
              "Resource Center",
              "Glossary",
              "Page Builder",
            ],
          },

          {
            title: "FRAMEWORKS",
            items:[
              "React",
              "Next.js",
              "Qwik",
              "Gatsby",
              "Angular",
              "Vue",
              "Svelte",
              "Remix",
              "Nuxt",
              "Astro",
              "See All",
            ]
          }
        ].map((section, index) => (
          <div key={index} className="footer-column">
            <h4 className="heading">{section.title}</h4>
            <ul>
                {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            </div>
        ))}
        <div>
        <div className="footer-bottom">
        <p>© 2025 Builder.io, Inc.</p>
        <ul className="footer-links">
          
          <li>Security</li>
          <li>Privacy Policy</li>
          <li>SaaS Terms</li>
          <li>Security & Compliance</li>
          <li>Cookie Preferences</li>
        </ul>
        <div className="social-icons">
          <i className="youtube-icon"></i>
          <i className="github-icon"></i>
          <i className="blsky-icon"></i>
          <i className="twitter-icon"></i>
          <i className="linkedin-icon"></i>
          <i className="feed-icon"></i>
        </div>
      </div>
      </div>
      </div>
    </footer>
  );
};
export default Footer;