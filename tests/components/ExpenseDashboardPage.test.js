import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});