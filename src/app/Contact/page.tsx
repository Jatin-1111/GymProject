// import React from 'react';
// import { Phone, MapPin, Instagram, MessageCircle, Clock, User } from 'lucide-react';

// function Page() {
//     return (
//         <div className="min-h-screen bg-black text-white">
//             {/* Header Section */}
//             <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16">
//                 <div className="absolute inset-0 bg-red-600 opacity-5"></div>
//                 <div className="relative max-w-6xl mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <div className="flex justify-center mb-6">
//                             <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center border-4 border-red-500">
//                                 <span className="text-3xl font-bold text-white">AZ</span>
//                             </div>
//                         </div>
//                         <h1 className="text-5xl font-bold mb-4">
//                             <span className="text-white">ARMOUR ZONE</span>
//                             <span className="text-red-500 ml-3">Elite</span>
//                         </h1>
//                         <p className="text-gray-300 text-xl">WHERE GOALS BECOME REALITY!</p>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Information Grid */}
//             <div className="max-w-6xl mx-auto px-6 py-16">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
//                     {/* Owner Information */}
//                     <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
//                         <div className="flex items-center mb-6">
//                             <User className="w-8 h-8 text-red-500 mr-3" />
//                             <h3 className="text-2xl font-bold text-white">Gym Owner</h3>
//                         </div>
//                         <div className="space-y-4">
//                             <div>
//                                 <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Founder & Head Trainer</p>
//                                 <p className="text-xl font-semibold text-white">Elite Fitness Professional</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Experience</p>
//                                 <p className="text-white">10+ Years in Fitness Industry</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Specialization</p>
//                                 <p className="text-white">Strength Training & Body Transformation</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Numbers */}
//                     <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
//                         <div className="flex items-center mb-6">
//                             <Phone className="w-8 h-8 text-red-500 mr-3" />
//                             <h3 className="text-2xl font-bold text-white">Call Us</h3>
//                         </div>
//                         <div className="space-y-4">
//                             <div className="group">
//                                 <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Primary</p>
//                                 <a href="tel:+917529011102" className="text-xl font-mono text-white hover:text-red-400 transition-colors block">
//                                     +91 75290 11102
//                                 </a>
//                             </div>
//                             <div className="group">
//                                 <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Secondary</p>
//                                 <a href="tel:+919814187268" className="text-xl font-mono text-white hover:text-red-400 transition-colors block">
//                                     +91 98141 87268
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Operating Hours */}
//                     <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
//                         <div className="flex items-center mb-6">
//                             <Clock className="w-8 h-8 text-red-500 mr-3" />
//                             <h3 className="text-2xl font-bold text-white">Timings</h3>
//                         </div>
//                         <div className="space-y-4">
//                             <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
//                                 <p className="text-gray-300 text-sm uppercase tracking-wider mb-2">Daily Hours</p>
//                                 <p className="text-2xl font-bold text-red-400">5:30 AM - 10:00 PM</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-400 text-sm">Open 7 days a week</p>
//                                 <p className="text-white">No holidays, just gains!</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Address Section */}
//                 <div className="mt-12 bg-gray-900 border border-red-900/30 rounded-lg p-8">
//                     <div className="flex items-center mb-6">
//                         <MapPin className="w-8 h-8 text-red-500 mr-3" />
//                         <h3 className="text-2xl font-bold text-white">Visit Us</h3>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-8 items-center">
//                         <div>
//                             <div className="space-y-3 text-gray-300">
//                                 <p className="text-lg"><span className="text-white font-semibold">Second Floor, SSL Tower</span></p>
//                                 <p>Ambala - Chandigarh Expy</p>
//                                 <p>Above Reliance Smartpoint</p>
//                                 <p>Shakti Nagar, Bhagat Singh Nagar</p>
//                                 <p>Chandigarh, Dera Bassi</p>
//                                 <p className="text-red-400 font-semibold">Punjab 140507</p>
//                             </div>
//                         </div>
//                         <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
//                             <h4 className="text-lg font-semibold text-white mb-4">Nearby Landmarks</h4>
//                             <ul className="space-y-2 text-gray-300">
//                                 <li>• Reliance Smartpoint (Ground Floor)</li>
//                                 <li>• SSL Tower Complex</li>
//                                 <li>• Chandigarh Highway</li>
//                                 <li>• Dera Bassi Junction</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Social Media & WhatsApp */}
//                 <div className="mt-12 grid md:grid-cols-2 gap-8">
//                     <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-600/30 rounded-lg p-8 hover:border-pink-500/50 transition-all duration-300">
//                         <div className="flex items-center mb-6">
//                             <Instagram className="w-8 h-8 text-pink-400 mr-3" />
//                             <h3 className="text-2xl font-bold text-white">Follow Us</h3>
//                         </div>
//                         <div className="space-y-4">
//                             <p className="text-gray-300">Stay updated with our latest workouts, transformations, and fitness tips!</p>
//                             <a 
//                                 href="#" 
//                                 className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
//                             >
//                                 <Instagram className="w-5 h-5 mr-2" />
//                                 @armourzone_elite
//                             </a>
//                         </div>
//                     </div>

