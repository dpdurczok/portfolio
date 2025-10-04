import React from 'react';
import './games.css';
import { Article } from '../../components';
import games from '../../content/games.json';

export default function Games() {
  const items = [...(games.items || [])]
    .sort((a,b) => (a.order ?? 9999) - (b.order ?? 9999) || (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title));

  return (
    <div className="prt__games section__margin" id="games">
      <div className="prt__games-heading">
        <h1 className="gradient__text">Game Development Portfolio</h1>
        <p>
          Explore my range of games—some refined and complete, others still in development.
          Each reflects my passion for game development and constant improvement.
        </p>
      </div>

      <div className="prt__games-container">
        {items.map(g => {
          // For internal routes with HashRouter, convert "/chains" -> "#/chains"
          const href = g.link
            ? (g.hashRouter ? (g.link.startsWith('#') ? g.link : `#${g.link.startsWith('/') ? g.link : `/${g.link}`}`) : g.link)
            : '';

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
