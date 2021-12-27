import { render } from '@testing-library/react';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

/* To test:
 - Whether the component receives the API data
- Whether it's collecting the data the user types in
- The topics array should not contain anything already in the savedArray
- Whether the patch call is sent
*/


describe('App', () => {
    
    it('Renders correctly', () => {
        shallow(<App />);
    });

    it('The topics array should not contain anything already in the savedArray', () => {
        // const wrapper = 

    });
});