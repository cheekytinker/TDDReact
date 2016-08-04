export
    const stateHandler = (state = [], action) => {
        switch (action.type) {
            case 'ADD_ITEM':
                return [].concat(state).concat({name: action.name});
            default:
                return state;
        }
    }
