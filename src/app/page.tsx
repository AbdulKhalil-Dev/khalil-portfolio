import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import { Projects } from './sections/Projects'
import Tape from './sections/Tape'
import Testimonials from './sections/Testimonials'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'



const page = () => {
  return (
    <>
    <Header />
    <Hero />
    <Projects />
    <Tape />
    <Testimonials />
    <About />
    <Contact />
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default page