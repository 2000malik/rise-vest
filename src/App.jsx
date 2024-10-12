// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {
  About,
  Assets,
  Footer,
  Hero,
  Join,
  Regulation,
  Save,
  Testimonials,
} from "./components";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Assets />
      <Save />
      <Regulation />
      <Testimonials />
      <Join />
      <Footer />
    </>
  );
}

export default App;
