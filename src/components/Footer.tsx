'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          {/* Brand column */}
          <div>
            <a href="#home" className="logo">
              <i>S</i>
              <span>Sree<small>Travel Deals</small></span>
            </a>
            <p style={{ marginTop: '1rem', maxWidth: '340px' }}>
              We frame your memories. Thoughtfully planned holidays to Dubai, Thailand, Singapore and Malaysia.
            </p>
            <div className="soc">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="https://wa.me/918519969749" aria-label="WhatsApp">WA</a>
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#experiences">Experiences</a></li>
              <li><a href="#videos">Trip Films</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📞 <a href="tel:+918519969749">+91 85199 69749</a></li>
              <li>✉️ hello@yourdomain.com <em>(placeholder)</em></li>
              <li>📍 Office address <em>(placeholder)</em></li>
            </ul>
          </div>
        </div>

        <div className="copy">
          <span>© {year} Sree Travel Deals. All rights reserved.</span>
          <span>We frame your memories.</span>
        </div>
      </div>
    </footer>
  );
}

