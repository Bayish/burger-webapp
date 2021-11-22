import axiosApi from "../../axiosApi";
import {BASE_PRICE, INGREDIENTS} from "../../constants";
import {normalizeOrders} from "../../helpers/orderHelpers";

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';


export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, payload: error});

export const fetchOrderRequest = () => ({type: FETCH_ORDERS_REQUEST});
export const fetchOrderSuccess = orders => ({type: FETCH_ORDERS_SUCCESS, payload: orders});
export const fetchOrderFailure = error => ({type: FETCH_ORDERS_FAILURE, payload: error});


export const createOrder = orderData => {
    return async dispatch => {
        try{
            dispatch(orderRequest());
            await axiosApi.post('/orders.json', orderData);
            dispatch(orderSuccess());
        }catch(error) {
            dispatch(orderFailure(error));
            throw error;
        }
    }
}

export const fetchOrders = () => {
    return async dispatch => {
        try{
            dispatch(fetchOrderRequest());
            const response = await axiosApi.get('/orders.json');
            const orders = normalizeOrders(response.data)
            dispatch(fetchOrderSuccess(orders));
        }catch(error) {
            dispatch(fetchOrderFailure(error));
        }
    }
}

