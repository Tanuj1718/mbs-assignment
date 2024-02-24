import React from "react";
import { Parallax } from "react-parallax";

const AboutUs = ()=>{
    return (
        <>
        <section id="AboutUs">
        <Parallax bgImage="https://media.contentapi.ea.com/content/dam/eacom/skate/common/skate-about-section-bg-xl.jpg.adapt.1024w.jpg" strength={500}>
      <div style={{ height: '100vh', width: '100vw' }}> {/* Adjust the height as needed */}
      <div className="bg-image relative flex items-center justify-center h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://media.contentapi.ea.com/content/dam/eacom/skate/common/skate-about-section-bg-xl.jpg.adapt.1024w.jpg')" }}></div>
  
        {/* Content Overlay */}
        <div className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl font-bold z-10 font-serif text-gray-300 ml-4">About Us</h1>
        
    </div>

    {/* <!-- Right Side --> */}
    <div className="flex-1 flex items-center justify-center">
        
        <p className="text-2xl text-center z-10 text-gray-300 mr-12">Introducing Skater Republic, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life.</p>
    </div>
      </div>
      </div>
    </Parallax>
        </section>
        
        </>
    )
}
export default AboutUs;