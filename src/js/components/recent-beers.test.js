import React from 'react';
import { shallow } from 'enzyme';

import RecentBeers from './recent-beers';

describe('<RecentBeers />', () => {
    it('Renders without crashing', () => {
        shallow(<RecentBeers />);
    });
});