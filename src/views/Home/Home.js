import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div>
      <Navbar />
      <div className='content-container'>
        <div className='content'>
          <h3>Empower Your Future - Explore Jobs, Apply, and Advance</h3>
          <div className='buttons'>
            <button type='button'>Login</button>
            <button type='button'>Signin</button>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Home