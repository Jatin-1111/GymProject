// // 'use client'
// // import React from 'react';
// // import { Phone, MapPin, Instagram, MessageCircle, Clock, User } from 'lucide-react';
// // import { useRouter } from 'next/navigation';    
// // function Page() {
// //     const router = useRouter();
// //     return (
// //         <div className="min-h-screen bg-black text-white">
// //             {/* Header Section */}
// //             <div className="relative bg-black py-16">
// //                 <div className="absolute inset-0 opacity-5"></div>
// //                 <div className="relative max-w-6xl mx-auto px-6">
// //                     <div className="text-center mb-12">
// //                         <div className="flex justify-center mb-6">
// //                             <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center border-4 border-red-500">
// //                                 <span className="text-3xl font-bold text-white">AZ</span>
// //                             </div>
// //                         </div>
// //                         <h1 className="text-5xl font-bold mb-4">
// //                             <span className="text-white">ARMOUR ZONE</span>
// //                             <span className="text-red-500 ml-3">Elite</span>
// //                         </h1>
// //                         <p className="text-gray-300 text-xl">WHERE GOALS BECOME REALITY!</p>
// //                         <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Contact Information Grid */}
// //             <div className="max-w-6xl mx-auto px-6 py-16">
// //                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
// //                     {/* Owner Information */}
// //                     <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
// //                         <div className="flex items-center mb-6">
// //                             <User className="w-8 h-8 text-red-500 mr-3" />
// //                             <h3 className="text-2xl font-bold text-white">Gym Owner</h3>
// //                         </div>
// //                         <div className="flex items-start space-x-4">
// //                             {/* Owner Image */}
// //                             <div className="flex-shrink-0">
// //                                 <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center border-2 border-red-500/50 shadow-lg">
// //                                     <User className="w-12 h-12 text-white" />
// //                                 </div>
// //                             </div>
                            
// //                             {/* Owner Details */}
// //                             <div className="flex-1 space-y-3">
// //                                 <div>
// //                                     <p className="text-xl font-bold text-white">Rajesh Kumar</p>
// //                                     <p className="text-red-400 text-sm font-semibold uppercase tracking-wide">Founder & Head Trainer</p>
// //                                 </div>
// //                                 <div>
// //                                     <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Experience</p>
// //                                     <p className="text-white text-sm">12+ Years in Fitness Industry</p>
// //                                 </div>
// //                                 <div>
// //                                     <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Specialization</p>
// //                                     <p className="text-white text-sm">Strength Training & Body Transformation</p>
// //                                 </div>
// //                                 <div>
// //                                     <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Certification</p>
// //                                     <p className="text-white text-sm">Certified Personal Trainer (ACSM)</p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Contact Numbers */}
// //                     <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
// //                         <div className="flex items-center mb-6">
// //                             <Phone className="w-8 h-8 text-red-500 mr-3" />
// //                             <h3 className="text-2xl font-bold text-white">Call Us</h3>
// //                         </div>
// //                         <div className="space-y-4">
// //                             <div className="group">
// //                                 <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Primary</p>
// //                                 <a href="tel:+917529011102" className="text-xl font-mono text-white hover:text-red-400 transition-colors block">
// //                                     +91 75290 11102
// //                                 </a>
// //                             </div>
// //                             <div className="group">
// //                                 <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Secondary</p>
// //                                 <a href="tel:+919814187268" className="text-xl font-mono text-white hover:text-red-400 transition-colors block">
// //                                     +91 98141 87268
// //                                 </a>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Operating Hours */}
// //                     <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
// //                         <div className="flex items-center mb-6">
// //                             <Clock className="w-8 h-8 text-red-500 mr-3" />
// //                             <h3 className="text-2xl font-bold text-white">Timings</h3>
// //                         </div>
// //                         <div className="space-y-4">
// //                             <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
// //                                 <p className="text-gray-300 text-sm uppercase tracking-wider mb-2">Daily Hours</p>
// //                                 <p className="text-2xl font-bold text-red-400">5:30 AM - 10:00 PM</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-gray-400 text-sm">Open 7 days a week</p>
// //                                 <p className="text-white">No holidays, just gains!</p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Address Section */}
// //                 <div className="mt-12 bg-gray-900 border border-red-900/30 rounded-lg p-8">
// //                     <div className="flex items-center mb-6">
// //                         <MapPin className="w-8 h-8 text-red-500 mr-3" />
// //                         <h3 className="text-2xl font-bold text-white">Visit Us</h3>
// //                     </div>
// //                     <div className="grid md:grid-cols-2 gap-8 items-center">
// //                         <div>
// //                             <div className="space-y-3 text-gray-300">
// //                                 <p className="text-lg"><span className="text-white font-semibold">Second Floor, SSL Tower</span></p>
// //                                 <p>Ambala - Chandigarh Expy</p>
// //                                 <p>Above Reliance Smartpoint</p>
// //                                 <p>Shakti Nagar, Bhagat Singh Nagar</p>
// //                                 <p>Chandigarh, Dera Bassi</p>
// //                                 <p className="text-red-400 font-semibold">Punjab 140507</p>
// //                             </div>
// //                         </div>
// //                         <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
// //                             <h4 className="text-lg font-semibold text-white mb-4">Nearby Landmarks</h4>
// //                             <ul className="space-y-2 text-gray-300">
// //                                 <li>• Reliance Smartpoint (Ground Floor)</li>
// //                                 <li>• SSL Tower Complex</li>
// //                                 <li>• Chandigarh Highway</li>
// //                                 <li>• Dera Bassi Junction</li>
// //                             </ul>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Social Media & WhatsApp */}
// //                 <div className="mt-12 grid md:grid-cols-2 gap-8">
// //                     <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-600/30 rounded-lg p-8 hover:border-pink-500/50 transition-all duration-300">
// //                         <div className="flex items-center mb-6">
// //                             <Instagram className="w-8 h-8 text-pink-400 mr-3" />
// //                             <h3 className="text-2xl font-bold text-white">Follow Us</h3>
// //                         </div>
// //                         <div className="space-y-4">
// //                             <p className="text-gray-300">Stay updated with our latest workouts, transformations, and fitness tips!</p>
// //                             <a 
// //                                 href="#" 
// //                                 className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
// //                             >
// //                                 <Instagram className="w-5 h-5 mr-2" />
// //                                 @armourzone_elite
// //                             </a>
// //                         </div>
// //                     </div>

