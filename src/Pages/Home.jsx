import React from 'react'
import Announcement from '../Components/Announcement'
// import Announcements from '../Components/Announcements'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home