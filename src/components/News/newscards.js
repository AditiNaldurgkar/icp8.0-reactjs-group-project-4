import React from 'react';
import "./newscard.css"



function Display({ headline, caption, url ,url2}) {
    console.log("hie")
    console.log(url2)
  return (
    <div className='mainpgcontainer'>
    <div className="newscard">
      <img className="cardimg" src={url} alt={headline} />
      <p className="title">{headline}</p>
      <p className="caption">{caption}</p>
      <a href= {url2} target='_blank' className="discover-button" >
          Discover more
          </a>
    </div>
    </div>
  );
}

export default Display;
