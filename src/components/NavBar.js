import React from 'react';
import { Icon, Link } from './';
import { Home, Contact, Cart } from 'grommet-icons';
import { CartContext } from '../context/CartContext';

export const NavBar = () => {
  return (
    <CartContext.Consumer>
      {({ count }) => (
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#457B9D',
            width: '100%',
            height: '3rem',
            position: 'sticky',
            top: 0,
            zIndex: 2,
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
            <Link to='/' style={{ alignItems: 'center' }}>
              <Icon text='HOME' data-testid='Home-Icon'>
                <Home color='#1D3557' style={{ margin: 5 }} />
              </Icon>
            </Link>
            <Link to='/contact' style={{ alignItems: 'center' }}>
              <Icon text='CONTACT US' data-testid='Contact-Icon'>
                <Contact color='#1D3557' style={{ margin: 5 }} />
              </Icon>
            </Link>
            <Link to='/cart' style={{ alignItems: 'center' }}>
              <>
                <Icon text='CART' data-testid='Cart-Icon'>
                  <Cart color='#1D3557' style={{ margin: 5 }} />
                </Icon>
                <span
                  style={{
                    height: '1.5rem',
                    width: '1.5rem',
                    backgroundColor: '#a8dadc',
                    borderRadius: '50%',
                    display: 'inline-block',
                    textAlign: 'center',
                    alignSelf: 'end',
                    fontWeight: 'bold',
                  }}
                >
                  {count}
                </span>
              </>
            </Link>
          </nav>
        </header>
      )}
    </CartContext.Consumer>
  );
};
