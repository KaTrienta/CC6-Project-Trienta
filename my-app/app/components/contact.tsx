"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact: React.FC = () => {
  const router = useRouter();

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <button className="back-btn" onClick={() => router.back()}>
          ←
        </button>
        <h1 className="contact-title">CONTACT ME!</h1>

        <div className="contact-grid">
          {/* FACEBOOK */}
          <div className="contact-item">
            <img
              src="/facebook.png"
              alt="Facebook"
              className="contact-icon fb"
            />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Facebook
            </a>
          </div>

          {/* INSTAGRAM */}
          <div className="contact-item">
            <img
              src="/instagram.png"
              alt="Instagram"
              className="contact-icon ig"
            />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Instagram
            </a>
          </div>

          {/* GMAIL → INTERNAL LINK */}
          <div className="contact-item">
            <img
              src="/gmail.png"
              alt="Gmail"
              className="contact-icon gmail"
            />
            <Link href="/contact/gmail" className="contact-btn">
              Gmail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
