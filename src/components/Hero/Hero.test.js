import React from 'react';
import { render } from '@testing-library/react';

import ContextProviderMock from '__mocks__/ContextProviderMock';
import ThemeProviderMock from '__mocks__/ThemeProviderMock';

import { PureHero as Hero } from './Hero';

describe('Hero', () => {
  it('renders default', () => {
    // Created using the query from Hero.js
    const mockData = {
      greetings: 'Test greeting,',
      subtitle: 'Test subtitle',
      title: 'Test title',
      isIntroDone: true,
    };

    const { container } = render(
      <ContextProviderMock isIntroDone={false}>
        <ThemeProviderMock>
          <Hero {...mockData} />
        </ThemeProviderMock>
      </ContextProviderMock>,
    );

    expect(container).toMatchSnapshot();
  });
});

describe('Hero', () => {
  it('renders splash screen', () => {
    // Created using the query from Hero.js
    const mockData = {
      greetings: 'Test greeting,',
      subtitle: 'Test subtitle',
      title: 'Test title',
      isIntroDone: false,
    };

    const { container } = render(
      <ContextProviderMock isIntroDone={true}>
        <ThemeProviderMock>
          <Hero {...mockData} />
        </ThemeProviderMock>
      </ContextProviderMock>,
    );

    expect(container).toMatchSnapshot();
  });
});
