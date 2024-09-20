import React, { useEffect } from 'react';
import "./Home.css";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import job from './hi-img.png';
import { toast } from 'react-hot-toast';
import { highDemandJobs, topCompanies, newsArticles, feedbacks} from '../../config/homeData';

function Home() {
  useEffect(() => {
    toast.loading('Loading content...');
    setTimeout(() => {
      toast.dismiss();
      toast.success('Content loaded successfully!');
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar /><br/><br/>
      <div className='box'>
        <div className='content-container'>
          <div className='content'>
            <h1 className='liner-text'>Empower Your Future </h1>
            <h4>Explore Jobs, Apply, and Advance</h4>
            <p className='intro-paragraph'>
              Discover a wide range of job opportunities and resources designed to help you achieve your career goals. Whether you’re looking for a new position or want to enhance your skills, we provide tools and guidance to support your journey. Start exploring today and take the first step towards a brighter future.
            </p>
          </div>

          <div className='content-img'>
            <img src={job} alt='Content-Img' />
          </div>
        </div>

        <div>
          <h3>High-Demand Jobs..</h3>
          <div className='job-list'>
            {highDemandJobs.map((job, index) => (
              <div key={index} className='job-item'>
                <img src={job.imgSrc} alt={job.alt} className='job-img' />
                <h4 className='job-title'>{job.title} </h4>
                <p className='job-des'>{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>Top Companies..</h3>
          <div className='company-list'>
            {topCompanies.map((company, index) => (
              <div key={index} className='company-item'>
                <img src={company.logoSrc} alt={company.alt} className='company-img' />
                <h4 className='company-title'>{company.name}</h4>
                <p className='company-des'>{company.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='news-section'>
          <h3>Latest News..</h3>
          <div className='news-list'>
            {newsArticles.map((news, index) => (
              <article key={index} className='news-item'>
                <img src={news.img} alt={news.alt} className='news-img' />
                <h4 className='news-title'>{news.title}</h4>
                <p className='news-des'>{news.description}</p>
                <span className='news-date'>{news.date}</span>
              </article>
            ))}
          </div>
        </div>

        <div className='feedback-section'>
          <h3>What Our Users Are Saying..?</h3>
          <div className='feedback-list'>
            {feedbacks.map((feedback, index) => (
              <div key={index} className='feedback-item'>
                <img src={feedback.img} alt={feedback.alt} className='feedback-img' />
                <h4 fb-name>{feedback.name}</h4>
                <p fb-des>{feedback.comment}</p>
                <div className='rating'>
                  {feedback.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='Show'></div>

      <Footer />
    </div>
  );
}

export default Home;