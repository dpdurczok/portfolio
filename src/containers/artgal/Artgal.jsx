import React from 'react';
import './artgal.css';
import { Article } from '../../components';
import art from '../../content/art.json';

export default function Artgal() {
  const items = art.items || [];
  return (
    <div className="prt__artgal section__margin">
      <div className="prt__artgal-container">
        {items.map(p => {
          const link = (p.video && p.video.trim()) || p.videoFile || '';
          return (
            <Article
              key={`${p.title}-${p.year ?? ''}`}
              imgUrl={p.image}
              vidUrl={link || undefined}
              title={p.title}
              paragraph={`${p.year ?? ''}${p.blurb ? ' – ' + p.blurb : ''}`}
              linktext={link ? 'Watch Animation' : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
