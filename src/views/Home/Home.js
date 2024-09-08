import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'


function Home() {
  return (
    <div>
    <Sidebar/>
     {/* <Navbar /> */}
      <h1>Home</h1>
      <Footer />
    </div>
  )
}

export default Home