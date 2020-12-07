import logo from './logo.svg';
import './App.scss';
import "tailwindcss/tailwind.css"

import Header from './components/Header';
import Hero from './components/Hero'
import ProfitSection from './components/ProfitSection'
import FAQ from './components/FAQ'
import Opinions from './components/Opinions';
import SeoFriend from './components/SeoTiles';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookiesAlert from './components/CookiesAlert';

function App() {

  

  return (
    <div className="App">
        <Header />
        <Hero />
        <ProfitSection />
        <FAQ />
        <Opinions />
        <SeoFriend />
        <CTA />
        <Footer />
        <CookiesAlert />
    </div>
  );
}

export default App;
