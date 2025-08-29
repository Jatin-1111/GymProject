'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();
    const services = [
        {
            id: 1,
            title: "Personal Training",
            description: "One-on-one coaching with certified trainers",
            icon: "👤",
            image: "/single.jpeg", // Add your image path here
            features: ["Customized workout plans", "Progress tracking", "Nutrition guidance", "Goal-specific training"]
        },
        {
            id: 2,
            title: "Group Classes",
            description: "High-energy group workout sessions",
            icon: "👥",
            image: "/group.png", // Add your image path here
            features: ["HIIT classes", "CrossFit sessions", "Yoga classes", "Zumba & Dance"]
        },
        {
            id: 3,
            title: "Strength Training",
            description: "Advanced equipment for muscle building",
            icon: "💪",
            image: "/strength.jpeg", // Add your image path here
            features: ["Free weights", "Resistance machines", "Olympic lifting", "Powerlifting setup"]
        },
        {
            id: 4,
            title: "Cardio Training",
            description: "State-of-the-art cardiovascular equipment",
            icon: "❤️",
            image: "/cardio.jpeg", // Add your image path here
            features: ["Treadmills", "Ellipticals", "Rowing machines", "Spin bikes"]
        },
        {
            id: 5,
            title: "Nutrition Counseling",
            description: "Expert dietary guidance and meal planning",
            icon: "🍎",
            image: "/protein.jpeg", // Add your image path here
            features: ["Diet planning", "Supplement advice", "Body composition analysis", "Weight management"]
        },
        {
            id: 6,
            title: "Recovery Services",
            description: "Post-workout recovery and wellness",
            icon: "🧘",
            image: "/recovery.jpeg", // Add your image path here
            features: ["Massage therapy", "Stretching sessions", "Steam room", "Sauna facility"]
        }
    ];

    const equipment = [
        {
            id: 1,
            name: "Smith Machine",
            bodyPart: "Full Body",
            primaryMuscles: "Chest, Shoulders, Legs, Back",
            image: "/smith.jpeg",
            description: "Guided barbell system for safe and controlled lifting",
            benefits: ["Enhanced safety", "Proper form guidance", "Versatile exercises", "Beginner friendly"],
            exercises: ["Squats", "Bench Press", "Rows", "Shoulder Press"]
        },
        {
            id: 2,
            name: "Cable Crossover Machine",
            bodyPart: "Upper Body",
            primaryMuscles: "Chest, Shoulders, Arms, Back",
            image: "/crossover.jpeg",
            description: "Dual adjustable cable system for functional movements",
            benefits: ["Full range of motion", "Constant tension", "Multiple angles", "Functional training"],
            exercises: ["Cable Flyes", "Lat Pulldowns", "Tricep Extensions", "Face Pulls"]
        },
        {
            id: 3,
            name: "Leg Press Machine",
            bodyPart: "Lower Body",
            primaryMuscles: "Quadriceps, Glutes, Hamstrings",
            image: "/legpress.jpeg",
            description: "Heavy-duty leg press for lower body strength",
            benefits: ["High weight capacity", "Joint-friendly", "Targeted leg training", "Progressive overload"],
            exercises: ["Leg Press", "Calf Press", "Single Leg Press", "Narrow Stance Press"]
        },
        {
            id: 4,
            name: "Lat Pulldown Machine",
            bodyPart: "Upper Body",
            primaryMuscles: "Latissimus Dorsi, Biceps, Rhomboids",
            image: "/pulldown.jpeg",
            description: "Seated pulling machine for back development",
            benefits: ["Back width development", "Controlled movement", "Various grip options", "Beginner accessible"],
            exercises: ["Wide Grip Pulldowns", "Close Grip Pulls", "Reverse Grip", "Behind Neck Pulls"]
        },
        {
            id: 5,
            name: "Chest Press Machine",
            bodyPart: "Upper Body",
            primaryMuscles: "Pectorals, Anterior Deltoids, Triceps",
            image: "/chestpress.jpeg",
            description: "Seated chest press for upper body strength",
            benefits: ["Stable platform", "Isolation focus", "Safety features", "Progressive resistance"],
            exercises: ["Chest Press", "Incline Press", "Single Arm Press", "Isometric Holds"]
        },
        {
            id: 6,
            name: "Adjustable Dumbbells",
            bodyPart: "Full Body",
            primaryMuscles: "All Muscle Groups",
            image: "/dumbell.jpeg",
            description: "Premium adjustable dumbbell sets for versatile training",
            benefits: ["Space efficient", "Quick weight changes", "Full body training", "Functional movements"],
            exercises: ["Bicep Curls", "Shoulder Press", "Lunges", "Chest Flyes"]
        },
        {
            id: 7,
            name: "Rowing Machine",
            bodyPart: "Full Body",
            primaryMuscles: "Back, Legs, Arms, Core",
            image: "/rowing.jpeg",
            description: "Commercial rowing machine for cardio and strength",
            benefits: ["Full body workout", "Low impact", "Cardio + strength", "Performance tracking"],
            exercises: ["Steady State Rowing", "Interval Training", "Sprint Rows", "Endurance Rows"]
        },
        {
            id: 8,
            name: "Olympic Barbell Set",
            bodyPart: "Full Body",
            primaryMuscles: "All Major Muscle Groups",
            image: "/barbell.jpeg",
            description: "Professional Olympic barbells with complete weight plates",
            benefits: ["Maximum load capacity", "Compound movements", "Athletic performance", "Strength building"],
            exercises: ["Deadlifts", "Squats", "Bench Press", "Olympic Lifts"]
        },
        {
            id: 9,
            name: "Chest Press Machine",
            bodyPart: "Upper Body",
            primaryMuscles: "Pectorals, Anterior Deltoids, Triceps",
            image: "/chestpress.jpeg",
            description: "Seated chest press for upper body strength",
            benefits: ["Stable platform", "Isolation focus", "Safety features", "Progressive resistance"],
            exercises: ["Chest Press", "Incline Press", "Single Arm Press", "Isometric Holds"]
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-red-900/10 via-black to-gray-900/50 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Almendra] lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                            SERVICES <span className="text-red-500">WE OFFER</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg font-[Poppins] text-gray-400 max-w-3xl mx-auto px-4">
                            Comprehensive fitness solutions tailored to your goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 md:px-10 lg:mx-20">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:py-8 lg:py-15 border border-gray-800 group rounded-lg sm:rounded-none relative overflow-hidden"
                            >
                                {/* Background Image with Low Opacity */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                    />
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 text-center mb-4">
                                    
                                    <h3 className="text-lg font-[Almendra] sm:text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base font-[Poppins] text-gray-400 mt-2">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-black relative">
                <div className="absolute inset-0 bg-black"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-[Almendra] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                            OUR <span className="text-red-500 font-[Almendra]">EQUIPMENTS</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg font-[Poppins] xl:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                            State-of-the-art machinery designed for maximum results and safety
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 md:px-10 lg:mx-20">
                        {equipment.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gradient-to-br from-gray-900 to-black rounded-lg sm:rounded-xl border border-gray-800 overflow-hidden group cursor-pointer relative h-48 sm:h-60 md:h-64 lg:h-75"
                            >
                                {/* Default State - Image and Name */}
                                <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                                    {/* Equipment Image */}
                                    <div className="relative h-full overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Equipment Name Centered on Image */}
                                    <div className="absolute inset-0 flex items-center justify-center p-2">
                                        {/* <h3 className="text-lg font-[Poppins] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center px-2 sm:px-4 drop-shadow-2xl">
                                            {item.name}
                                        </h3> */}
                                        <h3 className="text-lgf font-[Almendra] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center px-2 sm:px-4 drop-shadow-2xl">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Hover State - Primary Muscles */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6">
                                    <h3 className="text-base font-[Almendra] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-500 mb-3 sm:mb-4 md:mb-6 text-center">
                                        Effective Parts
                                    </h3>
                                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium text-left">
                                        <ul className="space-y-1 font-[Poppins] sm:space-y-2">
                                            {item.primaryMuscles.split(',').map((muscle, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                                                    <span className="capitalize">{muscle.trim()}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Features */}
            <section className="py-12 sm:py-16 md:py-20 bg-black relative">
                <div className="absolute inset-0 bg-black"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-[Almendra] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                            FACILITY <span className="text-red-500 font-[Almendra]">FEATURES</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  px-4 sm:px-6 md:px-10 lg:mx-20">
                        <div className="text-center p-4 sm:p-6 bg-black rounded-lg sm:rounded-none">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-[Poppins] font-bold text-white mb-2">24/7 Access</h3>
                            <p className="text-sm sm:text-base font-[Poppins] text-gray-400">Train anytime with round-the-clock facility access</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-black rounded-lg sm:rounded-none">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-[Poppins] font-bold text-white mb-2">Safety First</h3>
                            <p className="text-sm sm:text-base font-[Poppins] text-gray-400">Advanced safety features and emergency protocols</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-black rounded-lg sm:rounded-none">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-[Poppins] font-bold text-white mb-2">Latest Tech</h3>
                            <p className="text-sm sm:text-base font-[Poppins] text-gray-400">Cutting-edge equipment with smart technology</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-black rounded-lg sm:rounded-none">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-[Poppins] font-bold text-white mb-2">Expert Support</h3>
                            <p className="text-sm sm:text-base font-[Poppins] text-gray-400">Professional trainers always available for guidance</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Page