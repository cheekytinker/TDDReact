import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { InputArea } from './../components/inputArea';
import Setup from './../setup';
import { spy } from 'sinon';
import { Button } from 'react-bootstrap'

describe('input area specs', () =>{
    it('should contain an input and a button', () => {
       const wrapper = shallow(<InputArea/>);
        expect(wrapper.containsAllMatchingElements([
            <input/>,
            <Button>Add</Button>
        ])).to.equal(true);
    });

    it('should accept input', () => {
        const wrapper = mount(<InputArea/>);
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'Resin'}});
        expect(wrapper.state('text')).to.equal('Resin');
        expect(input.prop('value')).to.equal('Resin');
    });

    it('should call onSubmit when add is clicked', () => {
        const addItemSpy = spy();
        const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
        wrapper.setState({text: 'Octoberfest'});
        const addButton = wrapper.find('Button');

        addButton.simulate('click');

        expect(addItemSpy.calledOnce).to.equal(true);
        expect(addItemSpy.calledWith('Octoberfest')).to.equal(true);
      });
});