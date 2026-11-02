import { featuredDestinations, upcomingDestinations } from '@/data/travelData';
import type { DestinationCard } from '@/types';

function DestCard({ card, extraClass = '' }: { card: DestinationCard; extraClass?: string }) {
  return (
    <article
      className={`card ${card.gridClass} ${extraClass} r`}
      style={card.delay ? ({ '--d': card.delay } as React.CSSProperties) : undefined}
    >
      <img src={card.image} loading="lazy" alt={card.alt} />
      <div>
        <span className="t">{card.tag}</span>
        <h3>{card.title}</h3>
        {card.description && <p>{card.description}</p>}
        <a href={card.link}>
          {card.gridClass ? 'Explore destination →' : 'Ask about packages →'}
        </a>
      </div>
    </article>
  );
}

export default function Destinations() {
  return (
    <section className="dest" id="destinations">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow r">Featured destinations</div>
            <h2 className="r">Dubai, <em>framed</em> beautifully.</h2>
          </div>
          <p className="r">Icons, deserts and hidden corners — real moments from recent Sree Travel Deals trips.</p>
        </div>

        <div className="dg">
          {featuredDestinations.map(card => (
            <DestCard key={card.id} card={card} />
          ))}
        </div>

        <div className="next">
          <h3 className="r">More journeys from Sree Travel Deals</h3>
          <div className="ng">
            {upcomingDestinations.map(card => (
              <DestCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

