
import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'zsilent', age: 18 }];

export const personReducer = (preState = initState, action) => {
    
    const { type, data } = action;

    switch (type) {
        case ADD_PERSON:
            return [...preState,data];
        default:
            return preState;
    }

}