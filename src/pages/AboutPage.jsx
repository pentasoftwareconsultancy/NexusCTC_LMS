import React from 'react'
import Hero from '../components/about/hero/Hero'
import HeroSection from '../components/about/hero/Hero'
import AboutUsSection from '../components/about/aboutus/AboutUs'
import SuccessStorySection from '../components/about/successstory/SuccessStory'
import VisionMissionValue from '../components/about/visionmisionvalue/VisionMision'
import WhyChooseUsSection from '../components/about/whychooseus/WhyChooseUs'
import OurTeamSection from '../components/about/ourteam/OurTeam'


function AboutPage() {
  return (
    <div>

   <HeroSection/>
   <AboutUsSection/>
   <VisionMissionValue/>
   <SuccessStorySection/>
   <WhyChooseUsSection/>
   <OurTeamSection/>
   
   
   
      
    </div>
  )
}

export default AboutPage
