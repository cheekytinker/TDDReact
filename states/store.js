import { createStore } from 'redux'

export const
        store = (stateHandler) => {
            return createStore(stateHandler);
        }
