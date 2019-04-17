import React from 'react';
import { shallow } from 'enzyme';

import Recent from './recent';

describe('<Recent />', () => {
    it('Renders without crashing', () => {
        shallow(<Recent />);
    });
});