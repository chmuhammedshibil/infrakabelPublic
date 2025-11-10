import React from 'react'
import HeroCarousel from '../../components/public/home/HeroCarousel'
import Bestseller from '../../components/public/home/Bestseller'
import FeatureSection from '../../components/public/home/FeatureSection'
import FeatureHighlight from '../../components/public/home/FeatureHighlight'
import NewProducts from '../../components/public/home/NewProducts'
import TestimonialSection from '../../components/public/home/TestimonialSection'
import NewsletterSignup from '../../components/public/home/NewsletterSignup'

const Home: React.FC = () => {
  return (
    <main>
      <HeroCarousel />
      <Bestseller/>
      <FeatureSection/>
      <FeatureHighlight/>
      <NewProducts/>
      <TestimonialSection/>
      <NewsletterSignup/>
      
    </main>
  )
}

export default Home