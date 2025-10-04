import React from "react";
import "./artgal.css";
import { Article } from "../../components";
import data from "../../content/art.json"; // <-- data from CMS

export default function Artgal() {
  // Prefer manual order; fallback to year/title
  const items = [...(data.items || [])]
    .filter(p => p.type === "art")
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
          const link = (p.video && p.video.trim()) || p.videoFile || "";
          return (
            <Article
              key={p.title}
              imgUrl={p.image}
              vidUrl={link || undefined}
              title={p.title}
              paragraph={`${p.year}${p.blurb ? " – " + p.blurb : ""}`}
              linktext={link ? "Watch Animation" : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
