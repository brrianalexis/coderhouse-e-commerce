import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ItemCount } from '../ItemCount';

describe('ItemCount component', () => {
  it("should render a container with buttons to decrease or increase the amount of articles to be added to the user's cart", () => {
    render(
      <ItemCount initial={2} min={2} max={5} article="Tester's article" />
    );
    const articleCounterContainer = screen.getByTestId(
      'article-counter-container'
    );
    const articleCounter = screen.getByTestId('article-counter');
    const articleName = screen.getByText(/tester's article/i);
    const addSubtractContainer = screen.getByTestId('add-subtract-container');
    const subtractButton = screen.getByTestId('subtract-button');
    const subtractIcon = screen.getByTestId('subtract-icon');
    const addButton = screen.getByTestId('add-button');
    const addIcon = screen.getByTestId('add-icon');
    const articleCounterInput = screen.getByTestId('article-counter-input');
    const addToCartButton = screen.getByTestId('add-to-cart-button');

    expect(articleCounterContainer).toHaveStyle(`
      display: flex;
      flex-direction: column;
      width: 30vw;
    `);

    expect(articleCounter).toHaveStyle(`
      background-color: #F1FAEE;
    `);

    expect(articleName).toHaveTextContent(/tester's article/i);
    expect(articleName).toHaveStyle(`
      margin: 1vh auto;
      display: flex;
      justify-content: center;
    `);

    expect(addSubtractContainer).toHaveStyle(`
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
    `);

    expect(subtractButton).toHaveStyle(`
      background: none;
      padding: 0;
      cursor: pointer;
      outline: inherit;
    `);
    expect(articleCounterInput).toHaveValue(2);
    expect(subtractButton).toBeDisabled();
    user.click(subtractButton);
    expect(articleCounterInput).toHaveValue(2);

    user.dblClick(addButton);
    expect(articleCounterInput).toHaveValue(4);

    user.click(subtractButton);
    expect(articleCounterInput).toHaveValue(3);

    expect(subtractIcon).toMatchInlineSnapshot(`
      <svg
        aria-label="Subtract"
        class="StyledIcon-ofa7kd-0 dMUFv add-to-cart-icons"
        data-testid="subtract-icon"
        viewBox="0 0 24 24"
      >
        <path
          d="M2,12 L22,12"
          fill="none"
          stroke="#000"
          stroke-width="2"
        />
      </svg>
    `);

    expect(articleCounterInput).toHaveAttribute('type', 'number');
    expect(articleCounterInput).toHaveAttribute('min', '2');
    expect(articleCounterInput).toHaveAttribute('max', '5');

    expect(addButton).toHaveStyle(`
      background: none;
      padding: 0;
      cursor: pointer;
      outline: inherit;
    `);

    expect(articleCounterInput).toHaveValue(3);
    user.dblClick(addButton);
    expect(addButton).toBeDisabled();

    user.click(subtractButton);
    expect(articleCounterInput).toHaveValue(4);

    user.click(subtractButton);
    expect(articleCounterInput).toHaveValue(3);

    expect(addIcon).toMatchInlineSnapshot(`
      <svg
        aria-label="Add"
        class="StyledIcon-ofa7kd-0 dMUFv add-to-cart-icons"
        data-testid="add-icon"
        viewBox="0 0 24 24"
      >
        <path
          d="M12,22 L12,2 M2,12 L22,12"
          fill="none"
          stroke="#000"
          stroke-width="2"
        />
      </svg>
    `);

    expect(addToCartButton).toHaveStyle(`
    height: 1.5rem;
    margin: 0.5vh auto auto auto;
    background-color: #F1FAEE;
    border: 1px solid #A8DADC;
    border-radius: 0.5em;
    width: 27.5vw;
    cursor: default;
    `);

    window.alert = jest.fn();
    user.click(addToCartButton);
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledTimes(1);

    screen.debug();
  });
});
