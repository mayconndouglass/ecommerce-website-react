/* eslint-disable indent */
import { CartProductDataType } from '../@types/cartproduct-data-type'

export type ReducerActionType = {
    type: string
    payload: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any
    }
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
            const { addedProducts, totalPrice, cartQuantity } = state
            const { id, quantity, price } = action.payload

            const existingProductIndex = addedProducts.findIndex((product) => product.id === id)
            const updatedProducts = [...addedProducts]

            if (existingProductIndex !== -1) {
                updatedProducts[existingProductIndex].quantity += quantity
            } else {
                updatedProducts.push({ ...action.payload } as CartProductDataType)
            }

            const updatedTotalPrice = totalPrice + Number(price.slice(1)) * quantity
            const updatedCartQuantity = cartQuantity + quantity

            return {
                addedProducts: updatedProducts,
                totalPrice: updatedTotalPrice,
                cartQuantity: updatedCartQuantity,
            }
            break
        }

        case 'UPDATE_CART': {
            const productIndex = state.addedProducts.
                findIndex((product) => product.id === action.payload.id)

            if (productIndex !== -1) {
                const updatedProducts = [...state.addedProducts]
                const updatedProduct = updatedProducts[productIndex]
                updatedProduct.quantity = action.payload.quantity
                updatedProducts[productIndex] = updatedProduct

                const updatedCartQuantity = updatedProducts.reduce((acc, pro) => {
                    return acc + pro.quantity!
                }, 0)

                const updatedTotalPrice = updatedProducts.reduce((acc, pro) => {
                    return acc + Number(pro.price.slice(1)) * pro.quantity!
                }, 0)
                console.log('UPDATEDPRODUCTS', updatedProducts)
                console.log('CARTQUANTITY', updatedCartQuantity)
                console.log('TOTALPRICE', updatedTotalPrice)
                return {
                    addedProducts: updatedProducts,
                    cartQuantity: updatedCartQuantity,
                    totalPrice: updatedTotalPrice,
                }
            }

            return state
            break
        }

        default: return state
    }
}
