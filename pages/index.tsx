import type { NextPage } from 'next'
import Hero from '../components/index/hero/Hero'
import Course from '../components/index/course/Course'
import Testimonials from '../components/index/testimonials/Testimonials'
import Team from '../components/index/team/Team'
import Contact from '../components/index/contact/Contact'
import Modal from '../components/Modal'
import { useState } from 'react'
import About from 'components/index/about/About'

const Home: NextPage = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className=''>
      <Hero />
      <Team />
      <Course />
      <About />
      <Testimonials />
      <Contact />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      {/* contact */}
    </div>
  )
}

export default Home
