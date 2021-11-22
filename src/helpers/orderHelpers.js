import {BASE_PRICE, INGREDIENTS} from "../constants";

export const normalizeOrders = orders => {
    return Object.keys(orders).map(id => {
        const order = orders[id];
        const price = Object.keys(order.ingredients).reduce((acc, type) => {
            return acc + INGREDIENTS[type].price * order.ingredients[type]
        }, BASE_PRICE)
        return {...order, id, price};
    });
}