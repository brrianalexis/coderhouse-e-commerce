import React from 'react';
import { render } from '@testing-library/react';
import { Cart } from 'grommet-icons';
import { Icon } from '../';

describe('Icon component', () => {
  it('should render a children icon and text, both passed as props', () => {
    const { container } = render(
      <Icon text='Cart' data-testid='Cart-Icon'>
        <Cart color='#1D3557' style={{ margin: 5 }} />
      </Icon>
    );
    expect(container).toHaveTextContent('Cart');
    expect(container.getElementsByTagName('svg')[0]).toHaveStyle(
      'margin: 5px;'
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <svg
          aria-label="Cart"
          class="StyledIcon-ofa7kd-0 hGmYEj"
          style="margin: 5px;"
          viewBox="0 0 24 24"
        >
          <path
            d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"
            fill="none"
            stroke="#000"
            stroke-width="2"
          />
        </svg>
        Cart
      </div>
    `);
  });
});
