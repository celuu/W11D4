// const POPULATE = "POPULATE"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"
const PURCHASE = "PURCHASE"

export function cartReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
    case ADD_TO_CART:
        if (nextState[action.produceId] === undefined) {
            return {...state, 
                [action.produceId]: {
                    id: action.produceId,
                    count: 1
                }
            }
        } else {
            nextState[action.produceId].count++;
            return nextState;
        };
    case INCREMENT_COUNT:
        nextState[action.produceId].count++
        return nextState
    case DECREMENT_COUNT:
        nextState[action.produceId].count--
        return nextState
    case PURCHASE:
        return {}
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
export const incrementItem = (produceId) => {
    return {
        type: INCREMENT_COUNT,
        produceId
    }
}
export const decrementItem = (produceId) => {
    return {
        type: DECREMENT_COUNT,
        produceId
    }
}
export const purchase = () => {
    return {
        type: PURCHASE
    }
}