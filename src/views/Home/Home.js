import React, { useEffect } from 'react';
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import job from './img/job.webp'
import { toast } from 'react-hot-toast';

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
        

      </div>
      <Footer />
    </div >
  )
}

export default Home