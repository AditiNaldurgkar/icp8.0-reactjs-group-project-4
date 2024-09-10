import React from 'react';
import './News.css'; 
import Display from '../../components/News/newscards'; 

const newsData = [{
  url: 'https://img.freepik.com/free-photo/hiring-career-employment-human-resources-concept_53876-121273.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
  headline: "Major Recruitment Drives Ahead!!!",
  caption: 'Check Now'
}];

function News() {
  return (
    <div className="maindiv">
      <h1 className="heading">News</h1>
      {newsData.map((item, index) => (
        <Display
          key={index}
          headline={item.headline}
          caption={item.caption}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default News;
