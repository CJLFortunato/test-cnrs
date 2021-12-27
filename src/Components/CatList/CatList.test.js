import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { CatList } from "./CatList";
import React from 'react';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

/*
*TO TEST:
- Whether the component renders

*/ 
describe('<CatList />', () => {
    
    it('Renders correctly', () => {
        const wrapper = shallow(<CatList />);
        expect(wrapper).toBeInTheDocument();
    });  
});
 