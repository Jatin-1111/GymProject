import React from 'react'
import Image from 'next/image'
function Homepage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Premium Gym Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        UNLEASH YOUR POTENTIAL
                        {/* <span className="text-red-500 block">POTENTIAL</span> */}
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        with
                        {/* <span className="text-red-500 block">POTENTIAL</span> */}
                    </h1>
                    <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-6 leading-tight">
                        ARMOUR ZONE
                        {/* <span className="text-red-500 block">POTENTIAL</span> */}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join the most prestigious fitness destination where champions are made and limits are broken.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center align-items-center">
                        <button className="bg-red-500 hover:bg-red-800 text-black hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl  border-black hover:border-black">
                            START YOUR JOURNEY
                        </button>
                        {/* <button className="bg-red-900 hover:bg-red-800 text-black hover:text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 border border-black hover:border-black">
                            Login/Sign-in
                        </button> */}

                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            WHY CHOOSE <span className="text-red-500">ARMOUR ZONE FITNESS</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Experience world-class facilities, expert trainers, and a community dedicated to excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">STATE-OF-THE-ART EQUIPMENT</h3>
                            <p className="text-gray-400 text-center leading-relaxed">
                                Premium machines and free weights from the best leading manufacturers, maintained to perfection.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">EXPERT TRAINERS</h3>
                            <p className="text-gray-400 text-center leading-relaxed">
                                Certified professionals with years of experience helping members achieve their fitness goals.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">24/7 ACCESS</h3>
                            <p className="text-gray-400 text-center leading-relaxed">
                                Train on your schedule with round-the-clock access to all facilities and amenities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Showcase */}
            <section className="py-20 bg-gradient-to-bl from-gray-900 via-black to-red-900/20 relative">
                <div className="absolute inset-0 bg-gradient-to-l from-red-900/15 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            WORLD-CLASS <span className="text-red-500">FACILITIES</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Facility 1 */}
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Weight Training Area"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-2xl font-bold text-white mb-2">STRENGTH TRAINING</h3>
                                <p className="text-gray-300">Professional-grade equipment for serious lifters</p>
                            </div>
                        </div>

                        {/* Facility 2 */}
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Cardio Area"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-2xl font-bold text-white mb-2">CARDIO ZONE</h3>
                                <p className="text-gray-300">High-tech cardio equipment with entertainment systems</p>
                            </div>
                        </div>

                        {/* Facility 3 */}
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Group Classes"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-2xl font-bold text-white mb-2">GROUP CLASSES</h3>
                                <p className="text-gray-300">Dynamic classes for all fitness levels</p>
                            </div>
                        </div>

                        {/* Facility 4 */}
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Swimming Pool"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-2xl font-bold text-white mb-2">AQUATIC CENTER</h3>
                                <p className="text-gray-300">Olympic-sized pool and spa facilities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-red-900/20 via-gray-900 to-black relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">50K+</div>
                            <div className="text-gray-400 font-semibold">MEMBERS</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">15+</div>
                            <div className="text-gray-400 font-semibold">YEARS</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">100+</div>
                            <div className="text-gray-400 font-semibold">TRAINERS</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">24/7</div>
                            <div className="text-gray-400 font-semibold">ACCESS</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-tr from-black via-gray-900 to-red-900/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        READY TO <span className="text-red-500">TRANSFORM?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of members who have already transformed their lives. Your journey starts today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            JOIN NOW
                        </button>
                        <button className="border-2 border-gray-500 text-gray-300 hover:border-white hover:text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            FREE TRIAL
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage