import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer } from './../components/beerListContainer';
import { InputArea } from './../components/inputArea';
import { BeerList } from './../components/beerList';
import { Button } from 'react-bootstrap';

describe('BeerListContainer', () => {
    it('should render InputArea and BeerList and Button', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea/>,
            <BeerList/>
        ])).to.equal(true);
    });

    it('should start with an empty list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.state('beers')).to.eql([]);
    });

    it('should allow items to be added to the list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        wrapper.instance().addItem("First list item");
        expect(wrapper.state('beers')).to.eql(['First list item']);
    });

    it('passes addItem to InputArea', () => {
        const wrapper = shallow(<BeerListContainer/>);
        const inputArea = wrapper.find(InputArea);
        const addItem = wrapper.instance().addItem;
        expect(inputArea.prop('onSubmit')).to.eql(addItem);
    });

    it('adds an item to the state when InputArea onSubmit called', () =>{
        const wrapper = shallow(<BeerListContainer/>);
        const inputArea = wrapper.find(InputArea);
        inputArea.prop('onSubmit')('MyItem');
        expect(wrapper.state('beers')).to.eql(['MyItem']);
    });

    it('renders the items',  () => {
        const wrapper = mount(<BeerListContainer/>);
        wrapper.instance().addItem('Anthony');
        wrapper.instance().addItem('Fred');
        expect(wrapper.find('li').length).to.equal(2);
    });

    it('should allow items to be deleted from the list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        wrapper.instance().addItem('Anthony');
        wrapper.instance().addItem('Fred');
        wrapper.instance().deleteItem(1);
        expect(wrapper.state('beers')).to.eql(['Anthony']);
    });

    it('passes deleteItem to BeerList', () => {
        const wrapper = shallow(<BeerListContainer/>);
        const beerList = wrapper.find(BeerList);
        const deleteItem = wrapper.instance().deleteItem;
        expect(beerList.prop('onDeleteItem')).to.eql(deleteItem);
    });

    it('should request items from service when componentdidmount', () => {
        const wrapper = shallow(<BeerListContainer/>);

    });

});



