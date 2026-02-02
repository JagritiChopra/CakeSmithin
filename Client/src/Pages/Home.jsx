import React from 'react'
import NewsletterSignup from '../components/Home/Subscriptions'
import TestimonialSection from '../components/Home/Testimonials'
import PartnershipsSection from '../components/Home/Partnerships'
import HeroSection from '../components/Home/Hero'

export default function Home() {
  return (
  <div >

      <HeroSection />
      <PartnershipsSection />
      <TestimonialSection />
      <NewsletterSignup />
    </div>
  )
}
