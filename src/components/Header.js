import Image from 'next/image';
import Logo from '../Images/logo.png';
import React from 'react';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
    <div>
        <div className='w-full h-16 bg-gray-900 text-gray-300 flex items-center justify-between'>
            <div className='mx-10'>
                <Image src={Logo} 
                priority
                alt='Logo'
                className='w-[150px] h-14 cursor-pointer'
                />
            </div>
            <div className=''>
                <ul className='flex gap-10 text-2xl cursor-pointer ml-20'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='cursor-pointer  text-2xl ml-24'>Log In/Sign Up</div>
            <div className='mx-10 text-xl cursor-pointer'>
                <FaSearch/>
            </div>
          
        </div>

    </div>
  )
}

export default Header