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
                    <h1 className="text-6xl font-bold mb-2">
                        <span className="text-white font-[Almendra]">ARMOUR ZONE</span>
                        <span className="text-red-500 ml-2 font-[Almendra]">Elite</span>
                    </h1>
                    <p className="text-gray-400 text-[35px] font-[Poppins]">Contact Information</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 space-y-8">
                
                {/* Gym Owner Section */}
                <div className="bg-black rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white font-[Almendra] mb-6">Gym Owner</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Owner Image */}
                        <div className="flex-shrink-0">
                            <div className="w-40 h-40 bg-red-600 rounded-lg flex items-center justify-center">
                                <User className="w-22 h-22 text-white" />
                            </div>
                        </div>
                        
                        {/* Owner Details */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-[Almendra] text-white">Rajesh Kumar</h3>
                            <p className="text-red-400 font-[Poppins] mb-4">Founder & Head Trainer</p>
                            <div className="space-y-2 font-[Poppins] text-gray-300">
                                <p><strong>Experience:</strong> 12+ Years in Fitness Industry</p>
                                <p><strong>Specialization:</strong> Strength Training & Body Transformation</p>
                                <p><strong>Certification:</strong> Certified Personal Trainer (ACSM)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media & Contact */}
                <div className="bg-black rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white font-[Poppins] mb-6">Connect With Us</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        
                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold font-[Poppins] text-white mb-4">Social Media</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center text-pink-400 hover:text-pink-300 ">
                                    <Instagram className="w-5 h-5 font-[Poppins] mr-3 border border-pink-400" />
                                    @armourzone_elite
                                </a>
                                <a href="#" className="flex items-center text-blue-400 hover:text-blue-300">
                                    <Facebook className="w-5 h-5 mr-3 border font-[Poppins] border-blue-400 bg-blue-400 text-black" />
                                    Armour Zone Elite
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-white font-[Poppins] mb-4">Contact Info</h3>
                            <div className="space-y-3">
                                <a href="tel:+917529011102" className="flex items-center font-[Poppins] text-white hover:text-green-300">
                                    <Phone className="w-5 h-5 mr-3" />
                                    +91 75290 11102
                                </a>
                                <a href="tel:+919814187268" className="flex items-center font-[Poppins] text-white hover:text-green-300">
                                    <Phone className="w-5 h-5 mr-3" />
                                    +91 98141 87268
                                </a>
                                <a href="mailto:armourzone@example.com" className="flex font-[Poppins] items-center text-red-400 hover:text-red-300">
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
                                <h3 className="text-xl font-bold font-[Poppins] text-white">Address</h3>
                            </div>
                            <div className="text-gray-300 font-[Poppins] space-y-1">
                                <p>Second Floor, SSL Tower</p>
                                <p>Above Reliance Smartpoint</p>
                                <p>Ambala - Chandigarh Expy</p>
                                <p>Shakti Nagar, Bhagat Singh Nagar</p>
                                <p>Chandigarh, Dera Bassi</p>
                                <p className="text-red-400 font-[Poppins] font-semibold">Punjab 140507</p>
                            </div>
                        </div>

                        {/* Timings */}
                        <div>
                            <div className="flex items-center mb-4">
                                <Clock className="w-6 h-6 text-red-500 mr-3" />
                                <h3 className="text-xl font-bold font-[Poppins] text-white">Timings</h3>
                            </div>
                            <div className="text-gray-300 space-y-2">
                                <div className="bg-black border border-red-800 rounded-lg p-4">
                                    <p className="text-red-400 font-bold font-[Poppins] text-xl">5:30 AM - 10:00 PM</p>
                                    <p className="text-sm font-[Poppins]">Monday to Sunday</p>
                                </div>
                                <p className="text-white font-[Poppins]">Open 7 days a week</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Quick Contact */}
                <div className="bg-black border border-red-300 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4 font-[Poppins]">Quick Contact via WhatsApp</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/917529011102" 
                            className="bg-gray-400 text-black font-[Poppins] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5 inline mr-2" />
                            +91 75290 11102
                        </a>
                        <a 
                            href="https://wa.me/919814187268" 
                            className="bg-gray-400 text-black font-[Poppins] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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