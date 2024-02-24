import React from "react";
import Buttons from "../components/Buttons";
import { Parallax } from "react-parallax";

const Purchase = ()=>{
    const backgroundStyle = {
        backgroundImage: 'url("https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/09/FREESTYLIN_FINAL_LANDSCAPE_1920X1080_JPG-9928423d535d3d18f841.jpg")',
        backgroundSize: 'cover',
        height: '100vh',
      };


    return (
        <>
        <section id="purchase">
        <Parallax bgImage="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" strength={500}>
      <div style={{ height: '100vh' }}>
      <div className="flex" style={backgroundStyle}>
            {/* left container */}
        <div className="w-1/3 flex flex-col items-center justify-center ml-[50px]">
        <img src="https://store-images.s-microsoft.com/image/apps.65212.14501696194323418.5696fcf1-5727-45da-a94c-1fdd9ad791ae.2779a381-3f89-4cbf-b4c3-d736c980e7de?w=400&h=600" alt="Portrait" className="h-[200px] mb-4 ml-4" />
      <div className="space-y-2 flex flex-col w-[250px] font-bold">
        {/* Drop down bars. We should make it separately as a component and props should be passed. */}
      <select className="border p-2 bg-slate-500">
        <option>INDIA</option>
        <option>JAPAN</option>
        <option>USA</option>
      </select>
      <select className="border p-2 bg-slate-500">
        <option>STEAM</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <select className="border p-2 bg-slate-500">
        <option>DIGITAL EDITION</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>

    </div>
    <Buttons
    width="250px"
    height="40px"
    text="Purchase"
    className="mt-5 bg-orange-500"
    />
    </div>
    {/* right container */}
    <div className="relative w-1/3 h-[300px] ml-56 mt-44">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/022/947/247/original/rustic-splash-texture-abstract-background-weathered-surface-and-shape-graphic-illustration-with-transparent-background-free-png.png)'
}}>
  <div className="relative z-10 flex flex-col items-center justify-center text-white p-14">
    <h1 className="text-4xl font-bold mb-4 mt-7">DIGITAL EDITION</h1>
    <p className="font-semibold">Tony Hawk's Pro Skater 1+2 Game.</p>
  </div>
  </div>
</div>
        </div>
      </div>
    </Parallax>
        </section>
        
        </>
    )
}


export default Purchase;

//poster image address: "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/09/FREESTYLIN_FINAL_LANDSCAPE_1920X1080_JPG-9928423d535d3d18f841.jpg"