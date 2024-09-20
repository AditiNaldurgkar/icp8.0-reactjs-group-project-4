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
},{
  name:"Moving to post-quantum cryptography",
  imgurl:"https://cdn-icons-png.flaticon.com/128/9118/9118415.png",
  info :"Post-quantum cryptography will become a concern in just two to three years. IT leaders will soon need to replace every piece or encryption with a post-quantum algorithm unbreakable by classical or quantum computing."
},{
  name :"Tools defending against disinformation",
  imgurl:"https://cdn-icons-png.flaticon.com/128/9454/9454011.png",
  info:"Generative AI could allow bad actors to create synthetic media, such as fake videos, voices, and images that impersonate people or organisations. Disinformation security tools will help organisations identify deepfakes or detect synthetic media by assessing truth and tracking the spread of disinformation."
},{
  name:"Exploring energy-efficient computing",
  imgurl:"https://cdn-icons-png.flaticon.com/128/877/877628.png",
  info:"Organisations may soon begin moving energy-intensive algorithms to green cloud providers, rewrite algorithms to consume less energy, or more closely monitor energy use for generative AI. Additional technologies like optical, neuromorphic, and DNA storage could create vast efficiency improvements"
},{
  name:"Enhancing reality with spatial computing",
  imgurl:"https://cdn-icons-png.flaticon.com/128/15758/15758613.png",
  info:"Spatial computing brings the physical and digital realms together into a single, unified 3D space through devices such as augmented reality headsets. Alvarez said devices and applications are being developed that could support just-in-time contextualisation for decision making in places like the manufacturing shop floor."
},{
  name:" Robots that  multitask very efficiently",
  imgurl:"https://cdn-icons-png.flaticon.com/128/6584/6584942.png",
  info:"Though it will take between three and ten years, polyfunctional robots that can perform multiple functions, rather than being limited to a single task, are expected to become part of everyday life. By 2030, Alvarez said 80% of humans could be engaging with smart polyfunctional robots on a daily basis."
}]
const skills=[
  { name: 'Python', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png',comp:"NASA,Google,Uber" },
  { name: 'Javascript', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',comp:"Microsoft,Netflix,Amazon" },
  { name: 'React', logo: 'https://t3.ftcdn.net/jpg/03/04/97/12/240_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg',comp:"Airbnb,Facebook,Twitter" },
  {name:"Cybersecurity",logo:"https://cdn-icons-png.flaticon.com/128/2092/2092663.png",comp:"Deolitte,Pwc,NSA"},
  { name:"Cloud",logo:"https://img.freepik.com/premium-photo/cloud-computing-technology-concept-futuristic-illustration-isolated-white-background_660230-76062.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"AWS,IBM,Oracle"},
  {name :"Blockchain" ,logo:"https://cdn-icons-png.flaticon.com/128/2152/2152539.png",comp:"IBM,Accenture,Coinbase"},
  {name:"Leadership",logo:"https://img.freepik.com/free-vector/follow-leader-concept-illustration_114360-10886.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"Google,Amazon,Deolitte"},
  {name :"Communication",logo:"https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149171107.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"Google,Salesforce,Deolitte"},
  {name:"Problem solving",logo:"https://img.freepik.com/free-vector/problem-solving-labyrinth-concept-illustration_114360-2041.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"Microsoft,IBM,Google"},
  {name:"UI/UX",logo:"https://cdn-icons-png.flaticon.com/128/7858/7858975.png",comp:"Apple,Adobe,Spotify"},
]


function News() {
  return (
    <div className="maindivn">
       <Sidebar/>
      <h1 className="headingn">Tech & Talent</h1>
      <h4 className='headcap'> Key Trends, Skills, and News for the Job Market</h4>
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
      <h3 className='headtrends'>Technology trends for 2025</h3>
      <div className='trendcardcontainer'>
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
      <div>
        <h3 className='heading-skills'>Skills in demand</h3>
        <div className='tech-grid'>
            {skills.map((skill, index) => (
              <div key={index} className='tech-card'>
                <img src={skill.logo} alt={`${skill.name} logo`} className='tech-logo' />
                <p className='tech-name'>{skill.name}</p>
                <p className='techemp'>Employers:{skill.comp}</p>
              </div>
               ))}
          </div>
          </div>
          </div>
          <h3></h3>
          <iframe className='youtubev' width="860" height="315" src="https://www.youtube.com/embed/7m4zQpf3Ouo?si=W5xOwTTyaeiANcs8&amp;start=23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <div className='Show'></div>
    </div>
  );
}

export default News;
