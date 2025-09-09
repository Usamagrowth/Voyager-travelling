import React from 'react'
import FaqDetails from '../Components/FaqDetails'
import GlobalHeader from '../Components/GlobalHeader'

const OurFaqPage = () => {
  return (
    <section>
      <GlobalHeader headerTitle="Frequently Asked Questions" headerLink="FAQ"/>
      <FaqDetails/>
      </section>
  )
}

export default OurFaqPage