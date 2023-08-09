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

const getLocalStorageData = (): CartType => {
    const {
        addedProducts = [],
        cartQuantity = 0,
        totalPrice = 0
    }: CartType = JSON.parse(localStorage.getItem('dataProducts') ?? '{}')

    return {
        addedProducts,
        cartQuantity,
        totalPrice
    }
}

export const cartInitialState: CartType = getLocalStorageData()

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
            const newData = {
                addedProducts: updatedProducts,
                totalPrice: updatedTotalPrice,
                cartQuantity: updatedCartQuantity,
            }

            localStorage.setItem('dataProducts', JSON.stringify({ ...newData }))

            return { ...newData }
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

                const newData = {
                    addedProducts: updatedProducts,
                    totalPrice: updatedTotalPrice,
                    cartQuantity: updatedCartQuantity,
                }

                localStorage.setItem('dataProducts', JSON.stringify({ ...newData }))

                return { ...newData }
            }

            return state
            break
        }

        default: return state
    }
}
