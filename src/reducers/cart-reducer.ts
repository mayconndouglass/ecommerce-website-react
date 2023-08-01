/* eslint-disable indent */
import { ProductDataType } from '../@types/product-data-type'

export type ReducerActionType = {
    type: string
    payload: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any
    }
}

type CartProductDataType = ProductDataType & {
    quantity?: number
}

export type CartType = {
    addedProducts: CartProductDataType[]
    cartQuantity: number
    totalPrice: number
}

export const cartInitialState: CartType = {
    addedProducts: [],
    cartQuantity: 0,
    totalPrice: 0
}

export const cartReducer = (state: CartType, action: ReducerActionType) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingProduct = state.addedProducts.
                findIndex(({ id }) => id === action.payload.id)

            if (existingProduct !== -1) {
                state.addedProducts[existingProduct].
                    quantity += action.payload.quantity

                const updatedProducts = [...state.addedProducts]

                return {
                    ...state, addedProducts: updatedProducts
                }
            }

            const newProduct = {
                ...action.payload,
            }

            state.addedProducts.push(newProduct as CartProductDataType)

            return {
                ...state
            }
        }

        default: return state
    }
}
