import { createContext, ReactNode } from 'react'

import { productDataExtend } from '../data/product-data-extend'

export const ProductContext = createContext(productDataExtend)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ProductContext.Provider value={productDataExtend}>
            {children}
        </ProductContext.Provider>
    )
}
