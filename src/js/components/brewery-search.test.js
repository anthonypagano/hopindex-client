import React from 'react';
import { shallow } from 'enzyme';

import BrewerySearch from './brewery-search';

describe('<BrewerySearch />', () => {
    it('Renders without crashing', () => {
        shallow(<BrewerySearch />);
    });
});