import React, {useEffect, useMemo} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import {useDispatch, useSelector} from "react-redux";
import {
    addIngredient,
    initBurgerBuilder,
    removeIngredient,
    setModalOpen
} from "../../store/actions/burgerBuilderActions";



const BurgerBuilder = ({history}) => {
    const dispatch = useDispatch();
    // const {ingredients, totalPrice, showPurchaseModal} = useSelector(state => ({   //sometimes it will be necessary
    //     ingredients: state.burgerBuilder.ingredients,
    //     totalPrice: state.burgerBuilder.totalPrice,
    //     showPurchaseModal: state.burgerBuilder.showPurchaseModal,
    // }), shallowEqual);
    //


    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const totalPrice = useSelector(state => state.burgerBuilder.totalPrice);
    const showPurchaseModal = useSelector(state => state.burgerBuilder.showPurchaseModal);


    useEffect(() => {
        dispatch(initBurgerBuilder());
    }, [dispatch])

    const addIngredientHandler = type => {
        dispatch(addIngredient(type));
    };

    const removeIngredientHandler = type => {
        dispatch(removeIngredient(type));
    };

    const purchasable = useMemo(() => {
        const totalIngredients = Object.keys(ingredients)
            .map(type => ingredients[type])
            .reduce((sum, el) => sum + el, 0);

        return totalIngredients > 0;
    }, [ingredients]);

    const purchaseHandler = () => {
        dispatch(setModalOpen(true));
    };

    const purchaseCancelHandler = () => {
       dispatch(setModalOpen(false));
    };

    const purchaseContinueHandler = () => {
        history.push('/checkout');
    };

    return (
        <>
            <Modal
                show={showPurchaseModal}
                close={purchaseCancelHandler}
            >
                <OrderSummary
                    ingredients={ingredients}
                    totalPrice={totalPrice}
                    onCancel={purchaseCancelHandler}
                    onContinue={purchaseContinueHandler}
                />
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls
                ingredients={ingredients}
                totalPrice={totalPrice}
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
                purchasable={purchasable}
                onOrder={purchaseHandler}
            />
        </>
    )
};

export default BurgerBuilder;
