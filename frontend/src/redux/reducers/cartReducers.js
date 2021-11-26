import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    //adding to cart
    case actionTypes.ADD_TO_CART:

    //get item we want to add
      const item = action.payload;

      //if the item is already in the cart
      const existItem = state.cartItems.find((x) => x.product === item.product);


      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
        //if you are adding the item to cart for the first time 
      } else {
        return {
          //spread the state
          ...state,

          //add items to array
          cartItems: [...state.cartItems, item],
        };
      }

      //removing from cart
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

      case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload
        }
    default:
      return state;
  }
};
