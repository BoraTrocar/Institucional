import React from 'react';
import { Book, BookOpen, Users, ArrowRightLeft, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pearl-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;