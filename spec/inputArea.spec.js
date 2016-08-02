import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { InputArea } from './../components/inputArea';

describe('input area specs', () =>{
    it('should contain an input and a button', () => {
       const wrapper = shallow(<InputArea/>);
        expect(wrapper.containsAllMatchingElements([
            <input/>,
            <button>Add</button>
        ])).to.equal(true);
    });
});