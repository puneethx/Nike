import React from 'react';
import { navLinks } from '../constants';

const Menu = () => {
  return (
    <div className='text-white mb-10'>
        <ul className='flex flex-col justify-center items-center gap-12 lg:hidden'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-white'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
    </div>
  )
}

export default Menu