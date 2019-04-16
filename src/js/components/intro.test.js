import React from 'react';
import {shallow} from 'enzyme';

import Intro from './intro.js';

describe('<Intro />', () => {
    it('Renders without crashing', () => {
        shallow(<Intro />);
    });
});