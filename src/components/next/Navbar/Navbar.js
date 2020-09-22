import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

export const Navbar = () => {
  const [visibility, setVisibility] = useState('hidden');
  const categoriesButton = useRef();

  const toggleVisibility = () => {
    visibility === 'hidden'
      ? setVisibility('visible')
      : setVisibility('hidden');
  };

  const handleClickOutside = e => {
    if (categoriesButton.current.contains(e.target) || visibility === 'hidden')
      return;
    toggleVisibility();
  };

  return (
    <CartContext.Consumer>
      {({ count }) => (
        <header className='sticky top-0 z-10' onClick={handleClickOutside}>
          <nav className='flex flex-col items-center flex-wrap bg-background p-6'>
            <div className='w-full flex justify-between items-center flex-shrink-0 text-font'>
              <Link
                className='flex items-center flex-shrink-0 text-font transition duration-500 ease-in-out transform hover:text-primary'
                style={{
                  width: '171px',
                  height: '42px',
                }}
                to='/'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-20 mr-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
                  />
                </svg>
                <span className='font-semibold text-xl tracking-tight'>
                  The Amazing Music Store
                </span>
              </Link>
              <button
                className='flex items-center flex-shrink-0 text-font leading-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                onClick={toggleVisibility}
                ref={categoriesButton}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-8 mr-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                </svg>
                <span>View Categories</span>
              </button>
              <Link
                to='/cart'
                className='flex items-center flex-shrink-0 text-font leading-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
              >
                <svg
                  className='h-8 mr-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span>Cart</span>
                <div className='w-5 h-5 rounded-full text-sm flex items-center self-start justify-center bg-secondary text-lightBackground'>
                  {count}
                </div>
              </Link>
            </div>
            <div
              className={`w-1/2 flex justify-around pt-2 text-primary ${visibility}`}
            >
              <NavLink exact to='/' activeClassName='text-font font-bold'>
                All
              </NavLink>
              <NavLink
                to='/genre/hip-hop'
                activeClassName='text-font font-bold'
              >
                Hip-hop
              </NavLink>
              <NavLink to='/genre/trap' activeClassName='text-font font-bold'>
                Trap
              </NavLink>
              <NavLink
                to='/genre/indie pop'
                activeClassName='text-font font-bold'
              >
                Indie pop
              </NavLink>
              <NavLink
                to='/genre/prog-rock'
                activeClassName='text-font font-bold'
              >
                Progressive rock
              </NavLink>
              <NavLink
                to='/genre/post-hardcore'
                activeClassName='text-font font-bold'
              >
                Post-hardcore
              </NavLink>
            </div>
          </nav>
        </header>
      )}
    </CartContext.Consumer>
  );
};
