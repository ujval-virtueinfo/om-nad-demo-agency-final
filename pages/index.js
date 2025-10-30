import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Blogs from '../components/Blogs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Decoupled Drupal + React Site | Demo</title>
        <meta name="description" content="A clean, responsive website built with Next.js and Tailwind CSS for a decoupled Drupal setup." />
      </Head>

      <Header />

      <main>
        <Hero />
        <Services />
        <Blogs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