// //                     <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600/30 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300">
// //                         <div className="flex items-center mb-6">
// //                             <MessageCircle className="w-8 h-8 text-green-400 mr-3" />
// //                             <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
// //                         </div>
// //                         <div className="space-y-4">
// //                             <p className="text-gray-300">Quick enquiries and instant support via WhatsApp!</p>
// //                             <div className="space-y-3">
// //                                 <a 
// //                                     href="https://wa.me/917529011102" 
// //                                     className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
// //                                 >
// //                                     <MessageCircle className="w-5 h-5 mr-2" />
// //                                     +91 75290 11102
// //                                 </a>
// //                                 <a 
// //                                     href="https://wa.me/919814187268" 
// //                                     className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
// //                                 >
// //                                     <MessageCircle className="w-5 h-5 mr-2" />
// //                                     +91 98141 87268
// //                                 </a>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Call to Action */}
// //                 <div className="mt-16 text-center bg-gradient-to-r from-red-900/20 via-black to-red-900/20 border border-red-600/30 rounded-lg p-12">
// //                     <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform?</h2>
// //                     <p className="text-xl text-gray-300 mb-8">BECOME STRONGER IS YOUR CHOICE</p>
// //                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                         <a 
// //                             href="tel:+917529011102" 
// //                             className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
// //                         onClick={() => {router.push("./Contact")}}>
// //                             Call Now
// //                         </a>
// //                         <a 
// //                             href="https://wa.me/917529011102" 
// //                             className="bg-gray-800 hover:bg-gray-700 border border-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
// //                         onClick={() => {router.push("./Contact")}}>
// //                             WhatsApp Us
// //                         </a>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Page;

// 'use client'
// import React, { useState } from 'react';
// import { Phone, MapPin, Instagram, MessageCircle, Clock, User, Mail, Calendar, Star, Award, Target } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// function Page() {
//     const router = useRouter();
//     const [activeTab, setActiveTab] = useState('contact');

//     return (
//         <div className="min-h-screen bg-black text-white overflow-hidden">
//             {/* Animated Background */}
//             <div className="fixed inset-0 z-0">
//                 <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-gray-900/30"></div>
//                 <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600/5 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
//             </div>

