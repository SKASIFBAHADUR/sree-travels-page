export default function Introduction() {
  return (
    <section className="intro" id="about">
      <div className="big" aria-hidden="true">Explore</div>
      <div className="wrap">
        {/* Left: text */}
        <div>
          <div className="eyebrow r">Our story</div>
          <h2 className="r">
            Every trip is a <em>frame</em> worth keeping.
          </h2>
          <p className="r">
            Sree Travel Deals brings families and friends together on journeys that feel effortless —
            from the Dubai Frame and Burj Khalifa to the dunes at golden hour. We plan the details
            so you can step into the photograph.
          </p>
          <p className="r">
            Our guests travel in groups, as couples and as multi-generation families, and every trip
            ends the same way: with a collage of memories to take home.
          </p>
          <div className="stats r">
            <div><b>4</b><span>Destinations</span></div>
            <div><b>3+</b><span>Dubai group trips</span></div>
            <div><b>1:1</b><span>Personal planning</span></div>
          </div>
        </div>

        {/* Right: collage */}
        <div className="collage r">
          <img className="a" src="/assets/images/B_arab.webp"  loading="lazy" alt="Guests in front of the Burj Al Arab" />
          <img className="b" src="/assets/images/N_heart.webp" loading="lazy" alt="Family at the mirrored heart sculpture near Burj Khalifa" />
          <img className="c" src="/assets/images/P_beach.webp" loading="lazy" alt="Family group on a Dubai beach" />
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}

