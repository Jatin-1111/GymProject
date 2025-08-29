// 'use client'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// function Page() {
//     const router = useRouter()
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const [isAnimating, setIsAnimating] = useState(false)
//     const [slideDirection, setSlideDirection] = useState('next')
    
//     const trainers = [
//         {
//             id: 1,
//             name: "VIKRAM SINGH",
//             image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//         },
//         {
//             id: 2,
//             name: "PRIYA SHARMA",
//             image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//         },
//         {
//             id: 3,
//             name: "RAHUL KUMAR",
//             image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//         },
//         {
//             id: 4,
//             name: "ANJALI PATEL",
//             image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//         },
//         {
//             id: 5,
//             name: "ARJUN MEHTA",
//             image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//         },
//         {
//             id: 6,
//             name: "NEHA GUPTA",
//             image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//         },
//         {
//             id: 7,
//             name: "SURESH REDDY",
//             image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//         }
//     ]

//     const nextTrainer = () => {
//         if (isAnimating) return
//         setIsAnimating(true)
//         setSlideDirection('next')
        
//         setTimeout(() => {
//             setCurrentIndex((prevIndex) => 
//                 prevIndex + 1 >= trainers.length ? 0 : prevIndex + 1
//             )
//             setTimeout(() => setIsAnimating(false), 100)
//         }, 250)
//     }

//     const prevTrainer = () => {
//         if (isAnimating) return
//         setIsAnimating(true)
//         setSlideDirection('prev')
        
//         setTimeout(() => {
//             setCurrentIndex((prevIndex) => 
//                 prevIndex - 1 < 0 ? trainers.length - 1 : prevIndex - 1
//             )
//             setTimeout(() => setIsAnimating(false), 100)
//         }, 250)
//     }

//     // Get visible trainers (3 at a time)
//     const getVisibleTrainers = () => {
//         const visible = []
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % trainers.length
//             visible.push(trainers[index])
//         }
//         return visible
//     }

//     const visibleTrainers = getVisibleTrainers()

//     return (
//         <div className="min-h-screen bg-black">
//             {/* Our Trainers Section */}
//             <section className="py-20 bg-gradient-to-bl from-gray-900 via-black to-red-900/20 relative">
//                 <div className="absolute inset-0 bg-black"></div>
//                 <div className="max-w-7xl mx-auto px-4 relative z-10">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//                             OUR <span className="text-red-500">TRAINERS</span>
//                         </h2>
//                         <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
//                             Meet the champions who will guide you to greatness
//                         </p>
//                     </div>

//                     {/* Trainers Carousel */}
//                     <div className="relative">
//                         {/* Navigation Buttons */}
//                         <button
//                             onClick={prevTrainer}
//                             disabled={isAnimating}
//                             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg md:left-4 lg:left-8"
//                             aria-label="Previous trainer"
//                         >
//                             <ChevronLeft size={24} />
//                         </button>

//                         <button
//                             onClick={nextTrainer}
//                             disabled={isAnimating}
//                             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg md:right-4 lg:right-8"
//                             aria-label="Next trainer"
//                         >
//                             <ChevronRight size={24} />
//                         </button>

//                         {/* Trainers Container */}
//                         <div className="overflow-hidden px-4 md:px-16 lg:px-20">
//                             <div 
//                                 className="flex transition-all duration-500 ease-in-out"
//                                 style={{
//                                     transform: isAnimating 
//                                         ? slideDirection === 'next' 
//                                             ? 'translateX(-20%)' 
//                                             : 'translateX(20%)'
//                                         : 'translateX(0%)',
//                                     opacity: isAnimating ? 0.7 : 1,
//                                 }}
//                             >
//                                 {visibleTrainers.map((trainer, index) => (
//                                     <div 
//                                         key={`${trainer.id}-${currentIndex}-${index}`}
//                                         className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
//                                     >
//                                         <div className="bg-black p-4 md:p-6 rounded-xl hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
//                                             {/* Trainer Image */}
//                                             <div className="relative mb-4 md:mb-6 overflow-hidden rounded-lg h-48 md:h-64 lg:h-72">
//                                                 <Image
//                                                     src={trainer.image} 
//                                                     alt={trainer.name}
//                                                     width={400}
//                                                     height={300}
//                                                     className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
//                                                     unoptimized
//                                                 />
//                                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                                             </div>

//                                             {/* Trainer Name */}
//                                             <div className="text-center">
//                                                 <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
//                                                     {trainer.name}
//                                                 </h3>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Dots Indicator */}
//                         <div className="flex justify-center mt-8 space-x-2">
//                             {trainers.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setCurrentIndex(index)}
//                                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                                         index === currentIndex 
//                                             ? 'bg-red-500 scale-125' 
//                                             : 'bg-gray-600 hover:bg-gray-500'
//                                     }`}
//                                     aria-label={`Go to trainer ${index + 1}`}
//                                 />
//                             ))}
//                         </div>

