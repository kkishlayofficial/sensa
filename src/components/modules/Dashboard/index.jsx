import React from 'react'
import Categories from '../Category'
import AboutUs from '../AboutUs'
import ReviewCarousel from '../Reviews'
import ExoticProducts from '../ExoticProducts'

const Dashboard = () => {
  return (
    <>
      <Categories/>
      <ExoticProducts/>
      <AboutUs />
      <ReviewCarousel />
    </>
  )
}

export default Dashboard