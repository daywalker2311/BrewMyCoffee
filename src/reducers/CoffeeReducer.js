import { SET_COFFEE_OBJ } from "../actions/ActionTypes";

const initialState = {
    coffeeObj: {},
}

const CoffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COFFEE_OBJ:
            return { ...state, coffeeObj: action.newValue }

        default:
            return state;
    }
}

export default CoffeeReducer;