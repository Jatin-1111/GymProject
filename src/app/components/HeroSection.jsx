import React from 'react';
import Image from 'next/image';

const Hero3DSection = () => {
    return (
        <section className="relative h-screen overflow-hidden bg-black">
            {/* Animated Background Effects */}
            <div className="absolute inset-0">
                {/* Dynamic gradient backgrounds */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-purple-900/20 to-black animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-conic from-red-900/20 via-transparent to-blue-900/20 animate-spin-slow"></div>

                {/* Particle effects */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40 animation-delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-30 animation-delay-2000"></div>

                {/* Neon grid lines */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-400 to-transparent"></div>
                </div>
            </div>

            {/* Fighter Image - Left Side with 3D Transform */}
            <div className="absolute left-0 top-0 w-3/4 h-full z-20">
                <div className="relative w-full h-full transform-gpu perspective-1000">
                    <div className="absolute inset-0 transform rotate-y-12 hover:rotate-y-6 transition-transform duration-700 ease-out">
                        <Image
                            src="/forbg5_bg.png" // Update this path according to your actual file location
                            alt="Fighter"
                            fill
                            // className="object-contain object-left filter drop-shadow-2xl"
                            className="object-contain object-left filter drop-shadow-2xl translate-x-10"

                            style={{
                                filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 60px rgba(220, 38, 38, 0.4))'
                            }}
                        />
                        {/* Additional glow effects around the fighter */}
                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-red-500/10 to-transparent animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* 3D Text Content - Right Side */}
            <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center z-30">
                <div className="text-center transform-gpu perspective-1000">
                    {/* Main Title with 3D Effect */}
                    <div className="relative mb-8">
                        <h1 className="text-6xl md:text-8xl font-black tracking-wider transform-gpu">
                            {/* Back layer - Shadow */}
                            <span className="absolute inset-0 text-gray-800 transform translate-x-4 translate-y-4 -z-10">
                                ARMOUR
                            </span>
                            {/* Middle layer - Neon glow */}
                            <span className="absolute inset-0 text-blue-400 transform translate-x-2 translate-y-2 -z-5 animate-pulse"
                                style={{
                                    textShadow: '0 0 20px #60a5fa, 0 0 40px #3b82f6, 0 0 80px #1d4ed8'
                                }}>
                                ARMOUR
                            </span>
                            {/* Front layer - Main text */}
                            <span className="relative text-white transform-gpu hover:scale-105 transition-transform duration-300"
                                style={{
                                    textShadow: '0 0 10px #fff, 0 0 20px #60a5fa, 0 0 40px #3b82f6'
                                }}>
                                ARMOUR
                            </span>
                        </h1>

                        <h1 className="text-6xl md:text-8xl font-black tracking-wider transform-gpu mt-4">
                            {/* Back layer - Shadow */}
                            <span className="absolute inset-0 text-gray-800 transform translate-x-4 translate-y-4 -z-10">
                                ZONE
                            </span>
                            {/* Middle layer - Different color for contrast */}
                            <span className="absolute inset-0 text-red-400 transform translate-x-2 translate-y-2 -z-5 animate-pulse"
                                style={{
                                    textShadow: '0 0 20px #f87171, 0 0 40px #ef4444, 0 0 80px #dc2626'
                                }}>
                                ZONE
                            </span>
                            {/* Front layer */}
                            <span className="relative text-white transform-gpu hover:scale-105 transition-transform duration-300"
                                style={{
                                    textShadow: '0 0 10px #fff, 0 0 20px #f87171, 0 0 40px #ef4444'
                                }}>
                                ZONE
                            </span>
                        </h1>
                    </div>

                    {/* CTA Button with 3D effect */}
                    <div className="relative">

                    </div>
                </div>
            </div>

            {/* Additional atmospheric effects */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Floating energy orbs */}
                <div className="absolute top-1/4 left-3/4 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60 blur-sm"></div>
                <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-red-400 rounded-full animate-float-delayed opacity-40 blur-sm"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50 blur-sm"></div>

                {/* Scan lines effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-scan-lines"></div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes scan-lines {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-scan-lines {
          animation: scan-lines 4s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
      `}</style>
        </section>
    );
};

export default Hero3DSection;