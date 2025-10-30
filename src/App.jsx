import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <Blogs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
