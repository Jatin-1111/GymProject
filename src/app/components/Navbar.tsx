// 'use client';

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
//         <img src="/gymlogo.png" alt="Gym Logo" className="h-14 w-auto" />
//         <div className="ml-18 text-2xl font-bold text-red-600 absolute left-4">
//           Armour Zone
//         </div>

//         {/* Centered Nav Links */}
//         <ul className="flex align-center justify-center space-x-10 mx-auto">
//           <li>
//             <a href="/" className="hover:text-red-500 text-gray-300 transition duration-200">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/About" className="hover:text-red-500 text-gray-300 transition duration-200">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="/Services" className="hover:text-red-500 text-gray-300 transition duration-200">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="/Trainers" className="hover:text-red-500 text-gray-300 transition duration-200">
//               Our Trainers
//             </a>
//           </li>
//           <li>
//             <a href="/Contact" className="hover:text-red-500 text-gray-300 transition duration-200">
//               Contact Us
//             </a>
//           </li>
//           <li>
//             <a href="https://gym-delta-wine.vercel.app" className="hover:text-red-500 text-gray-300 transition duration-200">
//               Use AI
//             </a>
//           </li>
//         </ul>

//         <button className="bg-red-700 hover:bg-red-800 text-black hover:text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 border border-black hover:border-black">
//           Login/Sign-in
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client';

import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section - Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Image src="/gymlogo.png" alt="Gym Logo" className="h-14 w-auto" />
          <div className="text-2xl font-bold text-red-600">
            Armour Zone
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center space-x-10">
            <li>
              <a className="hover:text-red-500 text-gray-300 transition duration-200"
              onClick={() => {router.push('/')}}>
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-red-500 text-gray-300 transition duration-200"
              onClick={() => {router.push('/About')}}>
                About
              </a>
            </li>
            <li>
              <a className="hover:text-red-500 text-gray-300 transition duration-200"
              onClick={() => {router.push('/Services')}}>
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-red-500 text-gray-300 transition duration-200"
              onClick={() => {router.push('/Trainers')}}>
                Our Trainers
              </a>
            </li>
            <li>
              <a className="hover:text-red-500 text-gray-300 transition duration-200"
              onClick={() => {router.push('/Contact')}}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://gym-delta-wine.vercel.app" className="hover:text-red-500 text-gray-300 transition duration-200">
                Use AI
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Login Button */}
        <button className="bg-red-700 hover:bg-red-800 text-white hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 border border-red-700 hover:border-red-800">
          Login/Sign-in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;