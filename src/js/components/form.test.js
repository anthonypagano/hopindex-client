import React from 'react';
import {shallow} from 'enzyme';

import Form from "./form.js";

describe('<Form />', () => {
    it('Renders without crashing', () => {
        shallow(<Form />);
    });
});