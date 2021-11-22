import {
    FETCH_ORDERS_FAILURE,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS
} from "../actions/ordersAction";

const initialState = {
    loading: false,
    fetchLoading: false,
    error: null,
    fetchError: null,
    orders: [],
};

const ordersReducer  = (state = initialState, action)=> {
    switch (action.type){
        case ORDER_REQUEST:
            return {...state, loading: true};
        case ORDER_SUCCESS:
            return {...state, loading: false};
        case ORDER_FAILURE:
            return {...state, error: action.payload, loading: false}
        case FETCH_ORDERS_REQUEST:
            return {...state, fetchLoading: true, fetchError: null};
        case FETCH_ORDERS_SUCCESS:
            return {...state, fetchLoading: false, orders: action.payload, fetchError: null};
        case FETCH_ORDERS_FAILURE:
            return {...state, fetchError: action.payload, fetchLoading: false}
        default:
            return state;
    }
}

export default ordersReducer;
