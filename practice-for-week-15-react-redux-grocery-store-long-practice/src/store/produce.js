import produceData from '../mockData/produce.json';

const POPULATE = "POPULATE"
const LIKE = "LIKE"


export function produceReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};
  switch (action.type) {
    case POPULATE:
        action.produce.forEach(produceObj => {
            nextState[produceObj.id] = produceObj
        })
        return nextState;
    case LIKE:
        nextState[action.produceId].liked ? nextState[action.produceId].liked = false : nextState[action.produceId].liked = true
        return nextState
    default:
      return state;
  }
}

export const populateProduce = (produce) => {
    return {
        type: POPULATE,
        produce: produceData
    }

}
export const like = (produceId) => {
    return {
        type: LIKE,
        produceId
    }
}
