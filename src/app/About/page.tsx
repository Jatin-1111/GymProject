'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function About() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-black">
            {/* Hero About Section */}
            <section className="relative py-7 sm:py-11 lg:py-10 overflow-hidden">
                <div className="absolute inset-0 bg-black"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-xl font-[Almendra] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-20 text-white sm:mb-6 font-semibold leading-tight !mb-0">
                            ABOUT
                        </h1>
                        <h1 className="text-3xl font-[Almendra] text-red-800 xs:text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 leading-tight">
                            ARMOUR ZONE
                        </h1>
                        <p className="font-[Poppins] text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
                            Where Goals Become Reality - Transform Your Body, Mind & Soul
                        </p>
                    </div>
                </div>
            </section>

            {/* Motivational Quote Section */}
            <section className=" relative">
                <div className="absolute inset-0 bg-black"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                        {/* Left Side - Motivational Content */}
                        <div className="order-2 lg:order-1">
                            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Gym Equipment"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
                                    <h3 className="text-xl font-[Poppins] sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                        BECOME STRONGER<br />
                                        <span className="text-red-500 font-[Poppins]">IS YOUR CHOICE</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - About Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl font-[Almendra] sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                WHERE CHAMPIONS 
                            </h2>
                            <h2 className="text-2xl font-[Almendra] sm:text-3xl lg:text-4xl font-bold text-red-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                                ARE FORGED
                            </h2>
                            <p className="text-gray-300 font-[Poppins] text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                                At Armour Zone Elite, we do not just build bodies - we forge champions. Our state-of-the-art facility combines cutting-edge equipment with expert guidance to help you achieve extraordinary results.
                            </p>
                            <p className="text-gray-300 text-base font-[Poppins] sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                Whether you are a beginner taking your first steps or an athlete pushing your limits, our premium environment and professional trainers ensure every goal becomes reality.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 sm:w-16 h-1 bg-red-500"></div>
                                <span className="text-red-500 font-bold text-base font-[Poppins] sm:text-lg">ELITE PERFORMANCE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd Anniversary Offers */}
            <section className="py-10 sm:py-16 lg:py-20 relative">
                <div className="absolute inset-0 bg-black"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-[Almendra] md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            2ND <span className="text-red-500 font-[Almendra]">ANNIVERSARY</span>
                        </h2>
                        <div className="text-xl font-[Almendra] sm:text-2xl lg:text-3xl font-bold text-red-500 mb-2 sm:mb-4">
                            OFFERS (TILL 15TH September)
                        </div>
                        <p className="text-base sm:text-lg font-[Poppins] lg:text-xl text-gray-300 px-2">
                            Celebrate with us and get exclusive membership deals!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2 lg:gap-2 lg:mx-10">
                        {/* Plan 1 */}
                        <div className="bg-black backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden flex flex-col h-full">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Almendra]">3 MONTHS</h3>
                            </div>
                            <div className="mb-4 sm:mb-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-[Poppins] font-bold text-red-500 mb-1 sm:mb-2">₹5,000</div>
                                <div className="text-gray-400 text-smfont-[Poppins] sm:text-base lg:text-lg">+2 MONTHS FREE (Special Offer)</div>
                            </div>
                            <ul className="text-gray-300 font-[Poppins] text-sm sm:text-base space-y-1 sm:space-y-2 mb-6 sm:mb-8 flex-grow">
                                <li>✓ Full Gym Access</li>
                                <li>✓ Basic Training Support</li>
                                <li>✓ Locker Facility</li>
                            </ul>
                            <button className="w-full bg-red-800 font-[Poppins] hover:bg-red-900 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 mt-auto">
                                CHOOSE PLAN
                            </button>
                        </div>

                        {/* Plan 2 - Popular */}
                        <div className="bg-black backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-red-500 hover:border-red-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden shadow-2xl flex flex-col h-full">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Almendra]">6 MONTHS</h3>
                            </div>
                            <div className="mb-4 sm:mb-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 font-[Poppins] sm:mb-2">₹7,000</div>
                                <div className="text-gray-400 text-sm sm:text-base font-[Poppins] lg:text-lg">+2 MONTHS FREE (Special Offer)</div>
                            </div>
                            <ul className="text-gray-300 text-sm font-[Poppins] sm:text-base space-y-1 sm:space-y-2 mb-6 sm:mb-8 flex-grow">
                                <li>✓ Full Gym Access</li>
                                <li>✓ Personal Training Sessions</li>
                                <li>✓ Nutrition Guidance</li>
                                <li>✓ Premium Locker</li>
                            </ul>
                            <button className="w-full bg-red-800 font-[Poppins] hover:bg-red-900 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 mt-auto">
                                CHOOSE PLAN
                            </button>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-black backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden flex flex-col h-full sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-[Almendra]">12 MONTHS</h3>
                            </div>
                            <div className="mb-4 sm:mb-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 font-[Poppins] sm:mb-2">₹11,000</div>
                                <div className="text-gray-400 text-sm sm:text-base font-[Poppins] lg:text-lg">+2 MONTHS FREE (Special Offer)</div>
                            </div>
                            <ul className="text-gray-300 text-sm sm:text-base space-y-1 font-[Poppins] sm:space-y-2 mb-6 sm:mb-8 flex-grow">
                                <li>✓ Full Gym Access</li>
                                <li>✓ Unlimited Personal Training</li>
                                <li>✓ Complete Nutrition Plan</li>
                                <li>✓ VIP Locker & Amenities</li>
                            </ul>
                            <button className="w-full bg-red-800 hover:bg-red-900 font-[Poppins] text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 mt-auto">
                                CHOOSE PLAN
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About