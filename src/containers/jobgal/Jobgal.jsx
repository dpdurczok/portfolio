import React from 'react';
import './Jobgal.css';
import { Article } from '../../components';

import data from '../../content/projects.json';
// import Article from "..."; // your existing component

export default function Jobgal() {
  // Choose ONE of these orderings:

  // Manual (respect "order" field, then title as a tiebreaker)
  const items = [...(data.projects || [])]
    .filter(p => p.type === "client")
    .sort((a,b) => (a.order ?? 9999) - (b.order ?? 9999) || a.title.localeCompare(b.title));

  // OR Newest first:
  // const items = (data.projects || [])
  //   .filter(p => p.type === "client")
  //   .sort((a,b) => (b.year ?? 0) - (a.year ?? 0));

  return (
    <div className="prt__artgal section__margin">
      <div className="prt__artgal-container">
        {items.map(p => (
          <Article
            key={p.title}
            imgUrl={p.image}
            vidUrl={p.video}
            title={p.title}
            paragraph={`${p.year}${p.blurb ? " – " + p.blurb : ""}`}
            linktext={p.video ? "Watch" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
