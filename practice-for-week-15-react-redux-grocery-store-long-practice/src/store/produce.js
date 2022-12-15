import produceData from '../mockData/produce.json';

const POPULATE = "POPULATE"


export function produceReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};
  switch (action.type) {
    case POPULATE:
        action.produce.forEach(produceObj => {
            nextState[produceObj.id] = produceObj
        })
        return nextState;
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

