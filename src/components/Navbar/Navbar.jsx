import React from 'react';
import { IonIcon } from '@ionic/react';
import { search, notifications } from 'ionicons/icons';
import DarkMode from './DarkMode.jsx';

const Navbar = ({ logo, data }) => {
  return (
    <div className='w-full h-70 pt-3 pb-3 pl-3 pr-3 gap-10 flex items-center justify-between'>
      <div className='w-full h-10 flex gap-12'>
        {/* Logo section */}
        <div className='w-56 h-10 flex items-center gap-2'>
          <img src={logo} className='w-10 h-10' alt='Real-State-Logo' />
          <a href='/' className='text-2xl font-semibold font-sans'>Yariga</a>
        </div>
        
        {/* Search bar section */}
        <div className='w-96 h-12 rounded-xl p-2 flex gap-2 items-center bg-gray-200'>
          <IonIcon icon={search} className='w-10 h-7 opacity-35' />
          <input
            type='text'
            placeholder='Search Property, customer, etc'
            className='w-96 h-9 bg-gray-200 border-none outline-none'
          />
        </div>
      </div>

      {/* Right navbar section */}
      <div className='relative flex'>
        <IonIcon icon={notifications} className='w-6 h-6 pt-2 px-2 gap-0' />
        <div className='absolute top-0 right-0 bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-white text-xs'>
          4
        </div>
      </div>

      <div className='container flex w-44 h-10 gap-2'>
        <img src={data.image} className='w-10 h-10 rounded-full' alt='profile' />
        <div className='w-40 h-10 gap-2'>
          <p className='w-40 h-5 gap-2 mt-[-5px] font-bold'>{data.name}</p>
          <p className='w-40 h-5 gap-2 mt-1.5 text-gray-500'>{data.title}</p>
        </div>
      </div>

      <DarkMode />
    </div>
  );
};

export default Navbar;