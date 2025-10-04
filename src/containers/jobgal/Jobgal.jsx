import React from 'react';
import './Jobgal.css';
import { Article } from '../../components';
import data from '../../content/jobs.json';

export default function Jobgal() {
  // Manual order first; then year (newest); then title
  const items = [...(data.projects || [])]
    .filter(p => p.type === 'client')
    .sort(
      (a, b) =>
        (a.order ?? 9999) - (b.order ?? 9999) ||
        (b.year ?? 0) - (a.year ?? 0) ||
        a.title.localeCompare(b.title)
    );

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
              linktext={link ? 'Watch' : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
