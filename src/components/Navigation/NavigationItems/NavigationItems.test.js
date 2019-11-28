import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    })

    it('should render two <NavigationItems /> if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2); // We expect to have 2 NavigationItem 
    });

    it('should render three <NavigationItems /> if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);      //Can be done this way.
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3); // We expect to have 3 NavigationItem 
    });

    it('should hold a logout navigation item', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true)
    });
});

// "describe" Allows us to idetify what kind if test we are running.

// "it" describes and allows us to run one individual test. 

// "expect" is used to test values.