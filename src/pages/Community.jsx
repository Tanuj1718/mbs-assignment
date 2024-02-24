import React from 'react';
import Buttons from '../components/Buttons';
import { Parallax } from 'react-parallax';

const Community = () => {
  return (
    <>
    <section id="contact">
    <Parallax bgImage="path/to/your/image.jpg" strength={500}>
      <div style={{ height: '100vh' }}>
      <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
    >
      <div className="text-black flex flex-col items-center font-serif">
        <h1 className=' text-4xl font-bold '>Join The Community</h1>
        <p className='pt-2'>The dream world of gaming.</p>

        <Buttons
        width="200px"
        height="40px"
        className="m-5 bg-black text-xl font-serif"
        text="Join Us"
        />
      </div>
    </div>
      </div>
    </Parallax>
    </section>
    </>
    
  );
};

export default Community;
