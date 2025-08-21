import React from 'react'
import Image from 'next/image'

function Page() {
    const services = [
        {
            id: 1,
            title: "Personal Training",
            description: "One-on-one coaching with certified trainers",
            icon: "👤",
            features: ["Customized workout plans", "Progress tracking", "Nutrition guidance", "Goal-specific training"]
        },
        {
            id: 2,
            title: "Group Classes",
            description: "High-energy group workout sessions",
            icon: "👥",
            features: ["HIIT classes", "CrossFit sessions", "Yoga classes", "Zumba & Dance"]
        },
        {
            id: 3,
            title: "Strength Training",
            description: "Advanced equipment for muscle building",
            icon: "💪",
            features: ["Free weights", "Resistance machines", "Olympic lifting", "Powerlifting setup"]
        },
        {
            id: 4,
            title: "Cardio Training",
            description: "State-of-the-art cardiovascular equipment",
            icon: "❤️",
            features: ["Treadmills", "Ellipticals", "Rowing machines", "Spin bikes"]
        },
        {
            id: 5,
            title: "Nutrition Counseling",
            description: "Expert dietary guidance and meal planning",
            icon: "🍎",
            features: ["Diet planning", "Supplement advice", "Body composition analysis", "Weight management"]
        },
        {
            id: 6,
            title: "Recovery Services",
            description: "Post-workout recovery and wellness",
            icon: "🧘",
            features: ["Massage therapy", "Stretching sessions", "Steam room", "Sauna facility"]
        }
    ];

    const equipment = [
        {
            id: 1,
            name: "Smith Machine",
            bodyPart: "Full Body",
            primaryMuscles: "Chest, Shoulders, Legs, Back",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Guided barbell system for safe and controlled lifting",
            benefits: ["Enhanced safety", "Proper form guidance", "Versatile exercises", "Beginner friendly"],
            exercises: ["Squats", "Bench Press", "Rows", "Shoulder Press"]
        },
        {
            id: 2,
            name: "Cable Crossover Machine",
            bodyPart: "Upper Body",
            primaryMuscles: "Chest, Shoulders, Arms, Back",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Dual adjustable cable system for functional movements",
            benefits: ["Full range of motion", "Constant tension", "Multiple angles", "Functional training"],
            exercises: ["Cable Flyes", "Lat Pulldowns", "Tricep Extensions", "Face Pulls"]
        },
        {
            id: 3,
            name: "Leg Press Machine",
            bodyPart: "Lower Body",
            primaryMuscles: "Quadriceps, Glutes, Hamstrings",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Heavy-duty leg press for lower body strength",
            benefits: ["High weight capacity", "Joint-friendly", "Targeted leg training", "Progressive overload"],
            exercises: ["Leg Press", "Calf Press", "Single Leg Press", "Narrow Stance Press"]
        },
        {
            id: 4,
            name: "Lat Pulldown Machine",
            bodyPart: "Upper Body",
            primaryMuscles: "Latissimus Dorsi, Biceps, Rhomboids",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Seated pulling machine for back development",
            benefits: ["Back width development", "Controlled movement", "Various grip options", "Beginner accessible"],
            exercises: ["Wide Grip Pulldowns", "Close Grip Pulls", "Reverse Grip", "Behind Neck Pulls"]
        },
        {
            id: 5,
            name: "Chest Press Machine",
            bodyPart: "Upper Body",
            primaryMuscles: "Pectorals, Anterior Deltoids, Triceps",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Seated chest press for upper body strength",
            benefits: ["Stable platform", "Isolation focus", "Safety features", "Progressive resistance"],
            exercises: ["Chest Press", "Incline Press", "Single Arm Press", "Isometric Holds"]
        },
        {
            id: 6,
            name: "Adjustable Dumbbells",
            bodyPart: "Full Body",
            primaryMuscles: "All Muscle Groups",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Premium adjustable dumbbell sets for versatile training",
            benefits: ["Space efficient", "Quick weight changes", "Full body training", "Functional movements"],
            exercises: ["Bicep Curls", "Shoulder Press", "Lunges", "Chest Flyes"]
        },
        {
            id: 7,
            name: "Rowing Machine",
            bodyPart: "Full Body",
            primaryMuscles: "Back, Legs, Arms, Core",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Commercial rowing machine for cardio and strength",
            benefits: ["Full body workout", "Low impact", "Cardio + strength", "Performance tracking"],
            exercises: ["Steady State Rowing", "Interval Training", "Sprint Rows", "Endurance Rows"]
        },
        {
            id: 8,
            name: "Olympic Barbell Set",
            bodyPart: "Full Body",
            primaryMuscles: "All Major Muscle Groups",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Professional Olympic barbells with complete weight plates",
            benefits: ["Maximum load capacity", "Compound movements", "Athletic performance", "Strength building"],
            exercises: ["Deadlifts", "Squats", "Bench Press", "Olympic Lifts"]
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
                            OUR <span className="text-red-500">SERVICES</span>
                        </h1>
                        <div className="w-32 h-1 bg-red-500 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Experience comprehensive fitness solutions with state-of-the-art equipment, expert guidance, and premium services designed to transform your body and elevate your performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-gradient-to-r from-red-900/10 via-black to-gray-900/50 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            PREMIUM <span className="text-red-500">SERVICES</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Comprehensive fitness solutions tailored to your goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div 
                                key={service.id}
                                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                            >
                                <div className="text-center mb-6">
                                    <div className="text-6xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mt-2">{service.description}</p>
                                </div>

                                <div className="space-y-3">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center text-gray-300">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    LEARN MORE
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment Section */}
            <section className="py-20 bg-gradient-to-bl from-gray-900 via-black to-red-900/20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/15 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            PREMIUM <span className="text-red-500">EQUIPMENT</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            State-of-the-art machinery designed for maximum results and safety
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {equipment.map((item) => (
                            <div 
                                key={item.id}
                                className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden group"
                            >
                                {/* Equipment Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {item.bodyPart}
                                        </div>
                                    </div>
                                </div>

                                {/* Equipment Details */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                                        {item.name}
                                    </h3>
                                    
                                    <div className="text-red-500 font-semibold mb-3">
                                        Primary: {item.primaryMuscles}
                                    </div>
                                    
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Benefits */}
                                    <div className="mb-4">
                                        <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {item.benefits.map((benefit, index) => (
                                                <div key={index} className="flex items-center text-gray-400 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Exercises */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-2">Key Exercises:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.exercises.map((exercise, index) => (
                                                <span 
                                                    key={index}
                                                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                                                >
                                                    {exercise}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                        BOOK TRAINING SESSION
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Features */}
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-red-900/25 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            FACILITY <span className="text-red-500">FEATURES</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">24/7 Access</h3>
                            <p className="text-gray-400">Train anytime with round-the-clock facility access</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Safety First</h3>
                            <p className="text-gray-400">Advanced safety features and emergency protocols</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Latest Tech</h3>
                            <p className="text-gray-400">Cutting-edge equipment with smart technology</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                            <p className="text-gray-400">Professional trainers always available for guidance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-tr from-black via-gray-900 to-red-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        EXPERIENCE THE <span className="text-red-500">DIFFERENCE</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book a tour today and discover why Armour Zone is the premier destination for serious fitness enthusiasts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            BOOK FACILITY TOUR
                        </button>
                        <button className="border-2 border-gray-500 text-gray-300 hover:border-red-500 hover:text-red-500 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            VIEW EQUIPMENT LIST
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page