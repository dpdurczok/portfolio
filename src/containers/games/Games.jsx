import React from 'react';
import './games.css';
import { Article } from '../../components';
import games from '../../content/games.json';

export default function Games() {
  // Keep the exact order from the CMS
  const items = games.items || [];

  return (
    <div className="prt__games section__margin" id="games">
      <div className="prt__games-heading">
        <h1 className="gradient__text">Game Development Portfolio</h1>
        <p>Explore my collection of games — some more polished, others still in development. Most of these were created within short time frames during game jams, so progress on further development tends to be slow and occasionally ongoing.</p>
      </div>

      <div className="prt__games-container">
        {items.map(g => {
          const href = g.link || ''; // pass through; <Article> decides internal vs external
          return (
            <Article
              key={`${g.title}-${g.year ?? ''}`}
              imgUrl={g.image}
              link={href || undefined}
              linktext={g.link ? (g.linktext || 'Learn More') : undefined}
              title={g.title}
              paragraph={`${g.year ?? ''}${g.blurb ? (g.year ? ' – ' : '') + g.blurb : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}
