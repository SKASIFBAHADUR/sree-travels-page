export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="wrap">
        <div className="eyebrow r">Why Sree Travel Deals</div>
        <h2 className="r">Travel that feels <em>taken care of.</em></h2>

        <div className="wg">
          <div className="wc r">
            <i>🧭</i>
            <h3>Personalized Experiences</h3>
            <p>Itineraries shaped around your family, group and pace. <em>(Editable copy)</em></p>
          </div>
          <div className="wc r" style={{ '--d': '.1s' } as React.CSSProperties}>
            <i>🌅</i>
            <h3>Memorable Destinations</h3>
            <p>Iconic landmarks and hidden favourites across four destinations.</p>
          </div>
          <div className="wc r" style={{ '--d': '.2s' } as React.CSSProperties}>
            <i>✅</i>
            <h3>Hassle-Free Planning</h3>
            <p>From bookings to day plans, we handle the details. <em>(Editable copy)</em></p>
          </div>
          <div className="wc r" style={{ '--d': '.3s' } as React.CSSProperties}>
            <i>🤝</i>
            <h3>Professional Support</h3>
            <p>A real person on call at +91 85199 69749 to guide you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
