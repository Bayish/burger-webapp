export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const SET_MODAL_OPEN = 'SHOW_MODAL_OPEN';
export const INIT_BURGER_BUILDER = 'INIT_BURGER_BUILDER'

export const addIngredient = ingType => ({type: ADD_INGREDIENT, payload: ingType});
export const removeIngredient = ingType => ({type: REMOVE_INGREDIENT, payload: ingType});
export const setModalOpen = isOpen => ({type: SET_MODAL_OPEN, payload: isOpen})
export const initBurgerBuilder = () => ({type: INIT_BURGER_BUILDER});