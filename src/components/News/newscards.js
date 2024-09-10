import React from 'react';
import "./newscard.css"

function Display({ headline, caption, url }) {
  return (
    <div className="newscard">
      <img className="cardimg" src={url} alt={headline} />
      <p className="title">{headline}</p>
      <p className="caption">{caption}</p>
    </div>
  );
}

export default Display;