//                         {/* Trainer Counter */}
//                         <div className="text-center mt-4">
//                             <span className="text-gray-400 text-sm md:text-base">
//                                 Showing {currentIndex + 1} / {Math.min(currentIndex + 3, trainers.length)} of trainers
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-16 md:py-20 bg-gradient-to-r from-red-900/10 via-black to-gray-900/50 relative">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
//                 <div className="max-w-7xl mx-auto px-4 relative z-10">
//                     <div className="grid grid-cols-3 md:grid-cols-3 text-center mx-20">
//                         <div>
//                             <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-2">20+</div>
//                             <div className="text-gray-400 font-semibold text-sm md:text-base">CERTIFIED TRAINERS</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-2">500+</div>
//                             <div className="text-gray-400 font-semibold text-sm md:text-base">MEMBERS TRAINED</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-2">15+</div>
//                             <div className="text-gray-400 font-semibold text-sm md:text-base">SPECIALIZATIONS</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Page

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Page() {
    const router = useRouter()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [slideDirection, setSlideDirection] = useState('next')
    
    const trainers = [
        {
            id: 1,
            name: "VIKRAM SINGH",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 2,
            name: "PRIYA SHARMA",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 3,
            name: "RAHUL KUMAR",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 4,
            name: "ANJALI PATEL",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 5,
            name: "ARJUN MEHTA",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 6,
            name: "NEHA GUPTA",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 7,
            name: "SURESH REDDY",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        }
    ]

    const nextTrainer = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setSlideDirection('next')
        
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex + 1 >= trainers.length ? 0 : prevIndex + 1
            )
            setTimeout(() => setIsAnimating(false), 100)
        }, 250)
    }

    const prevTrainer = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setSlideDirection('prev')
        
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex - 1 < 0 ? trainers.length - 1 : prevIndex - 1
            )
            setTimeout(() => setIsAnimating(false), 100)
        }, 250)
    }

    // Get visible trainers based on screen size
    const getVisibleTrainers = () => {
        const visible = []
        // Always show 1 trainer on mobile, 2 on tablet, 3 on desktop
        const visibleCount = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % trainers.length
            visible.push(trainers[index])
        }
        return visible
    }

    // For SSR compatibility, default to 1 trainer
    const [visibleTrainers, setVisibleTrainers] = useState([trainers[0]])

    React.useEffect(() => {
        setVisibleTrainers(getVisibleTrainers())
        
        const handleResize = () => {
            setVisibleTrainers(getVisibleTrainers())
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [currentIndex])

    return (
        <div className="min-h-screen bg-black">
            {/* Our Trainers Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-bl from-gray-900 via-black to-red-900/20 relative">
                <div className="absolute inset-0 bg-black"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                            OUR <span className="text-red-500">TRAINERS</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                            Meet the champions who will guide you to greatness
                        </p>
                    </div>

                    {/* Trainers Carousel */}
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTrainer}
                            disabled={isAnimating}
                            className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                            aria-label="Previous trainer"
                        >
                            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                        </button>

                        <button
                            onClick={nextTrainer}
                            disabled={isAnimating}
                            className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                            aria-label="Next trainer"
                        >
                            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                        </button>

                        {/* Trainers Container */}
                        <div className="overflow-hidden px-8 sm:px-12 md:px-16 lg:px-20">
                            <div 
                                className="flex transition-all duration-500 ease-in-out"
                                style={{
                                    transform: isAnimating 
                                        ? slideDirection === 'next' 
                                            ? 'translateX(-20%)' 
                                            : 'translateX(20%)'
                                        : 'translateX(0%)',
                                    opacity: isAnimating ? 0.7 : 1,
                                }}
                            >
                                {visibleTrainers.map((trainer, index) => (
                                    <div 
                                        key={`${trainer.id}-${currentIndex}-${index}`}
                                        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3"
                                    >
                                        <div className="bg-black p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                                            {/* Trainer Image */}
                                            <div className="relative mb-3 sm:mb-4 md:mb-6 overflow-hidden rounded-lg h-40 sm:h-48 md:h-64 lg:h-72">
                                                <Image
                                                    src={trainer.image} 
                                                    alt={trainer.name}
                                                    width={400}
                                                    height={300}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                                    unoptimized
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            </div>

                                            {/* Trainer Name */}
                                            <div className="text-center">
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                                    {trainer.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                            {trainers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-red-500 scale-125' 
                                            : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                    aria-label={`Go to trainer ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Trainer Counter */}
                        <div className="text-center mt-3 sm:mt-4">
                            <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                                {currentIndex + 1} of {trainers.length} trainers
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-900/10 via-black to-gray-900/50 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center px-4 sm:px-6 md:px-10 lg:mx-20">
                        <div className="bg-black/20 p-3 sm:p-4 md:p-6 rounded-lg">
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-1 sm:mb-2">20+</div>
                            <div className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base leading-tight">
                                CERTIFIED<br className="sm:hidden" /> TRAINERS
                            </div>
                        </div>
                        <div className="bg-black/20 p-3 sm:p-4 md:p-6 rounded-lg">
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-1 sm:mb-2">500+</div>
                            <div className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base leading-tight">
                                MEMBERS<br className="sm:hidden" /> TRAINED
                            </div>
                        </div>
                        <div className="bg-black/20 p-3 sm:p-4 md:p-6 rounded-lg">
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-1 sm:mb-2">15+</div>
                            <div className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base leading-tight">
                                SPECIAL<br className="sm:hidden" />IZATIONS
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page