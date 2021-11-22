import React, {useState} from 'react';
import './ContactData.css';
import Button from "../../../components/UI/Button/Button"
import {createOrder as order} from "../../../store/actions/ordersAction";
import Spinner from '../../../components/UI/Spinner/Spinner';
import {useDispatch, useSelector} from "react-redux";

const ContactData = ({ingredients, history}) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.orders.loading);

    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        street: '',
        postal: ''
    });

    const onInputChange = e => {
        const {name, value} = e.target;

        setCustomer(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const createOrder = async e => {
        e.preventDefault();
        try{
            await dispatch(order({customer, ingredients}));
            history.push('/')
        }catch(e){
            console.log(e)
        }

        // try {
        //     await axiosApi.post('/orders.json', {
        //         customer,
        //         ingredients,
        //     });
        // } finally {
        //     setLoading(false);
        //     history.replace('/');
        // }
    };

    let form = (
        <form onSubmit={createOrder}>
            <input
                className="Input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={customer.name}
                onChange={onInputChange}
            />
            <input
                className="Input"
                type="email"
                name="email"
                placeholder="Your Mail"
                value={customer.email}
                onChange={onInputChange}
            />
            <input
                className="Input"
                type="text"
                name="street"
                placeholder="Street"
                value={customer.street}
                onChange={onInputChange}
            />
            <input
                className="Input"
                type="text"
                name="postal"
                placeholder="Postal Code"
                value={customer.postal}
                onChange={onInputChange}
            />
            <Button type="Success">ORDER</Button>
        </form>
    );

    if (loading) {
        form = <Spinner/>
    }

    return (
        <div className="ContactData">
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
};

export default ContactData;