//             {/* Hero Section */}
//             <div className="relative z-10 pt-20 pb-16">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="text-center mb-16">
//                         {/* Animated Logo */}
//                         <div className="flex justify-center mb-8">
//                             <div className="relative group">
//                                 <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
//                                 <div className="relative w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border-4 border-red-400 shadow-2xl transform hover:scale-110 transition-all duration-500">
//                                     <span className="text-4xl font-black text-white tracking-wider">AZ</span>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
//                             ARMOUR ZONE
//                         </h1>
//                         <div className="text-3xl md:text-4xl font-bold text-red-500 mb-6 animate-bounce">
//                             ELITE
//                         </div>
//                         <p className="text-2xl text-gray-300 font-semibold tracking-wide">
//                             WHERE GOALS BECOME REALITY!
//                         </p>
//                         <div className="mt-8 flex justify-center">
//                             <div className="w-32 h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full animate-pulse"></div>
//                         </div>
//                     </div>

//                     {/* Tab Navigation */}
//                     <div className="flex justify-center mb-12">
//                         <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-2 border border-red-600/20">
//                             <div className="flex space-x-2">
//                                 {[
//                                     { id: 'contact', label: 'Contact Info', icon: Phone },
//                                     { id: 'owner', label: 'Meet Owner', icon: User },
//                                     { id: 'social', label: 'Connect', icon: Instagram }
//                                 ].map(({ id, label, icon: Icon }) => (
//                                     <button
//                                         key={id}
//                                         onClick={() => setActiveTab(id)}
//                                         className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                                             activeTab === id
//                                                 ? 'bg-red-600 text-white shadow-lg transform scale-105'
//                                                 : 'text-gray-300 hover:text-white hover:bg-gray-800'
//                                         }`}
//                                     >
//                                         <Icon className="w-5 h-5 mr-2" />
//                                         {label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Content Sections */}
//             <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
//                 {/* Contact Info Tab */}
//                 {activeTab === 'contact' && (
//                     <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
//                         {/* Left Side - Contact Cards */}
//                         <div className="space-y-6">
//                             {/* Phone Numbers */}
//                             <div className="group">
//                                 <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-red-600/20 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 transform hover:-translate-y-2">
//                                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-xl"></div>
//                                     <div className="flex items-center mb-6">
//                                         <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
//                                             <Phone className="w-6 h-6 text-white" />
//                                         </div>
//                                         <h3 className="text-2xl font-bold text-white">Call Us Now</h3>
//                                     </div>
//                                     <div className="space-y-4">
//                                         <div className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-colors">
//                                             <p className="text-red-400 text-sm font-semibold mb-1">PRIMARY</p>
//                                             <a href="tel:+917529011102" className="text-2xl font-mono text-white hover:text-red-400 transition-colors">
//                                                 +91 75290 11102
//                                             </a>
//                                         </div>
//                                         <div className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-colors">
//                                             <p className="text-red-400 text-sm font-semibold mb-1">SECONDARY</p>
//                                             <a href="tel:+919814187268" className="text-2xl font-mono text-white hover:text-red-400 transition-colors">
//                                                 +91 98141 87268
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Timings */}
//                             <div className="group">
//                                 <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-red-600/20 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 transform hover:-translate-y-2">
//                                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-2xl"></div>
//                                     <div className="flex items-center mb-6">
//                                         <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
//                                             <Clock className="w-6 h-6 text-white" />
//                                         </div>
//                                         <h3 className="text-2xl font-bold text-white">We're Open</h3>
//                                     </div>
//                                     <div className="text-center">
//                                         <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 mb-4">
//                                             <p className="text-red-400 text-sm font-semibold mb-2 tracking-wider">DAILY HOURS</p>
//                                             <p className="text-4xl font-black text-white">5:30 AM</p>
//                                             <p className="text-2xl text-gray-300 my-2">TO</p>
//                                             <p className="text-4xl font-black text-white">10:00 PM</p>
//                                         </div>
//                                         <p className="text-green-400 font-semibold">Open 7 Days a Week</p>
//                                         <p className="text-gray-300">No Holidays, Just Gains!</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Side - Location */}
//                         <div className="lg:pl-4">
//                             <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-red-600/20 rounded-2xl p-8 h-full hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20">
//                                 <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-2xl"></div>
//                                 <div className="flex items-center mb-8">
//                                     <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
//                                         <MapPin className="w-6 h-6 text-white" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">Visit Our Gym</h3>
//                                 </div>
                                
