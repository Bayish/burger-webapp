import React, {useEffect} from 'react';
import './Orders.css'
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "../../store/actions/ordersAction";


const Orders = () => {
    const dispatch = useDispatch();
    const {fetchLoading, fetchError, orders} = useSelector(state => ({
        fetchLoading: state.orders.fetchLoading,
        fetchError: state.orders.fecthError,
        orders: state.orders.orders
    }), shallowEqual);

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    let ordersComponents = orders.map(order => (
       <ErrorBoundary  key={order.id}>
           <OrderItem
               ingredients={order.ingredients}
               customer={order.customer}
               price={order.price}
           />
       </ErrorBoundary>
    ))

    if (fetchLoading) {
        ordersComponents = <Spinner/>;
    }else if(fetchError){
        ordersComponents = <div>Sorry, could not fetch Orders</div>
    }
    return ordersComponents

};

export default Orders;