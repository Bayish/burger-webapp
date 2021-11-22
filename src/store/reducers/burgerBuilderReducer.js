import {BASE_PRICE, INGREDIENTS} from "../../constants";
import {ADD_INGREDIENT, INIT_BURGER_BUILDER, REMOVE_INGREDIENT, SET_MODAL_OPEN} from "../actions/burgerBuilderActions";

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: BASE_PRICE,
    showPurchaseModal: false,
}
const burgerBuilderReducer = (state = initialState, action) => {
    switch(action.type){
        case INIT_BURGER_BUILDER:
            return {...initialState};
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENTS[action.payload].price,
            }
        case REMOVE_INGREDIENT:
            if(state.ingredients[action.payload] <= 0){
                return state;
            }
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENTS[action.payload].price,
            }
        case SET_MODAL_OPEN:
            return {...state, showPurchaseModal: action.payload}
        default:
            return state;
    }
};

export  default burgerBuilderReducer;