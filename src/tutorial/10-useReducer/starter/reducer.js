import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from './actions';
import { data } from '../../../data';

// inside this we will control our state
function reducer(state, action) {
    if (action.type === CLEAR_LIST) {
        // we first spread out all the values from the previous state and then
        // we just change only that value which we want to change. Rest of 
        // the values will remain same.
        return { ...state, people: [] }
    }
    else if (action.type === RESET_LIST) {
        return { ...state, people: data }
    }

    else if (action.type === REMOVE_ITEM) {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload.id
        );
        return { ...state, people: newPeople };
    }

    // to avoid returning undefined, we can return the state itself but
    // it is better through error so we can debug it easily.
    // return state

    throw new Error(`No Matching "${action.type}" - action type`);
}

export default reducer;