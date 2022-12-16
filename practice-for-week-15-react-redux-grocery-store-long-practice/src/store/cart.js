// const POPULATE = "POPULATE"
const ADD_TO_CART = "ADD_TO_CART"

export function cartReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
    case ADD_TO_CART:
        // nextState[action.produce.id] = action.produceId
        // return nextState;
        return {...state, 
            [action.produceId]: {
                id: action.produceId,
                count: 1
            }
        }
    default:
        return state;
    }
}

export const addItem = (produceId) => {
    return {
        type: ADD_TO_CART,
        produceId
    }

}