//                                 <div className="space-y-6">
//                                     <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6">
//                                         <h4 className="text-lg font-bold text-red-400 mb-4">ADDRESS</h4>
//                                         <div className="space-y-2 text-gray-200 text-lg leading-relaxed">
//                                             <p className="font-semibold text-white">Second Floor, SSL Tower</p>
//                                             <p>Ambala - Chandigarh Expy</p>
//                                             <p>Above Reliance Smartpoint</p>
//                                             <p>Shakti Nagar, Bhagat Singh Nagar</p>
//                                             <p>Chandigarh, Dera Bassi</p>
//                                             <p className="text-red-400 font-bold text-xl">Punjab 140507</p>
//                                         </div>
//                                     </div>

//                                     <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20">
//                                         <h4 className="text-lg font-bold text-blue-400 mb-4">LANDMARKS</h4>
//                                         <ul className="space-y-2 text-gray-300">
//                                             <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Reliance Smartpoint (Ground Floor)</li>
//                                             <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> SSL Tower Complex</li>
//                                             <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Chandigarh Highway</li>
//                                             <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Dera Bassi Junction</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Owner Info Tab */}
//                 {activeTab === 'owner' && (
//                     <div className="animate-fade-in">
//                         <div className="max-w-4xl mx-auto">
//                             <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-red-600/20 rounded-3xl p-12 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20">
//                                 <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-3xl"></div>
                                
//                                 <div className="text-center mb-12">
//                                     <div className="flex justify-center mb-8">
//                                         <div className="relative group">
//                                             <div className="absolute -inset-6 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
//                                             <div className="relative w-40 h-40 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border-4 border-red-400 shadow-2xl">
//                                                 <User className="w-20 h-20 text-white" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <h2 className="text-5xl font-black text-white mb-4">RAJESH KUMAR</h2>
//                                     <p className="text-2xl text-red-400 font-bold tracking-wider">FOUNDER & HEAD TRAINER</p>
//                                 </div>

//                                 <div className="grid md:grid-cols-3 gap-8">
//                                     <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-500/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
//                                         <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
//                                         <h4 className="text-lg font-bold text-white mb-2">EXPERIENCE</h4>
//                                         <p className="text-3xl font-black text-red-400 mb-2">12+</p>
//                                         <p className="text-gray-300">Years in Fitness</p>
//                                     </div>

//                                     <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
//                                         <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
//                                         <h4 className="text-lg font-bold text-white mb-2">SPECIALIZATION</h4>
//                                         <p className="text-gray-300 text-sm leading-relaxed">Strength Training & Body Transformation</p>
//                                     </div>