//                     <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600/30 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300">
//                         <div className="flex items-center mb-6">
//                             <MessageCircle className="w-8 h-8 text-green-400 mr-3" />
//                             <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
//                         </div>
//                         <div className="space-y-4">
//                             <p className="text-gray-300">Quick enquiries and instant support via WhatsApp!</p>
//                             <div className="space-y-3">
//                                 <a 
//                                     href="https://wa.me/917529011102" 
//                                     className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
//                                 >
//                                     <MessageCircle className="w-5 h-5 mr-2" />
//                                     +91 75290 11102
//                                 </a>
//                                 <a 
//                                     href="https://wa.me/919814187268" 
//                                     className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
//                                 >
//                                     <MessageCircle className="w-5 h-5 mr-2" />
//                                     +91 98141 87268
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="mt-16 text-center bg-gradient-to-r from-red-900/20 via-black to-red-900/20 border border-red-600/30 rounded-lg p-12">
//                     <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform?</h2>
//                     <p className="text-xl text-gray-300 mb-8">BECOME STRONGER IS YOUR CHOICE</p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <a 
//                             href="tel:+917529011102" 
//                             className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
//                         >
//                             Call Now
//                         </a>
//                         <a 
//                             href="https://wa.me/917529011102" 
//                             className="bg-gray-800 hover:bg-gray-700 border border-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
//                         >
//                             WhatsApp Us
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Page;

import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle, Clock, User } from 'lucide-react';

function Page() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16">
                <div className="absolute inset-0 bg-red-600 opacity-5"></div>
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-6">
                            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center border-4 border-red-500">
                                <span className="text-3xl font-bold text-white">AZ</span>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold mb-4">
                            <span className="text-white">ARMOUR ZONE</span>
                            <span className="text-red-500 ml-3">Elite</span>
                        </h1>
                        <p className="text-gray-300 text-xl">WHERE GOALS BECOME REALITY!</p>
                        <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
                    </div>
                </div>
            </div>

            {/* Contact Information Grid */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Owner Information */}
                    <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <User className="w-8 h-8 text-red-500 mr-3" />
                            <h3 className="text-2xl font-bold text-white">Gym Owner</h3>
                        </div>
                        <div className="flex items-start space-x-4">
                            {/* Owner Image */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center border-2 border-red-500/50 shadow-lg">
                                    <User className="w-12 h-12 text-white" />
                                </div>
                            </div>
                            
                            {/* Owner Details */}
                            <div className="flex-1 space-y-3">
                                <div>
                                    <p className="text-xl font-bold text-white">Rajesh Kumar</p>
                                    <p className="text-red-400 text-sm font-semibold uppercase tracking-wide">Founder & Head Trainer</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Experience</p>
                                    <p className="text-white text-sm">12+ Years in Fitness Industry</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Specialization</p>
                                    <p className="text-white text-sm">Strength Training & Body Transformation</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Certification</p>
                                    <p className="text-white text-sm">Certified Personal Trainer (ACSM)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Numbers */}
                    <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <Phone className="w-8 h-8 text-red-500 mr-3" />
                            <h3 className="text-2xl font-bold text-white">Call Us</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="group">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Primary</p>
                                <a href="tel:+917529011102" className="text-xl font-mono text-white hover:text-red-400 transition-colors block">
                                    +91 75290 11102
                                </a>
                            </div>
                            <div className="group">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Secondary</p>
                                <a href="tel:+919814187268" className="text-xl font-mono text-white hover:text-red-400 transition-colors block">
                                    +91 98141 87268
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <Clock className="w-8 h-8 text-red-500 mr-3" />
                            <h3 className="text-2xl font-bold text-white">Timings</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
                                <p className="text-gray-300 text-sm uppercase tracking-wider mb-2">Daily Hours</p>
                                <p className="text-2xl font-bold text-red-400">5:30 AM - 10:00 PM</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Open 7 days a week</p>
                                <p className="text-white">No holidays, just gains!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address Section */}
                <div className="mt-12 bg-gray-900 border border-red-900/30 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                        <MapPin className="w-8 h-8 text-red-500 mr-3" />
                        <h3 className="text-2xl font-bold text-white">Visit Us</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="space-y-3 text-gray-300">
                                <p className="text-lg"><span className="text-white font-semibold">Second Floor, SSL Tower</span></p>
                                <p>Ambala - Chandigarh Expy</p>
                                <p>Above Reliance Smartpoint</p>
                                <p>Shakti Nagar, Bhagat Singh Nagar</p>
                                <p>Chandigarh, Dera Bassi</p>
                                <p className="text-red-400 font-semibold">Punjab 140507</p>
                            </div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h4 className="text-lg font-semibold text-white mb-4">Nearby Landmarks</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Reliance Smartpoint (Ground Floor)</li>
                                <li>• SSL Tower Complex</li>
                                <li>• Chandigarh Highway</li>
                                <li>• Dera Bassi Junction</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media & WhatsApp */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-600/30 rounded-lg p-8 hover:border-pink-500/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <Instagram className="w-8 h-8 text-pink-400 mr-3" />
                            <h3 className="text-2xl font-bold text-white">Follow Us</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-300">Stay updated with our latest workouts, transformations, and fitness tips!</p>
                            <a 
                                href="#" 
                                className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                <Instagram className="w-5 h-5 mr-2" />
                                @armourzone_elite
                            </a>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600/30 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <MessageCircle className="w-8 h-8 text-green-400 mr-3" />
                            <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-300">Quick enquiries and instant support via WhatsApp!</p>
                            <div className="space-y-3">
                                <a 
                                    href="https://wa.me/917529011102" 
                                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    +91 75290 11102
                                </a>
                                <a 
                                    href="https://wa.me/919814187268" 
                                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    +91 98141 87268
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-red-900/20 via-black to-red-900/20 border border-red-600/30 rounded-lg p-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform?</h2>
                    <p className="text-xl text-gray-300 mb-8">BECOME STRONGER IS YOUR CHOICE</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="tel:+917529011102" 
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Call Now
                        </a>
                        <a 
                            href="https://wa.me/917529011102" 
                            className="bg-gray-800 hover:bg-gray-700 border border-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;