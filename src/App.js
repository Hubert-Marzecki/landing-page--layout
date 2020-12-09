import logo from "./logo.svg";
import "./App.scss";
import "tailwindcss/tailwind.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfitSection from "./components/ProfitSection";
import FAQ from "./components/FAQ";
import Opinions from "./components/Opinions";
import SeoFriend from "./components/SeoTiles";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CookiesAlert from "./components/CookiesAlert";
import { useEffect, useState } from "react";

function App() {
  // Write info in local storage
  function isCookiesTabVisible() {
    if (localStorage.getItem("cookies") === "true") {
      return null;
    } else {
      return <CookiesAlert />;
    }
  }

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
      {isCookiesTabVisible()}
    </div>
  );
}

export default App;
