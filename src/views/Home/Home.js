import React, { useEffect } from 'react';
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import job from './img/job.webp'
import { toast } from 'react-hot-toast';

const highDemandJobs = [
  { title: 'Software Engineer', description: 'Software Engineers design, develop, and maintain software applications and systems. They work on coding, testing, and debugging to ensure software is functional, reliable, and user-friendly.'},
  { title: 'Data Scientist', description: ' Data Scientists analyze complex data sets to help organizations make data-driven decisions. They use statistical methods, machine learning, and data visualization to uncover insights and trends from data.' },
  { title: 'Product Manager', description: 'Product Managers oversee the development and lifecycle of products. They work cross-functionally with engineering, marketing, and sales teams to define product features, develop roadmaps, and ensure successful product launches.' },
  { title: 'UX Designer', description: ' UX Designers focus on creating intuitive and engaging user experiences for digital products. They conduct user research, create wireframes and prototypes, and collaborate with developers to ensure the product meets user needs and expectations.' },
  { title: 'Digital Marketer', description: 'Digital Marketers develop and implement online marketing strategies to drive traffic and sales. They use various digital channels, including social media, email, and search engine marketing, to reach and engage target audiences.' },
];


function Home() {
  useEffect(() => {
    toast.loading('Loading content...');
    setTimeout(() => {
      toast.dismiss(); 
      toast.success('Content loaded successfully!');
    }, 100); 
  }, []);

  return (
    <div className='main'>
      <Navbar />
      <div className='content-container'>
        <div className='content'>
          <h1>Empower Your Future -</h1>
          <h4>Explore Jobs, Apply, and Advance</h4>
          <div className='buttons'>
            <button type='button'>Login</button>
            <button type='button'>Signin</button>
          </div>
        </div>

        <div className='content-img'>
          <img src={job} alt='Content-Img'/>
        </div>
      </div>
      <div>
  <h3>High-Demanded Jobs..</h3>
  <div className='job-list'>
    {highDemandJobs.map((job, index) => (
      <div key={index} className='job-item'>
        <h4>{job.title}</h4>
        <p>{job.description}</p>
      </div>
    ))}
  </div>
</div>

      <Footer />
    </div >
  )
}

export default Home