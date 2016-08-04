import { expect } from 'chai';
import { Redux } from 'redux';
import { stateHandler } from "../states/stateHandler";
import { spy } from 'sinon';
import  mockery  from 'mockery';

describe('store specs', () => {
    let store;
    let reduxMock;
    let createStoreSpy;

    before(() => {
        mockery.enable();
        mockery.registerAllowable("../states/store");
        createStoreSpy = spy();
        reduxMock = {createStore: createStoreSpy};
        mockery.registerMock("redux", reduxMock);

        store = require("../states/store");
    });

    after(() => {
       mockery.disable();
    });

    it('should create a store using the stateHandler reducer', () => {
        store.store(stateHandler);
        expect(createStoreSpy.calledOnce).is.equal(true);
   });
});
