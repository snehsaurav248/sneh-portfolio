// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: 'url(/assets/default-bg.jpg)' }}>
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-white">Explore my work and skills through the sections above.</p>
    </div>
  );
};

export default Home;
