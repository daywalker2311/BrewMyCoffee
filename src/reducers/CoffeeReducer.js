import {
    SET_COFFEE_OBJ,
    SET_SELECTED_COFFEE_TYPE,
    SET_SELECTED_COFFEE_SIZE,

} from "../actions/ActionTypes";

const initialState = {
    coffeeObj: {},
    selectedCoffeeType: {},
    selectedCoffeeSize: {},

}

const CoffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COFFEE_OBJ:
            //console.log("SET_COFFEE_OBJ", action.newValue);
            return { ...state, coffeeObj: action.newValue }

        case SET_SELECTED_COFFEE_TYPE:
            //console.log("SET_SELECTED_COFFEE_TYPE", action.newValue);
            return { ...state, selectedCoffeeType: action.newValue }

        case SET_SELECTED_COFFEE_SIZE:
            //console.log("SET_SELECTED_COFFEE_SIZE", action.newValue);
            return { ...state, selectedCoffeeSize: action.newValue }

        default:
            return state;
    }
}

export default CoffeeReducer;