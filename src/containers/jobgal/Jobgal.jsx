import React from 'react';
import './Jobgal.css';
import { Article } from '../../components';
import jobs from '../../content/jobs.json';

export default function Jobgal() {
  const items = jobs.items || []; // keep CMS order
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
