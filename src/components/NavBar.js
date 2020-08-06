import React from 'react';
import Link from './Link';
import { Home, Contact, ContactInfo, Cart } from 'grommet-icons';

export const NavBar = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#457B9D',
        width: '100%',
        height: '5vh',
        position: 'sticky',
        top: 0,
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <Link to='/'>
          <>
            <Home color='#1D3557' style={{ margin: 5 }} />
            Home
          </>
        </Link>
        <Link to='/about'>
          <>
            <ContactInfo color='#1D3557' style={{ margin: 5 }} />
            About
          </>
        </Link>
        <Link to='/contact'>
          <>
            <Contact color='#1D3557' style={{ margin: 5 }} />
            Contact Us
          </>
        </Link>
        <Link to='/cart'>
          <>
            <Cart color='#1D3557' style={{ margin: 5 }} />
            Cart
          </>
        </Link>
      </nav>
    </header>
  );
};
