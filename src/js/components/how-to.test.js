import React from 'react';
import {shallow} from 'enzyme';

import HowTo from './how-to.js';

describe('<HowTo />', () => {
    it('Renders without crashing', () => {
        shallow(<HowTo />);
    });
});