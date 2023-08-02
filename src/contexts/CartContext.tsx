import { createContext, ReactNode, useReducer } from 'react'

import { cartInitialState, cartReducer, CartType, ReducerActionType } from '../reducers/cart-reducer'

type CartContextType = {
    state: CartType,
    dispatch: React.Dispatch<ReducerActionType>
}

const initialStateContext = {
    state: cartInitialState,
    dispatch: () => null
}

export const CartContext = createContext<CartContextType>(initialStateContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
