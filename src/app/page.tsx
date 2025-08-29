// import Homepage from "./components/Homepage";
// export default function Home() {
//   return (
//     <div>
//       <Homepage/>
//     </div>
//   );
// }

'use client';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div>
      <Navbar />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="trainers">
        <Trainers />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}