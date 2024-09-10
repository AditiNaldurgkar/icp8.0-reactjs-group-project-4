import React from 'react';
import './News.css'; 
import Display from '../../components/News/newscards'; 

const newsData = [{
  url: 'https://img.freepik.com/free-photo/hiring-career-employment-human-resources-concept_53876-121273.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
  headline: "Major Recruitment Drives Ahead!!!",
  caption: 'Check Now'
},{
  url :'https://img.freepik.com/premium-photo/person-is-using-phone-with-colorful-display_987366-63062.jpg?w=740',
  headline : 'Trifold Phone unvieled by Huawei',
  caption :'The Mate XT combines a 10-inch tablet and a smartphone in one' ,
},{
  url: 'https://img.freepik.com/premium-photo/robotic-process-automation-automation-business-concept_33805-1600.jpg?w=740',
  headline: "Google's AI Breakthrough in Automation",
  caption: 'Learn about the latest advancements in AI-powered business solutions.'
},{
  url: 'https://img.freepik.com/free-photo/tech-startup-concept_23-2148588122.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
    headline: "Tech Startups Surge in 2024",
    caption: 'Discover the top emerging startups making waves this year.',
    url2 :'https://economictimes.indiatimes.com/tech/startups/economic-survey-india-saw-tech-startup-surge-post-covid-pandemic/articleshow/111931855.cms?from=mdr'
},{
  url: 'https://img.freepik.com/free-photo/business-team-using-laptop-computer_1150-12568.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
  headline: "Microsoft's New Cloud Services Expansion",
  caption: "Explore Microsoft's latest offerings in cloud computing."
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
