import React from 'react'

function Page() {
    const trainers = [
        {
            id: 1,
            name: "VIKRAM SINGH",
            specialty: "Strength & Conditioning",
            experience: "8 Years Experience",
            certification: "Certified Personal Trainer",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Expert in powerlifting and muscle building"
        },
        {
            id: 2,
            name: "PRIYA SHARMA",
            specialty: "Yoga & Flexibility",
            experience: "6 Years Experience",
            certification: "Certified Yoga Instructor",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Specializes in flexibility and mindfulness training"
        },
        {
            id: 3,
            name: "RAHUL KUMAR",
            specialty: "CrossFit & HIIT",
            experience: "7 Years Experience",
            certification: "CrossFit Level 2 Trainer",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "High-intensity training and functional fitness"
        },
        {
            id: 4,
            name: "ANJALI PATEL",
            specialty: "Nutrition & Weight Loss",
            experience: "5 Years Experience",
            certification: "Certified Nutritionist",
            image: "https://images.unsplash.com/photo-1559239156-34c5de36767b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Expert in diet planning and weight management"
        },
        {
            id: 5,
            name: "ARJUN MEHTA",
            specialty: "Bodybuilding & Physique",
            experience: "9 Years Experience",
            certification: "IFBB Certified Coach",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Competition prep and physique transformation"
        },
        {
            id: 6,
            name: "NEHA GUPTA",
            specialty: "Pilates & Core Training",
            experience: "4 Years Experience",
            certification: "Certified Pilates Instructor",
            image: "https://images.unsplash.com/photo-1506629905622-700e58c8bd24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Core strengthening and posture correction"
        },
        {
            id: 7,
            name: "SURESH REDDY",
            specialty: "Sports Performance",
            experience: "10 Years Experience",
            certification: "Sports Science Graduate",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Athletic performance and injury prevention"
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-red-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                            EXPERT <span className="text-red-500">TRAINERS</span>
                        </h1>
                        <div className="w-32 h-1 bg-red-500 mx-auto mb-8"></div>
                    </div>

                    {/* Trainer Qualities Description */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                            At Armour Zone, our certified trainers are the backbone of your fitness journey. Each trainer brings years of specialized experience, 
                            professional certifications, and a deep passion for helping you achieve your goals. They combine scientific training methods with 
                            personalized attention, ensuring every member receives expert guidance tailored to their unique needs. Our trainers don't just count reps – 
                            they inspire, motivate, and transform lives through dedicated mentorship and proven results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Trainers Section */}
            <section className="py-20 bg-gradient-to-bl from-gray-900 via-black to-red-900/20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/15 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            OUR <span className="text-red-500">TRAINERS</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Meet the champions who will guide you to greatness
                        </p>
                    </div>

                    {/* Trainers Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trainers.map((trainer) => (
                            <div 
                                key={trainer.id}
                                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                            >
                                {/* Trainer Image */}
                                <div className="relative mb-6 overflow-hidden rounded-lg">
                                    <img 
                                        src={trainer.image} 
                                        alt={trainer.name}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {trainer.experience}
                                        </div>
                                    </div>
                                </div>

                                {/* Trainer Details */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                                        {trainer.name}
                                    </h3>
                                    
                                    <div className="text-red-500 font-semibold text-lg mb-3">
                                        {trainer.specialty}
                                    </div>
                                    
                                    <div className="text-gray-400 text-sm mb-4 bg-gray-800/50 px-3 py-2 rounded-lg">
                                        {trainer.certification}
                                    </div>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                        {trainer.description}
                                    </p>

                                    {/* Contact Button */}
                                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                        BOOK SESSION
                                    </button>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-red-900/10 via-black to-gray-900/50 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">100+</div>
                            <div className="text-gray-400 font-semibold">CERTIFIED TRAINERS</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">5000+</div>
                            <div className="text-gray-400 font-semibold">MEMBERS TRAINED</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">15+</div>
                            <div className="text-gray-400 font-semibold">SPECIALIZATIONS</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">98%</div>
                            <div className="text-gray-400 font-semibold">SUCCESS RATE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-tr from-black via-gray-900 to-red-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        READY TO <span className="text-red-500">TRAIN?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book a session with our expert trainers and start your transformation journey today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            BOOK FREE CONSULTATION
                        </button>
                        <button className="border-2 border-gray-500 text-gray-300 hover:border-red-500 hover:text-red-500 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            VIEW ALL TRAINERS
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page