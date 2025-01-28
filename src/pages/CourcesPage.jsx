import React from 'react'
import LearnMore from '../components/cources/learnmore/LearnMore'
import UpComingBatch from '../components/cources/upcomingbatches/UpComingBatch'
import OurPartners from '../components/cources/ourpartner/OurPartner'
import Cources from '../components/cources/Cources'

function CourcesPage() {
  return (
    <div>
      <UpComingBatch />
      <OurPartners />
      <Cources />
      {/* <LearnMore /> */}
    </div>
  )
}

export default CourcesPage
