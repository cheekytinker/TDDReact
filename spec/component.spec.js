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
            <BeerList/>,
            <Button bsStyle="success">Start</Button>
        ])).to.equal(true);
    });

    it('should start with an empty list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.state('beers')).to.eql([]);
    });
});



