import { experiences } from '@/data/travelData';

export default function Experiences() {
  return (
    <section className="exp" id="experiences">
      <div className="wrap">
        <div className="eyebrow r">Experiences</div>
        <h2 className="r">
          Beyond sightseeing — <em>feel</em> the trip.
        </h2>

        <div className="eg">
          {experiences.map((ex, i) => (
            <div
              key={ex.id}
              className="ex r"
              style={ex.delay ? ({ '--d': ex.delay } as React.CSSProperties) : undefined}
            >
              <img src={ex.image} loading="lazy" alt={ex.alt} />
              <span>
                <b>{ex.title}</b>
                <small>{ex.subtitle}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

