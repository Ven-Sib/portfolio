import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <img 
        src="/portfolio/images/yummy.png" 
        alt="Vensen Sibanda" 
        className="home-image"
      />
      <h2 className="text-4xl font-bold mt-6">Hello, I'm Vensen Sibanda</h2>
      <p className="mt-4 text-gray-600">A passionate software engineer crafting innovative solutions to shape the future.</p>
    </div>
  );
}

export default Home;
