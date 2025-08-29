// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <section className="h-screen mt-5 w-full flex items-center justify-center bg-black relative overflow-hidden">

//       <div className="absolute inset-0 bg-gradient-to-bl from-red-900/40 to-transparent z-10"></div>

//       {/* Background Image */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
//         <Image
//           src="/flex1_bg.png"
//           alt="Background Image"
//           width={800} 
//           height={600} 
//           className="object-contain mt-[100px]"
//         />
//       </div>

//       {/* Main Text */}
//       <div className="text-center relative z-30">
//         <h1 className="text-6xl font-[Almendra] sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-red-900/80 uppercase drop-shadow-4xl">
//           ARMOUR ZONE
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="h-screen mt-5 w-full bg-black relative overflow-hidden flex items-center justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-red-900/40 to-transparent z-10"></div>

      {/* ----------------- Desktop / Laptop Layout ----------------- */}
      <div className="hidden md:flex w-full h-full items-center justify-center">
        {/* Background Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
          <Image
            src="/flex1_bg.png"
            alt="Background Image"
            width={800}
            height={600}
            className="object-contain mt-[100px]"
          />
        </div>

        {/* Main Text */}
        <div className="text-center relative z-30">
          <h1 className="text-6xl font-[Almendra] sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-red-900/80 uppercase drop-shadow-4xl">
            ARMOUR ZONE
          </h1>
        </div>
      </div>

      {/* ----------------- Mobile Layout ----------------- */}
      <div className="flex md:hidden w-full h-full items-center justify-between relative min-h-screen">
        {/* Left Side - ARMOUR vertically */}
        <div className="flex flex-col items-center justify-center space-y-1 text-red-900/90 text-7xl font-[Almendra] font-black z-30 pl-2">
          {"ARMOUR".split("").map((char, index) => (
            <span key={index} className="drop-shadow-lg">{char}</span>
          ))}
        </div>

        {/* Center Image - Absolutely positioned to center */}
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <Image
            src="/withshoes-removebg-preview.png"
            alt="Background Image"
            width={500}
            height={500}
            className="object-contain"
            style={{
              width: '490px',
              height: '500px',
              minWidth: '490px',
              minHeight: '500px'
            }}
          />
        </div>

        {/* Right Side - ZONE vertically */}
        <div className="flex flex-col items-center justify-center space-y-1 text-red-900/90 text-7xl font-[Almendra] font-black z-30 pr-2">
          {"ZONE".split("").map((char, index) => (
            <span key={index} className="drop-shadow-lg">{char}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
