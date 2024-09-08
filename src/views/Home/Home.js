import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div>
      <Navbar />
      <div className='content-container'>
        <div className='content'>
          <h2>Empower Your Future</h2>
          <h4> - Explore Jobs, Apply, and Advance</h4>
          <div className='buttons'>
            <button type='button'>Login</button>
            <button type='button'>Signin</button>
          </div>
        </div>

        <div className='content-img'>

        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Home