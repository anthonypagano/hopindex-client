import React from 'react';
import { mount } from 'enzyme';

import BeerList from './beer-list';

describe('beer list test', () => {

  it('renders a beer list', () => {

    const beers = [{id: 1, beerName: 'In And Around The Lake', style: 'IIPA', abv: '8.5', brewery: 'Singlecut Beersmiths', rating: '3', cityState: 'Astoria, NY', notes: 'double dry hopped IIPA with honey'}];

    const wrapper = mount(<BeerList beers={beers} />);

    // Expect beer-details class to appear letting us know the list is populated
    expect(wrapper.find('.beer-details')).toBeDefined();
  });
});