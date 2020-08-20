import React from 'react';
import { Icon, Link } from './';
import { Home, Contact, Shop, Cart } from 'grommet-icons';

export const NavBar = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#457B9D',
        width: '100%',
        height: '3rem',
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
          <Icon text='Home' data-testid='Home-Icon'>
            <Home color='#1D3557' style={{ margin: 5 }} />
          </Icon>
        </Link>
        <Link to='/products'>
          <Icon text='Products' data-testid='Shop-Icon'>
            <Shop color='#1D3557' style={{ margin: 5 }} />
          </Icon>
        </Link>
        <Link to='/contact'>
          <Icon text='Contact Us' data-testid='Contact-Icon'>
            <Contact color='#1D3557' style={{ margin: 5 }} />
          </Icon>
        </Link>
        <Link to='/cart'>
          <Icon text='Cart' data-testid='Cart-Icon'>
            <Cart color='#1D3557' style={{ margin: 5 }} />
          </Icon>
        </Link>
      </nav>
    </header>
  );
};
