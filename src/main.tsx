import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { ProductProvider } from './contexts/ProductContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductProvider>
        <CartProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </CartProvider>
    </ProductProvider>
)
