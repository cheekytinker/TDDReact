import { expect } from 'chai';
import { stateHandler } from '../states/stateHandler.js'

describe('stateHandler specs', () => {
   it('should add item to list when ADD_ITEM action handled', () => {
      expect(stateHandler([], {
          type:'ADD_ITEM',
          name:'MyItem'
      })).to.eql([{name:'MyItem'}]);
   });

    it('should return current state if action is not recognised', () => {
       expect(stateHandler([{name:'Fred'}], {
           type:'NOT_ONE_OF_MY_ACTIONS',
           name:'MyItem'
       })).to.eql([{name:'Fred'}]);
    });

    it('should return initial state if action is state is undefined', () => {
       expect(stateHandler(undefined, {

       })).to.eql([]);
    });
});