//                                     <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
//                                         <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
//                                         <h4 className="text-lg font-bold text-white mb-2">CERTIFIED</h4>
//                                         <p className="text-gray-300 text-sm">Personal Trainer (ACSM)</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Social Media Tab */}
//                 {activeTab === 'social' && (
//                     <div className="animate-fade-in">
//                         <div className="grid md:grid-cols-2 gap-8">
//                             {/* Instagram */}
//                             <div className="relative group">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
//                                 <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-pink-600/30 rounded-3xl p-12 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-600/20 transform hover:-translate-y-4">
//                                     <div className="text-center">
//                                         <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-12 transition-transform duration-500">
//                                             <Instagram className="w-10 h-10 text-white" />
//                                         </div>
//                                         <h3 className="text-3xl font-black text-white mb-6">FOLLOW US</h3>
//                                         <p className="text-gray-300 mb-8 text-lg leading-relaxed">Stay updated with our latest workouts, transformations, and fitness tips!</p>
//                                         <a 
//                                             href="#" 
//                                             className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
//                                         >
//                                             <Instagram className="w-6 h-6 mr-3" />
//                                             @armourzone_elite
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* WhatsApp */}
//                             <div className="relative group">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
//                                 <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-green-600/30 rounded-3xl p-12 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-600/20 transform hover:-translate-y-4">
//                                     <div className="text-center">
//                                         <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-12 transition-transform duration-500">
//                                             <MessageCircle className="w-10 h-10 text-white" />
//                                         </div>
//                                         <h3 className="text-3xl font-black text-white mb-6">WHATSAPP</h3>
//                                         <p className="text-gray-300 mb-8 text-lg">Quick enquiries and instant support!</p>
//                                         <div className="space-y-4">
//                                             <a 
//                                                 href="https://wa.me/917529011102" 
//                                                 className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group"
//                                             >
//                                                 <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
//                                                 +91 75290 11102
//                                             </a>
//                                             <a 
//                                                 href="https://wa.me/919814187268" 
//                                                 className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group"
//                                             >
//                                                 <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
//                                                 +91 98141 87268
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <style jsx>{`
//                 @keyframes fade-in {
//                     from { opacity: 0; transform: translateY(20px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
                
//                 .animate-fade-in {
//                     animation: fade-in 0.6s ease-out;
//                 }
                
//                 .animate-spin-slow {
//                     animation: spin 20s linear infinite;
//                 }
                
//                 @keyframes spin {
//                     from { transform: translate(-50%, -50%) rotate(0deg); }
//                     to { transform: translate(-50%, -50%) rotate(360deg); }
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default Page;

'use client'
import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle, Clock, User, Facebook, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';    

function Page() {
    const router = useRouter();
    
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="bg-black py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-white">ARMOUR ZONE</span>
                        <span className="text-red-500 ml-2">Elite</span>
                    </h1>
                    <p className="text-gray-400 text-[25px]">Contact Information</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
                
                {/* Gym Owner Section */}
                <div className="bg-black rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Gym Owner</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Owner Image */}
                        <div className="flex-shrink-0">
                            <div className="w-40 h-40 bg-red-600 rounded-lg flex items-center justify-center">
                                <User className="w-22 h-22 text-white" />
                            </div>
                        </div>
                        
                        {/* Owner Details */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">Rajesh Kumar</h3>
                            <p className="text-red-400 mb-4">Founder & Head Trainer</p>
                            <div className="space-y-2 text-gray-300">
                                <p><strong>Experience:</strong> 12+ Years in Fitness Industry</p>
                                <p><strong>Specialization:</strong> Strength Training & Body Transformation</p>
                                <p><strong>Certification:</strong> Certified Personal Trainer (ACSM)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media & Contact */}
                <div className="bg-black rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        
                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center text-pink-400 hover:text-pink-300 ">
                                    <Instagram className="w-5 h-5 mr-3 border border-pink-400" />
                                    @armourzone_elite
                                </a>
                                <a href="#" className="flex items-center text-blue-400 hover:text-blue-300">
                                    <Facebook className="w-5 h-5 mr-3 border border-blue-400 bg-blue-400 text-black" />
                                    Armour Zone Elite
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                            <div className="space-y-3">
                                <a href="tel:+917529011102" className="flex items-center text-white hover:text-green-300">
                                    <Phone className="w-5 h-5 mr-3" />
                                    +91 75290 11102
                                </a>
                                <a href="tel:+919814187268" className="flex items-center text-white hover:text-green-300">
                                    <Phone className="w-5 h-5 mr-3" />
                                    +91 98141 87268
                                </a>
                                <a href="mailto:armourzone@example.com" className="flex items-center text-red-400 hover:text-red-300">
                                    <Mail className="w-5 h-5 mr-3" />
                                    armourzone@example.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address & Timings */}
                <div className="bg-black rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        
                        {/* Address */}
                        <div>
                            <div className="flex items-center mb-4">
                                <MapPin className="w-6 h-6 text-red-500 mr-3" />
                                <h3 className="text-xl font-bold text-white">Address</h3>
                            </div>
                            <div className="text-gray-300 space-y-1">
                                <p>Second Floor, SSL Tower</p>
                                <p>Above Reliance Smartpoint</p>
                                <p>Ambala - Chandigarh Expy</p>
                                <p>Shakti Nagar, Bhagat Singh Nagar</p>
                                <p>Chandigarh, Dera Bassi</p>
                                <p className="text-red-400 font-semibold">Punjab 140507</p>
                            </div>
                        </div>

                        {/* Timings */}
                        <div>
                            <div className="flex items-center mb-4">
                                <Clock className="w-6 h-6 text-red-500 mr-3" />
                                <h3 className="text-xl font-bold text-white">Timings</h3>
                            </div>
                            <div className="text-gray-300 space-y-2">
                                <div className="bg-black border border-red-800 rounded-lg p-4">
                                    <p className="text-red-400 font-bold text-xl">5:30 AM - 10:00 PM</p>
                                    <p className="text-sm">Monday to Sunday</p>
                                </div>
                                <p className="text-white">Open 7 days a week</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Quick Contact */}
                <div className="bg-black border border-red-300 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Quick Contact via WhatsApp</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/917529011102" 
                            className="bg-gray-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5 inline mr-2" />
                            +91 75290 11102
                        </a>
                        <a 
                            href="https://wa.me/919814187268" 
                            className="bg-gray-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5 inline mr-2" />
                            +91 98141 87268
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;