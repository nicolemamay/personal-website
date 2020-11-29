import React from 'react';
import { render } from '@testing-library/react';

import ContextProviderMock from '__mocks__/ContextProviderMock';
import ThemeProviderMock from '__mocks__/ThemeProviderMock';

import { PureHero as Hero } from './Hero';

describe('Hero', () => {
  const setup = ({ isIntroDone }) => {
    const mockData = {
      greetings: 'Test greeting,',
      subtitle: 'Test subtitle',
      title: 'Test title',
    };

    const { container } = render(
      <ContextProviderMock isIntroDone={isIntroDone}>
        <ThemeProviderMock>
          <Hero isIntroDone={isIntroDone} {...mockData} />
        </ThemeProviderMock>
      </ContextProviderMock>,
    );

    return { container };
  };
  it('renders default', () => {
    const { container } = setup({ isIntroDone: true });
    expect(container).toMatchSnapshot();
  });

  it('renders splash screen', () => {
    const { container } = setup({ isIntroDone: false });
    expect(container).toMatchSnapshot();
  });
});
