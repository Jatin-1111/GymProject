import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero About Section */}
            <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-red-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                            ABOUT <span className="text-red-500">ARMOUR ZONE</span>
                        </h1>
                        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Where Goals Become Reality - Transform Your Body, Mind & Soul
                        </p>
                    </div>
                </div>
            </section>

            {/* Motivational Quote Section */}
            <section className="py-20 bg-gradient-to-r from-red-900/10 via-black to-gray-900/50 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Motivational Content */}
                        <div>
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Gym Equipment" 
                                    className="w-full h-96 object-cover rounded-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-4xl font-bold text-white mb-4">
                                        BECOME STRONGER<br/>
                                        <span className="text-red-500">IS YOUR CHOICE</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - About Content */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">
                                WHERE CHAMPIONS <span className="text-red-500">ARE FORGED</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                At Armour Zone Elite, we do not just build bodies - we forge champions. Our state-of-the-art facility combines cutting-edge equipment with expert guidance to help you achieve extraordinary results.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Whether you are a beginner taking your first steps or an athlete pushing your limits, our premium environment and professional trainers ensure every goal becomes reality.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-1 bg-red-500"></div>
                                <span className="text-red-500 font-bold text-lg">ELITE PERFORMANCE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd Anniversary Offers */}
            <section className="py-20 bg-gradient-to-bl from-gray-900 via-black to-red-900/20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/15 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            2ND <span className="text-red-500">ANNIVERSARY</span>
                        </h2>
                        <div className="text-3xl font-bold text-red-500 mb-4">
                            OFFERS (TILL 15TH JUNE)
                        </div>
                        <p className="text-xl text-gray-300">
                            Celebrate with us and get exclusive membership deals!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-4 -translate-y-2">
                                STARTER
                            </div>
                            <div className="flex items-center mb-6">
                                <svg className="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                </svg>
                                <h3 className="text-2xl font-bold text-white">3 MONTHS</h3>
                            </div>
                            <div className="mb-6">
                                <div className="text-4xl font-bold text-red-500 mb-2">₹5,000</div>
                                <div className="text-gray-400 text-lg">+2 MONTHS FREE (Special Offer)</div>
                            </div>
                            <ul className="text-gray-300 space-y-2 mb-8">
                                <li>✓ Full Gym Access</li>
                                <li>✓ Basic Training Support</li>
                                <li>✓ Locker Facility</li>
                            </ul>
                            <button className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                CHOOSE PLAN
                            </button>
                        </div>

                        {/* Plan 2 - Popular */}
                        <div className="bg-gradient-to-br from-red-900/30 to-black p-8 rounded-xl border-2 border-red-500 hover:border-red-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-4 -translate-y-2">
                                POPULAR
                            </div>
                            <div className="flex items-center mb-6">
                                <svg className="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <h3 className="text-2xl font-bold text-white">6 MONTHS</h3>
                            </div>
                            <div className="mb-6">
                                <div className="text-4xl font-bold text-red-500 mb-2">₹7,000</div>
                                <div className="text-gray-400 text-lg">+2 MONTHS FREE (Special Offer)</div>
                            </div>
                            <ul className="text-gray-300 space-y-2 mb-8">
                                <li>✓ Full Gym Access</li>
                                <li>✓ Personal Training Sessions</li>
                                <li>✓ Nutrition Guidance</li>
                                <li>✓ Premium Locker</li>
                            </ul>
                            <button className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                CHOOSE PLAN
                            </button>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-4 -translate-y-2">
                                PREMIUM
                            </div>
                            <div className="flex items-center mb-6">
                                <svg className="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                </svg>
                                <h3 className="text-2xl font-bold text-white">12 MONTHS</h3>
                            </div>
                            <div className="mb-6">
                                <div className="text-4xl font-bold text-red-500 mb-2">₹11,000</div>
                                <div className="text-gray-400 text-lg">+2 MONTHS FREE (Special Offer)</div>
                            </div>
                            <ul className="text-gray-300 space-y-2 mb-8">
                                <li>✓ Full Gym Access</li>
                                <li>✓ Unlimited Personal Training</li>
                                <li>✓ Complete Nutrition Plan</li>
                                <li>✓ VIP Locker & Amenities</li>
                            </ul>
                            <button className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                CHOOSE PLAN
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gym Timings & Location */}
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-red-900/25 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Timings */}
                        <div className="bg-gradient-to-br from-red-900/20 to-black p-8 rounded-xl border border-red-600">
                            <div className="text-center mb-8">
                                <h3 className="text-4xl font-bold text-white mb-4">
                                    GYM <span className="text-red-500">TIMINGS</span>
                                </h3>
                                <div className="w-20 h-1 bg-red-500 mx-auto"></div>
                            </div>
                            
                            <div className="bg-red-600 p-6 rounded-lg text-center mb-6 transform hover:scale-105 transition-all duration-300">
                                <div className="text-3xl font-bold text-white mb-2">
                                    5:30 AM - 10:00 PM
                                </div>
                                <div className="text-red-100 text-lg">
                                    DAILY
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                                    <div className="text-red-500 font-bold text-lg">MORNING</div>
                                    <div className="text-gray-300">5:30 AM - 12:00 PM</div>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                                    <div className="text-red-500 font-bold text-lg">EVENING</div>
                                    <div className="text-gray-300">4:00 PM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-red-600">
                            <div className="text-center mb-8">
                                <h3 className="text-4xl font-bold text-white mb-4">
                                    VISIT <span className="text-red-500">US</span>
                                </h3>
                                <div className="w-20 h-1 bg-red-500 mx-auto"></div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-red-500 mb-2">ARMOUR ZONE Elite</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            Second Floor, SSL Tower, Ambala - Chandigarh Expy,<br/>
                                            above Reliance Smartpoint, Shakti Nagar,<br/>
                                            Bhagat Singh Nagar, Chandigarh,<br/>
                                            Dera Bassi, Punjab 140507
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-gray-300">
                                            <div>+91 7529011102</div>
                                            <div>+91 9814187268</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-tr from-black via-gray-900 to-red-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        START YOUR <span className="text-red-500">TRANSFORMATION</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join the Armour Zone family and experience the difference that premium training makes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            JOIN TODAY
                        </button>
                        <button className="border-2 border-gray-500 text-gray-300 hover:border-red-500 hover:text-red-500 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            BOOK VISIT
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About