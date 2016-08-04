import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BeerList } from './../components/beerList';
import Setup from './../setup'
import { spy } from 'sinon';

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

    it('should render delete button for each item', () => {
        const items = ['Sam Adams', 'Resin', 'Octoberfest'];
        const wrapper = shallow(<BeerList items={items}/>);
        expect(wrapper.find('Button')).to.have.length(3);
    });

    it ('should call onDelete when delete button clicked', () => {
        const deleteItemSpy = spy();
        const items = ['Sam Adams', 'Resin', 'Octoberfest'];
        const wrapper = shallow(<BeerList items={items} onDeleteItem={deleteItemSpy}/>);
        const deleteButton = wrapper.find('Button.deleteButton').last();
        //console.log(deleteButton);
        deleteButton.simulate('click');

        expect(deleteItemSpy.calledOnce).to.equal(true);
        expect(deleteItemSpy.calledWith(2)).to.equal(true);
    });
});