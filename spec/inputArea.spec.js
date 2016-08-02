import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { InputArea } from './../components/inputArea';
import Setup from './../setup';

describe('input area specs', () =>{
    it('should contain an input and a button', () => {
       const wrapper = shallow(<InputArea/>);
        expect(wrapper.containsAllMatchingElements([
            <input/>,
            <button>Add</button>
        ])).to.equal(true);
    });

    it('should accept input', () => {
        const wrapper = mount(<InputArea/>);
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'Resin'}});
        expect(wrapper.state('text')).to.equal('Resin');
        expect(input.prop('value')).to.equal('Resin');
    });
});