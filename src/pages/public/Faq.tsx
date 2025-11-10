import React from 'react'
import FaqHero from '../../components/public/faq/FaqHero'
import FaqAccordion from '../../components/public/faq/FaqAccordion'

const Faq: React.FC = () => {
  return (
    <main>
      <FaqHero />
      
      <FaqAccordion/>
    </main>
  )
}

export default Faq