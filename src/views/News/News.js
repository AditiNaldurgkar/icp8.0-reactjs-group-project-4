import React from 'react';
import './News.css'; 
import Display from '../../components/News/newscards'; 
import Sidebar from "./../../components/Sidebar/Sidebar"
import { Trends } from '../../components/News/newscards';


const newsData = [{
  url: 'https://img.freepik.com/free-photo/hiring-career-employment-human-resources-concept_53876-121273.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
  headline: "Major Recruitment Drives Ahead!!!",
  caption: 'Check Now to grab best oppurtunity',
  url2:"https://economictimes.indiatimes.com/jobs/hr-policies-trends/indian-job-market-likely-to-get-busy-and-bustling/articleshow/111295088.cms?from=mdr"
},{
  url :'https://img.freepik.com/premium-photo/person-is-using-phone-with-colorful-display_987366-63062.jpg?w=740',
  headline : 'Trifold Phone unvieled by Huawei',
  caption :'The Mate XT combines a 10-inch tablet and a smartphone in one' ,
  url2:"https://www.bloomberg.com/news/articles/2024-09-10/huawei-trifold-phone-versus-iphone-16-specs-price-release-date"
},{
  url: 'https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?t=st=1725986164~exp=1725989764~hmac=63753f6b1964fadd2d0ceaf507bd8a2566912e06decfda7cd5ac23ee939007f1&w=996',
  headline: "Google's AI Breakthrough in Automation",
  caption: 'Learn about the latest advancements in AI-powered business solutions.',
  url2:"https://research.google/pubs/ai-powered-patching-the-future-of-automated-vulnerability-fixes/"
},{
  url: 'https://img.freepik.com/free-photo/tech-startup-concept_23-2148588122.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
  headline: "Tech Startups Surge in 2024",
  caption: 'Discover the top emerging startups making waves this year.',
  url2:"https://economictimes.indiatimes.com/tech/startups/economic-survey-india-saw-tech-startup-surge-post-covid-pandemic/articleshow/111931855.cms?from=mdr"
},{
  url: 'https://img.freepik.com/free-photo/business-team-using-laptop-computer_1150-12568.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
  headline: "Microsoft's New Cloud Services Expansion",
  caption: "Explore Microsoft's latest offerings in cloud computing.",
  url2 :" https://news.microsoft.com/apac/2024/04/10/microsoft-to-invest-us2-9-billion-in-ai-and-cloud-infrastructure-in-japan-while-boosting-the-nations-skills-research-and-cybersecurity/"
},{
  url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVxv9yAJuGd971hsq8Pm055YVbZnXSlTx4g&s",
  headline :"Tata Sons' sees 74% surge ",
  caption:"74 percent increase in consolidated net profit",
  url2:"https://www.businesstoday.in/latest/corporate/story/tata-sons-sees-74-surge-in-consolidated-net-profit-at-rs-49000-crore-aviation-business-narrows-loss-in-fy24-444884-2024-09-07"
}];
const trends=[{
  name : "Turning AI into decision-making agents",
  imgurl : "https://cdn-icons-png.flaticon.com/128/8055/8055576.png",
  info :"Agentic AI to emerge within the next two to three years — with capabilities that go beyond tasks like summarising information to actually taking actions on behalf of individualsRather than presenting users with options, they will be able to choose the option that is optimal for the user if given permission."
}]

function News() {
  return (
    <div className="maindivn">
       <Sidebar/>
      <h1 className="headingn">News</h1>
      <div className='maincn'>
      <div className='containern'>
      {newsData.map((item, index) => (
        <Display
          key={index}
          headline={item.headline}
          caption={item.caption}
          url={item.url}
          url2={item.url2}
        />
      ))}
      </div>
      <div className='trends'>
      <span className='headtrends'>Technology trends for 2025</span>
      <br/><br/>
      { trends.map((trend, ind) => (
        <Trends
          key={ind}
          name={trend.name}
          imgurl={trend.imgurl}
          info={trend.info}
          />
      ))}
      </div>
      </div>
    </div>
  );
}

export default News;
