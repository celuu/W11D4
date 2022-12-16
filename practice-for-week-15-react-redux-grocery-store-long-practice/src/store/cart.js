// const POPULATE = "POPULATE"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function cartReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
    case ADD_TO_CART:
        return {...state, 
            [action.produceId]: {
                id: action.produceId,
                count: 1
            }
        }
    case REMOVE_FROM_CART:
        delete nextState[action.produceId];
        return nextState;
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
export const removeItem = (produceId) => {
    return {
        type: REMOVE_FROM_CART,
        produceId
    }
}
