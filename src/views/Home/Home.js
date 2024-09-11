import React, { useEffect } from 'react';
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import job from './img/job.webp';
import { toast } from 'react-hot-toast';

const highDemandJobs = [
  { imgSrc: './img/computer.png', alt: 'Software Engineer', title: 'Software Engineer', description: 'Software Engineers design, develop, and maintain software applications and systems. They work on coding, testing, and debugging to ensure software is functional, reliable, and user-friendly.' },
  { imgSrc: './img/data-science.png', alt: 'Data Scientist', title: 'Data Scientist', description: 'Data Scientists analyze complex data sets to help organizations make data-driven decisions. They use statistical methods, machine learning, and data visualization to uncover insights and trends from data.' },
  { imgSrc: './img/product.png', alt: 'Product Manager', title: 'Product Manager', description: 'Product Managers oversee the development and lifecycle of products. They work cross-functionally with engineering, marketing, and sales teams to define product features, develop roadmaps, and ensure successful product launches.' },
  { imgSrc: './img/ux-design.png', alt: 'UX Designer', title: 'UX Designer', description: 'UX Designers focus on creating intuitive and engaging user experiences for digital products. They conduct user research, create wireframes and prototypes, and collaborate with developers to ensure the product meets user needs and expectations.' },
  { imgSrc: './img/digital-marketing.png', alt: 'Digital Marketer', title: 'Digital Marketer', description: 'Digital Marketers develop and implement online marketing strategies to drive traffic and sales. They use various digital channels, including social media, email, and search engine marketing, to reach and engage target audiences.' },
];

const newsArticles = [
  { title: 'New Job Trends for 2024', description: 'Explore the latest job market trends for 2024 and how they might affect your career planning.', date: 'September 1, 2024' },
  { title: 'Top Skills in Demand', description: 'Find out which skills are most sought after by employers in today’s job market.', date: 'August 25, 2024' },
  { title: 'How to Ace a Job Interview', description: 'Get tips and tricks on how to prepare for and succeed in your next job interview.', date: 'August 10, 2024' },
  { title: 'Remote Work: The Future of Employment', description: 'Learn about the rise of remote work and what it means for the future of employment across various industries.', date: 'September 15, 2024' }
];

const FAQ = [
  { head: 'How do I create an account?', description: 'To create an account, click the "Sign Up" button on the top right of the homepage. Enter your email, create a password, and complete your profile with relevant information.' },
  { head: 'How do I search for jobs?', description: 'Use the search bar on the homepage to enter keywords and select your desired location. You can filter results by job type, salary, and more.' },
  { head: 'How do I apply for a job?', description: 'Once you find a job you’re interested in, click the "Apply" button on the job listing. You will need to upload your resume and cover letter if required.' },
  { head: 'How can employers post a job?', description: 'Employers can post jobs by clicking on the "Post a Job" button. Fill out the job details, requirements, and company information, and then publish the listing.' },
  { head: 'What should I do if I forget my password?', description: 'Click the "Forgot Password" link on the login page. Follow the instructions to reset your password via email.' },
  { head: 'How can I contact support?', description: 'For any issues or inquiries, you can contact our support team by emailing support@example.com or using the "Contact Us" form on our website.' }
];

function Home() {
  useEffect(() => {
    toast.loading('Loading content...');
    setTimeout(() => {
      toast.dismiss();
      toast.success('Content loaded successfully!');
    }, 1000);
  }, []);

  return (
    <div className='main'>
      <Navbar />
      <div className='content-container'>
        <div className='content'>
          <h1 className='liner-text'>Empower Your Future -</h1>
          <h4>Explore Jobs, Apply, and Advance</h4>
          <p className='intro-paragraph'>
            Discover a wide range of job opportunities and resources designed to help you achieve your career goals. Whether you’re looking for a new position or want to enhance your skills, we provide tools and guidance to support your journey. Start exploring today and take the first step towards a brighter future.
          </p>
          <div className='buttons'>
            <button type='button'>Login</button>
            <button type='button'>Sign up</button>
          </div>
        </div>

        <div className='content-img'>
          <img src={job} alt='Content-Img' />
        </div>
      </div>

      <div className='high-demand-jobs'>
        <h3>High-Demand Jobs..</h3>
        <div className='job-list'>
          {highDemandJobs.map((job, index) => (
            <div key={index} className='job-item'>
              <img src={job.imgSrc} alt={job.alt} className='job-img' />
              <h4>{job.title}</h4>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='news-section'>
        <h3>Latest News</h3>
        <div className='news-list'>
          {newsArticles.map((news, index) => (
            <article key={index} className='news-item'>
              <h4>{news.title}</h4>
              <p>{news.description}</p>
              <span className='news-date'>{news.date}</span>
            </article>
          ))}
        </div>
        <div className='view-news-button-container'>
          <button className='view-news-button' type='button'>View News</button>
        </div>
      </div>

      <div className='faq-section'>
        <h3>Frequently Asked Questions..</h3>
        <div className='faq-list'>
          {FAQ.map((item, index) => (
            <div key={index} className='faq-item'>
              <h4>{item.head}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>




      <Footer />
    </div>
  );
}

export default Home;
