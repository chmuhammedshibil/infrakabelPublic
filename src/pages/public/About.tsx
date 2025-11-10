import React from 'react'
import AboutHero from '../../components/public/about/AboutHero'
import TeamSection from '../../components/public/about/TeamSection'
import MissionSection from '../../components/public/about/MissionSection'
import ValuesSection from '../../components/public/about/ValuesSection'

const About: React.FC = () => {
  return (
    <div>
       <AboutHero/> 
       <TeamSection/>
       <MissionSection/>
       <ValuesSection/>
    </div>
  )
}

export default About