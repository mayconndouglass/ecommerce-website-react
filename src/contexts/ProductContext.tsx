import { createContext, useContext, ReactNode } from 'react'

import { productData } from '../data/product-data'

const products = {
    allProducts: productData,
    featuredProducts: productData.slice(0, 4)
}

const ProductContext = createContext(products)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)
