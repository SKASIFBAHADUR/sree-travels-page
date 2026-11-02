export default function CallToAction() {
  return (
    <section className="cs" id="contact">
      <div className="wrap">
        <h2 className="r">Your next great adventure starts here.</h2>
        <p className="r">Discover extraordinary destinations and create memories that last a lifetime.</p>
        <div className="cta r">
          <a
            className="btn o"
            href="https://wa.me/918519969749?text=Hi%20Sree%20Travel%20Deals%2C%20I%20want%20to%20plan%20a%20trip"
            target="_blank"
            rel="noopener"
          >
            Plan Your Journey{' '}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
          <a className="btn gh" href="tel:+918519969749">Call +91 85199 69749</a>
        </div>
      </div>
    </section>
  );
}

