import React from "react";
import Buttons from "../components/Buttons";

const Front = ()=>{

    return (
        <>
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <iframe width="1300" height="750" src="https://www.youtube.com/embed/B1TRRiLOw0Q?si=ryf-VgzSWtiy6hub" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; loop" allowfullscreen></iframe>

      {/* Text on the left side */}
      <div className="absolute left-0 p-4 md:p-8 text-black flex flex-col">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Built by Developers,</h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">For Developers.</h1>
        <p className="text-xl font-semibold md:text-lg">With fair terms for all. Let's build incredible things together.</p>
        <Buttons
        text="Learn More"
        width="200px"
        height="40px"
        className="mt-2 pt-2 pb-2 items-center content-center bg-slate-400 "
        />
      </div>
    </div>
        </>
    )
}
export default Front
