import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BeerList } from './../components/beerList';
import Setup from './../setup'

describe('beerlist specs', () => {
    it('should render zero items', () => {
        const wrapper = shallow(<BeerList/>);
        expect(wrapper.find('li')).to.have.length(0);
    });

    it('should render undefined items', () => {
        const wrapper = shallow(<BeerList items={undefined}/>);
        expect(wrapper.find('li')).to.have.length(0);
    });

    it('should render some items', () => {
        const items = ['Sam Adams', 'Resin', 'Octoberfest'];
        const wrapper = shallow(<BeerList items={items}/>);
        expect(wrapper.find('li')).to.have.length(3);
    });
});