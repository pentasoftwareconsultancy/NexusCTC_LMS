import React from 'react'
import Hero from '../components/home/hero/Hero'
import Card from '../components/home/card/Card'
import Reasons from '../components/home/reasons/Reasons'
import Cources from '../components/home/cources/Cources'
import Video from '../components/home/video/Video'
import Enroll from '../components/home/enroll/Enroll'
import News from '../components/home/news/News'


function HomePage() {
  return (
    <div>
      
      <Hero/>
      <Card/>
      <Reasons/>
      <Cources/>
      <Video/>
      <Enroll/>
      <News/>
     

    </div>
   
  )
}

export default HomePage
